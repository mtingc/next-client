import { UserCircleIcon } from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <div className="bg-white flex items-center p-4 shadow-md">
      <h6 className="flex-grow text-3xl font-bold">
        Lagalm
      </h6>
      <p className='text-xl font-light text-gray-600 mr-4'>
        Nombre Apellido
      </p>
      <UserCircleIcon className="h-10 text-gray-600"/>
    </div>
  );
}

export default Navbar;
