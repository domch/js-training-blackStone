
$('button').on('click', ()=>{
    main();
});


const MAX_WIDTH = 420;

function main(){
    let userInputs = getUserInputs();
    
    createMaze(userInputs);
    placeStone(userInputs);
}

function getUserInputs(){
    return {
        row: $("#mazeRows").val(),
        column: $("#mazeCols").val(),
        color: $("#stoneColor").val()
    }
}

function createMaze({row, column}){
    let dimension = findDimension(column);
    new Array(row*column).forEach(){
        $('#maze')
            .append(`<div style="width:${dimension}px; height:${dimension}px"></div>`);
    }); 
}

function findDimension(column){
    return MAX_WIDTH/column;
}

function placeStone({color}){

}