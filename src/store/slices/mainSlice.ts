import { createSlice } from "@reduxjs/toolkit";
import {getRestaurantData} from '../../api/dishDetails';

interface mainState {
    loading: boolean;
    restaurantData: any;
    error: string;
    cartData: any;
}

const initialState: mainState = {
    loading: false,
    restaurantData: [],
    error: '',
    cartData: [],
}

export const main = createSlice({
    name: "main",
    initialState,
    reducers: {
        setCartData: (state, action) => {
            //increasing count
            let index = state.cartData.findIndex((dish: any)=>dish.id === action.payload.id);
            if(action.payload.addition){
                if(index === -1) {
                    state.cartData = [...state.cartData, {'id':action.payload.id, 'count': 1 }]
                } else {
                    state.cartData[index].count += 1; 
                }
            }
            //Dicreasing count
            else if(index > -1){
                if(state.cartData[index].count > 1){
                    state.cartData[index].count -= 1; 
                } else {
                    state.cartData.splice(index, 1)
                }
            }
            // state.cartData = action.payload
        }
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

export const {setCartData} = main.actions;
export default main.reducer;
