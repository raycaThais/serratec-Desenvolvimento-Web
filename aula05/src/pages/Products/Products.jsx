import { useEffect, useState } from "react";
import styles from "./products.module.css";
import { api } from "../../services/api";
import { Card } from "../../components/card/card";

export function Products() {
  const [loading, setLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const newProduct = {
    description: description,
    price: price,
  };
  //GET ALL
  const getAllProducts = () => {
    // setLoading(true);
    api
      .get("/products?limit=210")
      .then((response) => {
        setProductsList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
        console.log("finally");
      });
  };

  //POST
  const postProduct = () => {
    //instanciando a requisição, depois da url base passar o endpoint e o requestBody
    api
      .post("/products", newProduct)
      .then((response) => {
        //tratativa caso a requisição for bem sucedida
        response.status === 200 ? console.log("deu certo") : "";
      })
      .catch((error) => {
        //tratativa caso a requisição não for bem sucedida
        console.log(error);
      });
  };

  //UPDATE
  const updateProduct = () => {
    //instanciando a requisição, depois da url base passar o endpoint e o requestBody
    api
      .put("/products", newProduct)
      .then((response) => {
        //tratativa caso a requisição for bem sucedida
        response.status === 200 ? console.log("deu certo") : "";
      })
      .catch((error) => {
        //tratativa caso a requisição não for bem sucedida
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Lista de Produtos</h1>
      <div className={styles.cardList}>
        {productsList.map((product, id) => (
          <Card key={id}>
            {product.title}
            {product.price}
            {/* <img src={product.image} alt="" /> */}
          </Card>
        ))}
      </div>
    </div>
  );
}