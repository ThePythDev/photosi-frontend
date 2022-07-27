import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { ProductCard, Textbox, Button } from "../components";

const Products = () => {
  const navigate = useNavigate();

  const products = useSelector((state) => {
    return state.products;
  });

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    if (products.isLoaded && name) {
      setFilteredProducts({
        ...products,
        list: products.list.filter(
          (el) =>
            el.name.toLowerCase().indexOf(name.toLowerCase()) > -1 ||
            el.categories.filter(
              (el) => el.toLowerCase().indexOf(name.toLowerCase()) > -1
            ).length > 0
        ),
      });
    } else {
      setFilteredProducts(products);
    }
  }, [products, name]);

  return (
    <Wrapper>
      <div className="textbox-wrapper">
        <Textbox
          onChange={(e) => setName(e)}
          placeholder="Cerca nome o categoria.."
        ></Textbox>
      </div>
      <div className="button-wrapper">
        <Button onClick={() => navigate('/products/add')} color="green">Aggiungi</Button>
      </div>
      <div className="container">
        {filteredProducts.isLoaded
          ? filteredProducts.list.map((el) => (
              <ProductCard key={uuidv4()} {...el} />
            ))
          : "Loading..."}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  .textbox-wrapper {
    padding: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;

    > * {
      flex: 0 0 80%;
    }
  }

  .container {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    > * {
      flex: 0 0 calc(33% - 2rem);
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      width: 100%;
      flex-direction: column;
    }
  }
`;

export default Products;
