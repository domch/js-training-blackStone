$('#initialize').on("click", function(){
    main();
});


/**
 * 1) Get user inputs.
 * 2) Find dimensions.
 * 3) Create Maze.
 * 4) Put the black stone in a randomly selected cell.
 */


 const MAX_WIDTH = 438; // $('#maze').width()

 /**
  * The entry point of the application
  */
 function main(){
     let inputs = getUserInputs();
     createMaze(inputs);
     placeBlackStone();
 }

 function getUserInputs(){
     return {
         rows: +$('#numberOfRows').val(),
         cols: +$('#numberOfCols').val(),
         color: $('#cellColor').val()
     }
 }
 function findDimensions(pCols){
     // how many rows, cols
     // border width, box model, outline
     return MAX_WIDTH / pCols;
     
 }

 /**
  * create the grid
  * @param {*} pInputs user inputs 
  */
 function createMaze({rows, cols, color}){
    let dimension = findDimensions(cols);
    let content = `<div style="
                            width:${dimension}px;
                            height:${dimension}px;
                            background-color:${color}
                    "></div>`.repeat(rows * cols);
    $('#maze').html(content);
 }

 function placeBlackStone(){
     
 }