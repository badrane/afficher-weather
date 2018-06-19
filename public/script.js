$.ajax({
    url: "http://localhost:3013/test",
    methode: 'get',
    success: function (data) {
        var datafor = data.list
        datafor.forEach( function(liste) {
        console.log(liste.name);
        $('#test').append('<p class="bg-primary text-light">' + 'pays : ' + liste.name + '<br/>'+ 'température : ' + liste.main.temp  + ' <i class="fas fa-sun"></i>' +'<br/>'+ '</p>');
        });
    }})