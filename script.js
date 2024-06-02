var spanel=document.createElement("div")
spanel.innerText="hello Welcome"
spanel.addEventListener("mouseenter",()=>{
    spanel.style.color="darkblue"
 })
 spanel.addEventListener("mouseout",()=>{
    spanel.style.color="black"
 })
 var promtel=document.createElement("div")
 var data=prompt("Enter you Name")
 promtel.innerHTML=data
 document.body.append(spanel)
 document.body.append(promtel)

