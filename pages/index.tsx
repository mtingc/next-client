import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout'

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
    <Layout>
      <h1 className='text-2xl text-gray-800 font-light'>Usuarios</h1>
      {userList.map((user) => (
        <div key={user.id}> {user.name} {user.lastname} </div>
      ))}
    </Layout>
  );
}

export default Home;