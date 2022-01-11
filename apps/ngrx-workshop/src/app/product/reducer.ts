import { Product } from '@ngrx-nx-workshop/api-interfaces';
import { data } from '@ngrx-nx-workshop/data';
import { Action, createReducer, on } from '@ngrx/store';
import * as productListActions from './product-list/actions';
import * as apiActions from './actions';

export interface GlobalState {
  product: ProductState;
}

interface ProductState {
  products?: Product[];
}

const initState: ProductState = {
  products: undefined
};

const productsReducer = createReducer(
  initState,
  on(apiActions.productsFetchedSuccess, (state, { products }) => ({
    products: [...products]
  })),
  on(apiActions.productsFetchedError, state => ({
    products: []
  }))
);

export function reducer(
  state: ProductState | undefined,
  action: Action
): ProductState {
  return productsReducer(state, action);
}
