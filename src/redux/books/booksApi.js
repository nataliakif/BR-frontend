import { apiSlice } from '../api/apiSlice';

const tag = 'Books';

export const booksApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchBooks: builder.query({
      query: () => '/books',
      providesTags: [tag],
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
      invalidatesTags: [tag],
    }),
    deleteBook: builder.mutation({
      query: bookId => ({
        url: `/books/${bookId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tag],
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
      invalidatesTags: [tag],
    }),
  }),
});

export const {
  useFetchBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
} = booksApi;
