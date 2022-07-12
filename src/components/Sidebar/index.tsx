import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '@assets/img/logo.svg';

import {
  HomeIcon,
  OfficeBuildingIcon,
  ArchiveIcon,
  CogIcon,
} from '@heroicons/react/solid';
import ToolTip from './ToolTip';

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
      <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
        <Image src={Logo} height={50} width={50} />
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <Link href="/">
          <a
            className={
              (router.pathname === '/' ? 'text-secondary' : 'text-gray-300') +
              ' group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500'
            }
          >
            <HomeIcon
              className={
                (router.pathname === '/' ? 'drop-shadow-lg' : '') + ' h-8'
              }
            />
            <ToolTip>Inicio</ToolTip>
          </a>
        </Link>
        <Link href="/proveedores">
          <a
            className={
              (router.pathname === '/proveedores' ||
              router.pathname === '/proveedores/[id]'
                ? 'text-secondary'
                : 'text-gray-300') +
              ' group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500'
            }
          >
            <OfficeBuildingIcon
              className={
                (router.pathname === '/proveedores' ||
                router.pathname === '/proveedores/[id]'
                  ? 'drop-shadow-lg'
                  : '') + ' h-8'
              }
            />
            <ToolTip>Agregar provedores</ToolTip>
          </a>
        </Link>
        <Link href="/proveedores/productos">
          <a
            className={
              (router.pathname === '/proveedores/productos' ||
              router.pathname === '/proveedores/productos/[id]'
                ? 'text-secondary'
                : 'text-gray-300') +
              ' group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500'
            }
          >
            <ArchiveIcon
              className={
                (router.pathname === '/proveedores/productos' ||
                router.pathname === '/proveedores/productos/[id]'
                  ? 'drop-shadow-lg'
                  : '') + ' h-8'
              }
            />
            <ToolTip>Administrar los productos de un proveedor</ToolTip>
          </a>
        </Link>
      </nav>
      <div className="flex flex-col items-center gap-y-4 py-10">
        <Link href="/perfil">
          <a
            className={
              (router.pathname === '/perfil'
                ? 'text-secondary'
                : 'text-gray-300') +
              ' group relative bg-gray-50 hover:bg-gray-200 rounded-xl p-2 transition-all duration-500'
            }
          >
            <CogIcon
              className={
                (router.pathname === '/perfil' ? 'drop-shadow-lg' : '') + ' h-8'
              }
            />
            <ToolTip>Configuraciones</ToolTip>
          </a>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
