import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout' 

export default () => {
  return (
    <Layout title='Tus favoritos' subtitle='Puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  )
}
