import { useQuery } from "react-query";
import APIClient from "../../../services/api-client";
import Product from "../entities/product";


const client = new APIClient<Product>("");

const useProducts = () => useQuery({ queryKey: "products", queryFn: () => client.getByConfig({ params: { query: '*[_type=="product"]' } }) });

export default useProducts;