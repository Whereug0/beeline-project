import { apiSlice } from "../api/apiSlice"



const vacanciesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createVacancy: builder.mutation({
      query: (body) => ({
        url: '/vacancy/vacancies/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Vacancies']
    }),
    updateVacancy: builder.mutation({
      query: (vacancy) => ({
        url: `/vacancy/vacancies/${vacancy.id}/`,
        method: 'PUT',
        body: vacancy,
      }),
      invalidatesTags: ['Vacancies']
    }),
    deleteVacancy: builder.mutation({
      query: (vacancy) => ({
        url: `/vacancy/vacancies/${vacancy.id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Vacancies']
    })
  })
})


export const {
  useCreateVacancyMutation, 
  useUpdateVacancyMutation, 
  useDeleteVacancyMutation
} = vacanciesApiSlice