import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  border-width: 0;
  color: gray;
`;

const CardFooterButton = ({ children, className, onClick }) => (
  <StyledButton outline color="link" className={className} onClick={onClick}>
    {children}
  </StyledButton>
);

CardFooterButton.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CardFooterButton;
