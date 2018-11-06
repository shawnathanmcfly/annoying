////////////////////////////////////////////////////////////
//
//                       Annoying
//
//                 An RPG by Shawn Achimasi
//
//
////////////////////////////////////////////////////////////
// GLOBALS
var renderer = document.createElement('script');
renderer.src = 'renderer.js';
document.head.appendChild(renderer);
var c = document.getElementById("gameWindow");
var m = document.getElementById("mapWindow");
var ctx = c.getContext("2d");
var mapC = m.getContext("2d");

var tx_side = [];
var tx_side1 = [];
var tx = [];
var badguys = [];
var bg = document.getElementById("bg");
var px = 5;
var py = 6;
var dir = 2; //EAST

var level = [

    [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0 ],
    [ 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0 ],
    [ 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 2, 1, 1, 0, 1, 2, 2, 0, 0, 1, 1, 1, 0, 0, 0, 1 ],
    [ 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0 ],
    [ 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1 ],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]

];



 

tx_side.push( document.getElementById("stone_side") );
tx_side.push( document.getElementById("vend_side") );

tx_side1.push( document.getElementById("stone_side1") );
tx_side1.push( document.getElementById("stone_side1") ); //TODO: DUMMY UNTIL VEND IS DONE!!!!!!!!!!!!!

tx.push( document.getElementById("stone") );
tx.push( document.getElementById("vend") );

badguys.push(document.getElementById("ban"));

var pView = [

    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0

];

function drawMap(){

    let mapx = 0;
    while( mapx < px - 20 ){
        mapx++;
    }

    let mapy = 0;
    while( mapy < py - 20 ){
        mapy++;
    }

    mapC.fillStyle = "#000000";
    mapC.fillRect(0,0,205,205);
    
    mapC.fillStyle="#1a8346";
    for(let y = 0; y <= 40 && y < level.length; y++ ){
        for( let x = 0; x <= 40 && x < level[y].length; x++ ){

            if( level[y+mapy][x+mapx] == 1 ){
                mapC.fillRect(x*5,y*5,5,5);
            }else if(level[y+mapy][x+mapx] == 2 ){

                mapC.fillStyle="#05434e";
                mapC.fillRect(x*5,y*5,5,5);
                mapC.fillStyle="#1a8346";
            
            }else if( y+mapy == py && x+mapx == px ){
                mapC.fillStyle="#FF0000";
                mapC.fillRect(x*5,y*5,5,5);
                mapC.fillStyle="#1a8346";
            }
        }
    }
}

function getView(){

    //south
    if( dir == 0){

        for(let yy = 0; yy > -8 && py + yy >= 0; yy-- ){

            if( px - 3 >= 0 ){
                pView[Math.abs(yy)*7] = level[py+yy][px-3];
            }else{
                pView[Math.abs(yy)*7] = 666;
            }

            if( px - 2 >= 0){
                pView[Math.abs(yy)*7+1] = level[py+yy][px-2];
            }else{
                pView[Math.abs(yy)*7+1] = 666;
            }

            if( px - 1 >= 0 ){
                pView[Math.abs(yy)*7+2] = level[py+yy][px-1];
            }else{
                pView[Math.abs(yy)*7+2] = 666;
            }

            pView[Math.abs(yy)*7+3] = level[py+yy][px];

            if( px + 1 < level[py+yy].length ){
                pView[Math.abs(yy)*7+4] = level[py+yy][px+1];
            }else{
                pView[Math.abs(yy)*7+4] = 666;
            }

            if( px + 2 < level[py+yy].length ){
                pView[Math.abs(yy)*7+5] = level[py+yy][px+2];
            }else{
                pView[Math.abs(yy)*7+5] = 666;
            }

            if( px + 3 < level[py+yy].length ){
                pView[Math.abs(yy)*7+6] = level[py+yy][px+3];
            }else{
                pView[Math.abs(yy)*7+6] = 666;
            }
        }

    }else if( dir == 1 ){
        
        for(let yy = 0; yy < 8 && py + yy < level.length; yy++ ){

            if( px + 3 < level[py+yy].length ){
                pView[yy*7] = level[py+yy][px+3];
            }else{
                pView[yy*7] = 666; 
            }

            if( px + 2 < level[py+yy].length ){
                pView[yy*7+1] = level[py+yy][px+2];
            }else{
                pView[yy*7+1] = 666;
            }

            if( px + 1 < level[py+yy].length){
                pView[yy*7+2] = level[py+yy][px+1];
            }else{
                pView[yy*7+2] = 666;
            }
            pView[yy*7+3] = level[py+yy][px];

            if( px - 1 >= 0 ){
                pView[yy*7+4] = level[py+yy][px-1];
            }else{
                pView[yy*7+4] = 666;
            }
            
            if( px - 2 >= 0 ){
                pView[yy*7+5] = level[py+yy][px-2];
            }else{
                pView[yy*7+5] = 666;
            }

            if( px - 3 >= 0 ){
                pView[yy*7+6] = level[py+yy][px-3];
            }else{
                pView[yy*7+6] = 666;
            }
            
        }
    //east
    }else if( dir == 2 ){
        
        let i = 0;
        for(let x = 0; x < 8 && px + x < level[py].length; x++ ){

            if( py >= 3){
                pView[ i++ ] = level[py - 3][px+x];
            }else{
                pView[ i++ ] = 666;
            }
            if( py >= 2 ){
                pView[ i++ ] = level[py - 2][px+x];
            }else{
                pView[ i++ ] = 666;
            }
            if( py >= 1 ){
                pView[ i++ ] = level[py - 1][px+x];
            }else{
                pView[ i++ ] = 666;
            }

            pView[ i++ ] = level[py][px+x];

            if( py + 1 < level.length ){
                pView[ i++ ] = level[py + 1][px+x];
            }else{
                pView[ i++ ] = 666;
            }

            if( py + 2 < level.length ){
                pView[ i++ ] = level[py + 2][px+x];
            }else{
                pView[ i++ ] = 666;
            }
            if( py + 3 < level.length ){
                pView[ i++ ] = level[py + 3][px+x];
            }else{
                pView[ i++ ] = 666;
            }
        
            
        }
        
    }else if( dir == 3 ){

        let i = 0;
        for(let x = 0; x > -8 && px + x >= 0; x-- ){

            if( py + 3 < level.length ){
                pView[ i++ ] = level[py + 3][px+x];
            }else{
                pView[ i++ ] = 666;
            }
            if( py + 2 < level.length ){
                pView[ i++ ] = level[py + 2][px+x];
            }else{
                pView[ i++ ] = 666;
            }

            if( py + 1 < level.length ){
                pView[ i++ ] = level[py + 1][px+x];
            }else{
                pView[ i++ ] = 666;
            }

            pView[ i++ ] = level[py][px+x];

            if( py >= 1 ){
                pView[ i++ ] = level[py - 1][px+x];
            }else{
                pView[ i++ ] = 666;
            }

            if( py >= 2 ){
                pView[ i++ ] = level[py - 2][px+x];
            }else{
                pView[ i++ ] = 666;
            }
            if( py >= 3 ){
                pView[ i++ ] = level[py - 3][px+x];
            }else{
                pView[ i++ ] = 666;
            }
        }
    }
}

