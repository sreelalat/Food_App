import { createSlice } from "@reduxjs/toolkit";
import {getRestaurantData} from '../../api/dishDetails';

interface mainState {
    loading: boolean;
    restaurantData: any;
    error: string;
}

const initialState: mainState = {
    loading: false,
    restaurantData: [],
    error: '',
}

export const main = createSlice({
    name: "main",
    initialState,
    reducers: {

    },
    extraReducers:(builder)=>{
        builder.addCase(
            getRestaurantData.pending, (state) => {
                state.loading = true;
            }
        ),
        builder.addCase(
            getRestaurantData.fulfilled, (state, action) => {
                state.restaurantData = action.payload;
                state.loading  = false;
            }
        ),
        builder.addCase(
            getRestaurantData.rejected, (state)=> {
                state.loading = false;
                state.error = "Something went wrong. Please try again :("
            }
        )

}

},

)

export default main.reducer;
