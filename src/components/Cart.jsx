import {TotalContext} from "../Context/TotalContextProvider"
import { useContext } from "react"

const Cart = () => {

    const {total, setTotal} = useContext(TotalContext)

    return (
        <div className="cartContainer">
            <div className="cart">
                <p className="cart__text">TOTAL: ${total}</p>
                <button className="cart__btn" onClick={()=>{setTotal(0)}}>Borrar</button>
            </div>
        </div>
    )
}

export default Cart