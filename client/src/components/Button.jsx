import React from 'react';
import ClassNames from 'classnames';

const Button = ({outline,children,className}) => {
  return (
    <button className={ClassNames('button',className,{'button--outline':outline})}>
    {children}
    </button>
  );
};

export default Button;
