import { useQuery } from "react-query";
import APIClient from "../../../services/api-client";
import Product from "../entities/product";



const apiClient = new APIClient<Product>("");

const useProduct = (id: string) => {
    return useQuery({ queryKey: `product/${id}`, queryFn: () => apiClient.getByConfig({ params: { query: `*[_id == "${id}"]` } }) })
}

export default useProduct;