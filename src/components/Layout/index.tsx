import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';

import Logo from '@assets/img/logo.svg';

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
        <link rel="icon" href={Logo} type="image/x-icon" />
      </Head>

      {router.pathname === '/login' ? (
        children
      ) : (
        <div className="flex bg-white">
          <Sidebar />
          <div className="flex h-screen flex-1 flex-col">
            <Navbar />
            <main className="p-8 overflow-scroll h-full">{children}</main>
          </div>
          {/* <aside className="hidden md:block h-screen w-[300px] shadow-lg"></aside> */}
        </div>
      )}
    </>
  );
};

export default Layout;
