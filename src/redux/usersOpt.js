import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

export const fetchUsers = createAsyncThunk("users/getAll",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/users")
            return res.data

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }

    })

export const deleteUser = createAsyncThunk("users/deleteUser",
    async (userId, thunkAPI) => {
        try {
            await axios.delete(`/users/${userId}`)
            return userId
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const addUser = createAsyncThunk("users/addUser",
    async (newUser, thunkAPI) => {
        try {
            const res = await axios.post("/users", newUser)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const updateUser = createAsyncThunk("users/updateUser",
    async (data, thunkAPI) => {
        try {
            const res = await axios.put(`/users/${data.id}`, data)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)