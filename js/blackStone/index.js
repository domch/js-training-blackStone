
$('button').on('click', ()=>{
    main();
});


const MAX_WIDTH = 420;

function main(){
    let userInputs = getUserInputs();
    initMaze();
    createMaze(userInputs);
    placeStone(userInputs);
}

function getUserInputs(){
    return {
        row: +$("#mazeRows").val(),
        column: +$("#mazeCols").val(),
        color: $("#stoneColor").val()
    }
}

function initMaze(){
    $('#maze').html("");
}

function createMaze({row, column, color}){
    let dimension = findDimension(column);
    let content = 
        `<div style="
                width:${dimension}px; 
                height:${dimension}px; 
                background-color:${color}">
        </div>`.repeat(row*column);
    
    $('#maze').append(content);
}

function findDimension(column){
    return MAX_WIDTH/column;
}

function placeStone({row, column, color}){
    let stoneCol = Math.floor(Math.random() * column) + 1;
    let stoneRow = Math.floor(Math.random() * row) + 1;
    let nthChild = (stoneRow - 1) * column + stoneCol; 
    
    $(`#maze div:nth-child(${nthChild})`)
        .css('background-color', '#000')
        .html(`${stoneRow}, ${stoneCol}`);
}