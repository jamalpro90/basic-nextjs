import React from 'react'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'

export default function UserDetail({user}) {
  const router = useRouter();
  
  return (
    <Layout pageTitle="User Detail Page">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();
  const paths = dataUsers.map(user => ({
    params: {
      id: user.id + '',
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {id} = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();

  return {
    props: {
      user
    }
  }
}
