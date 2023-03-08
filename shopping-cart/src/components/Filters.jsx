import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'

import './Filters.css'
export function Filters() {
  const { filters, setFilters } = useFilter()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()


  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Pricio minimo</label>
        <input 
          type="range" 
          id={minPriceFilterId}
          min="0" 
          max="1000" 
          onChange={handleChangeMinPrice} 
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
