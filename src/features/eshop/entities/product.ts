interface Product {
    _id: string;
    name: string;
    detail: string;
    price: number;
    images: {
        asset: {
            _ref: string
        }
    }[];
}

export default Product