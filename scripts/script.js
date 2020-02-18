$(document).ready(function () {
    $('#getPosition').click(function () {
        $.ajax({
            url: 'api.php/coordonate',
            type: 'get',
            success: function (response) {
                parsedResponse = JSON.parse(response);
                $('.cell').css('border', '1px solid black');
                const position =  parsedResponse['y'].toString() + parsedResponse['x'].toString();
                $('#'+position).css('border', '2px solid red');
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
