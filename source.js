////////////////////////////////////////////////////////////
//
//                       Annoying
//
//                 An RPG by Shawn Achimasi
//
//
////////////////////////////////////////////////////////////

// GLOBALS
var c = document.getElementById("gameWindow");
var m = document.getElementById("mapWindow");
var ctx = c.getContext("2d");
var mapC = m.getContext("2d");


var tx_side = [];
var tx_side1 = [];
var tx = [];
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
    [ 0, 0, 2, 1, 1, 1, 1, 2, 2, 0, 0, 1, 1, 1, 0, 0, 0, 1 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0 ],

];

tx_side.push( document.getElementById("stone_side") );
tx_side.push( document.getElementById("vend_side") );

tx_side1.push( document.getElementById("stone_side1") );
tx_side1.push( document.getElementById("stone_side1") ); //TODO: DUMMY UNTIL VEND IS DONE!!!!!!!!!!!!!

tx.push( document.getElementById("stone") );
tx.push( document.getElementById("vend") );

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

function drawSurround(){

    ctx.drawImage(bg, 0, 0);

        //////////////
        /* CHECK -7 */
        //////////////
        /* flat */
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        if( pView[ 52 ] >= 1 && pView[ 52 ] < 666 ){
            ctx.drawImage(tx[ pView[52] - 1], 178, 181, 44, 38 );    
            ctx.fillRect(178, 181, 44, 38);
        }
        if( pView[ 51 ] >= 1 && pView[ 51 ] < 666 ){
            ctx.drawImage(tx[ pView[51] - 1], 178-44, 181, 44, 38 );    
            ctx.fillRect(178-44, 181, 44, 38);
        }
        if( pView[ 50 ] >= 1 && pView[ 50 ] < 666 ){
            ctx.drawImage(tx[ pView[50] - 1], 178-88, 181, 44, 38 );    
            ctx.fillRect(178-88, 181, 44, 38);
        }
        if( pView[ 53 ] >= 1 && pView[ 53 ] < 666 ){
            ctx.drawImage(tx[ pView[53] - 1], 178+44, 181, 44, 38 );
            ctx.fillRect(178+44, 181, 44, 38);
        }
        if( pView[ 54 ] >= 1 && pView[ 54 ] < 666 ){
            ctx.drawImage(tx[ pView[54] - 1], 178+88, 181, 44, 38 );
            ctx.fillRect(178+88, 181, 44, 38);
        }
        /* -1 side left check */
        if( pView[ 36 ] >= 1 && pView[ 36 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 36 ] - 1 ],110,0,24,stone_side1.height,110,138,24,stone_side1.height);
        }
        /* side left check */
        if( pView[ 44 ] >= 1 && pView[ 44 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 44 ] - 1 ],175,0,3,stone_side.height,175,0,3,stone_side.height);
        }
        /* -1 side right check */
        /////////////////////////
        /////////////////////////
        /* side right check */
        ctx.save()
        ctx.scale( -1, 1 );
        if( pView[ 40 ] >= 1 && pView[ 40 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 40 ] - 1 ],110,0,24,stone_side1.height,-Math.abs(400-110),138,24,stone_side1.height);
        }
        if( pView[ 46 ] >= 1 && pView[ 46 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 46 ] - 1 ],175,0,3,stone_side.height,-Math.abs(400-175),0,3,stone_side.height);
        }
        ctx.restore();

        //////////////
        /* -6 CHECK */
        //////////////
        /* flat */
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        if( pView[ 45 ] >= 1 && pView[ 45 ] < 666 ){
            ctx.drawImage(tx[ pView[45] - 1], 175, 178, 50, 45 );
            ctx.fillRect(175, 178, 50, 45);
        }
        if( pView[ 44 ] >= 1 && pView[ 44 ] < 666 && pView[ 37 ] == 0 ){
            ctx.drawImage(tx[ pView[44] - 1], 175-50, 178, 50, 45 );
            ctx.fillRect(175-50, 178, 50, 45);
        }
        if( pView[ 43 ] >= 1 && pView[ 43 ] < 666 && pView[ 36 ] == 0 ){
            ctx.drawImage(tx[ pView[43] - 1], 175-100, 178, 50, 45 );
            ctx.fillRect(175-100, 178, 50, 45);
        }
        if( pView[ 46 ] >= 1 && pView[ 46 ] < 666 && pView[ 39 ] == 0 ){
            ctx.drawImage(tx[ pView[46] - 1], 175+50, 178, 50, 45 );
            ctx.fillRect(175+50, 178, 50, 45);
        }
        if( pView[ 47 ] >= 1 && pView[ 47 ] < 666 && pView[ 40 ] == 0 ){
            ctx.drawImage(tx[ pView[47] - 1], 175+100, 178, 50, 45 );
            ctx.fillRect(175+100, 178, 50, 45);
        }
        
        // -1 left check
        if( pView[ 29 ] >= 1 && pView[ 29 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 29 ] - 1 ],80,0,45,stone_side1.height,80,138,45,stone_side1.height);
        }
        // left check
        if( pView[ 37 ] >= 1 && pView[ 37 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 37 ] - 1 ],170,0,5,stone_side.height,170,0,5,stone_side.height);
        }
        /* right -1 check */
        ////////////////////
        ////////////////////
        //right check
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 33 ] >= 1 && pView[ 33 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 33 ] - 1 ],80,0,45,stone_side1.height,-Math.abs(400-80),138,45,stone_side1.height);
        }
        if( pView[ 39 ] >= 1 && pView[ 39 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 39 ] - 1 ],170,0,5,stone_side.height,-Math.abs(400-170),0,5,stone_side.height);
        }
        ctx.restore();
        
        /* -5 CHECK */
        /* flat */
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        if( pView[ 38 ] >= 1 && pView[ 38 ] < 666 && pView[ 31 ] == 0 ){
            ctx.drawImage(tx[ pView[38] - 1], 170, 173, 60, 55 ); 
            ctx.fillRect(170, 173, 60, 55);
        }
        if( pView[ 37 ] >= 1 && pView[ 37 ] < 666 && pView[ 30 ] == 0 ){
            ctx.drawImage(tx[ pView[37] - 1], 170-60, 173, 60, 55 ); 
            ctx.fillRect(170-60, 173, 60, 55);
        }
        if( pView[ 36 ] >= 1 && pView[ 36 ] < 666 && pView[ 29 ] == 0 ){
            ctx.drawImage(tx[ pView[36] - 1], 170-120, 173, 60, 55 ); 
            ctx.fillRect(170-120, 173, 60, 55);
        }
        if( pView[ 39 ] >= 1 && pView[ 39 ] < 666 && pView[ 32 ] == 0 ){
            ctx.drawImage(tx[ pView[39] - 1], 170+60, 173, 60, 55 ); 
            ctx.fillRect(170+60, 173, 60, 55);
        }
        if( pView[ 40 ] >= 1 && pView[ 40 ] < 666 && pView[ 33 ] == 0 ){
            ctx.drawImage(tx[ pView[40] - 1], 170+120, 173, 60, 55 ); 
            ctx.fillRect(170+120, 173, 60, 55);
        }
        /* -1 left check */
        if( pView[ 22 ] >= 1 && pView[ 22 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 22 ] - 1 ],20,0,60,stone_side1.height,20,138,60,stone_side1.height);
        }
        /* left check */
        if( pView[ 30 ] >= 1 && pView[ 30 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 30 ] - 1 ],160,0,10,stone_side.height,160,0,10,stone_side.height);
        }
        /* right -1 check */
        ////////////////////
        ////////////////////
        //right check
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 26 ] >= 1 && pView[ 26 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 26 ] - 1 ],20,0,60,stone_side1.height,-Math.abs(400-20),138,60,stone_side1.height);
        }
        if( pView[ 32 ] >= 1 && pView[ 32 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 32 ] - 1 ],160,0,10,stone_side.height,-Math.abs(400-160),0,10,stone_side.height);
        }
        ctx.restore();

        /* -4 CHECK */
        /* flat */
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        if( pView[ 31 ] >= 1 && pView[ 31 ] < 666 ){
            ctx.drawImage(tx[ pView[31] - 1], 160, 163, 80, 75 );
            ctx.fillRect(160, 163, 80, 75);
        }
        if( pView[ 30 ] >= 1 && pView[ 30 ] < 666 && pView[ 23 ] == 0 ){
            ctx.drawImage(tx[ pView[30] - 1], 160-80, 163, 80, 75 );
            ctx.fillRect(160-80, 163, 80, 75);
        }
        if( pView[ 29 ] >= 1 && pView[ 29 ] < 666 && pView[ 22 ] == 0 ){
            ctx.drawImage(tx[ pView[29] - 1], 0, 163, 80, 75 );
            ctx.fillRect(0, 163, 80, 75);
        }
        if( pView[ 32 ] >= 1 && pView[ 32 ] < 666 && pView[ 25 ] == 0 ){
            ctx.drawImage(tx[ pView[32] - 1], 160+80, 163, 80, 75 );
            ctx.fillRect(160+80, 163, 80, 75);
        }
        if( pView[ 33 ] >= 1 && pView[ 33 ] < 666 && pView[ 26 ] == 0 ){
            ctx.drawImage(tx[ pView[33] - 1], 160+160, 163, 80, 75 );
            ctx.fillRect(160+160, 163, 80, 75);
        }
        /* -1 left check */
        if( pView[ 15 ] >= 1 && pView[ 15 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 15 ] - 1 ],0,0,20,stone_side1.height,0,138,20,stone_side1.height);
            
        }
        /* left check */
        if( pView[ 23 ] >= 1 && pView[ 23 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 23 ] - 1 ],140,0,20,stone_side.height,140,0,20,stone_side.height);
        }
        /* right -1 check */
        ////////////////////
        ////////////////////
        //right check
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 19 ] >= 1 && pView[ 19 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 19 ] - 1 ],0,0,20,stone_side1.height,-400,138,20,stone_side1.height);
            ;
        }
        if( pView[ 25 ] >= 1 && pView[ 25 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 25 ] - 1 ],140,0,20,stone_side.height,-Math.abs(400-140),0,20,stone_side.height);
        }
        ctx.restore();

        //////////////
        /* -3 CHECK */
        //////////////
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        if( pView[ 24 ] >= 1 && pView[ 24 ] < 666 ){
            ctx.drawImage(tx[ pView[24] - 1], 140,142, 120, 116 );
            ctx.fillRect(140, 142, 120, 116);
        }
        if( pView[ 23 ] >= 1 && pView[ 23 ] < 666 && pView[ 16 ] == 0 ){
            ctx.drawImage(tx[ pView[23] - 1], 140-120, 142, 120, 116 );
            ctx.fillRect(140-120, 142, 120, 116);
        }
        if( pView[ 22 ] >= 1 && pView[ 22 ] < 666 && pView[ 15 ] == 0 ){
            ctx.drawImage(tx[ pView[22] - 1], 140-240, 142, 120, 116 );
            ctx.fillRect(140-240, 142, 120, 116);
        }
        if( pView[ 25 ] >= 1 && pView[ 25 ] < 666 && pView[ 18 ] == 0 ){
            ctx.drawImage(tx[ pView[25] - 1], 140+120, 142, 120, 116 );
            ctx.fillRect(140+120, 142, 120, 116);
        }
        if( pView[ 26 ] >= 1 && pView[ 26 ] < 666 && pView[ 19 ] == 0 ){
            ctx.drawImage(tx[ pView[26] - 1], 140+240, 142, 120, 116 );
            ctx.fillRect(140+240, 142, 120, 116);
        }
        /* left check */
        if( pView[ 16 ] >= 1 && pView[ 16 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 16 ] - 1 ],100,0,40,stone_side.height,100,0,40,stone_side.height);
        }
        //right check
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 18 ] >= 1 && pView[ 18 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 18 ] - 1 ],100,0,40,stone_side.height,-Math.abs(400-100),0,40,stone_side.height);
        }
        ctx.restore();

        //////////////
        /* -2 CHECK */
        //////////////
        /* -5 from last wall */
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        if( pView[ 17 ] >= 1 && pView[ 17 ] < 666 ){
            ctx.drawImage(tx[ pView[17] - 1], 100, 102, 200, 196 );
            ctx.fillRect(100, 102, 200, 196);
        }
        if( pView[ 16 ] >= 1 && pView[ 16 ] < 666 && pView[ 9 ] == 0 ){
            ctx.drawImage(tx[ pView[16] - 1], 100-200, 102, 200, 196 );
            ctx.fillRect(100-200, 102, 200, 196);
        }
        if( pView[ 18 ] >= 1 && pView[ 18 ] < 666 && pView[ 11 ] == 0 ){
            ctx.drawImage(tx[ pView[18] - 1], 100+200, 102, 200, 196 );
            ctx.fillRect(100+200, 102, 200, 196);
        }
        /* left check */
        if( pView[ 9 ] >= 1 && pView[ 9 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 9 ] - 1 ],40,0,60,stone_side.height,40,0,60,stone_side.height);
        }
        //right check
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 11 ] >= 1 && pView[ 11 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 11 ] - 1 ],40,0,60,stone_side.height,-Math.abs(400-40),0,60,stone_side.height);
        }
        ctx.restore();

        //////////////
        /* -1 CHECK */
        //////////////
        if( pView[ 10 ] >= 1 && pView[ 10 ] < 666 ){
            ctx.drawImage(tx[ pView[10] - 1], 40, 40, 320, 318 );
        }
        if( pView[ 9 ] >= 1 && pView[ 9 ] < 666 ){
            ctx.drawImage(tx[ pView[9] - 1], 40-320, 40, 320, 318 );
        }
        if( pView[ 11 ] >= 1 && pView[ 11 ] < 666 ){
            ctx.drawImage(tx[ pView[11] - 1], 40+320, 40, 320, 318 );
        }
        /* left check */
        //check left size of player
        if( pView[ 2 ] >= 1 && pView[ 2 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 2 ] - 1 ],0,0,40,stone_side.height,0,0,40,stone_side.height);
        }
        //right check
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 4 ] >= 1 && pView[ 4 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 4 ] - 1 ],0,0,40,stone_side.height,-Math.abs(400),0,40,stone_side.height);
        }
        ctx.restore();

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