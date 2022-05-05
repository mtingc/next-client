import { useRouter } from 'next/router'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Layout = ({ children, page }) => {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Lagalm - {page}</title>
        <meta
          name="description"
          content="Lagalm, soluciones integrales en inyección de plástico."
        />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel='stylessheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
      </Head>

      {router.pathname === '/login' || router.pathname === '/registro' ? (
        <div className='bg-gray-800 min-h-screen flex flex-col justify-center'>
          <div>
            {children}
          </div>
        </div>
      ) : (
        <div className='min-h-screen'>
          <div className='flex min-h-screen'>
            <Sidebar/>
            <main className='sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5'>
              {children}
            </main>
          </div>
        </div>
      )}

    </>
  );
};

export default Layout;