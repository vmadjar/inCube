import { IUsers } from './postTypes';
import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const usersApi = createApi({
    reducerPath: "api/users",
    baseQuery: fetchBaseQuery({baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    
}),
    endpoints: build => ({
        getPosts: build.query<IUsers, number>({query: (page = 1) => `users?page=${page}`})
    })
})

export const {useGetPostsQuery} = usersApi