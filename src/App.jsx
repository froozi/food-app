import Carts from './components/Category/Category'
import CategoryCarts from './components/CategoryCarts/CategoryCarts'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import NextList from './components/NextList/NextList'


function App() {

  return (
    <div className="container">
      <Header />
      <div className="hero">
        <Hero />
      </div>
      <div className="category">
        <Carts />
      </div>
      <div className="category_carts">
        <CategoryCarts />
      </div>
      <div className="open_next_list">
        <NextList />
      </div>
    </div>
  )
}

export default App
