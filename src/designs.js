// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
import './styles.css'
(function () {
    const pixelCanvas = document.querySelector('#pixelCanvas');

    // function removes previous grid & makes a new one 
    function makeGrid() {
        const height = document.querySelector('#inputHeight').value;
        const width = document.querySelector('#inputWidth').value;

        if (pixelCanvas.firstChild !== undefined) {
            pixelCanvas.removeChild(pixelCanvas.firstChild);      //removes previous grid to prevent addition of new grid to old one
        }

        const tBody = document.createElement('tbody');
        pixelCanvas.append(tBody);
        for (var x = 1; x <= height; x++) {
            let el = document.createElement('tr');
            el.id = `table${x}`
            tBody.append(el)         //adds rowws to table

            for (var y = 1; y <= width; y++) {
                let td = document.createElement('td')
                document.querySelector('#table' + x).append(td)                   //adds cells to each row

            }
        }

    }

    //prevents default submit action & calls the makeGrid function
    function build() {
        const form = document.querySelector('#sizePicker');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            makeGrid();
        });
    }


    //adds or removes background-color for cells
    function color() {
        pixelCanvas.addEventListener('click', function (event) {
            let color = document.querySelector('#colorPicker').value;
            let bgc = event.target;
            event.stopPropagation;
            if (bgc.style.backgroundColor && bgc.style.backgroundColor !== 'initial') {
                console.log(bgc, color)
                console.log(bgc.style.backgroundColor)
                bgc.style.background = 'none'                //this is necessary for easy correction of mistakes without refreshing page
            } else {
                bgc.style.backgroundColor = color;
            }

        });
    }
    build();
    color();
})();
