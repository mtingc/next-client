import Layout from '../components/Layout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { gql, useMutation } from '@apollo/client'
import { Toast } from '../components/Toast'
import { useRouter } from 'next/router'

const AUTH_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      status
      message
      token
    }
  }
`;

const Login = () => {

  const [ login ] = useMutation(AUTH_USER)
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
                .email('El correo no es valido')
                .required('El correo es obligatorio.'),
      password: Yup.string()
                .required('La contraseña es obligatoria.')
    }),
    onSubmit: async values => {
      const {
        email,
        password
      } = values
      const { data } = await login({
        variables: {
          email,
          password
        }
      })
      const { message, status, token } = data.login
      if(!status) {
        return Toast(message, 'error')
      }
      if(status){
        localStorage.setItem('token', token)
        router.push('/')
        return Toast(`Bienvenido ${email}`, 'success')
      }
    }
  })

  return (
    <>
      <Layout>
        <h1 className='text-center text-2xl text-white font-light'>
          Login
        </h1>
        <div className='flex justify-center mt-5'>
          <div className='w-full max-w-sm'>
            <form className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
                  onSubmit={formik.handleSubmit}>
              
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                  Correo
                </label>
                <input 
                  className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline '+( formik.touched.email && formik.errors.email ? 'border-red-500' : '')}
                  id='email'
                  type='email'
                  placeholder='Correo del usuario'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                { formik.touched.email && formik.errors.email ? (
                  <p className='text-red-500 text-xs italic'>{formik.errors.email}</p>
                ) : null }
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                  Contraseña
                </label>
                <input 
                  className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline '+( formik.touched.password && formik.errors.password ? 'border-red-500' : '')}
                  id='password'
                  type='password'
                  placeholder='Contraseña del usuario'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                { formik.touched.password && formik.errors.password ? (
                  <p className='text-red-500 text-xs italic'>{formik.errors.password}</p>
                ) : null }
              </div>

              <input
                type='submit'
                className='bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900'
                value='Ingresar'
              />
              
            </form>
          </div>

        </div>
      </Layout>
    </>
  );
};

export default Login;