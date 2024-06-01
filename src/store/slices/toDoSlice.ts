import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {IToDo} from "../../models/ToDo/IToDo";
import {fetchRequest, getTodosUrl, setFormError} from "../tools/fetchTools";
import {IFetchError} from "../../models/Errors/IFetchError";
import {FormError} from "../../models/Errors/FormError";

export interface ToDoState {
    data: IToDo[] | null,
    getLoading: boolean,
    getError: null | FormError<IToDo>
}


const initialState: ToDoState = {
    data: null,
    getLoading: false,
    getError: null
}

export const getToDoList = createAsyncThunk<IToDo[],void, {rejectValue:  FormError<IToDo> }>(
    'todos/get',
    async (_, {rejectWithValue}) => {
        try {
            const todos = await fetchRequest<IToDo[]>(getTodosUrl)
            return todos;
        } catch (error) {
            return rejectWithValue(setFormError(error as IFetchError<IToDo>));
        }
        
    }
)




export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getToDoList.pending, (state) => {
                state.getLoading = true;
                state.getError = null
            })
            .addCase(getToDoList.fulfilled, (state, { payload }) => {
                state.data = payload;
                state.getLoading = false;
            })
            .addCase(getToDoList.rejected, (state, {payload}) => {
                state.getLoading = false;
                if(payload) state.getError = payload;
            })
    }
})

export default todoSlice.reducer;
