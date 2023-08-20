import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const generateQueryString = (baseString, queryParams) => {
  const queryString =
    baseString +
    Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  return queryString;
};

const Header = {
  "Content-Type": "application/json",
};

export const watchsApi = createApi({
  reducerPath: "watchsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://127.0.0.1:8000/api/`,
    extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === HYDRATE) {
        return action.payload[reducerPath];
      }
    },
    prepareHeaders: (headers) => {
      headers.set("Content-Type", Header["Content-Type"]);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllWatchs: builder.query({
      query: (queryParams) => {
        const queryString = generateQueryString("watchs?", queryParams);
        return {
          url: queryString,
        };
      },
    }),
    getSingleWatch: builder.query({
      query: (slug) => {
        return {
          url: `watchs/${slug}`,
        };
      },
      
    }),
    getCategories: builder.query({
      query: () => {
        return {
          url: "categories",
        };
      },
    }),
    getCategory: builder.query({
      query: (categorySlug) => {
        return {
          url: `category_single/${categorySlug}`,
        };
      },
    }),
    getCategoryListWatchs: (builder).query({
      query: (args) => {
        const { slug, queryParams } = args
        const queryString = generateQueryString(`categories/${slug}?`, queryParams)
        return {
          url: queryString
        };
      },
    }),
    getBrands: builder.query({
      query: () => ({url: 'brands'})
    }),
    getBrand: builder.query({
      query: (slug) => ({ url: `brand_single/${slug}` })
    }),
    getBrandListWatch: (builder).query({
     query: (args) => {
      const {slug, queryParams} = args
      const queryString = generateQueryString(`brand/${slug}?`, queryParams)
      return {
        url: queryString
      }
     }
    })
  }),
});

export const {
  useGetAllWatchsQuery,
  useGetSingleWatchQuery,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useGetCategoryListWatchsQuery,
  useGetBrandsQuery,
  useGetBrandQuery,
  useGetBrandListWatchQuery,
  util: { getRunningQueriesThunk },
} = watchsApi;

export const {
  getAllWatchs,
  getSingleWatch,
  getCategories,
  getCategory,
  getCategoryListWatchs,
  getBrand,
  getBrandListWatch,
} = watchsApi.endpoints;
