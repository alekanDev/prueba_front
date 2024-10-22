import { TiCodeOutline } from "react-icons/ti"
import { HiOutlineDocumentText } from "react-icons/hi2"
import { GrTextAlignFull } from "react-icons/gr"
import { TiUserOutline, TiUser } from "react-icons/ti";

const size_icon = 25

export const newTiket = [
  {
    name: 'code',
    title: 'Código',
    type: 'text',
    icon: <TiCodeOutline size={size_icon} />
  },
  {
    name: 'description',
    title: 'Descripción',
    type: 'text',
    icon: <HiOutlineDocumentText size={size_icon} />
  },
  {
    name: 'sumary',
    title: 'Resumen',
    type: 'text',
    icon: <GrTextAlignFull size={size_icon} />
  },
  {
    name: 'id_user',
    title: 'ID usuario',
    type: 'text',
    icon: <TiUserOutline size={size_icon} />
  },
  // {
  //   name: 'added_by',
  //   title: 'creado_por',
  //   type: 'text',
  //   icon: <TiUser size={size_icon} />
  // },
]