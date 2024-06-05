export interface Product {
    id: number;
    name: string;
    fixprice: number;
    description: string;
    offerprice: string;
    itemcontains: string;
    image: any;
}
export interface Cart {
    id: string;
    name: string;
    fixprice: number;
    description: string;
    offerprice: string;
    itemcontains: string;
    image: any;
}
export const loginUser = async (username: string, password: string): Promise<string | null> => {
    debugger
    const response = await fetch('http://localhost:8000/user');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const users = await response.json();
    const user = users.find((user: { username: string; password: string; }) => user.username === username);
    if (!user) {
        throw new Error('User not found');
    }
    if (user.password !== password) {
        throw new Error('Incorrect password');
    }
    return user.username;
};
export const fetchAllProducts = async (): Promise<Product[]> => {
    const response = await fetch('http://localhost:8000/allproduct');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data: Product[] = await response.json();
    return data;
};
export const fetchSingleProduct = async (id: number): Promise<Product> => {
    const response = await fetch(`http://localhost:8000/moreproduct/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product details');
    }
    const data: Product = await response.json();
    return data;
};
export const addItemToCart = async (product: Product): Promise<void> => {
    const response = await fetch("http://localhost:8000/cart", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }
};
export const fetchCartItem = async (): Promise<Cart[]> => {
    const response = await fetch(`http://localhost:8000/cart`);
    if (!response.ok) {
        throw new Error('Failed to fetch cart items');
    }
    const data: Cart[] = await response.json();
    return data;
};
export const deleteCartItem = async (itemId: number): Promise<void> => {
    try {
        const response = await fetch(`http://localhost:8000/cart/${itemId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete item from cart');
        }

        console.log('Item deleted successfully:', itemId);
    } catch (error) {
        console.error('Error deleting item from cart:', error);
        throw error; // Rethrow the error to be caught by the caller
    }
};
export const fetchMoreProducts = async (): Promise<Product[]> => {
    const response = await fetch('http://localhost:8000/moreproduct');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data: Product[] = await response.json();
    return data;
};
