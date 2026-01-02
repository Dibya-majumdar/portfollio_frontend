import {configureStore} from "@reduxjs/toolkit"
import logInReducer from "./logInSlice"
const myStore=configureStore({
reducer:{
adminCart:logInReducer
}
})

export default myStore;