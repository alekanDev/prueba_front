import { HiOutlineDocumentAdd } from "react-icons/hi"
import { LuClipboardList } from "react-icons/lu"
import { IoExitOutline } from "react-icons/io5"
import AddTicket from "@/components/views/AddTicket"
import ListTickets from "@/components/views/ListTickets"

const size_icon = 30

export const lateralMenu = [
  {
    name: 'addTicket',
    title: 'Crear solicitud',
    icon: <HiOutlineDocumentAdd size={size_icon} />,
    component: <AddTicket/>
  },
  {
    name: 'listTickets',
    title: 'Listar solicitudes',
    icon: <LuClipboardList size={size_icon} />,
    component: <ListTickets/>
  },
  {
    name: 'logOut',
    title: 'Cerrar sesión',
    icon: <IoExitOutline size={size_icon} />
  },
]