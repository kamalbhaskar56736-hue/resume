const container = document.querySelector(".container");
const form = document.querySelector("#login");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let users = [];

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("date").value;
    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;
    const address = document.getElementById("address").value;

    if (name=="" || email=="" || password=="" || address=="" || number=="" || dob==""){
        alert("Please fill all fields!");
    }
    else {
        const student = { name, email, dob, number, password, address };
        users.push(student);
        console.log(student);
        
        alert("Login successfully!");
        
        container.style.display = 'none'; 
        
        sigin();
    }
});

function sigin(){
    let para = document.createElement('p');
    para.innerText = "sigin";
    document.body.appendChild(para); 
}
