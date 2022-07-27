export const selectProducts = (state) => state.products.products;

export const selectEditingProduct = (state) => state.products.editingProduct;

export const selectFilteredItems = (state) => state.products.filteredItems;

export const selectTotalPrice = (state) => state.products.totalPrice;

export const selectIsLoadingProductsList = (state) => state.products.isLoadingProductsList;

export const selectDeletingProducts = (state) => state.products.deletingProducts;
