import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/Slice';

const store=configureStore({
    reducer:{
     todo:todoReducer   
    }

})
export default store;
