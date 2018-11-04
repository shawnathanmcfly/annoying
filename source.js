////////////////////////////////////////////////////////////
//
//                       Annoying
//
//                 An RPG by Shawn Achimasi
//
//
////////////////////////////////////////////////////////////

// GLOBALS
var px = 10;
var py = 10;
var px_snap = 0;
var py_snap = 0;
var c = document.getElementById("gameWindow");
var ctx = c.getContext("2d");
var music = document.getElementById("dun1");
var tx_side = [];
var tx = [];
var bg = document.getElementById("bg");
var keyPressed = [0, 0, 0, 0];
var px = 2;
var py = 1;
var dir = 1; //EAST

var level = [

    [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0 ],
    [ 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0 ],
    [ 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0 ],
    [ 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ],
    [ 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
    [ 1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],

];

tx_side.push( document.getElementById("stone_side") );
tx_side.push( document.getElementById("vend_side") );

tx.push( document.getElementById("stone") );
tx.push( document.getElementById("vend") );

var pView = [

    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0

];

function drawView(){

    document.getElementById("msgBox").innerHTML = 

    "" +
    pView[6] + " " + pView[7] + " " + pView[8] + "<br>" +
    pView[3] + " " + pView[4] + " " + pView[5] + "<br>" +
    pView[0] + " " + pView[1] + " " + pView[2];
}

function drawMap(){

    let mapx = 0;
    while( mapx < px - 8 ){
        mapx++;
    }

    let mapy = 0;
    while( mapy < py - 8 ){
        mapy++;
    }    

}

function getView(){

    //south
    if( dir == 0){

        for(let yy = 0; yy > -8 && py + yy >= 0; yy-- ){

            pView[Math.abs(yy)*3] = level[py+yy][px-1];
            pView[Math.abs(yy)*3+1] = level[py+yy][px];
            pView[Math.abs(yy)*3+2] = level[py+yy][px+1];

        }

    }else if( dir == 1 ){
        
        for(let yy = 0; yy < 8 && py + yy < level.length; yy++ ){

            pView[yy*3] = level[py+yy][px+1];
            pView[yy*3+1] = level[py+yy][px];
            pView[yy*3+2] = level[py+yy][px-1];
 
        }
        
    }else if( dir == 2 ){
        
        let i = 0;
        for(let x = 0; x < 8; x++ ){

            pView[ i++ ] = level[py - 1][px+x];
            pView[ i++ ] = level[py][px+x];
            pView[ i++ ] = level[py + 1][px+x];
            
        }
        
    }else if( dir == 3 ){

        let i = 0;
        for(let x = 0; x > -8; x-- ){

            pView[ i++ ] = level[py + 1][px+x];
            pView[ i++ ] = level[py][px+x];
            pView[ i++ ] = level[py - 1][px+x];
            
        }
    }
}

function drawSurround(){

    ctx.drawImage(bg, 0, 0);
    

        //check left size of player
        if( pView[ 0 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 0 ] - 1 ],0,0,40,stone_side.height,0,0,40,stone_side.height);
        }
        if( pView[ 3 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 3 ] - 1 ],40,0,60,stone_side.height,40,0,60,stone_side.height);
        }
        if( pView[ 6 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 6 ] - 1 ],100,0,40,stone_side.height,100,0,40,stone_side.height);
        }
        if( pView[ 9 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 9 ] - 1 ],140,0,20,stone_side.height,140,0,20,stone_side.height);
        }
        if( pView[ 12 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 12 ] - 1 ],160,0,10,stone_side.height,160,0,10,stone_side.height);
        }
        if( pView[ 15 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 15 ] - 1 ],170,0,5,stone_side.height,170,0,5,stone_side.height);
        }
        if( pView[ 18 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 18 ] - 1 ],175,0,3,stone_side.height,175,0,3,stone_side.height);
        }

        
        

        ctx.save();   
        ctx.scale( -1, 1 );
        //check right side of player
        if( pView[ 2 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 2 ] - 1 ],0,0,40,stone_side.height,-Math.abs(400),0,40,stone_side.height);
        }

        if( pView[ 5 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 5 ] - 1 ],40,0,60,stone_side.height,-Math.abs(400-40),0,60,stone_side.height);
        }
        if( pView[ 8 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 8 ] - 1 ],100,0,40,stone_side.height,-Math.abs(400-100),0,40,stone_side.height);
        }
        if( pView[ 11 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 11 ] - 1 ],140,0,20,stone_side.height,-Math.abs(400-140),0,20,stone_side.height);
        }
        if( pView[ 14 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 14 ] - 1 ],160,0,10,stone_side.height,-Math.abs(400-160),0,10,stone_side.height);
        }
        if( pView[ 17 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 17 ] - 1 ],170,0,5,stone_side.height,-Math.abs(400-170),0,5,stone_side.height);
        }
        if( pView[ 20 ] >= 1 ){
            ctx.drawImage(tx_side[ pView[ 20 ] - 1 ],175,0,3,stone_side.height,-Math.abs(400-175),0,3,stone_side.height);
        }
        
        ctx.restore();

        if( pView[ 22 ] >= 1 ){
            ctx.drawImage(tx[ pView[22] - 1], 178, 181, 44, 38 );
            ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
            ctx.fillRect(178, 181, 44, 38);
        }
        if( pView[ 19 ] >= 1 ){
            ctx.drawImage(tx[ pView[19] - 1], 175, 178, 50, 45 );
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            ctx.fillRect(175, 178, 50, 45);
        }
        if( pView[ 16 ] >= 1 ){
            ctx.drawImage(tx[ pView[16] - 1], 170, 173, 60, 55 );
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(170, 173, 60, 55);
        }
        if( pView[ 13 ] >= 1 ){
            ctx.drawImage(tx[ pView[13] - 1], 160, 163, 80, 75 );
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fillRect(160, 163, 80, 75);
        }
        if( pView[ 10 ] >= 1 ){
            ctx.drawImage(tx[ pView[10] - 1], 140, 142, 120, 116 );
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.fillRect(140, 142, 120, 116);
        }
        if( pView[ 7 ] >= 1 ){
            ctx.drawImage(tx[ pView[7] - 1], 100, 102, 200, 196 );
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(100, 102, 200, 196);
        }

        if( pView[ 4 ] >= 1 ){

            ctx.drawImage(tx[ pView[4] - 1], 40, 40, 320, 318 );
            
    
        }

        if( pView[2] == 0 && pView[5] >= 1 ){
            ctx.drawImage(tx[ pView[5] - 1], 40+320, 40, 320, 318 );
        }

        if( pView[0] == 0 && pView[3] >= 1 ){
            ctx.drawImage(tx[ pView[3] - 1], 40-320, 40, 320, 318 );
        }
            
}

document.addEventListener("keydown", function(event){

    if( event.keyCode == 40 ){
        
        //facing south
        if( dir == 1 && py != 0 && level[ py - 1 ][px] != 1){
            py--;

            
        }else if( dir == 2 && level[ py ][ px - 1] == 0 ){
            px--;
        }else if( dir == 3 && level[ py ][ px + 1] == 0 ){
            px++;
        }else if( dir == 0 && level[ py + 1][ px ] == 0 ){
            py++;
        }

        document.getElementById("msgBox").innerHTML = "X: "+ px + " Y: " + py;
    }

    if( event.keyCode == 38 ){
        
        //if facing south
        if( dir == 1 && pView[ 4 ] != 1 ){
            py++;
        }else if( dir == 2 && pView[4] == 0 ){
            px++;
        }else if( dir == 3 && pView[4] == 0 ){
            px--;
        }else if( dir == 0 && pView[4] == 0 ){
            py--;
        }
        
        document.getElementById("msgBox").innerHTML = "X: "+ px + " Y: " + py;
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

    for( let wait = 0; wait < 10000; wait++ ){
        //loser attempt add implementing wait for resources load
    }

    getView();
    drawMap();
    drawSurround();
    
    for( let wait = 0; wait < 50000; wait++ ){
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