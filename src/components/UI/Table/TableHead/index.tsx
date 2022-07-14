const TableHead = ({ columns }: { columns: string }) => {
  return (
    <th className="sticky top-0 border-b border-primary/60 px-6 py-2 font-bold tracking-wider uppercase text-xs">
      {columns}
    </th>
  );
};
export default TableHead;