document.addEventListener("keydown", function(event){

    if( event.keyCode == 40 ){
        
        if( dir == 1 && py != 0 && level[ py - 1 ][px] == 0){
            py--;
        }else if( dir == 2 && level[ py ][ px - 1] == 0 ){
            px--;
        }else if( dir == 3 && level[ py ][ px + 1] == 0 ){
            px++;
        }else if( dir == 0 && level[ py + 1][ px ] == 0 ){
            py++;
        }

        drawMap();
        /*document.getElementById("msgBox").innerHTML = "X: "+ px + " Y: " + py;*/
    }

    if( event.keyCode == 38 ){
        
        
        if( dir == 1 && pView[ 10 ] == 0 ){
            py++;
        }else if( dir == 2 && pView[10] == 0 ){
            px++;
        }else if( dir == 3 && pView[10] == 0 ){
            px--;
        }else if( dir == 0 && pView[10] == 0 ){
            py--;
        }
        
        drawMap();
        /*document.getElementById("msgBox").innerHTML = "X: "+ px + " Y: " + py;*/
    }

    if( event.keyCode == 37 ){   
        if( dir == 1 ){
            document.getElementById("msgBox").innerHTML = "Facing East";
            dir = 2;
        }else if( dir == 3 ){
            document.getElementById("msgBox").innerHTML = "Facing South";
            dir = 1;
        }else if( dir == 2 ){
            dir = 0;
            document.getElementById("msgBox").innerHTML = "Facing North";
        }else if( dir == 0){
            dir = 3;
            document.getElementById("msgBox").innerHTML = "Facing West";
        }
    }

    if( event.keyCode == 39 ){
        
        if( dir == 2 ){
            document.getElementById("msgBox").innerHTML = "Facing South";
            dir = 1;
        }else if( dir == 1 ){
            dir = 3;
            document.getElementById("msgBox").innerHTML = "Facing West";
        }else if( dir == 3 ){
            dir = 0;
            document.getElementById("msgBox").innerHTML = "Facing North";
        }else if( dir == 0){
            dir = 2;
            document.getElementById("msgBox").innerHTML = "Facing East";
        }
    }

    
    getView();
    drawSurround();
    
}, false);


window.onload = (function() { 

    getView();
    drawMap();

    drawSurround();
    
    
    for( let wait = 0; wait < 100000; wait++ ){
        //loser attempt add implementing wait for resources load
    }

});



    /*ctx.drawImage(p_down, px, py);*/


/*window.onkeyup = function(event){

    if( event.keyCode == 40 ){
        keyPressed[0] = 0;
    }

    if( event.keyCode == 38 ){
        keyPressed[1] = 0;
    }

    if( event.keyCode == 37 ){
        keyPressed[2] = 0;
    }

    if( event.keyCode == 39 ){
        keyPressed[3] = 0;
    }
}

function loop(timestamp){

    if( keyPressed[0] == 1 ){
        py += 2;
    }

    if( keyPressed[1] == 1 ){
        py -= 2;
    }

    if( keyPressed[2] == 1 ){
        px -= 2;
    }

    if( keyPressed[3] == 1 ){
        px += 2;
    }

    

    requestAnimationFrame(loop);
}

window.requestAnimationFrame( loop );*/