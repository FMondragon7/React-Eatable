import eatableClient from "./eatable-client";

export async function getFoods() {
  return await eatableClient("/products");
}
