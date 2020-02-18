$(document).ready(function () {
    let sequence;
    let positionArray;
    let logValue;
    $('#getPosition').click(function () {
        $('#log').empty();
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
                                    saveCoordonate(positionArray);
                                    logValue = "<div>UP " + positionArray['y'] + ":" + positionArray['x'] + "</div>";
                                    $("#log").append(logValue);
                                } else {
                                    logValue = "<div> Error ! can't move Up</div>";
                                    $("#log").append(logValue);
                                }
                                break;
                            case 1:
                                if (positionArray['x'] < 9) {
                                    $('.cell').css('border', '1px solid black');
                                    positionArray['x']++;
                                    position = positionArray['y'].toString() + positionArray['x'].toString();
                                    $('#' + position).css('border', '2px solid red');
                                    saveCoordonate(positionArray);
                                    logValue = "<div>RIGHT " + positionArray['y'] + ":" + positionArray['x'] + "</div>";
                                    $("#log").append(logValue);
                                } else {
                                    logValue = "<div> Error ! can't move to right</div>";
                                    $("#log").append(logValue);
                                }
                                break;
                            case 2 :
                                if (positionArray['y'] > 0) {
                                    $('.cell').css('border', '1px solid black');
                                    positionArray['y']--;
                                    position = positionArray['y'].toString() + positionArray['x'].toString();
                                    $('#' + position).css('border', '2px solid red');
                                    saveCoordonate(positionArray);
                                    logValue = "<div>DOWN " + positionArray['y'] + ":" + positionArray['x'] + "</div>";
                                    $("#log").append(logValue);
                                } else {
                                    logValue = "<div> Error ! can't move down</div>";
                                    $("#log").append(logValue);
                                }
                                break;
                            case 3:
                                if (positionArray['x'] > 0) {
                                    $('.cell').css('border', '1px solid black');
                                    positionArray['x']--;
                                    position = positionArray['y'].toString() + positionArray['x'].toString();
                                    $('#' + position).css('border', '2px solid red');
                                    saveCoordonate(positionArray);
                                    logValue = "<div>LEFT " + positionArray['y'] + ":" + positionArray['x'] + "</div>";
                                    $("#log").append(logValue);
                                } else {
                                    logValue = "<div> Error ! can't move to the left</div>";
                                    $("#log").append(logValue);
                                }
                                break;
                        }
                    }, index*1000);
                })
            }
        })
    })

    $('#reset').click(function () {
        $('#log').empty();
        sequence = null;
        positionArray = null;
        $('.cell').css('border', '1px solid black');
    });

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
