import React from "react";
import styled from "styled-components";

const Button = ({ color, onClick, children }) => {
  const handleClick = () => {
    if (typeof onClick === "function") onClick();
  };

  return (
    <Wrapper onClick={handleClick} color={color}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding: 2rem 6rem;
  background-color: ${(props) => (props.color ? props.color : "blue")};
  color: white;
  text-transform: uppercase;
  outline: none;
  border: none;
`;

export default Button;
