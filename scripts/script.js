$(document).ready(function () {
    $('#getPosition').click(function () {
        $.ajax({
            url: 'api.php/coordonate',
            type: 'get',
            success: function (response) {
                console.log(JSON.parse(response));
            }
        });
    });
    $('#getMovements').click(function () {
        $.ajax({
            url: 'api.php/position',
            type: 'get',
            success: function (response) {
                console.log(response);
            }
        });
    });
    /* $('#getMovements').click(function(){
         $.ajax({
             url: 'api.php/position',
             type: 'post',
             data: {y: 1, x: 5},
             success: function(response){
                 console.log(response);
                 console.log('creation succeed !')
             }
         })
     })*/
});
