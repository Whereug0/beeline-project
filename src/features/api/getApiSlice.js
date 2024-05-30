import { BASE_URL } from "../../utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getApiSlice = createApi({
  reducerPath: "getApi",
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Vacancies', 'Location', "Categories"],
  endpoints: (builder) => ({
    getVacancies: builder.query({
      query: () => `/vacancy/vacancies/`,
      provideTags: ["Vacancies"],
    }),
    getLocations: builder.query({
      query: () => `/location/location/`,
      provideTags: ["Location"]
    }),
    getCategories: builder.query({
      query: () => `/category/speciality/`,
      provideTags: ["Categories"]
    }),
    getVacandyId: builder.query({
      query: (id) => `/vacancy/vacancies/${id}/`
    }),
    createFeedback: builder.mutation({
      query: (body) => ({
        url: `/feedback/feedback/`,
        method: 'POST',
        body
      }),
    }),
    createAnketa: builder.mutation({
      query: (body) => ({
        url: `/anketa/anketas/`,
        method: 'POST',
        body
      }),
    })
  })
})


export const { 
  useGetVacanciesQuery,
  useGetLocationsQuery,
  useGetCategoriesQuery,
  useGetVacandyIdQuery,

  useCreateFeedbackMutation,

  useCreateAnketaMutation,
} = getApiSlice;