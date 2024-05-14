
import { Home } from './Components/Pages/Home/Home'
import { Header } from './Components/Layout/Header/Header'
import { Main } from './Components/Layout/Main/Main'
import { Footer } from './Components/Layout/Footer/Footer'


function App() {


  return (
    <Home>
      <Header >
        <div className='flex justify-around h-full items-center bg-cyan-700'> 
          <h1 className=' text-8xl text-white border-b-4 border-y-cyan-400'>Espitia Shop</h1>
          <div className='flex w-1/4 justify-around items-center' >
            <select className=' w-60 h-12 p-1 rounded-full  indent-2' name="categoris" id=""> 
              <option value="">electronics</option>
              <option value="">jewelery</option>
              <option value="">men's clothing</option>
              <option value="">women's clothing</option>
            </select>
            <button><span class="text-white text-8xl material-symbols-outlined">shopping_cart_checkout</span></button>
          </div>
        </div>
      </Header>
      <Main>

      </Main>
      <Footer>

      </Footer>

    </Home>
  )
}

export default App
