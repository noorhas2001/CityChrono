 // const apikey = "567973fdab5e69ef7945f272ce1591d2";
//  document.querySelector("main").innerHTML = mainHTML;
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&appid=567973fdab5e69ef7945f272ce1591d2&units=metric&q=";

const searchBtn = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const weatherImg= document.querySelector(".weather_img");

 searchBtn.addEventListener("submit", async (e) => {
   e.preventDefault()
   // const data = await fetchData(searchInput.value)
   Search(searchInput.value);
   console.log(searchInput.value)

})

async function Search(query) {
   const response = await fetch(apiurl+query)
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

     checkDateTime(data["coord"]["lon"],data["coord"]["lat"]);
} 


async function checkDateTime(lon,lat){
     const response = await fetch('https://api.ipgeolocation.io/timezone?apiKey=9ee80e5230a846c590b7559c62101142&lat='+lat +'&long='+lon);
     var data =await response.json();          //diaplay as json formate
  
     console.log(data);    
  
     const myArray = data["date_time_txt"].split(" ");
     document.querySelector(".day").innerHTML= myArray[0];
     document.querySelector(".date_month").innerHTML= myArray[1];
     document.querySelector(".date_num").innerHTML= myArray[2];
     
     // console.log(myArray[0])
     // console.log(myArray[1])
  
     const myArray2 = data["time_12"].split(" ");
     document.querySelector(".statusTime").innerHTML= myArray2[1];
     const myArray3 = data["time_12"].split(":");
     document.querySelector(".currentTimeInHour").innerHTML= myArray3[0]+':';
     document.querySelector(".currentTimeInMin").innerHTML= myArray3[1];
     // console.log(myArray2[1])
  
    //change time depend on time
     let time1 = data["date"]+' 20:00';
     let time2 = data["date"]+' 07:00';
    //night
     if (data["date_time"] > time1 || data["date_time"] < time2) {
      document.querySelector(".timpsec").style.background = "#071420";
      document.querySelector(".time").style.background = "#546a7e59";
      document.querySelector(".time").style.boxShadow = "1px 1px 2px 2px #00000073";
      document.querySelector(".weather").style.background = "#546a7e59";
      document.querySelector(".weather").style.boxShadow = "1px 1px 2px 2px #00000073";
      document.querySelector(".iconOfTime").style.color = "rgba(229, 236, 233, 0.4)";
      document.querySelector(".verticalLine").style.background = "rgba(229, 236, 233, 0.4)";
      document.querySelector(".city").style.color = "#ffff";
      document.querySelector(".currentTimeInHour").style.color = "#ffff";
      document.querySelector(".currentTimeInMin").style.color = "#ffff";
      document.querySelector(".statusTime").style.color = "rgba(229, 236, 233, 0.6)";
      document.querySelector(".day").style.color = "#ffff";
      document.querySelector(".date_month").style.color = "#ffff";
      document.querySelector(".date_num").style.color = "#ffff";
      document.querySelector(".temp").style.color= "#ffff";
      document.querySelector(".cel").style.color = "#ffff";
      document.querySelector(".status").style.color = "#ffff";
      
        
       //morning
     } else {  
      document.querySelector(".timpsec").style.background = "#BDCDD6";
      document.querySelector(".time").style.background = "#93BFCF";
      document.querySelector(".time").style.boxShadow = "1px 1px 2px 2px #b9b7b7";
      document.querySelector(".weather").style.background = "#93BFCF";
      document.querySelector(".weather").style.boxShadow = "1px 1px 2px 2px #b9b7b7";
      document.querySelector(".iconOfTime").style.color = "rgba(229, 236, 233, 0.4)";
      document.querySelector(".verticalLine").style.background = "rgba(229, 236, 233, 0.4)";
      document.querySelector(".city").style.color = "#062232";
      document.querySelector(".currentTimeInHour").style.color = "#062232";
      document.querySelector(".currentTimeInMin").style.color = "#062232";
      document.querySelector(".statusTime").style.color = "rgba(6, 34, 50, 0.6)";
      document.querySelector(".day").style.color = "#062232";
      document.querySelector(".date_month").style.color = "#062232";
      document.querySelector(".date_num").style.color = "#062232";
      document.querySelector(".temp").style.color= "#062232";
      document.querySelector(".cel").style.color = "#062232";
      document.querySelector(".status").style.color = "#062232";
        
     }
  }
