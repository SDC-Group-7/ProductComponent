import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuantityToggler = ({ productLimit, quantity, onChange }) => {
  const handleChange = (e) => onChange(e.target.value);
  const handleDecrease = () => onChange(quantity - 1);
  const handleIncrease = () => onChange(quantity + 1);

  return (
    <Container>
      <DecreaseButton data-test="decrease" onClick={handleDecrease} disabled={quantity === 1} />
      <Input type="num" data-test="input" min="1" max={productLimit} value={quantity} onChange={handleChange} />
      <IncreaseButton data-test="increase" onClick={handleIncrease} disabled={quantity === productLimit} />
    </Container>
  );
};

QuantityToggler.propTypes = {
  productLimit: PropTypes.number,
  quantity: PropTypes.number,
  onChange: PropTypes.func,
};

QuantityToggler.defaultProps = {
  productLimit: 3,
  quantity: 1,
  onChange: () => {},
};

export default QuantityToggler;

const Container = styled.div`
  display: flex;
`;
const Input = styled.input``;
const DecreaseButton = styled.button``;
const IncreaseButton = styled.button``;