import React from 'react'
import Layout from "../components/layout";

export default function blog({dataBlog}) {
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map(blog => (
        <div key={blog.id}>
          <ul>
            <li>{blog.title}</li>
            <li>{blog.body}</li>
          </ul>
          <hr />
        </div>
      ))}
    </Layout>
  )
}

// cocok untuk API yd dinamis seperti website blog yg punya data yg berubah-ubah
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataBlog = await response.json()
  
  return {
    props: {
      dataBlog
    }
  }
}
