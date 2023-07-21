import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import Product from "../entities/product"
import ProductInCart from "../entities/productInCart"

interface ShopState {
    cartItems: ProductInCart[]
    addItem: (product: Product) => void
    removeOneItem: (productId: string) => void
    removeAllItems: (productId: string) => void
}

const addItemToCart = (cartItems: ProductInCart[], addedItem: Product) => {
    let newCartItems = [...cartItems]
    let itemIn = false;
    for (let i = 0; i < newCartItems.length; i++) {
        if (newCartItems[i].product._id == addedItem._id) {
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
            removeOneItem: (productId) => set((state) => ({
                cartItems: [...state.cartItems] // TODO finish, not working...
            })),
            removeAllItems: (productId) => set((state) => ({
                cartItems: [] // state.cartItems.filter((item) => (item._id != productId))
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
export default useShopStore;