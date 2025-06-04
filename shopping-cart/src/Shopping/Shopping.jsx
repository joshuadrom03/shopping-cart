
//import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import './shopping.css'
import { useNavigate } from 'react-router-dom';

const Shopping = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res => {
                setItems(res);
                setLoading(false)
            })
            .catch((error) => console.error("Error fetching data:", error));

    }, [])

    const addTocart = (item) => {
        setCart((prevCart) => [...prevCart, item])
    }

    const goToCart = () => {
        navigate("/cart",{ state: {cart}});
    }

    
    return (
        <div>
      <h2 style={{display: "flex", justifyContent: "center"}}>All items</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px",justifyContent: "center" }}> 
          {items.map((items) => (
            <div
                key={items.id}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
                border: "1px solid black",
                borderRadius: "5px",
                maxWidth: "350px",
                background: "rgba(17, 24 ,39, 0.5)",
                flexWrap: "wrap",
                alignItems: "center"
                
                
              }}
            >
              <h3>{items.title}</h3>
              <img src= {items.image} className='shop-items' />
              <p>Price: {items.price} $</p>
              <p> {items.description}</p>
              <button className='add-to-cart'
               onClick={() => addTocart(items)
               }
               >Add to cart</button>
            </div>
          ))}
        </div>
        
      )}
        <button onClick={goToCart}>Go to cart</button>
    </div>
    
    )
}



export default Shopping
