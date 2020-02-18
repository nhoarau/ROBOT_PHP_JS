$(document).ready(function () {
    let sequence;
    let positionArray;
    $('#getPosition').click(function () {
        $.ajax({
            url: 'api.php/coordonate',
            type: 'get',
            success: function (response) {
                positionArray = JSON.parse(response);
                $('.cell').css('border', '1px solid black');
                const position = positionArray['y'].toString() + positionArray['x'].toString();
                $('#' + position).css('border', '2px solid red');
            }
        });
    });
    $('#launchMovements').click(function () {
        $.ajax({
            url: 'api.php/move',
            type: 'get',
            success: function (response) {
                sequence = JSON.parse(response);
                sequence.forEach((element, index) => {
                    setTimeout(() => {
                        let position;
                        switch (element) {
                            case 0:
                                if (positionArray['y'] < 9) {
                                    $('.cell').css('border', '1px solid black');
                                    positionArray['y']++;
                                    position = positionArray['y'].toString() + positionArray['x'].toString();
                                    $('#' + position).css('border', '2px solid red');
                                }
                                break;
                            case 1:
                                if (positionArray['x'] < 9) {
                                    $('.cell').css('border', '1px solid black');
                                    positionArray['x']++;
                                    position = positionArray['y'].toString() + positionArray['x'].toString();
                                    $('#' + position).css('border', '2px solid red');
                                }
                                break;
                            case 2 :
                                if (positionArray['y'] > 0) {
                                    $('.cell').css('border', '1px solid black');
                                    positionArray['y']--;
                                    position = positionArray['y'].toString() + positionArray['x'].toString();
                                    $('#' + position).css('border', '2px solid red');
                                }
                                break;
                            case 3:
                                if (positionArray['x'] > 0) {
                                    $('.cell').css('border', '1px solid black');
                                    positionArray['x']--;
                                    position = positionArray['y'].toString() + positionArray['x'].toString();
                                    $('#' + position).css('border', '2px solid red');
                                }
                                break;
                        }
                    }, index*1000);
                })
            }
        })
    })


    function saveCoordonate(positionArray) {
        $.ajax({
            url: 'api.php/position',
            type: 'post',
            data: {positionArray},
            success: function (response) {
              
            }
        });
    }
});
