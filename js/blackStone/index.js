$('#initialize').on("click", function(){
    main();
});


/**
 * 1) Get user inputs.
 * 2) Find dimensions.
 * 3) Create Maze.
 * 4) Put the black stone in a randomly selected cell.
 */


 /**
  * The entry point of the application
  */
 function main(){
     let inputs = getUserInputs();
     findDimenions();
     createMaze();
     placeBlackStone();
 }

 