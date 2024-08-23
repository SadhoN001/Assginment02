function contact(event){
    
    event.preventDefault();
    
    const email=event.target.email.value;
    // console.log(name)

    const skd=document.getElementById("display121")

    // console.log(skd)

    const emailP=document.createElement("p");
    emailP.innerText=`Your E-mail : ${email}\n\nVerified Your Email\nThank You So Much`;

    emailP.classList.add("skd-name")
    console.log(emailP);
    skd.appendChild(emailP); 
}




