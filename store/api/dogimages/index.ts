import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface DogImageResponse {
  message: string; // URL of the dog image
  status: string; // API response status (e.g., "success" or "error")
}

export const dogimage = createApi({
  reducerPath: 'dogimage',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dog.ceo/api/breeds/image',
  }),
  endpoints: builder => ({
    dogsimage: builder.query<DogImageResponse, void>({
      query: () => ({
        url: '/random',
        method: 'GET',
      }),
    }),
  }),
});
export const { useDogsimageQuery } = dogimage;
