import React, { useContext } from 'react'
import { newTiket } from '@/utils/forms/newTicket_form'
import { Formik, Form, Field } from 'formik'
import styles from './addTicket.module.css'
import { LoginContext } from '@/app/context/ContextAPI'
import { add_tiket } from '@/utils/apis/apiRequest'

const AddTicket = () => {
  const {userInfo} = useContext(LoginContext)
  return (
    <div className={styles.addticket_container}>
      <Formik
        initialValues={{
          code: '',
          description: '',
          sumary: '',
          id_user: '',
          added_by: userInfo.username
        }}
        onSubmit={async (values, {resetForm}) => {
          await add_tiket(values)

          resetForm()
        }}
      >
        <Form
          className={styles.form_container}
        >
          {
            newTiket.map((input, index) => (
              <div
                key={index}
                className={styles.input_form}
              >
                {input.icon}
                <Field
                  name={input.name}
                  className={styles.input_style}
                  type={input.type}
                  placeholder={input.title}
                />
              </div>
            ))
          }
          <button
            type='submit'
            className={styles.btn_addtiket}
          >
            AGREGAR SOLICITUD
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddTicket
