//creating the grid

let container = document.querySelector('#container_1')

function getGrid(number) {
    for (let i=0; i<number; i++) {
        var row = document.createElement('div');
        row.classList.add('grid-row');
    for (let j=0; j<number; j++){
        var square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
        }
    container.appendChild(row)
    }
    let buttons =  document.querySelectorAll('.btn');
    let squareDiv = document.querySelectorAll('.square')

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function () {
                buttons.forEach(function(btn) {
                    btn.style = '';
                });
                    this.style.border = '4px solid black';
                    console.log(this.id)
                    let color = this.id;
                    squareDiv.forEach(myDiv => myDiv.addEventListener ('mouseover', function () {     
            myDiv.style.backgroundColor = color;
         }))
            }   
        }
}

getGrid(16);


//change the number of grid squares when button is clicked

let squareNumber = document.querySelector('#squaresNumber')
squareNumber.addEventListener ('click', chooseNumber)

function chooseNumber() {
    var input = prompt ('Choose the number of squares per side for the grid smaller than 100')
    if (input > 100)  {
        alert ('Smaller than 100!');
    }

    else {
        container.innerHTML = ''
        getGrid(input)
    }
}


        
        
        
           
                
             
        




       
        
            
        
        
       

