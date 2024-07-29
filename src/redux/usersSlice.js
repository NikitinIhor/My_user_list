import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addUser, deleteUser, fetchUsers, updateUser } from "./usersOpt";
import { selectFilter } from "./filterSlice";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        usersArr: [],
        loading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true,
                    state.error = false
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.usersArr = action.payload
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = false,
                    state.error = true
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false
                state.usersArr = state.usersArr.filter((user) => user.id !== action.payload)
            })
            .addCase(deleteUser.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(addUser.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false
                state.usersArr = [...state.usersArr, action.payload]
            })
            .addCase(addUser.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true
                state.error - false
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false
                const index = state.usersArr.findIndex(user => user.id === action.payload.id)
                state.usersArr[index] = action.payload
            })
            .addCase(updateUser.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})



export const selectLoading = (state) => state.users.loading
export const selectError = (state) => state.users.error
export const selectUsers = (state) => state.users.usersArr

export const selectFiltredUsers = createSelector(
    [selectUsers, selectFilter],
    (usersList, filtredList) => {
        return usersList.filter((user) =>
            user.name.toLowerCase().includes(filtredList.toLowerCase())
        );
    }
)

export default usersSlice.reducer