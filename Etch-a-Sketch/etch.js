let rows = 16;
let cols = 16;


const button = document.createElement('button');
document.body.appendChild(button);


function createGrid(rows, cols) {  // creates grid using a parent container
                                   // with however many child containers 
                                   //and then in each ccontainer there will 
                                   //be the same amount of squares as there are child containers


    let parentContainer = document.createElement('div');
    parentContainer.classList.add('parent-container');
    document.body.appendChild(parentContainer)


    for (let i = 0; i < rows; i++) {


        let childContainer = document.createElement('div')
        childContainer.classList.add('child-container')
        parentContainer.appendChild(childContainer)
        

        for (let j = 0; j < cols; j++){


            let square = document.createElement('div')
            square.classList.add('square')
            childContainer.appendChild(square)


            square.addEventListener("mouseenter", function() {
                square.style.backgroundColor = "black";
            });


        }

    }

}

createGrid(rows, cols)



button.addEventListener("click", function () {   // this listens for when a button is pressed and then clears out the previous grid 
                                                 //and then asks for a new size and then it runs the create grid function again
    
    
                                                 const gridContainers = document.querySelectorAll('.parent-container');

    
    gridContainers.forEach(function (container) {
        container.remove();
    });


    cols = prompt('How big do you want your grid?');
    rows = cols;


    createGrid(rows, cols);
});
