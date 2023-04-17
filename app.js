 //  start weather box 2 ..
 // const apikey = "567973fdab5e69ef7945f272ce1591d2";
 const apiurl = "https://api.openweathermap.org/data/2.5/weather?&appid=567973fdab5e69ef7945f272ce1591d2&units=metric&q=";
 const searchbox= document.querySelector(".search input");
 const searchbtn= document.querySelector(".search button");
 const weatherImg= document.querySelector(".weather_img");

//................start function weather........................
 async function checkWeather(city){
     const response = await fetch(apiurl+city);
     var data =await response.json();          //diaplay as json formate
     console.log(data);                        //display data
     document.querySelector(".city").innerHTML=data.name;
     document.querySelector(".temp").innerHTML=Math.round(data.main.temp); //لتقريب الرقم الى عدد صحيح
     document.querySelector(".status").innerHTML=data.weather[0].description;
    
    //  ...........check for image status...........
     if(data.weather[0].main == "Clouds"){
        weatherImg.src="image/clouds.png";
     }
     else if(data.weather[0].main == "Clear"){
        weatherImg.src="image/clear.png";
     }
     else if(data.weather[0].main == "Rain"){
        weatherImg.src="image/rain.png";
     }
     else if(data.weather[0].main == "Drizzle"){
        weatherImg.src="image/drizzle.png";
     }
     else if(data.weather[0].main == "Mist"){
        weatherImg.src="image/mist.png";
     }
     else if(data.weather[0].main == "Snow"){
        weatherImg.src="image/snow.png";
     }
 }
 //............................end function weather.............................

 //call the weather function.....
 searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
 })

//end weather box 2 ..



//start time box 1 .. 
//end time box 1 .. 



