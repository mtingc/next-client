type Props = {
  title: string;
  children: JSX.Element;
};

const DetailUser = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col">
      <h6 className="mt-4 text-sm font-bold"> {title} </h6>
      {children}
    </div>
  );
};

export default DetailUser;
