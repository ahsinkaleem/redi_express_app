import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Apiresponse {
  id: string;
  name: string;
  data?: Record<string, unknown>; // Optional 'data' field
}
export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.restful-api.dev' }),
  endpoints: builder => ({
    dummyData: builder.query<Apiresponse[], void>({
      query: () => ({
        url: '/objects',
        method: 'GET',
      }),
    }),
    postdumy: builder.mutation({
      query: data => ({
        url: '/objects',
        method: 'POST',
        object: data,
      }),
    }),
  }),
});
export const { useDummyDataQuery, usePostdumyMutation } = dummyApi;
