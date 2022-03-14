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
    changeStatus: (state, {payload}: PayloadAction<GroceryList>) => {
      console.log('Here From Reducer');
      state.groceryList = changStatusAction(state.groceryList, payload);
      state.groceryCopyList = changStatusAction(state.groceryCopyList, payload);
    },
    filterGrocery: (state, {payload}: PayloadAction<FilterType>) => {
      state.groceryList = filterGroceryAction(state.groceryCopyList, payload);
    },
    deleteItemFromList: (state, {payload}: PayloadAction<string>) => {
      state.groceryList = state.groceryList.filter(list => list.id !== payload);
      state.groceryCopyList = state.groceryCopyList.filter(
        list => list.id !== payload,
      );
    },
    addItemToGrocery: (state, {payload}: PayloadAction<GroceryList>) => {
      state.groceryList = [...state.groceryList, payload];
      state.groceryCopyList = [...state.groceryCopyList, payload];
    },
    editGrocery: (
      state,
      {payload}: PayloadAction<{list: GroceryList; isStatusChanged: boolean}>,
    ) => {
      state.groceryList = editGroceryAction(
        state.groceryList,
        payload.list,
        payload.isStatusChanged,
      );
      state.groceryCopyList = editGroceryAction(
        state.groceryCopyList,
        payload.list,
        payload.isStatusChanged,
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
