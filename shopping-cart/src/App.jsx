import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { useFilter } from './hooks/useFilter'
import { Cart } from './components/Cart'
import { CartProvider } from './context/Cart'


function App() {

  const { filterProducts } = useFilter()

  const filtrado = filterProducts(initialProducts)
  
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filtrado}/>
      <Footer/>      
    </CartProvider>
  )
}

export default App