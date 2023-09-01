"use client"
import { useEffect, useState } from "react"

const PRICE_PER_ITEM = 5;

function UseStateMistake() {
  const [counter, setCounter] = useState(0);

  const [user, setUser] = useState({ name: "", city: "", age: 50 });
  // console.log(user);

  const [form, setFrom] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    zipCode: "",
  })
  //console.log(form);

  const [quantity, setQuantity] = useState(1);
  // const [totalPrice, setTotalPrice]=useState(0);
  const totalPrice = quantity * PRICE_PER_ITEM;
  //console.log(totalPrice)

  // Component rendering
  console.log("Component rendering...");
  const [price, setPrice] =useState({
    number:100,
    totalPrice:true,
  });


  const handleClick = () => {
    setCounter((prov) => prov + 1);
    setCounter((prov) => prov + 1);
    setCounter((prov) => prov + 1);
  }

  const handleChange = (e) => {
    setUser((provInput) => {
      return {
        ...provInput,
        name: e.target.value,
      };
    })
  }
  const handleFormChange = (e) => {
    setFrom(prevFrom => ({
      ...prevFrom,
      [e.target.name]: e.target.value,
    })
    )
  }
  const handleAddCard = () => {
    setQuantity(quantity + 1);
  }
  // useEffect(()=>{
  //   setTotalPrice(quantity * PRICE_PER_ITEM);
  // }, [quantity]);

  const handleClickMe = () => {
    setPrice({
      number:100,
      totalPrice:true,
    })
  }
  useEffect(()=>{

  }, [price.number])

  return (
    <div>
      <p className="ml-10 mt-10 text-3xl">Counter:{counter}</p>
      <button onClick={handleClick} className="bg-blue-500 px-4 py-2 text-white rounded mb-10 ml-10 text-lg">submit</button>

      <form>
        <input type="text" onChange={handleChange} placeholder="Your User Name please" className="border-2 border-rose-600 ml-10 text-lg" />
      </form>

      <form action="" className="flex flex-col gap-y-2">
        <input onChange={handleFormChange} type="text" name="firstName" placeholder="first name" className="px-4 py-2 border-2 border-green-400 mt-4" />
        <input onChange={handleFormChange} type="text" name="lastName" placeholder="last name" className="px-4 py-2 border-2 border-green-400 mt-4" />
        <input onChange={handleFormChange} type="text" name="address" placeholder="address" className="px-4 py-2 border-2 border-green-400 mt-4" />
        <input onChange={handleFormChange} type="email" name="email" placeholder="email" className="px-4 py-2 border-2 border-green-400 mt-4" />
        <input onChange={handleFormChange} type="password" name="password" placeholder="password" className="px-4 py-2 border-2 border-green-400 mt-4" />
        <input onChange={handleFormChange} type="number" name="zipCode" placeholder="zip code" className="px-4 py-2 border-2 border-green-400 mt-4" />
        <button className="bg-blue-500 px-4 py-2 text-white rounded mb-10 text-lg">Submit</button>
      </form>

      <button onClick={handleAddCard} className="bg-blue-500 px-4 py-2 text-white rounded ml-10 mt-4  text-lg">Add-Card</button>
      <p className="ml-10 mt-4 text-3xl">Total Price: {totalPrice}</p>

      <button onClick={handleClickMe} className="bg-blue-500 px-4 py-2 text-white rounded ml-10 mt-4  text-lg">Click Me</button>

    </div>
  )
}

export default UseStateMistake