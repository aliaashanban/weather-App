let cityName = document.querySelector(".cityName");
let regionName = document.querySelector(".regionName");
let temperatureDegree = document.querySelector(".temperatureDegree");
let windSpeed = document.querySelector(".windSpeed");
let humiditySpeed = document.querySelector(".humiditySpeed");
let pressureSpeed = document.querySelector(".pressureSpeed");
let locateTime = document.querySelector(".locateTime");
let deccrip = document.querySelector(".deccrip");
let SearchBtn = document.querySelector("#SearchBtn");
let SubscribeBtn = document.querySelector("#SubscribeBtn");
let cityNameInput = document.querySelector("#cityNameInput");
let emailInput = document.querySelector("#emailInput");
let alertSearch = document.getElementById("alertSearch");

// let city = "egypt";
city = cityNameInput.value;

// & .............................search Btn ................................
SearchBtn.addEventListener("click", function (e) {
  city = cityNameInput.value;
  getWetherData(city);
  if (city == cityNameInput.value) {
    alertSearch.innerHTML = " ";
    clearInput();
    // console.log(cityNameInput.value);
    // console.log('yes');
  }
});

SearchBtn.addEventListener("submit", function (e) {
  e.preventDefault();
});

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// for (let i = 0; i < days.length; i++) {
//   console.log(days[i]);
// }

// &................................................fetch data .....................................................
async function getWetherData(city) {
  // const apiKey = "4a3883c291c44343bcb05431240712";
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=4a3883c291c44343bcb05431240712&q=${city}&days=7`
    );
    let data = await response.json();
    // console.log(data);
    // console.log(data.current.condition);
    // console.log(data.forecast.forecastday[0].day.condition.text);
    // console.log(data.forecast.forecastday[0].day.condition.icon);
    // console.log(data.current.temp_c);
    // console.log(data.current.humidity);
    // console.log(data.current.pressure_in);
    // console.log(data.current.wind_kph);
    //   console.log(data.current.condition.humidity);
    //   console.log(data.current.temp_c);
    // console.log(data.location.name);
    // console.log(data.location.region);
    // console.log(data.forecast.forecastday);
    // console.log(data.forecast.forecastday[0].day.condition.text);

    // &................................................display weather .....................................................
    forecastList = data.forecast.forecastday;
    // console.log(data.forecast);
    // console.log(forecastList[2]);
    let dataDays = document.querySelector(".dataDays");
    for (let i = 0; i < forecastList.length; i++) {
      let container = "";
      container += `
       <div class="col-md-6">
            <div class="inner px-1 py-2 rounded-5 f">
              <div class="city-date-sec">
                <div class="city-date mb-0">
                  <div class="city-location d-flex  flex-column px-3 pt-3">
                   <div class="city d-flex flex-row align-items-center">
                    <i class="fa-solid fa-location-dot fs-5 "></i>
                    <h5 class="cityName ms-2 pt-1">${data.location.name}</h5>
                   </div>
                   <p class="regionName ms-3 pt-0 mb-0 ">${data.location.region}</p>
                  </div>
                  <h5 class=" text-center m-auto px-4 locateTime ">Today: ${data.forecast.forecastday[0].date}</h5>
                </div>
              </div>
              <div class="temperature-info text-center py-3">
<img  alt="state condition" src="${data.forecast.forecastday[0].day.condition.icon}" width=120px>
                <div class="temperatureDegree fs-2 fw-bolder pt-2">${data.forecast.forecastday[0].day.avgtemp_c}°C</div>
                <div class="deccrip fs-5 fw-bolder">${data.forecast.forecastday[0].day.condition.text}</div>
              </div>
              <div class="additional-info pb-3 px-3">
                <div class="row g-2 pt-3 info mt-0 p-0 ">
                  <div class=" col-4 pt-0">
                    <div class="in-inner text-center py-2 rounded-3 ">
                      <i class="fa-solid fa-wind"></i>
                      <h5 class="wind-label fw-bolder">Wind</h5>
                      <h6 class="windSpeed fw-bold">${data.forecast.forecastday[0].day.avgtemp_c}°C </h6>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="in-inner text-center py-2 rounded-3">
                      <i class="fa-solid fa-droplet"></i>
                      <h5 class="Humidity-label fw-bolder">Humidity</h5>
                      <h6 class="humiditySpeed fw-bold">${data.forecast.forecastday[0].day.avghumidity}%</h6>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="in-inner text-center py-2 rounded-3">
                      <i class="fa-solid fa-eye"></i>
                      <h5 class="Pressure-label fw-bolder">Visibility</h5>
                      <h6 class="pressureSpeed fw-bold">${data.forecast.forecastday[0].day.avgvis_km} Km</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="inner px-1 py-2 rounded-5 f">
              <div class="city-date-sec">
                <div class="city-date mb-0">
                  <div class="city-location d-flex  flex-column px-3 pt-3">
                   <div class="city d-flex flex-row align-items-center">
                    <i class="fa-solid fa-location-dot fs-5 "></i>
                    <h5 class="cityName ms-2 pt-1">${data.location.name}</h5>
                   </div>
                   <p class="regionName ms-3 pt-0 mb-0 ">${data.location.region}</p>
                  </div>
                  <h5 class="text-center m-auto px-4 locateTime">Tomorrow: ${data.forecast.forecastday[1].date}</h5>
                </div>
              </div>
              <div class="temperature-info text-center py-3">
<img  alt="state condition" src="${data.forecast.forecastday[1].day.condition.icon}" width=120px>
                <div class="temperatureDegree fs-2 fw-bolder pt-2">${data.forecast.forecastday[1].day.avgtemp_c}°C</div>
                <div class="dec fs-5 fw-bolder">${data.forecast.forecastday[1].day.condition.text}</div>
              </div>
              <div class="additional-info pb-3 px-3">
                <div class="row g-2 pt-3 info mt-0 p-0 ">
                  <div class=" col-4 pt-0">
                    <div class="in-inner text-center py-2 rounded-3 ">
                      <i class="fa-solid fa-wind"></i>
                      <h5 class="wind-label fw-bolder">Wind</h5>
                      <h6 class="windSpeed fw-bold">${data.forecast.forecastday[1].day.avgtemp_c}°C </h6>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="in-inner text-center py-2 rounded-3">
                      <i class="fa-solid fa-droplet"></i>
                      <h5 class="Humidity-label fw-bolder">Humidity</h5>
                      <h6 class="humiditySpeed fw-bold">${data.forecast.forecastday[1].day.avghumidity}%</h6>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="in-inner text-center py-2 rounded-3">
                      <i class="fa-solid fa-eye"></i>
                      <h5 class="Pressure-label fw-bolder">Visibility</h5>
                      <h6 class="pressureSpeed fw-bold">${data.forecast.forecastday[1].day.avgvis_km} Km</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="row py-5 m-auto g-3">
     <div class="col-md col-6">
              <div class="item text-center py-4 px-2 rounded-5">
                <h4 class="day px-4 m-auto mb-2" >${data.forecast.forecastday[2].date}</h4>
<img  alt="state condition" src="${data.forecast.forecastday[2].day.condition.icon}" width=120px>
                <h4 class="pt-2">${data.forecast.forecastday[2].day.avgtemp_c}° C</h4>
                <h5 >${data.forecast.forecastday[2].day.condition.text}</h5>
              </div>
            </div>
                 <div class="col-md col-6">
              <div class="item text-center py-4 px-2 rounded-5">
                <h4 class="day px-4 m-auto mb-2">${data.forecast.forecastday[3].date}</h4>
<img  alt="state condition" src="${data.forecast.forecastday[3].day.condition.icon}" width=120px>
                <h4 class="pt-2">${data.forecast.forecastday[3].day.avgtemp_c}° C</h4>
                <h5 >${data.forecast.forecastday[3].day.condition.text}</h5>
              </div>
            </div>
             <div class="col-md col-6">
              <div class="item text-center py-4 px-2 rounded-5">
                <h4 class="day px-4 m-auto mb-2" >${data.forecast.forecastday[4].date}</h4>
<img  alt="state condition" src="${data.forecast.forecastday[4].day.condition.icon}" width=120px>
                <h4 class="pt-2">${data.forecast.forecastday[4].day.avgtemp_c}° C</h4>
                <h5 >${data.forecast.forecastday[4].day.condition.text}</h5>
              </div>
            </div>
             <div class="col-md col-6">
              <div class="item text-center py-4 px-2 rounded-5">
                <h4 class="day px-4 m-auto mb-2" >${data.forecast.forecastday[5].date}</h4>
<img  alt="state condition" src="${data.forecast.forecastday[5].day.condition.icon}" width=120px>
                <h4 class="pt-2">${data.forecast.forecastday[5].day.avgtemp_c}° C</h4>
                <h5 >${data.forecast.forecastday[5].day.condition.text}</h5>
              </div>
            </div>
             <div class="col-md col">
              <div class="item text-center py-4 px-2 rounded-5">
                <h4 class="day px-4 m-auto mb-2" >${data.forecast.forecastday[6].date}</h4>
<img  alt="state condition" src="${data.forecast.forecastday[6].day.condition.icon}" width=120px>
                <h4 class="pt-2">${data.forecast.forecastday[6].day.avgtemp_c}° C</h4>
                <h5 >${data.forecast.forecastday[6].day.condition.text}</h5>
              </div>
              </div>
          
    `;
      dataDays.innerHTML = container;
    }
  
    // console.log(forecastList);
    // console.log(data.forecast.forecastday[i].day.avgtemp_c);
    // console.log(data.forecast.forecastday[i].day.condition.text);
    // console.log(i);
  } catch (error) {
    alertSearch.innerHTML = "city not found ....";
    console.log(error);
  }
}
SubscribeBtn?.addEventListener("click", function (e) {
  console.log('hend');
  clearInput();
});
SubscribeBtn?.addEventListener("submit", function (e) {
  e.preventDefault();
});


// & ................................clear Input ............................
function clearInput() {
  cityNameInput.value = null;
  emailInput.value = null;
}