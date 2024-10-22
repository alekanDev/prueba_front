import { del_ticket, get_tickets } from '@/utils/apis/apiRequest'
import React, { useContext, useEffect, useState } from 'react'
import styles from './listTickets.module.css'
import { GoFileCode } from "react-icons/go"
import { MdDeleteOutline } from "react-icons/md"
import { LoginContext } from '@/app/context/ContextAPI'

const ListTickets = () => {

  const { userInfo } = useContext(LoginContext)
  const [allTickets, setAllTickets] = useState([])

  const GetTickets = async () => {
    const tickets = await get_tickets()
    setAllTickets(tickets)
  }
  useEffect(() => {
    GetTickets()
  }, [])

  return (
    <div className={styles.alltickets_container}>
      {
        allTickets.map((ticket, index) => {
          return (
            <div
              key={index}
              className={styles.ticket_card}
            >
              <div className={styles.title_card}>
                <div className={styles.icon_card}>
                  <GoFileCode size={20} />
                </div>
                <h4>{ticket.code}</h4>
              </div>
              <div className={styles.description_card}>
                <span style={{ fontWeight: 'bold' }} >Resumen:</span>
                {ticket.sumary}
              </div>
              <div
                className={styles.delete_option}
                onClick={() => {
                  if (userInfo.rol === 'admin') {
                    console.log(ticket)
                    del_ticket(ticket.code)
                    GetTickets()
                  }
                }}
              >
                <span style={{ fontWeight: 'bold', fontSize: 10 }} >Por: {ticket.added_by}</span>
                <MdDeleteOutline
                  className={userInfo.rol !== 'admin' ? styles.hidden : styles.icon_del}
                  size={30}
                />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListTickets
