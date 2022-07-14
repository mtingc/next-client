import { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  GetPurchaseSuppliersDocument,
  PurchaseSupplier,
} from '@service/graphql';

import CardUI from '@ui/Card';
import TableUI from '@ui/Table';

const Proveedores = () => {
  const { data } = useQuery(GetPurchaseSuppliersDocument);
  const suppliers = data?.suppliers?.suppliers;
  const [columnsState, setColumnsState] = useState({}); // Estado de la tabla, columns HIDE

  const columns = [
    {
      field: 'name',
      name: 'Nombre',
      hide: true,
    },
    {
      field: 'taxes',
      name: 'RFC',
      hide: true,
    },
    {
      field: 'passed',
      name: 'Aprovado',
      hide: true,
    },
    {
      field: 'date',
      name: 'Fecha de registro',
      hide: false,
    },
  ];
  const rows: object[] = [
    {
      id: '1',
      name: 'Empresa 1',
    },
  ];
  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold">Proveedores</h1>

      <CardUI
        title="Proveedores"
        description="Registro de proveedores"
        addButton="Agregar proveedor"
        linkButton="/proveedors"
        inputSearch="proveedores "
      >
        <TableUI columns={columns} rows={rows} />
      </CardUI>

      {/* <div className="overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Proveedor
              </th>
              <th scope="col" className="px-6 py-3">
                RFC
              </th>
              <th scope="col" className="px-6 py-3">
                Correo
              </th>
              <th scope="col" className="px-6 py-3">
                Dirección
              </th>
              <th scope="col" className="px-6 py-3">
                Aprobado
              </th>
              <th scope="col" className="px-6 py-3">
                Clasificación
              </th>
            </tr>
          </thead>
          {suppliers?.map(
            ({
              id,
              name,
              taxes,
              infoContact,
              address,
              passed,
              classification,
            }) => {
              return (
                <tbody key={id}>
                  <tr className="bg-white">
                    <th
                      scope="row"
                      className="text-md px-6 py-4 font-bold hover:text-primary whitespace-nowrap transition-all duration-300"
                    >
                      <Link href={`proveedores/${id}`}>
                        <a>{name}</a>
                      </Link>
                    </th>
                    <td className="px-6 py-4">
                      {' '}
                      {taxes?.type === 'INDIRECTO' ? 'Indirecto' : taxes?.rfc}
                    </td>
                    <td className="px-6 py-4">{infoContact?.email}</td>
                    <td className="px-6 py-4">
                      {' '}
                      {address?.street} #{address?.number?.exterior},
                      {address?.colony},{address?.municipality}
                    </td>
                    <td
                      className={
                        (passed ? 'text-green-400' : 'text-red-400') +
                        ' font-bold px-6 py-4 tracking-wider'
                      }
                    >
                      {' '}
                      {passed ? 'SI' : 'NO'}{' '}
                    </td>
                    <td
                      className={
                        (classification === 'A'
                          ? 'bg-green-400'
                          : classification === 'B'
                          ? 'bg-yellow-400'
                          : classification === 'C'
                          ? 'bg-red-400'
                          : 'bg-gray-200') + ' px-6 py-4 text-white text-xl'
                      }
                    >
                      {classification}
                    </td>
                  </tr>
                </tbody>
              );
            }
          )}
        </table>
      </div> */}
    </>
  );
};

export default Proveedores;
