import { apiSlice } from '../api/apiSlice';

const tag = 'Books';

export const booksApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchBooks: builder.query({
      query: () => '/api/books',
      providesTags: [tag],
    }),
    createBook: builder.mutation({
      query: ({ bookTitle, author, publicationDate, amountOfPages }) => ({
        url: '/api/books',
        method: 'POST',
        body: {
          bookTitle,
          author,
          publicationDate,
          amountOfPages,
        },
      }),
      invalidatesTags: [tag],
    }),
    deleteBook: builder.mutation({
      query: bookId => ({
        url: `/api/books/${bookId}`,
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
        url: `/api/books/${bookId}`,
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
