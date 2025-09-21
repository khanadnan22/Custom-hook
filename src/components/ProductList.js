import React from "react";
import useFetch from "../hooks/useFetch";

const ProductList = () => {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {data &&
        data.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
