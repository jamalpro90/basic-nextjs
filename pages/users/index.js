import React from 'react'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'

export default function User({dataUsers}) {
  const router = useRouter();

  return (
    <Layout pageTitle="User Page">
      <h1 style={{color: 'green'}}>User Page</h1>
      {dataUsers.map(user => (
        <div key={user.id}>
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li style={{listStyle: 'none'}}><button style={{cursor: 'pointer'}} onClick={() => router.push(`/users/${user.id}`)} >Detail</button></li>
          </ul>
          <hr />
        </div>
      ))}
    </Layout>
  )
}

// cocok untuk data yg jarang / tidak berubah - ubah 
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();
  
  return {
    props: {
      dataUsers
    }
  }
}
