import { apiSlice } from '../api/apiSlice';

const tag = 'Books';

export const booksApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchBooks: builder.query({
      query: () => '/api/books',
      transformResponse: response => response.data.result,
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
      query: ({ id, review, rating }) => ({
        url: `/api/books/${id}/review`,
        method: 'PATCH',
        body: {
          review,
          rating,
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
