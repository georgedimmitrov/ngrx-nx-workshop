import { BasicProduct } from '@ngrx-nx-workshop/api-interfaces';
import { createAction, props } from '@ngrx/store';

// export const productsFetched = createAction(
//   '[Products API] Fetched',
//   props<{ products: BasicProduct[] }>()
// );

export const productsFetchedSuccess = createAction(
  '[Product API] Products Fetched Success',
  props<{ products: BasicProduct[] }>()
);

export const productsFetchedError = createAction(
  '[Product API] Products Fetching Error'
);
