import { useState } from 'react'
// import './addRestaurant.css'
import axios from 'axios'
export const Addrestaurants = ()=>{
    const [form, setForm] = useState({
        name: "",
        cuisine: [],
        costForTwo: "",
        minOrder: "",
        deliveryTime: "",
        payment_methods: {
            card: "false",
            cash: "false",
            upi: "false"
        },
        rating: "",
        votes: "",
        reviews: "",
        src: ""
    });
    const handleForm = (e)=>{
        const {id, value} = e.target;
        if(id==="cuisine"){
            const val = value.split(', ')
            setForm({...form, [id]:val})
        }
       else if(id==="card"||
                id==="cash" || id==="upi"){
            if(value==="on"){
                setForm({...form, payment_methods:{
                    [id]:true
                }})
            }
            else{
                setForm({...form, payment_methods:{
                    [id]:false
                }})
            }
        }
        else{
            setForm({...form, [id]:value})
        }
    }
    console.log(form)
    const submitForm = ()=>{
        axios.post('http://localhost:3001/get-restaurants',{
            name: form.name,
            cuisine: form.cuisine,
            costForTwo: form.costForTwo,
            minOrder: form.minOrder,
            deliveryTime: form.deliveryTime,
            payment_methods: form.payment_methods,
            rating: form.rating,
            votes: form.votes,
            reviews: form.reviews,
            src: form.src
        }).then((res)=>{alert('successfully submitted')})
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Restaurant Name</label>
                <input onChange={(e)=>handleForm(e)} type="text" name="" id="name" />

                <label htmlFor="">Cuisine</label>
                <input type="text" name="" id="cuisine" onChange={(e)=>handleForm(e)} placeholder="type multiple cuisine seperated by ', ' 1 comma and space "/>
                
                <label htmlFor="">cost for two</label>
                <input type="Number" name="" id="costForTwo" onChange={(e)=>handleForm(e)} />

                <label htmlFor="">Min Order</label>
                <input type="Number" name="" id="minOrder" onChange={(e)=>handleForm(e)} />

                <label htmlFor="">Delivery Time</label>
                <input type="Number" name="" id="deliveryTime" onChange={(e)=>handleForm(e)} />

                <label htmlFor="">Payment Mehods</label>
               <div style={{marginBottom:'20px'}}>
                    <label htmlFor="">Card</label>
                    <input type="checkbox" name="" id="card" onChange={(e)=>handleForm(e)} />
                    <label htmlFor=""> Cash</label>
                    <input type="checkbox" name="" id="cash" onChange={(e)=>handleForm(e)} />
                    <label htmlFor=""> Upi</label>
                    <input type="checkbox" name="" id="upi" onChange={(e)=>handleForm(e)} />
               </div>

                <label htmlFor="">Rating</label>
                <input type="text" name="" id="rating" onChange={(e)=>handleForm(e)} />

                <label htmlFor="">votes</label>
                <input type="text" name="" id="votes" onChange={(e)=>handleForm(e)} />

                <label htmlFor="">reviews</label>
                <input type="text" name="" id="reviews" onChange={(e)=>handleForm(e)} />

                <label htmlFor="">Image</label>
                <input type="text" id="src" onChange={(e)=>handleForm(e)} />

                <button onClick={()=>{submitForm()}}>Submit</button>
            </form>
            

        </div>
    )
}