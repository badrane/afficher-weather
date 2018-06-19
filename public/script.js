$.ajax({
    url: "http://localhost:3013/test",
    methode: 'get',
    success: function (data) {
        var datafor = data.list
        console.log(datafor.nam)

        // $('#test').append('pays : ' + data.name + '<br/>'+ 'Cloudiness : ' + data.weather[0].description + '<br/>'+'température : ' + data.main.temp)
    }})