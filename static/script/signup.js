const email=document.getElementById("email")
const password=document.getElementById("password")


async function login()
{
    user={
        email:email.value,
        password:password.value
    }
    if(!email.value.match( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
    {
        alert("Invalid Email")
        return;
    }
    if(password.value.length<8)
    {
        alert("Password is atleast 8 characters")
        return;
    }
    console.log(user)
    let options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    }
    let response=await fetch("http://localhost:3000/signup",options)
    // let data=await response.json()
    // console.log(data)
    console.log(response)
    console.log(response.url)
    window.location.assign(response.url)
}