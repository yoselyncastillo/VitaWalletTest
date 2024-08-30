export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "base" | "full";
  text: string;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ButtonPropsV2 {
  /**
   * Funcion que ejecuta el boton cuando se hace click sobre el.
   */
  onPress: ((event: any) => void) | undefined;
  /**
   * Nombre del boton.
   */
  text: string;
  /**
   * Por defecto el boton es de color azul.
   */
  isDefaultButton: boolean;
  /**
   * El boton cambia a color verde.
   */
  isGreenButton: boolean;
  /**
   * Se deshabilita el boton.
   */
  isDisabled: boolean;
  /**
   * El boton cambia a color blanco.
   */
  isWhiteButton: boolean;
}
