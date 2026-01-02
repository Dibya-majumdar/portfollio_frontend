import { createSlice } from "@reduxjs/toolkit";

const logInSlice=createSlice({
    name:"admin",
    initialState:"Login",
    reducers:{
        logInUser:(state,action)=>{
            return action.payload
        },
        logOutUser:(state,action)=>{
            return "Login";
        }
    }
})
export default logInSlice.reducer;
export const {logInUser,logOutUser}=logInSlice.actions;