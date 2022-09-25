import { apiSlice } from '../api/apiSlice';

export const booksApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchBooks: builder.query({
      query: () => '/books',
      providesTags: ['Books'],
    }),
    createBook: builder.mutation({
      query: ({ title, author, publicationDate, pageAmount }) => ({
        url: '/books',
        method: 'POST',
        body: {
          title,
          author,
          publicationDate,
          pageAmount,
        },
      }),
      invalidatesTags: ['Books'],
    }),
    deleteBook: builder.mutation({
      query: bookId => ({
        url: `/books/${bookId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
    editBook: builder.mutation({
      query: ({
        bookId,
        title,
        author,
        publicationDate,
        pageAmount,
        status,
        resume,
        rating,
        readStatistics,
      }) => ({
        url: `/books/${bookId}`,
        method: 'PATCH',
        body: {
          title,
          author,
          publicationDate,
          pageAmount,
          status,
          resume,
          rating,
          readStatistics,
        },
      }),
      invalidatesTags: ['Books'],
    }),
  }),
});

export const {
  useFetchBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
} = booksApi;
