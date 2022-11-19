import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch }) => {
  const fetchProducts = async () => {
    var data = await fetch("https://dummyjson.com/products");
    return data.json();
  };

  let response = await fetchProducts();
  console.log(response);
  return {
    products: response.products,
  };
};
