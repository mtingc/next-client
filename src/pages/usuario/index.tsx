import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserAddIcon, PlusIcon, BanIcon } from '@heroicons/react/solid';

const Usuarios = () => {
  const [usersList, setUsersList] = useState<TUser[]>([]);

  useEffect(() => {
    window
      .fetch('/api/user')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setUsersList(data);
      });
  }, []);

  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold">Usuarios</h1>

      <div className="flex justify-end py-4">
        <button className="flex items-center bg-green-400 hover:bg-green-600 text-white font-bold text-sm py-2 px-4 rounded-full transition duration-700 ease-in-out">
          <UserAddIcon className="mr-2 h-4" />
          Agregar usuario
        </button>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {usersList.map((user) => (
          <div
            className={
              'flex items-center justify-between px-6 py-2 bg-gray-100 rounded-lg shadow-sm ' +
              (user.active ? '' : 'opacity-60')
            }
            key={user.id}
          >
            <Link href={`/usuario/${user.id}`}>
              <a>{user.job.employeeNumber}</a>
            </Link>
            <p>
              {user.name} {user.lastname}
            </p>
            <p>{user.email}</p>
            {user.active ? (
              <button className="py-2 px-4 text-white bg-red-300 hover:bg-red-400 rounded-full transition duration-700 ease-in-out">
                <BanIcon className="h-4" />
              </button>
            ) : (
              <button className="py-2 px-4 text-white bg-green-400 hover:bg-green-500 rounded-full transition duration-700 ease-in-out">
                <PlusIcon className="h-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end py-4">
        <span className="flex items-center text-green-400 font-medium text-sm py-2 px-4 rounded-full transition duration-700 ease-in-out">
          Activos 1
        </span>
        <span className="flex items-center text-red-400 font-medium text-sm py-2 px-4 rounded-full transition duration-700 ease-in-out">
          Inactivos 1
        </span>
      </div>
    </>
  );
};

export default Usuarios;
