import React from 'react';
import { Alert } from 'react-bootstrap';

const message = ({ variant, children }) => (
  <Alert variant={variant}>
    {children}
  </Alert>
);
message.defaultProp = {
  variant: 'info',
};

export default message;
