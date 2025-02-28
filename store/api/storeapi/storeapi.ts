import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export const storeapi = createApi({
  reducerPath: 'storeapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: builder => ({
    getallproducts: builder.query<Product, void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
    getsingleitem: builder.query<Product, number>({
      query: id => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getallcatogories: builder.query<any, void>({
      query: () => ({
        url: '/products/categories',
        method: 'GET',
      }),
    }),
  }),
});
export const {
  useGetallproductsQuery,
  useGetsingleitemQuery,
  useLazyGetsingleitemQuery,
  useGetallcatogoriesQuery,
} = storeapi;
