// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

var height, width, pixelCanvas, color;

// function removes previous grid & makes a new one 
function makeGrid() {
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();

    pixelCanvas = $('#pixelCanvas');                
    pixelCanvas.empty();                      //removes previous grid to prevent addition of new grid to old one

    for (var x = 1; x <= height; x++) {
    pixelCanvas.append('<tr id = table' + x + '></tr>')         //adds rowws to table

        for (var y = 1; y <= width; y++) {
            $('#table' + x).append('<td></td>');                    //adds cells to each row

        }
    } 

}

//prevents default submit action & calls the makeGrid function
$('#sizePicker').submit(function (event) {
    event.preventDefault();

    makeGrid();
})


//adds or removes background-color for cells
$('#pixelCanvas').on('click', 'td', function () {
    color = $('#colorPicker').val();
    if ($(this).attr('style')) {      //this is necessary for easy correction of mistakes without refreshing page
        $(this).removeAttr('style');
    } else {
        $(this).css('background-color', color);
    }

})



//console.log(color + ' and' + width + ' and' + height + ' and'+ pixelCanvas)
