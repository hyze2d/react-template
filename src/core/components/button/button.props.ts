/**
 * Props
 */
type ButtonProps = {
  /**
   * ClassName
   */
  className?: string;
  /**
   * Button type
   */
  type?: 'submit' | 'button';
  /**
   * Button theme
   */
  theme?: 'primary' | 'secondary';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Is button disabled
   */
  disabled?: boolean;
  /**
   * Handle click
   */
  onClick?: () => void;
};

export { ButtonProps };
