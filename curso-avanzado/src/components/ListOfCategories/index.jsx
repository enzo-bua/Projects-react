import React, { useEffect, useState } from 'react'
import './index.css'
import { Category } from '../Category'
import { categories } from '../../../api/db.json'


const ListOfCategoriesCoponent = () => {

  const [categ, setCateg] = useState(categories)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const api = ('https://petgran-763xcuqfi.vercel.app/')
    const getCategories = async() => {
      const cat =  await fetch(api)
      const data =  await cat.json() 
      setCateg(data.categories)
      setLoading(false)
    }
    getCategories()
  }, [])


  return (
    <ul className='contenedor-categories'>
    {
      loading ? <li key='loading'><Category/></li> 
        : categ.map(category => 
          <li className='category' key={category.id}><Category {...category} path={`/pet/${category.id}`}/></li> )
    }
  </ul>
  )
}
//no vuelve a renderizar si las props no son diferentes
export const ListOfCategories = React.memo(ListOfCategoriesCoponent)