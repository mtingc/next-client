import { useQuery } from '@apollo/client';
import {
  GetPurchaseProductsDocument,
  ProductTypeService,
} from '@service/graphql';
import Link from 'next/link';

const Productos = () => {
  const { data } = useQuery(GetPurchaseProductsDocument);
  const products = data?.products?.products;
  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold">Productos</h1>

      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3">
                Marca
              </th>
              <th scope="col" className="px-6 py-3">
                Auditable
              </th>
              <th scope="col" className="px-6 py-3">
                Proveedor
              </th>
            </tr>
          </thead>
          {products?.map(
            ({
              id,
              name,
              description,
              brand,
              audited,
              supplierId,
              typeService,
            }) => {
              return (
                <tbody key={id}>
                  <tr className="bg-white">
                    <td className="px-6 py-4">
                      {typeService
                        ? `Servicio ${typeService.type}`
                        : 'Producto'}
                    </td>
                    <th
                      scope="row"
                      className="text-md px-6 py-4 font-bold hover:text-primary whitespace-nowrap transition-all duration-300"
                    >
                      <Link href={`productos/${id}`}>
                        <a>{name}</a>
                      </Link>
                    </th>
                    <th
                      scope="row"
                      className="text-md px-6 py-4 font-bold whitespace-nowrap"
                    >
                      {description}
                    </th>
                    <td
                      className={(brand ? '' : 'text-gray-400') + ' px-6 py-4'}
                    >
                      {brand ? brand : 'N/A'}
                    </td>
                    <td
                      className={
                        (audited ? 'text-green-400' : 'text-red-400') +
                        ' font-bold px-6 py-4 tracking-wider'
                      }
                    >
                      {audited ? 'SI' : 'NO'}
                    </td>
                    <td className="px-6 py-4">{supplierId?.name}</td>
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

export default Productos;
