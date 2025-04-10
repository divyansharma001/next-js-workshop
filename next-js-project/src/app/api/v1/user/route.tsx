import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name: 'Divyansh',
        email: 'connectwithdivyansh@gmail.com',
        contact: '9305441885',
        address: {
            city: 'Delhi',
            state: 'Delhi',
            country: 'India',
            pincode: '110058'
    }
  })
}


//by same way we can make POST, PUT, DELETE, PATCH requests too



// export function POST(request: Request) {
//     const data = request.json();
//     console.log(data);
//     return NextResponse.json({ message: "Data received", data });
// }
// export function PUT(request: Request) {
//     const data = request.json();
//     console.log(data);
//     return NextResponse.json({ message: "Data updated", data });
// }
// export function DELETE(request: Request) {
//     const data = request.json();
//     console.log(data);
//     return NextResponse.json({ message: "Data deleted", data });
// }
// export function PATCH(request: Request) {
//     const data = request.json();
//     console.log(data);
//     return NextResponse.json({ message: "Data patched", data });
// }
