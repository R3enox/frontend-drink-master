import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl, token } = { baseUrl: '', token: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...headers,
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDQ2NzE1MDg4NjllZjczZDJlODVjYyIsImlhdCI6MTcwODUxMTEwNywiZXhwIjoxNzA4NTU0MzA3fQ.0YX9neTmrnaE9Jujqs4lJBJyGkrkT7x-ZrXLOWYrx_k'}`,
          //   Authorization: `Bearer ${token}`,
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const myDrinksApi = createApi({
  reducerPath: 'myDrinksApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    // baseUrl: 'https://drink-master-4fm6.onrender.com/api/',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDQ2NzE1MDg4NjllZjczZDJlODVjYyIsImlhdCI6MTcwODUxMTEwNywiZXhwIjoxNzA4NTU0MzA3fQ.0YX9neTmrnaE9Jujqs4lJBJyGkrkT7x-ZrXLOWYrx_k',
  }),
  tagTypes: ['myDrinks'],
  endpoints: (build) => ({
    fetchMyDrinks: build.query({
      query: () => ({ url: '/drinks/own', method: 'get' }),
      providesTags: ['myDrinks'],
    }),
    deleteMyDrink: build.mutation({
      query: (id) => ({
        url: `/drinks/own/remove/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['myDrinks'],
    }),
  }),
});

export const { useFetchMyDrinksQuery, useDeleteMyDrinkMutation } = myDrinksApi;

// export const myDrinksApi = createApi({
//   reducerPath: 'myDrinksApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://drink-master-4fm6.onrender.com/api/',
//   }),
//   endpoints: (builder) => ({
//     fetchMyDrinks: builder.query({
//       query: (id) => `own/${id}`,
//     }),
//   }),
// });
// console.log(myDrinksApi);

// export const { useFetchMyDrinksQuery } = myDrinksApi;
