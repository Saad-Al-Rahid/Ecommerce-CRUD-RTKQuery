import {
  useDeleteProductsMutation,
  useGetProductsQuery,
} from "../../services/productsApi";

const ViewProduct = () => {
  const { isLoading, isError, data: products } = useGetProductsQuery();
  const [deleteProducts] = useDeleteProductsMutation();

  const handleDelete = async (id) => {
    await deleteProducts(id);
  };

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
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default ViewProduct;
