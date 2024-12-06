import { useGetProductsQuery } from "../../services/productsApi";

const ViewProduct = () => {
  const { isLoading, isError, data: products } = useGetProductsQuery();

  return (
    <div>
      <h1>List of products</h1>
      {isLoading && <h2>Data is Loading...</h2>}
      {isError && <h2>404, Error here</h2>}

      <section className="products">
        {products &&
          products.map((product) => {
            return (
              <article className="product" key={product.id}>
                <h3>Title: {product.title}</h3>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default ViewProduct;
