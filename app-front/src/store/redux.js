import { configureStore, createSlice } from '@reduxjs/toolkit';

const roomSearchSlice = createSlice({
    name: "roomAvalaible",
    initialState : {
        roomAvalaibleData :{
            "checkInDate":"",
            "checkOutDate": '',
            "guest" : ''
        },
    
    },

    reducers: {
      
        getSearchInfo : (state,action) => {
            //{ type : "GET_USER_ID", payload : "userId"}
            state.bookingData.userId = action.payload
            console.log("state booking data :",action.payload)
            return state;
        }
        
    }

});

export const { getSearchInfo } = roomSearchSlice.actions;

export const store = configureStore({
    
    reducer : {
        roomAvalaible : roomSearchSlice.reducer,

    }
})