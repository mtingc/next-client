const TableRow = ({ row }: { row?: string[] }) => {
  return (
    <tr className="text-gray-500 hover:bg-primary/10 transition-all duration-300">
      <td className="border-dashed border-t border-primary/60 px-3">
        <label className="text-teal-500 inline-flex justify-between items-center hover:bg-primary/50 px-2 py-2 rounded-lg cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline"
          />
        </label>
      </td>
      {row?.map((value, index) => {
        return (
          <td key={index} className="border-dashed border-t border-primary/60">
            <span className="px-6 py-3 flex items-center">{value}</span>
          </td>
        );
      })}
    </tr>
  );
};
export default TableRow;
