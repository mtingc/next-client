import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  HomeIcon,
  CalendarIcon,
  UsersIcon,
  CogIcon,
  LogoutIcon,
} from '@heroicons/react/solid';

const Sidebar = ({ className }: { className: string }) => {
  const router = useRouter();

  return (
    <aside className={`${className} p-5 bg-sky-900`}>
      <ul className="mt-5 list-none">
        <h6 className="text-gray-200 font-bold mt-8 mb-2">Acciones</h6>
        <li
          className={
            router.pathname === '/' ? 'bg-blue-800 p-2 rounded-md' : 'p-2'
          }
        >
          <Link href="/">
            <a className="flex text-white p-4">
              <HomeIcon className="mr-4 h-6" />
              Inicio
            </a>
          </Link>
        </li>

        <li
          className={
            router.pathname === '/permisos'
              ? 'bg-blue-800 p-2 rounded-md'
              : 'p-2'
          }
        >
          <Link href="/permisos">
            <a className="flex text-white p-4">
              <CalendarIcon className="mr-4 h-6" />
              Permisos
            </a>
          </Link>
        </li>

        <li
          className={
            router.pathname === '/usuario'
              ? 'bg-blue-800 p-2 rounded-md'
              : 'p-2'
          }
        >
          <Link href="/usuario">
            <a className="flex text-white p-4">
              <UsersIcon className="mr-4 h-6" />
              Usuarios
            </a>
          </Link>
        </li>

        <h6 className="text-gray-200 font-bold mt-8 mb-2">Configuración</h6>
        <li
          className={
            router.pathname === '/perfil' ? 'bg-blue-800 p-2 rounded-md' : 'p-2'
          }
        >
          <Link href="/perfil">
            <a className="flex text-white p-4">
              <CogIcon className="mr-4 h-6" />
              Perfil
            </a>
          </Link>
        </li>
      </ul>

      <Link href="/sesion">
        <a className="flex absolute inset-x-0 bottom-0 mx-4 mb-4 p-4 text-white bg-red-500 rounded-md">
          <LogoutIcon className="mr-4 h-6" />
          Cerrar Sesión
        </a>
      </Link>
    </aside>
  );
};

export default Sidebar;
