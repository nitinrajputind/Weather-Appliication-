/* const ApiKey = `76c2552d9a278c1fe4f5a1d528275b2e`
let city = "noida"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&`

fetch(url).then((Response)=> Response.json())
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}) */