import { useQuery } from '@apollo/client';
import { GetRrhhPermissionsDocument } from '@service/graphql';

import CardUI from '@ui/Card';
import TableUI from '@ui/Table';

const RrhhPermisos = () => {
  const { data } = useQuery(GetRrhhPermissionsDocument);
  const permissionsData = data?.permissions?.permissions;

  const permissions = permissionsData?.map(
    ({
      id,
      userId,
      type,
      from,
      to,
      authorization: authorizationPermission,
    }) => {
      const date = `De ${from} a ${to}`;
      const authorization = authorizationPermission
        ? 'Autorizado'
        : 'No autorizado';
      return {
        ID: id,
        Usuario: userId.name,
        Tipo: type,
        Fecha: date,
        Autorizado: authorization,
      };
    }
  ) as object[];

  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold mb-5">
        Listado de permisos
      </h1>

      <CardUI
        title="Permisos"
        description="Registro de permisos"
        inputSearch="permisos "
      >
        <TableUI collection={permissions || [{}]} />
      </CardUI>
    </>
  );
};
export default RrhhPermisos;
