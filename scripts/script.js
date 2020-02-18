
$("#create").click(function(){
    $.ajax({
       url : 'api.php/position', // La ressource ciblée
       type : 'POST', // Le type de la requête HTTP.
       data: {y: 1, x: 5},
    });
});
