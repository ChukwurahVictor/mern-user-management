import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "http://localhost:5000/api/";

const config = {
   headers: {
      "Content-Type": "application/json"
   }
};

const initialState = {
   status: "",
   users: [],
   error: ""
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async(users, {rejectWithValue}) => {
   try {
      const response = await axios.get(baseURL + "users/" , config);
      return response.data.users; 
   } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
   }
})

export const addUser = createAsyncThunk("users/addUser", async(user, { rejectWithValue }) => {
   try {
      const response = await axios.post(baseURL + "users", user, config);
      return response.data.newUser;
   } catch (err) {
      return rejectWithValue(err.response.data);
   }
})

export const updateUser = createAsyncThunk("users/updateUser", async(user, {rejectWithValue}) => {
   try {
      const { id, firstname, lastname, email, gender, phone } = user
      const response = await axios.patch(baseURL + "users/" + id, 
         { firstname, lastname, email, gender, phone }, 
         config
      );
      return response.data.message;
   } catch (err) {
      return rejectWithValue(err.response.data);
   }
})

export const deleteUser = createAsyncThunk("users/deleteUser", async(userId, {rejectWithValue}) => {
   try {
      const response = await axios.delete(baseURL + "users/" + userId , config);
      return response.data.message; 
   } catch (err) {
      return rejectWithValue(err.response.data.error);
   }
})

export const userDetails = createAsyncThunk("users/userDetails", async(user, { rejectWithValue }) => {
   try {
      return user;
   } catch (err) {
      return rejectWithValue(err.response);
   }
})

const userSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchUsers.pending]: (state) => {
         return {
            ...state,
            status: "loading",
            error: ""
         }
      },
      [fetchUsers.fulfilled]: (state, action) => {
         return {
            ...state,
            status: "success",
            users: action.payload,
            error: ""
         }
      },
      [fetchUsers.rejected]: (state, action) => {
         return {
            ...state,
            status: "error",
            error: action.payload
         }
      },
      [addUser.pending]: (state) => {
         return {
            ...state,
            status: "loading",
            error: ""
         }
      },
      [addUser.fulfilled]: (state, action) => {
         return {
            ...state,
            status: "success",
            users: [...state.users, action.payload],
            error: ""
         }
      },
      [addUser.rejected]: (state, action) => {
         return {
            ...state,
            status: "error",
            error: action.payload
         }
      },
      [updateUser.pending]: (state) => {
         return {
            ...state,
            status: "loading",
            error: ""
         }
      },
      [updateUser.fulfilled]: (state, action) => {
         return {
            ...state,
            status: "success",
            users: [...state.users],
            error: ""
         }
      },
      [updateUser.rejected]: (state, action) => {
         return {
            ...state,
            status: "error",
            error: action.payload
         }
      },
      [deleteUser.pending]: (state) => {
         return {
            ...state,
            status: "loading",
            error: ""
         }
      },
      [deleteUser.fulfilled]: (state, action) => {
         const userList = state.users.filter((user) => user.id !== action.payload.id)
         return {
            ...state,
            status: "success",
            users: userList,
            error: ""
         }
      },
      [deleteUser.rejected]: (state, action) => {
         return {
            ...state,
            status: "error",
            error: action.payload
         }
      },
      [userDetails.pending]: (state) => {
         return {
            ...state,
            status: "loading",
            error: ""
         }
      },
      [userDetails.fulfilled]: (state, action) => {
         return {
            ...state,
            status: "success",
            users: action.payload,
            error: ""
         }
      },
      [userDetails.rejected]: (state, action) => {
         return {
            ...state,
            status: "error",
            error: action.payload
         }
      }
   }
})

export default userSlice.reducer;