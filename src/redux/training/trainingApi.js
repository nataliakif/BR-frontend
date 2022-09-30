import { apiSlice } from '../api/apiSlice';

const tag = 'Training';

export const trainingApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchTraining: builder.query({
      query: () => '/api/planning/',
      providesTags: [tag],
    }),
    createTraining: builder.mutation({
      query: ({ books, startDate, finishDate }) => ({
        url: '/api/planning',
        method: 'POST',
        body: {
          books,
          startDate,
          finishDate,
        },
      }),
      invalidatesTags: [tag],
    }),
    deleteTraining: builder.mutation({
      query: trainingId => ({
        url: `/planning/${trainingId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tag],
    }),
    editTraining: builder.mutation({
      query: ({ trainingId, books, startDate, finishDate }) => ({
        url: `/planning/${trainingId}`,
        method: 'PATCH',
        body: {
          books,
          startDate,
          finishDate,
        },
      }),
      invalidatesTags: [tag],
    }),
  }),
});

export const {
  useFetchTrainingQuery,
  useCreateTrainingMutation,
  useDeleteTrainingMutation,
  useEditTrainingMutation,
} = trainingApi;
