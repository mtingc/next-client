import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {

  const router = useRouter();

  return (
    <aside className='bg-sky-900 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5'>
      <div>
        <p className='text-white text-3xl font-black'>
          ERP Lagalm
        </p>
      </div>
      <nav className='mt-5 list-none'>

        <li className={router.pathname === '/' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href='/'>
            <a className='text-white block'>
              Usuarios
            </a>
          </Link>
        </li>

        <li className={router.pathname === '/permisos' ? 'bg-blue-800 p-2' : 'p-2'}>
          <Link href='/permisos'>
            <a className='text-white block'>
              Permisos
            </a>
          </Link>
        </li>
        
      </nav>
    </aside>
  );
};

export default Sidebar;