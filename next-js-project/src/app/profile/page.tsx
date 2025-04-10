export default async function User() {
    const res = await fetch('http://localhost:3000/api/v1/user');  //can connect with database too
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

