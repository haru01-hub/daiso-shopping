import React from 'react'

import ProductCard from './product-card'
import { Product } from '@/type'

const ProductList = ({ data }: { data: Product[] }) => {
  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* grid라는 것이 화면이 작아지게 되면 행이 몇개가 되게 할지를 정해주는 것을 의미함. 반응형이라고 보면됨. */}
            {data.map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </>
  )
}

export default ProductList