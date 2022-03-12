import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  changStatusAction,
  editGroceryAction,
  filterGroceryAction,
} from './actions';
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
    addItemToGrocery: (state, action: PayloadAction<GroceryList>) => {
      state.groceryList = [...state.groceryList, action.payload];
      state.groceryCopyList = [...state.groceryCopyList, action.payload];
    },
    editGrocery: (
      state,
      action: PayloadAction<{list: GroceryList; isStatusChanged: boolean}>,
    ) => {
      state.groceryList = editGroceryAction(
        state.groceryList,
        action.payload.list,
        action.payload.isStatusChanged,
      );
      state.groceryCopyList = editGroceryAction(
        state.groceryCopyList,
        action.payload.list,
        action.payload.isStatusChanged,
      );
    },
  },
});

export const {
  changeStatus,
  filterGrocery,
  deleteItemFromList,
  addItemToGrocery,
  editGrocery,
} = grocerySlice.actions;

export default grocerySlice.reducer;
