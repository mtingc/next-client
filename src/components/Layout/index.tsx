import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Lagalm</title>
        <meta
          name="description"
          content="Lagalm, soluciones integrales en inyección de plástico."
        />
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="stylessheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>

      {router.pathname === '/login' || router.pathname === '/registro' ? (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
          <div>{children}</div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="flex min-h-screen">
            <Sidebar className="hidden sm:block relative sm:w-1/4 xl:w-1/6 max-h-screen" />
            <main className="sm:w-3/4 xl:w-5/6 sm:min-h-screen p-5">
              {children}
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
