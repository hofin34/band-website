import React from 'react'

interface Props {
    productId: string;
}

function ProductDetail({ productId }: Props) {
    return (
        <div>Detail of product {productId}</div>
    )
}

export default ProductDetail