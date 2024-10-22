'use client'
import { LoginProvider } from "./context/ContextAPI"
import { useEffect, useState } from "react"
import Image from "next/image"
import image_login from "@/utils/images/login_image.png"
import FormLogin from "@/components/forms/FormLogin"
import Dashboard from "@/components/views/Dashboard"
import styles from "./page.module.css"

export default function Home() {
  const [loginViewer, setLoginViewer] = useState(true)
  const [dashboardViewer, setDashboardViewer] = useState(!loginViewer)

  useEffect(() => {
    setDashboardViewer(!loginViewer)
  }, [loginViewer])

  return (
    <LoginProvider>
      <div className={styles.page_container}>
        <div className={loginViewer ? styles.form : styles.hidden}>
          <Image
            className={styles.image_style}
            src={image_login}
            alt="image_login"
          />
          <FormLogin setLoginViewer={setLoginViewer} />
        </div>
        <div className={dashboardViewer ? styles.dashboard : styles.hidden}>
          <Dashboard
            setLoginViewer={setLoginViewer}
          />
        </div>
      </div>
    </LoginProvider>
  );
}
