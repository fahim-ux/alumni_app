const login=document.getElementById("login")
const name1=document.getElementById("name")
const email=document.getElementById("mail")
const display=document.getElementById("display")
const like=document.getElementById("like-btn")
const liked=document.getElementById("liked-btn")
const next=document.getElementById("next-btn")
const comment_area=document.getElementById("comment")
const add_comment=document.getElementById("add-comment")

function getsignup()
{
    window.location.assign(`http://127.0.0.1:3000/signup`)
}

function toggle_liked()
{
    like.style.display="none";
    liked.style.display="block";
}
function toggle_like()
{
    liked.style.display="none";
    like.style.display="block";
}



