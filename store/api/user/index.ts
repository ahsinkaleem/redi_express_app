import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authsclice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.21:4500/api/v1' }),
  endpoints: builder => ({
    signup: builder.mutation({
      query: creadentials => ({
        url: '/register',
        method: 'POST',
        body: creadentials,
      }),
    }),
    login: builder.mutation({
      query: creadentials => ({
        url: '/login',
        method: 'POST',
        body: creadentials,
      }),
    }),
  }),
});
export const { useSignupMutation, useLoginMutation } = authsclice;
