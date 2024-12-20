import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5174/" }),
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",

      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product", id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    addProducts: builder.mutation({
      query: (body) => ({
        url: `products/`,
        method: "POST",
        body
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }],
    }),

    
  }),
});

export const { useGetProductsQuery, useDeleteProductsMutation, useAddProductsMutation } = productsApi;
