 /* 
 let today= new Date()
console.log(today)
 let date = today.getHours();
 let minutes =today.getMinutes()
 let seconds =today.getSeconds()
 
 let day =  today.getDate()
 let month = today.getMonth()
 let year = today.getFullYear()
 console.log(day + "/" + month + "/" +year)
 
 console.log(date + ":" +  minutes +":"+ seconds)

 */
function updatetime(){
    let today= new Date ();
    
    const hours = document.getElementById("hours");
    const minutes= document.getElementById("minutes");
    const seconds= document.getElementById("seconds");
    
 
 hours.innerText = today.getHours();
 minutes.innerHTML= today.getMinutes();
 seconds.innerText= today.getSeconds();


}

updatetime();
setInterval(updatetime , 1000);

function date() {

    const dateElement = document.getElementById("Date");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    let today = new Date();

    dateElement.innerText = today.getDate();
    month.innerText = today.getMonth() + 1;
    year.innerText = today.getFullYear();
}

date();
