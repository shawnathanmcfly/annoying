
/******************************
    
    Sloppy renderer. Couldn't nest it in a loop
    due to textures not aligning correctly.
    So had to hard code every possible wall in view.


********************************/
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

