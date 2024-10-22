import { TiUserOutline, TiLockClosedOutline } from "react-icons/ti";

const size_icon = 25

export const formOptions = [
  {
    name: 'username',
    title: 'Usuario',
    type: 'text',
    icon: <TiUserOutline size={size_icon} />
  },
  {
    name: 'password',
    title: 'Contraseña',
    type: 'password',
    icon: <TiLockClosedOutline size={size_icon} />
  }
]