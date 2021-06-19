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
};

export { Theme };
