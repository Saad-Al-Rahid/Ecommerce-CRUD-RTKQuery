import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useAddProductsMutation } from "../../services/productsApi";

const AddProcuts = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  const [addProducts] = useAddProductsMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addProducts({ ...product, id: nanoid() });
      }}
    >
      <div>
        <label htmlFor="title">Title: </label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Description: </label>
        <input
          className="form-control"
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Category: </label>
        <input
          className="form-control"
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Price: </label>
        <input
          className="form-control"
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProcuts;
