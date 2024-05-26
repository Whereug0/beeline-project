import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";
import { logout, setCredentials } from "../auth/authSlice";


const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState, endpoint, method }) => {
    const token = getState().auth.token;
    const accessToken = localStorage.getItem('accessToken');
    if (method !== 'GET' || endpoint !== '/vacancy/vacancies/') {
      if (token) {
        localStorage.setItem('accessToken', token);
        headers.set("Authorization", `Bearer ${token}`);
      } else if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.log('Отправка запроса на обновление токена');

    const refreshToken = api.getState().auth.refresh;
    if (!refreshToken) {
      console.error('Refresh token отсутствует');
      api.dispatch(logout());
      return result;
    }

    const refreshResult = await baseQuery({
      url: '/account/refresh/',
      method: 'POST',
      body: { refresh: refreshToken }
    }, api, extraOptions);

    console.log('refreshResult:', refreshResult);

    const newAccessToken = refreshResult?.data?.access;
    const newRefreshToken = refreshResult?.data?.refresh;
    console.log('newAccessToken:', newAccessToken);
    console.log('newRefreshToken:', newRefreshToken);

    if (newAccessToken && newRefreshToken) {
      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);

      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ user, access: newAccessToken, refresh: newRefreshToken }));

      // Повторно выполнить исходный запрос с обновленным токеном доступа, если метод не GET
      if (args.method !== 'GET' && args.endpoint !== '/vacancy/vacancies/') {
        result = await baseQuery(args, api, extraOptions);
      }
      console.log('result после обновления токена:', result);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

export const {} = apiSlice;