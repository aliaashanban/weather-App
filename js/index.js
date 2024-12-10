let searchInput=document.getElementById('subinput');
let searchBtn=document.getElementById('subsrch');
let currentWeather=document.getElementById('current');
let cityName=document.getElementById('cityName');
let display=document.getElementById('display');
let displayNextDays=document.getElementById('displayNextDays')
let apiKey="7b7a0c8aa1f6fec47c92072bf1352c7f";


// searchBtn.addEventListener('click',function(){
//     displayWeather.classList.remove('d-none');
// })
function getWeatherDetails(name,lat,lon,country,state){
    let forecastApiUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7b7a0c8aa1f6fec47c92072bf1352c7f`;
    let weatherApiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b7a0c8aa1f6fec47c92072bf1352c7f`;
   days=[
        'Sunday',
        'Monday',
        'Tuesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    months=[
        'Jan',
        'Feb',
        "Mar",
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        
    ];
    fetch(weatherApiUrl).then(res =>res.json()).then(data=>{
        console.log(data);
        let date =new Date();
        currentWeather.innerHTML=`<div class="card h-100 ">
                <div class="card-body ">
                <div class="card-title" >
                    <div class="day">${days[date.getDay()]}</div>
                    <div class=" date">${date.getDate()},${months[date.getMonth()]},${date.getFullYear()}</div>
                    <br> 
                    </div>
                    <div class="forecast-content">
                      <div class="location fs-1 mt-2 " id="cityName">${name}</div>
                      <div class="degree text-center">
                        <div class="num fs-1 fw-bold">${(data.main.temp - 273.15).toFixed(2)}<sup>o</sup>C</div>
                        <div class="forecast-icon">
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" width="100">
                        </div>	
                  </div>
                  <div class="custom fs-3">${data.weather[0].description}</div>
                  <span class="me-2"><img src="images/icon-umberella.png" class="me-1" alt="">20%</span>
                  <span class="me-2"><img src="images/icon-wind.png" class="me-1"  alt="">18km/h</span>
                  <span class="me-2"><img src="images/icon-compass.png" class="me-1" alt="">East</span>
                </div>
              </div>
                </div>`
                displayNextDays.classList.remove('d-none');

    }).catch(()=>{
        alert('failed to fetch current weather');
    })
    fetch(forecastApiUrl).then(res =>res.json()).then (data =>{
        // console.log(data);
        let nextDays=[];
        let threeDays=data.list.filter(forecast =>{
            let forecastDate =new Date(forecast.dt_txt).getDate();
            if (!nextDays.includes(forecastDate)){
                return nextDays.push(forecastDate);
            }
        });
        // console.log(threeDays);
    //     nextDay.innerHTML=``;
    //     for(let i=1;i<nextDays.length;i++){
    //         let data=new Date(nextDays[i].dt_txt);
    //         nextDay.innerHTML+=
    //         `
    //         `
    //     }

    // }).catch(()=>{
    //     alert('failed to fetch weather forecast');
    // 
    })

}


function locationSearch(){
    let location=searchInput.value.trim();
    searchInput.value='';
    // console.log(location);
    if(!location)return;
    let apiURL=`https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`;
    fetch(apiURL).then(res=>res.json()).then(data=>{
        let {name,lat,lon,country,state}=data[0];
        console.log(data);
        getWeatherDetails(name,lat,lon,country,state)
    }).catch(()=>{
        alert(`failed to fetch coordinates of ${location}`)
    })
}
searchBtn.addEventListener('click',locationSearch);



