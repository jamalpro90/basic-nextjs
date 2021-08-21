import React from 'react'
import Layout from '../components/layout'
import Image from 'next/image'

export default function Home() {
  return (
      <Layout pageTitle="Home Page">
        <Image src='/jamal.jpg' width={150} height={150} alt='profile' />
        <h1 className="title">Hello Next JS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quasi? Est hic officia ut ducimus minima perspiciatis consequatur numquam consectetur doloribus maxime id dolorum nulla, quo pariatur. Saepe dolores aliquid omnis culpa, odio ea consequuntur facere corporis ipsa quisquam natus quas officiis iure cum quis ipsum? Quaerat ullam, pariatur excepturi porro accusantium nihil suscipit temporibus expedita, natus doloribus esse cupiditate minima illum possimus doloremque id quas in ducimus ipsum quidem tempora itaque! Mollitia excepturi tempore modi cupiditate magni vero saepe iste ut beatae. Facere id obcaecati atque rerum aliquid quidem. Laboriosam ab voluptate reiciendis aliquid sint minus corporis impedit nemo!</p>
      </Layout>
  )
}
