import { apiSlice } from '../api/apiSlice';

const tag = 'Training';

export const trainingApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchTraining: builder.query({
      query: () => '/api/planning/',
      transformResponse: response => response.data.result,
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
        url: `/api/planning/${trainingId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tag],
    }),
    editTraining: builder.mutation({
      query: ({
        trainingId,
        books,
        startDate,
        finishDate,
        readStatistics,
      }) => ({
        url: `/api/planning/${trainingId}`,
        method: 'PUT',
        body: {
          books,
          startDate,
          finishDate,
          readStatistics,
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
