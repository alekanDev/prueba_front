import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@/app/context/ContextAPI'
import { Formik, Form, Field } from 'formik'
import { formOptions } from '@/utils/forms/formLogin'
import styles from './loginFrom.module.css'
import { LogIn_req } from '@/utils/apis/apiRequest'

const FormLogin = ({ setLoginViewer }) => {
  const { userInfo } = useContext(LoginContext)

  useEffect(() => {
    if (userInfo.username) {
      setLoginViewer(false)
    }
  }, [userInfo])

  return (
    <div className={styles.form_content}>
      <h2>LogIn</h2>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={async (values) => {
          const value = await LogIn_req(values)

          if (value) {
            setLoginViewer(false)
          }

        }}
      >
        <Form
          autoComplete='off'
          className={styles.form_container}
        >
          {
            formOptions.map((input, index) => (
              <div
                className={styles.input_container}
                key={index}
              >
                <div className={styles.icon_input}>
                  {input.icon}
                </div>
                <Field
                  className={styles.input_style}
                  type={input.type}
                  name={input.name}
                  placeholder={input.title}
                />
              </div>
            ))
          }
          <button
            className={styles.btn_login}
            type='submit'
          >
            INICIAR SESIÓN
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormLogin
