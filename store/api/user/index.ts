import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://' }),
  endpoints: builder => ({
    signup: builder.mutation({
      query: creadiantials => ({
        url: '/register',
        method: 'Post',
        body: creadiantials,
      }),
    }),
  }),
});
export const { useSignupMutation } = apiSlice;
