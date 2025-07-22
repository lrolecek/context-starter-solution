import Product from "./Product";
import productData from './../data/productData'

const Products = () => {
  return (
    <div style={{
      border: '5px solid blue',
      margin: '1em',
      padding: '1em',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1em'
    }}>

      {productData.map(product => (
        <Product key={product.id} {...product} />
      ))}

    </div>
  );
}

export default Products;