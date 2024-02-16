import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reqresApi = createApi({
  reducerPath: 'reqresApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),

    login: builder.mutation({
        query: (body: { email: string, password: string}) => ({
          url: `/login`,
          method: 'POST',
          body,
        }),
    }),
    register: builder.mutation({
        query: (body: {email: string, password: string}) => ({
          url: `/register`,
          method: 'POST',
          body,
        }),
    }),
  }),
});

export const { useGetProductsQuery, useLoginMutation, useRegisterMutation } = reqresApi;