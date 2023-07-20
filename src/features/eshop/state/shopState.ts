import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

interface ShopState {
    cartItems: Product[]
    addItem: (product: Product) => void
    removeOneItem: (productId: string) => void
    removeAllItems: (productId: string) => void
}

const useShopStore = create<ShopState>()(
    devtools(persist(

        (set) => ({
            cartItems: [],
            removeOneItem: (productId) => set((state) => ({
                cartItems: [...state.cartItems] // TODO finish, not working...
            })),
            removeAllItems: (productId) => set((state) => ({
                cartItems: state.cartItems.filter((item) => (item._id != productId))
            })),
            addItem: (product) => set((state) => ({
                cartItems: [...state.cartItems, product]
            }))
        }),
        {
            name: 'shop-storage'
        }

    ))
)
export default useShopStore;