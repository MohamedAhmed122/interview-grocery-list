import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {changStatusAction, filterGroceryAction} from './actions';
import {GroceryList, FilterType} from '@Shared/types';
import {groceryList} from '@Shared/data';

interface GroceryState {
  groceryList: GroceryList[];
  groceryCopyList: GroceryList[];
}

const initialState: GroceryState = {
  groceryList,
  groceryCopyList: groceryList,
};

export const grocerySlice = createSlice({
  name: 'grocery',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<GroceryList>) => {
      console.log('Here From Reducer');
      state.groceryList = changStatusAction(state.groceryList, action.payload);
      state.groceryCopyList = changStatusAction(
        state.groceryList,
        action.payload,
      );
    },
    filterGrocery: (state, action: PayloadAction<FilterType>) => {
      state.groceryList = filterGroceryAction(
        state.groceryCopyList,
        action.payload,
      );
    },
    deleteItemFromList: (state, action: PayloadAction<string>) => {
      state.groceryList = state.groceryList.filter(
        list => list.id !== action.payload,
      );
      state.groceryCopyList = state.groceryCopyList.filter(
        list => list.id !== action.payload,
      );
    },
  },
});

export const {changeStatus, filterGrocery, deleteItemFromList} =
  grocerySlice.actions;

export default grocerySlice.reducer;
