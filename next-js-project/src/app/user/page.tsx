//first method => Bad way

// @ts-nocheck

// "use client"
// import React, { useEffect, useState } from 'react'

// export default function User(){

//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)

//     useEffect(()=>{
//         setLoading(true)
//         fetch('http://localhost:5000')
//         .then(res => res.json())
//         .then(data => {
//             setData(data)
//             setLoading(false)
//         })
//         .catch(err => {
//             setError(err)
//             setLoading(false)
//         })
//     }, [])


//     return (
//         <div className='user'>
//             <h1>User Page</h1>
//             {loading && <p>Loading...</p>}
//             {error && <p>Error: {error.message}</p>}
//             {data && (
//                 <div>
//                     <h2>User Details</h2>
//                     <p>Name: {data.name}</p>
//                     <p>Email: {data.email}</p>
//                     <p>Contact: {data.contact}</p>
//                     <h3>Address</h3>
//                     <p>City: {data.address.city}</p>
//                     <p>State: {data.address.state}</p>
//                     <p>Country: {data.address.country}</p>
//                     <p>Pincode: {data.address.pincode}</p>
                    
//                 </div>
//             )}
//             <button onClick={() => setData(null)}>Clear Data</button>
//         </div>
//     )
// }




//next-js way

export default async function User() {
    const res = await fetch('http://localhost:5000');
    const data = await res.json();

    await new Promise(r => setTimeout(r, 2000)); // Simulate a delay

    return (
        <div className='user'>
            <h1>User Page</h1>
            <div>
                <h2>User Details</h2>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
                <p>Contact: {data.contact}</p>
                <h3>Address</h3>
                <p>City: {data.address.city}</p>
                <p>State: {data.address.state}</p>
                <p>Country: {data.address.country}</p>
                <p>Pincode: {data.address.pincode}</p>
            </div>
        </div>
    );
}

