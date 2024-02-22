import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantData = createAsyncThunk('getRestaurantData', async()=>{
    const response = await fetch('https://run.mocky.io/v3/db0018c8-5982-4d89-a54f-f51fe14d3c89');
    const result = await response.json();
    return result.data;
})