import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import Product from "../entities/product"
import ProductInCart from "../entities/productInCart"

interface ShopState {
    cartItems: ProductInCart[]
    addItem: (product: Product) => void
    setProductQuantity: (productId: string, quantity: number) => void
    removeAllItems: (productId: string) => void
}

const addItemToCart = (cartItems: ProductInCart[], addedItem: Product) => {
    let newCartItems = [...cartItems]
    let itemIn = false;
    for (let i = 0; i < newCartItems.length; i++) {
        if (newCartItems[i].product._id === addedItem._id) {
            newCartItems[i].quantity += 1;
            itemIn = true;
        }
    }
    if (itemIn == false) {
        newCartItems.push({ product: addedItem, quantity: 1 });
    }
    return newCartItems;
}

const useShopStore = create<ShopState>()(
    devtools(persist(

        (set) => ({
            cartItems: [],
            setProductQuantity: (productId, quantity) => set((state) => ({
                cartItems: [...state.cartItems].map((item) => {
                    if (item.product._id === productId) {
                        item.quantity = quantity;
                    }
                    return item;
                }) // TODO finish, not working...
            })),
            removeAllItems: (productId) => set((state) => ({
                cartItems: state.cartItems.filter((item) => (item.product._id !== productId))
            })),
            addItem: (product) => set((state) => ({
                cartItems: addItemToCart(state.cartItems, product) //((state.cartItems.some(item => {item.product._id ==}) ? [] : []))
            }))
        }),
        {
            name: 'shop-storage'
        }

    ))
)

export const getTotalPrice = (products: ProductInCart[]) => {
    return products.reduce((prev, curr) => (prev + (curr.product.price * curr.quantity)), 0)
}

export default useShopStore;