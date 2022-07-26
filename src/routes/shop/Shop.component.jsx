import { useContext } from 'react'
import { ProductsContext } from '../../contexts/Products.context'
import ProductCard from '../../components/product-card/ProductCard.component'

import './Shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}>
          <h1>{product.name}</h1>
        </ProductCard>
      ))}
    </div>
  )
}

export default Shop
