let name = document.getElementById("name");
let username = document.getElementById("username");
let submit = document.getElementById("submit");
let warn = document.getElementById("warn");

submit.addEventListener('click',async ()=>{
    let nameValue = name.value;
    let usernameValue = username.value; 
    if(nameValue == ''){
        warn.innerHTML = "*Please enter your for login"
    }else{
        localStorage.setItem("name",`${nameValue}`)
        localStorage.setItem("username",`${username.value}`)
        await new Promise(resolve => setTimeout(resolve, 100));

        window.location.href = "home.html";
    } 

})