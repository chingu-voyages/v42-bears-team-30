import { configureStore, createSlice } from '@reduxjs/toolkit';

const roomSearchSlice = createSlice({
    name: "roomAvailables",
    initialState : {
        roomAvailableData :{
            "checkInDate":"",
            "checkOutDate": '',
            "guest" : ''
        },
    
    },

    reducers: {
      
        getSearchInfo : (state,action) => {
            //{ type : "GET_USER_ID", payload : "userId"}
            state.roomAvailableData.checkInDate = new Date(action.payload.checkInDate)
            state.roomAvailableData.checkOutDate = new Date(action.payload.checkOutDate)
            state.roomAvailableData.guest = action.payload.guest
            console.log("state booking data :",action.payload.guest)
            return state;
        }
        
    }

});

export const { getSearchInfo } = roomSearchSlice.actions;

export const store = configureStore({
    
    reducer : {
        roomAvailables : roomSearchSlice.reducer,

    }
})