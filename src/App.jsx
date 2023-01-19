import CardsContainer from "./components/CardsContainer"
import { ProductsContextProvider } from "./Context/ProductsContextProvider"
import TotalContextProvider from "./Context/TotalContextProvider"
import Cart from "./components/Cart"

function App() {
  return (
    <ProductsContextProvider>
      <TotalContextProvider>
        <div className="App">
          <CardsContainer />
          <Cart />
        </div>
      </TotalContextProvider>
    </ProductsContextProvider>

  )
}

export default App
