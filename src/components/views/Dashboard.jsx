import React, { useContext, useEffect, useState } from 'react'
import { lateralMenu } from '@/utils/menus.js/lateralMenu'
import styles from './dashboard.module.css'
import { TiCode } from "react-icons/ti";
import { LoginContext } from '@/app/context/ContextAPI'
import Cookies from 'js-cookie';

const Dashboard = ({ setLoginViewer }) => {
  const [componentOption, setComponentOption] = useState()
  const [title_page, setTitle_page] = useState('')
  const { setUserData, userInfo } = useContext(LoginContext)

  useEffect(() => {
    const token = Cookies.get('token')
    setUserData({ token })
    console.log(userInfo)
  }, [])

  return (
    <div className={styles.dashboard_container} >
      <div className={styles.lateral_menu}>
        {
          lateralMenu.map((option, index) => (
            <div
              key={index}
              className={styles.option_container}
              onClick={() => {
                if (option.name !== 'logOut') {
                  console.log(option.name)
                  setTitle_page(option.title)
                  setComponentOption(option.component)
                } else {
                  Cookies.remove('token', { path: '/' })
                  setLoginViewer(true)
                }
              }}
            >
              {option.icon} {option.title}
            </div>
          ))
        }
      </div>
      <div className={styles.main_container}>
        <div className={styles.main_content}>

          <div className={styles.top_banner}>
            <div className={styles.title_page}>
              {title_page}
            </div>
            <div className={styles.infoUser} >
              <div className={styles.profile_picture}>
                <TiCode color='white' size={40} />
              </div>
              {userInfo.name}
            </div>
          </div>
          {componentOption}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
