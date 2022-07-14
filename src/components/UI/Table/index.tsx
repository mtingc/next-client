import TableHead from '@ui/Table/TableHead';
import TableRow from '@ui/Table/TableRow';

import { IColumns } from '@interfaces/columns.interface';

const TableUI = ({
  columns,
  rows,
}: {
  columns: IColumns[];
  rows: object[];
}) => {
  return (
    <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
      <thead>
        <tr className="text-left bg-primary/20 text-gray-600">
          <th className="py-2 px-3 sticky top-0 border-b border-primary/60">
            <label className="inline-flex justify-between items-center hover:bg-primary/50 px-2 py-2 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox focus:outline-none focus:shadow-outline"
              />
            </label>
          </th>
          {columns.map(({ field, name, hide }, index) => {
            return hide ? <TableHead key={index} columns={name} /> : null;
          })}
        </tr>
      </thead>
      {rows.length !== 0 ? (
        <tbody>
          {rows.map((rows, index) => {
            const keys = Object.keys(rows);
            const row = Object.values(rows);
            const filterColumns = columns.map(({ field, hide }) => {
              return hide ? field : null;
            });
            return <TableRow key={index} row={row} />;
          })}
        </tbody>
      ) : (
        <div>No hay elementos</div>
      )}
    </table>
  );
};

export default TableUI;
