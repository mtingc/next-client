import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Toast } from '@components/Toast'
import { TYPE_ICON } from '@components/Toast/TYPE_ICON'

const NEW_USER = gql`
  mutation newUser($user: UserInput!) {
    register(user: $user) {
      status
      message
      user {
        id
        name
        lastname
        email
        password
        birthday
        phone
        registerDate
        role
      }
    }
  }
`;

const Registro = () => {

  // Mutation to create new users
  const [ newUser ] = useMutation(NEW_USER);

  const router = useRouter()

  // Form validation
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      phone: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
                .required('El nombre es obligatorio'),
      lastname: Yup.string()
                .required('Los apellidos son obligatorios'),
      email: Yup.string()
                .required('El correo es obligatorio')
                .email('El correo no es valido'),
      password: Yup.string()
                .required('La contraseña es obligatoria')
                .min(6, 'La contraseña debe ser mayor a 6 carácteres'),
      phone: Yup.string()
                .required('Numero obligatorio'),
    }),
    onSubmit: async values => {
      const {
        name,
        lastname,
        email,
        password,
        phone
      } = values;

      try {
        const { data } = await newUser({
          variables: {
            user: {
              name,
              lastname,
              email,
              password,
              birthday: '10',
              phone
            }
          }
        });
        
        const { message, status } = data.register
        
        if(status === false) {
          return Toast(message, TYPE_ICON.ERROR)
        }
        Toast(`El usuario ${name} ${lastname} fue creado correctamente.`, 'success')
        router.push('/login')
      } catch (error) {
        Toast(`${error}`, TYPE_ICON.INFO)
      }
    }
  });

  return (
    <>

      <h1 className='text-center text-2xl text-white font-light'>
        Registro
      </h1>
      <div className='flex justify-center mt-5'>
        <div className='w-full max-w-sm'>
          <form
            className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
            onSubmit={formik.handleSubmit}  
          >
            
            {/* Nombre */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Nombre
              </label>
              <input 
                className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline '+( formik.touched.name && formik.errors.name ? 'border-red-500' : '')}
                id='name'
                type='text'
                placeholder='Nombre del usuario'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              { formik.touched.name && formik.errors.name ? (
                <p className='text-red-500 text-xs italic'>{formik.errors.name}</p>
              ) : null }
            </div>

            {/* Apellidos */} 
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastname'>
                Apellidos
              </label>
              <input 
                className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline '+( formik.touched.lastname && formik.errors.lastname ? 'border-red-500' : '')}
                id='lastname'
                type='text'
                placeholder='Apellidos del usuario'
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              { formik.touched.lastname && formik.errors.lastname ? (
                <p className='text-red-500 text-xs italic'>{formik.errors.lastname}</p>
              ) : null }
            </div>

            {/* Correo */}
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

            {/* Contraseña */}
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

            {/* Teléfono */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>
                Teléfono
              </label>
              <input 
                className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline '+( formik.touched.phone && formik.errors.phone ? 'border-red-500' : '')}
                id='phone'
                type='text'
                placeholder='Teléfono del usuario'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              { formik.touched.phone && formik.errors.phone ? (
                <p className='text-red-500 text-xs italic'>{formik.errors.phone}</p>
              ) : null }
            </div>

            <input
              type='submit'
              className='bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900'
              value='Crear cuenta'
            />
            
          </form>
        </div>

      </div>
    </>
  );
};

export default Registro;