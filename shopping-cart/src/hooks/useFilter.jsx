import { useContext } from "react"
import { FilterContext } from "../context/filter"
export function useFilter () {

  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && // precio > que el q tenemos en el estado y
        (
          filters.category === 'all' || // si es all, lo mostramos, si no mostramos los q tenga el estado
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, filters, setFilters }
}