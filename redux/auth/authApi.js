import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { userLoggedIn } from "./authSlice";
import Cookies from "js-cookie";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/users/',
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
          return action.payload[reducerPath];
        }
      },
      prepareHeaders: async (headers, { getState, endpoint }) => {
        try {
            const userInfo = Cookies.get('userInfo')
            if(userInfo) {
                const user = JSON.parse(userInfo)
                if(user?.accessToken) {
                    headers.set('Authorization', `Bearer ${user.accessToken}`)
                }
            }
        } catch (error) {
            console.error('Error parsing user info:', error);
        }
        return headers
      }
  }),  
  endpoints: (builder) => ({
    registerUser: builder.mutation({
        query: (data) => ({
            url: '/register/',
            method: 'POST',
            body: data
        })
    })
  })
})

export const {
    useRegisterUserMutation,
} = authApi