const { configureStore } = require("@reduxjs/toolkit");
import queryReducer from '../store/slice.js';
 const store = configureStore({
    reducer:{
        query : queryReducer,
    }
})

export default store;