export interface UserdataProp {
  first_name: string;
}

/**
 * Representa un usuario.
 * @property {boolean} logged - Verifica si el usuario esta logeado.
 * @property {UserdataProp} userdata - Contiene datos del usuario como first_name.
 * @property {HeadersProps} headers - headers necesarios para el resto de llamados a api.
 */
export interface AuthState {
  logged: boolean;
  userdata: UserdataProp;
  headers: HeadersProps;
}

export interface HeadersProps {
  access_token: string;
  client: string;
  expiry: string;
  uid: string;
}
