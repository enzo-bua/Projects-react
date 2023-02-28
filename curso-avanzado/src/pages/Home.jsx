import React from "react";
import { ListOfCategories } from '../container/PhotoCardWithQuery'
import { ListOfPhotoCards } from '../container/ListOfPhotoCard' 
import { Layout } from "../components/Layout";

const HomePage = ({ id }) => {
  return (
    <Layout title='Tu app de fotos' subtitle='Puedes encontrar fotos bonitas'>
      <ListOfCategories/>
      <ListOfPhotoCards categoryId={id}/>
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
