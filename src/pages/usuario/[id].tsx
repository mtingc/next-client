import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import DetailUser from '@components/DetailUser';

const Usuario = () => {
  const [user, setUser] = useState<TUser>();
  const urlImage = user?.image;
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    window
      .fetch(`/api/user/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div className="container bg-white rounded-md shadow p-5">
      <div className="flex justify-center mb-5">
        <Image
          src={`${urlImage}`}
          className="rounded-md"
          height={200}
          width={200}
        />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <DetailUser title="No. Empleado">
          <p> {user?.job.employeeNumber} </p>
        </DetailUser>

        <DetailUser title="Nombre">
          <p>
            {' '}
            {user?.name} {user?.lastname}{' '}
          </p>
        </DetailUser>

        <DetailUser title="Correo">
          <p> {user?.email} </p>
        </DetailUser>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <DetailUser title="Telefono">
          <p> {user?.phone} </p>
        </DetailUser>

        <DetailUser title="Fecha de nacimiento">
          <p> {user?.birthday} </p>
        </DetailUser>

        <DetailUser title="CURP">
          <p> {user?.curp} </p>
        </DetailUser>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <DetailUser title="Puesto">
          <p> {user?.job.title} </p>
        </DetailUser>

        <DetailUser title="Cargo">
          <p> {user?.job.position} </p>
        </DetailUser>
      </div>

      <DetailUser title="Descripción">
        <p> {user?.job.description} </p>
      </DetailUser>
    </div>
  );
};

export default Usuario;
