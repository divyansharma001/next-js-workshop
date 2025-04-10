import React, { useEffect } from 'react'
import { useState } from 'react'

const Usercard = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000')
            .then(response => response.json())
            .then(data => {
                setUser(data)
                setLoading(false)
            })
            .catch(error => console.error('Error fetching user:', error))
    }, [])

  return (
    
    <div className='card'>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Contact: {user.contact}</p>
                <p>City: {user.address.city}</p>
                <p>State: {user.address.state}</p>
                <p>Country: {user.address.country}</p>
                <p>Pincode: {user.address.pincode}</p>
            </div>
        )}
    </div>  
  )
}

export default Usercard