import { createReducer,on } from "@ngrx/store";
import { increment } from "./counter.action";
import { Action } from "rxjs/internal/scheduler/Action";

const initialState=0
export const counterReducer=createReducer(
    initialState,
    on(increment,(state,action)=>state+action.value)

);