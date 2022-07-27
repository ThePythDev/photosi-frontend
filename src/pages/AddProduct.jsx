import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button, Textbox } from "../components";
import { addProduct, updateProduct } from "../redux/productsSlice";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  let { id } = useParams();
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const [productState, setProductState] = useState({
    name: "",
    description: "",
    image: "",
    categories: "",
  });
  const [categoriesState, setCategoriesState] = useState("");

  const products = useSelector((state) => {
    return state.products;
  });

  useEffect(() => {
    const product = products.list.find((el) => el._id === id);
    if (product) {
      setProductState(product);
      setCategoriesState(product.categories.join(","));
    }
  }, [products, id]);

  const submitHandler = () => {
    const trimCategoriesArray = categoriesState
      .split(",")
      .map((el) => el.trim());

    const newProduct = {
      ...productState,
      categories: trimCategoriesArray,
    };

    if (id) {
      dispacth(
        updateProduct({
          product: newProduct,
        })
      );
    } else {
      dispacth(
        addProduct({
          product: { ...newProduct, _id: uuidv4() },
        })
      );
    }

    navigate("/");
  };

  return (
    <Wrapper>
      <h1>{id ? "Modifica" : "Aggiungi"}</h1>
      <Textbox placeholder="ID autogenerato..." isDisabled="true" value={id} />
      <Textbox
        placeholder="Titolo..."
        onChange={(e) => setProductState((state) => ({ ...state, name: e }))}
        value={productState.name}
      />
      <Textbox
        placeholder="Descrizione.."
        onChange={(e) =>
          setProductState((state) => ({ ...state, description: e }))
        }
        value={productState.description}
      />
      <Textbox
        placeholder="Foto..."
        onChange={(e) => setProductState((state) => ({ ...state, image: e }))}
        value={productState.image}
      />
      <Textbox
        placeholder="Categorie... (separate da virgola)"
        onChange={(e) => setCategoriesState(e)}
        value={categoriesState}
      />
      <Button onClick={submitHandler} color="green">
        Continua
      </Button>
      <Button onClick={() => navigate("/")} color="gray">
        Annulla
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  > * {
    width: 100%;
  }
`;

export default AddProduct;
