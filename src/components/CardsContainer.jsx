import { useContext } from 'react'
import {ProductsContext} from '../Context/ProductsContextProvider'
import { TotalContext } from '../Context/TotalContextProvider'

const CardsContainer = () => {

    const productos = useContext(ProductsContext)
    const {total, setTotal} = useContext(TotalContext)
    
    return (
        <div className="cardContainer">
            {
                productos.map(pro => {
                    return (
                        <div className="card" key={pro.id}>
                            <img src={pro.images[0]} alt="imagen de producto" className="card__img" />
                            <p className="card__name">{pro.title}</p>
                            <div className='priceContainer'>
                                <p className="price">${pro.price}</p>
                                <button onClick={()=>setTotal(total + pro.price)} >Add to cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardsContainer