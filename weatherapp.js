let searchElm=document.getElementById('search');
let btnElm=document.getElementById('btn');
let tempinfo=document.getElementById('temprange');
let loc=document.getElementById('locationinfo');
let condition=document.getElementById('conditioninfo');
let humidityelm=document.getElementById('humidity');

let apikey='4026029ee3087a3d10735bd2a85c4877';

btnElm.onclick=function(){
    if(searchElm.value==''){
        alert('plase enter valid city name');
    }else{
        cityname=searchElm.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data);
            const {name}=data;
            const {temp}=data.main;
            const {description}=data.weather[0];
            const {humidity}=data.main;
            loc.innerHTML=name;
            tempinfo.innerHTML=Math.floor(temp-273);
            condition.innerHTML=description;
            humidityelm.innerHTML=humidity;
        })
    }
}