type Theme = {
  color: {
    primary: string;
    secondary: string;
    tertiary?: string;
    quaternary?: string;
    fifth?: string;

    error?: string;
    warning?: string;
    info?: string;
    success?: string;
  };

  space: number;

  breakpoint: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
};

export { Theme };
