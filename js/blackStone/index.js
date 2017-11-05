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
     placeBlackStone(inputs);
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
  * creates the grid
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

 function placeBlackStone({rows, cols, color}){
    let stoneCol = Math.floor(Math.random() * cols) + 1;
    let stoneRow = Math.floor(Math.random() * rows) + 1;
    let nthChild = (stoneRow - 1) * cols + stoneCol; 
    
    $(`#maze div:nth-child(${nthChild})`)
        .css('background-color', '#000')
        .html(`${stoneRow}, ${stoneCol}`);
 }

 cre
 