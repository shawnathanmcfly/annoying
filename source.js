////////////////////////////////////////////////////////////
//
//                       Annoying
//
//                 An RPG by Shawn Achimasi
//
//
////////////////////////////////////////////////////////////
var c = document.getElementById("gameWindow");
var m = document.getElementById("mapWindow");
var ctx = c.getContext("2d");
var mapC = m.getContext("2d");

//GLOBALS
var tx_side = [];
var tx_side1 = [], tx_side2 = [];
var tx = [];
var badguys = [];
var bg = document.getElementById("bg");
var px = 4;
var py = 6;
var dir = 3; //EAST

var level = [

    [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1 ],
    [ 0, 1, obj.plant, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 1, 1 ],
    [ 0, 1, obj.plant, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1 ],
    [ 0, 2, obj.plant, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ],
    [ 0, 1, obj.clip, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1 ],
    [ 2, 0, obj.clip, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ],
    [ 0, 1, obj.clip, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1 ],
    [ 0, 1, obj.clip, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ],
    [ 0, 1, obj.plant, obj.plant, obj.plant, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1 ],
    [ 0, 0, 2, 1, 1, 0, 1, 2, 2, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1 ],
    [ 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
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

tx_side2.push( document.getElementById("stone_side2") );
tx_side2.push( document.getElementById("stone_side2") ); //TODO: ANOTHER DUMMY!!!!!!!!!!!!!!!!!!

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

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

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

    var areaCheck;

    if( event.keyCode == 40 ){

        if( dir == 1 && py != 0 ){

            areaCheck = level[ py - 1 ][px];
            
            if( typeof( areaCheck ) === 'object' ){

                if( areaCheck.solid === false ){
                    py--;
                }else{
                    insertNote( areaCheck.msg );
                }
            
            }else if( areaCheck === 0 ){
                py--;
            }
            
        }else if( dir == 2 ){

            areaCheck = level[ py ][ px - 1];

            if( typeof( areaCheck ) === 'object' ){

                if( areaCheck.solid === false ){
                    px--;
                }else{
                    insertNote( areaCheck.msg );
                }
            
            }else if( areaCheck === 0 ){
                px--;
            }
            
        }else if( dir == 3 ){

            areaCheck = level[ py ][ px + 1];

            if( typeof( areaCheck ) === 'object' ){

                if( areaCheck.solid === false ){
                    px++;
                }else{
                    insertNote( areaCheck.msg );
                }
            
            }else if( areaCheck === 0 ){
                px++;
            }
            
        }else if( dir == 0 ){

            areaCheck = level[ py + 1][ px ];
            if( typeof( areaCheck ) === 'object' ){

                if( areaCheck.solid === false ){
                    py++;
                }else{
                    insertNote( areaCheck.msg );
                }
            
            }else if( areaCheck === 0 ){
                py++;
            }
        }

        drawMap();
        /*document.getElementById("msgBox").innerHTML = "X: "+ px + " Y: " + py;*/
        
    }

    if( event.keyCode == 38 ){
        
        areaCheck = pView[10];

        if( dir == 1 ){
            if( typeof( areaCheck ) === 'object' ){

                if( areaCheck.solid === false ){
                    py++;
                }else{
                    insertNote( areaCheck.msg );
                }
            
            }else if( areaCheck === 0 ){
                py++;
            }
        }else if( dir == 2 ){
            if( typeof( areaCheck ) === 'object' ){

                if( areaCheck.solid === false ){
                    px++;
                }else{
                    insertNote( areaCheck.msg );
                }
            
            }else if( areaCheck === 0 ){
                px++;
            }
        }else if( dir == 3 ){
            if( typeof( areaCheck ) === 'object' ){

                if( areaCheck.solid === false ){
                    px--;
                }else{
                    insertNote( areaCheck.msg );
                }
            
            }else if( areaCheck === 0 ){
                px--;
            }
        }else if( dir == 0 ){
            if( typeof( areaCheck ) === 'object' ){

                if( areaCheck.solid === false ){
                    py--;
                }else{
                    insertNote( areaCheck.msg );
                }
            
            }else if( areaCheck === 0 ){
                py--;
            }
        }
        
        drawMap();
        /*document.getElementById("msgBox").innerHTML = "X: "+ px + " Y: " + py;*/
    }

    if( event.keyCode == 37 ){   
        if( dir == 1 ){
            insertNote("Facing East");
            dir = 2;
        }else if( dir == 3 ){
            insertNote("Facing South");
            dir = 1;
        }else if( dir == 2 ){
            dir = 0;
            insertNote("Facing North");
        }else if( dir == 0){
            dir = 3;
            insertNote("Facing West");
        }
    }

    if( event.keyCode == 39 ){
        
        if( dir == 2 ){
            insertNote("Facing South");
            dir = 1;
        }else if( dir == 1 ){
            dir = 3;
            insertNote("Facing West");
        }else if( dir == 3 ){
            dir = 0;
            insertNote("Facing North");
        }else if( dir == 0){
            dir = 2;
            insertNote("Facing East");
        }
    }
    
    getView();
    drawSurround();
    
}, false);

c.addEventListener( 'mousemove', function(e){
 
    var mpos = getMousePos(c, e);
    document.getElementById('mp').innerHTML = 'X: ' + mpos.x + "Y: " + mpos.y;

}, false);

window.onload = (function() { 

    var pusher = new Pusher('885bfe46deea057b6812', {
        cluster: 'us2',
        encrypted: false
    });

    let channel = pusher.subscribe('public-chat');
    channel.bind('message-added', onMessageAdded);

    getView();
    drawMap();

    drawSurround();

});