import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface ProductState {
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
