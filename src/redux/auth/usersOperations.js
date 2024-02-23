import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryOptions } from '../../services/fetchBaseQuery';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery(fetchBaseQueryOptions),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    uploadUser: builder.mutation({
      query: (value) => ({
        url: `api/users/update`,
        method: 'PATCH',
        body: value,
      }),
      providesTags: ['users'],
    }),
  }),
});

export const { useUploadUserMutation } = userApi;

//

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// export const instance = axios.create({
//   baseURL: '',
// });

// const setToken = (token) => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const logOut = createAsyncThunk(
//   'auth/signout',
//   async (_, thunkApi) => {
//     try {
//       const { data } = await instance.post('/auth/api/signout');

//       return data;
//     } catch (error) {
//        Notify.warning(error.response.data.message, {
//         fontSize: '16px',
//         width: '350px',
//         padding: '10px',
//       });
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const upLoadAvatar = createAsyncThunk(
//   'auth/api/upLoadAvatar',
//   async (file, thunkApi) => {
//     try {
//          const state = thunkApi.getState();
//          const token = state.auth.token;
//          setToken(token);
//          const { data } = await instance.post('/auth/api/updateAvatar');

//     Notify.success('Avatar was changed', {
//       fontSize: '16px',
//       width: '350px',
//       padding: '10px',
//     });
//       return data;
//     } catch (error) {
//       Notify.warning(error.response.data.message, {
//         fontSize: '16px',
//         width: '350px',
//         padding: '10px',
//       });
//      return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// // export const setAuthHeader = (token) => {
// //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// // };
