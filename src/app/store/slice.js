const { createSlice } = require("@reduxjs/toolkit");
  
const querySlice = createSlice({
    name:"query",
    initialState:{query:"",yearForPaper:"1"},
    reducers:{
        setQuery :(state,action)=>{
            state.query = action.payload;
        },
        setYearForPaper:(state,action)=>{
            state.yearForPaper = action.payload;
        }
    }
})

export const {setQuery,setYearForPaper} = querySlice.actions;
export default querySlice.reducer;