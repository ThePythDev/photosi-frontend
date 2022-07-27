import React from "react";
import styled from "styled-components";

const Textbox = ({ value, onChange, isDisabled = false, placeholder}) => {
  const handleChange = ({ target }) => {
    if (typeof onChange === "function") onChange(target.value);
  };

  return (
    <Wrapper
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      {...(isDisabled && { disabled: true })}
    ></Wrapper>
  );
};

const Wrapper = styled.input`
  outline: none;
  border: solid grey 1px;
  border-radius: 3px;
  padding: 1rem 2rem;

  &:focus {
    border: solid orange 1px;
  }
`;

export default Textbox;
