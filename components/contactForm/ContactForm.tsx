'use client';

import { SectionWrapper, SuccessMessage } from '@/components'
import styles from './contactForm.module.css'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/formValidator/contactFormSchema';
import { inter } from '@/public/fonts/fonts';
import { ErrorMessage } from './ErrorMessage';
import { useShowMessage } from '@/hooks/useShowMessage';
import { useEffect, useState } from 'react';

export const ContactForm = () => {
  const { showMessage, showSuccessMessage } = useShowMessage();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, [isPageLoaded])

  // We use react hook form plus zod validator schema to validate the input fields.
  // The handle submit function will first validate, and if everything goes well,
  // then executes the callback function.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = () => {
    showSuccessMessage();
  }

  return (
    <SectionWrapper title='Contáctame'>
      <p>Si tienes alguna duda sobre mí, sobre mi disponibilidad para trabajar o te gustaría contactarme para algun proyecto personal, ¡no dudes en enviarme un mensaje!</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

        {/* Name Input  */}
        <div>
          <label className={styles.label} htmlFor="name">Nombre</label>
          <input
            {...register('name')}
            id='name'
            type='text'
            className={`${styles.input} ${inter.className} ${errors.name && styles.error}`}
            placeholder='Escribe tu nombre'>
          </input>
          {
            errors.name && (
              <ErrorMessage message={ `${errors.name.message}` } />
            )
          }
        </div>
        
        {/* Email Input  */}
        <div>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            {...register('email')}
            id='email'
            type='email'
            className={`${styles.input} ${inter.className} ${errors.email && styles.error}`}
            placeholder='Escribe tu email'>
          </input>
          {
            errors.email && (
              <ErrorMessage message={ `${errors.email.message}` } />
            )
          }
        </div>
        
        {/* Message Input  */}
        <div>
          <label className={styles.label} htmlFor="message">Mensaje</label>
          <textarea
            {...register('message')}
            id='message'
            className={`${styles.input} ${styles.message} ${inter.className} ${errors.message && styles.error}`}
            placeholder='Escribe tu mensaje'>
          </textarea>
          {
            errors.message && (
              <ErrorMessage message={ `${errors.message.message}` } />
            )
          }
        </div>

        {/* Submit Button  */}
        <div>
          <button
            disabled={!isPageLoaded || showMessage}
            type='submit'
            className={`${styles.button} ${inter.className}`}
          >
            Enviar mi mensaje
          </button>
        </div>

      </form>
      {
        showMessage && (
          <SuccessMessage />
        )
      }
    </SectionWrapper>
  )
}