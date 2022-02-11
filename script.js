
document.getElementById('btn').addEventListener('click',function(){
    let inputValue = document.getElementById('input').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=3048677894d48ce70faa853dea99e254',{
        method:'GET'
    })
    .then(function(res){
        return res.json()
    })
    .then(function(resData){
        console.log(resData.weather[0].main)
        document.getElementById('input').addEventListener('focus',function(){
            this.value = '';
        })

        if(inputValue.length > 0 && resData.cod != '404'){
            document.getElementById('first-div').style.display = 'none';
            document.getElementById('weather-info-container').style.display = 'block';
        }

        if(resData.cod === '404'){
            document.getElementById('input').style.border = '1px solid #f72100'
            document.getElementById('not-found').style.display = 'block'
        }else{
            document.getElementById('not-found').style.display = 'none'
            document.getElementById('input').style.border = '1px solid rgb(206, 206, 206'
            document.getElementById('celsius').textContent = parseInt(resData.main['temp'] - 273.15) + ' ' + ' °C';
            document.getElementById('place').textContent = resData.name;
            document.getElementById('cloud').textContent = resData.weather[0].main;
            document.getElementById('feels').textContent = parseInt(resData.main['feels_like'] - 273.15) + ' ' + ' °C'
            document.getElementById('hum').textContent = resData.main.humidity + ' ' +'%';
        }
        
        // if(resData.weather[0].main === 'Clear'){
        //     document.getElementById('cloud-clear').style.display = 'block'
        // }

    })
    .catch(function(error){
        console.log(error)
    })
})

document.getElementById('icon').addEventListener('click',function(){
    document.getElementById('first-div').style.display = 'block';
    document.getElementById('weather-info-container').style.display = 'none';
})