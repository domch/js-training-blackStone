
$('button').on('click', ()=>{
    main();
});


function main(){
    let userInputs = getUserInputs();
}

function getUserInputs(){
    return {
        row: $("#mazeRows").val(),
        column: $("#mazeCols").val(),
        color: $("#stoneColor").val()
    }
}