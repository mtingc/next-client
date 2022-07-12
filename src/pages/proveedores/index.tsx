import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GetPurchaseSuppliersDocument } from '@service/graphql';

const Proveedores = () => {
  const { data } = useQuery(GetPurchaseSuppliersDocument);
  const suppliers = data?.suppliers?.suppliers;
  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold">Proveedores</h1>

      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-10">
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
      </div>
    </>
  );
};

export default Proveedores;
