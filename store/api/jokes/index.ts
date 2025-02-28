import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Joke {
  id: number;
  setup: string;
  punchline: string;
  type: string;
}

export const jokes = createApi({
  reducerPath: 'jokes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://official-joke-api.appspot.com',
  }),
  endpoints: builder => ({
    getjokes: builder.query<Joke, void>({
      query: () => ({
        url: '/random_joke',
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetjokesQuery } = jokes;
