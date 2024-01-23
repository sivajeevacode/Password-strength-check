var input=document.getElementById("password")
var msg=document.getElementById("msg")
var str=document.getElementById("str")
var box=document.querySelector(".box")

input.addEventListener("input",()=>
{
    if(input.value.length>0)
    {
        msg.style.display="block"
    }
    else
    {
        msg.style.display="none"
    }
    if(input.value.length<4) 
    {
        str.innerHTML='weak'
        box.style.borderColor='#ff5925'
        msg.style.color='#ff5925'
    }
    else if(input.value.length>=4 && input.value.length<8)
    {
        str.innerHTML='medium'
        box.style.borderColor='yellow'
        msg.style.color='yellow'
    }
    else if(input.value.length>=8)
    {
        str.innerHTML='strong'
        box.style.borderColor='#26d730'
        msg.style.color='#26d730'
    }

})