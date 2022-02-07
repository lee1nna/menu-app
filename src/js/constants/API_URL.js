export const BASE_URL = 'http://localhost:3000/api';

// apis
export const addMenuAPI = category => `/category/${category}/menu`;
export const getMenuAPI = category => `	/category/${category}/menu`;
export const soldoutMenuAPI = (category, menuId) =>
  `/category/${category}/menu/${menuId}/soldout`;
export const updateMenuAPI = (category, menuId) =>
  `/category/${category}/menu/${menuId}`;

export const deleteMenuAPI = (category, menuId) =>
  `/category/${category}/menu/${menuId}`;