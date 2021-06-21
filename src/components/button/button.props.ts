import React from 'react';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset';
};

/**
 * <Button /> props
 */
const useButtonProps = (_: ButtonProps) => {};

export { ButtonProps, useButtonProps };
