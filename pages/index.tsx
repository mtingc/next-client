import React, { useEffect, useState } from 'react';

const Home = () => {

  const [userList, setUserList] = useState<TUser[]>([])

  useEffect(() => {
    window
      .fetch('/api/user')
      .then(response => response.json())
      .then(({ data, length }) => {
        setUserList(data)
      })
  }, [])

  return (
    <>
      <h1 className='text-2xl text-gray-800 font-light'>Usuarios</h1>
      {userList.map((user) => (
        <div key={user.id}>
          <p>{user.job.employeeNumber}</p>
          <p>{user.name} {user.lastname}</p>
          <p>{user.email}</p>
          <p>{user.birthday}</p>
          <p>{user.job.title}</p>
          <br/>
        </div>
      ))}
    </>
  );
}

export default Home;