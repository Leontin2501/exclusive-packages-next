import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../const/URL";

import { PostItem } from "../types/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getPostsByUser: builder.query<PostItem[], number>({
      query: (userId) => `/posts?userId=${userId}`,
    }),
  }),
});

export const { useGetPostsByUserQuery } = postsApi;
