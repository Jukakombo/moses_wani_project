import { createStore } from "redux"; 
import rootReducer from "./rootReducers"; // Import your root reducer

const store1 = createStore(rootReducer); // Create Redux store with your root reducer

export default store1;
