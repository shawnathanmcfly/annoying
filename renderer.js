/******************************
    
    Sloppy renderer. Couldn't nest it in a loop
    due to textures not aligning correctly.
    So had to hard code every possible wall in view.


********************************/

//draw image with images center coords. And scales down.
function drawObjView( image, x, y, s ){

    x -= image.width / 2;
    y -= image.height;

    let xAdj = (image.width / 2) - ((image.width / 2) * s);
    let yAdj = image.height - (image.height * s);

    ctx.drawImage( image, x + xAdj, y + yAdj, image.width * s, image.height * s);
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
        ctx.fillStyle = "rgba(0, 0, 0, 0.92)";
        if( pView[ 51 ] >= 1 && pView[ 51 ] < 666 ){
            ctx.drawImage(tx[ pView[51] - 1], 178-44, 181, 44, 38 );    
            ctx.fillRect(178-44, 181, 44, 38);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.94)";
        if( pView[ 50 ] >= 1 && pView[ 50 ] < 666 ){
            ctx.drawImage(tx[ pView[50] - 1], 178-88, 181, 44, 38 );    
            ctx.fillRect(178-88, 181, 44, 38);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.96)";
        if( pView[ 49 ] >= 1 && pView[ 49 ] < 666 ){
            ctx.drawImage(tx[ pView[49] - 1], 178-88-44, 181, 44, 38 );    
            ctx.fillRect(178-88-44, 181, 44, 38);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.92)";
        if( pView[ 53 ] >= 1 && pView[ 53 ] < 666 ){
            ctx.drawImage(tx[ pView[53] - 1], 178+44, 181, 44, 38 );
            ctx.fillRect(178+44, 181, 44, 38);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.94)";
        if( pView[ 54 ] >= 1 && pView[ 54 ] < 666 ){
            ctx.drawImage(tx[ pView[54] - 1], 178+88, 181, 44, 38 );
            ctx.fillRect(178+88, 181, 44, 38);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.96)";
        if( pView[ 55 ] >= 1 && pView[ 55 ] < 666 ){
            ctx.drawImage(tx[ pView[55] - 1], 178+88+44, 181, 44, 38 );
            ctx.fillRect(178+88+44, 181, 44, 38);
        }
        /* -2 left check */
        if( pView[ 35 ] >= 1 && pView[ 35 ] < 666 ){
            ctx.drawImage(tx_side2[ pView[ 35 ] - 1 ],50,0,25,stone_side2.height,50,160,25,stone_side2.height);
        }
        if( typeof(pView[ 43 ]) === 'object' )
            drawObjView( pView[ 43 ].image, 110, 221, 0.2 );
        
        /* -1 side left check */
        if( pView[ 36 ] >= 1 && pView[ 36 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 36 ] - 1 ],110,0,24,stone_side1.height,110,138,24,stone_side1.height);
        }
        if( typeof(pView[ 44 ]) === 'object' ){
            drawObjView( pView[ 44 ].image, 155, 221, 0.2 );
        }
        /* side left check */
        if( pView[ 44 ] >= 1 && pView[ 44 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 44 ] - 1 ],175,0,3,stone_side.height,175,0,3,stone_side.height);
        }
        /* -1 side right check */
        /////////////////////////
        /////////////////////////
        /* side right check */
        if( typeof(pView[ 45 ]) === 'object' )
            drawObjView( pView[ 45 ].image, 400 / 2, 221, 0.2 );
        
        ctx.save()
        ctx.scale( -1, 1 );
        if( pView[ 41 ] >= 1 && pView[ 41 ] < 666 ){
            ctx.drawImage(tx_side2[ pView[ 41 ] - 1 ],50,0,25,stone_side2.height,-Math.abs(400-50),160,25,stone_side2.height);
        }
        ctx.restore();
        if( typeof(pView[ 46 ]) === 'object' ){
            drawObjView( pView[ 46 ].image, 245, 221, 0.2 );
        }
        
        ctx.save()
        ctx.scale( -1, 1 );
        if( pView[ 40 ] >= 1 && pView[ 40 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 40 ] - 1 ],110,0,24,stone_side1.height,-Math.abs(400-110),138,24,stone_side1.height);
        }
        ctx.restore();
        if( typeof(pView[ 47 ]) === 'object' ){
            drawObjView( pView[ 47 ].image, 288, 221, 0.2 );
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
        ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
        if( pView[ 44 ] >= 1 && pView[ 44 ] < 666 &&
        (pView[ 37 ] === 0 || typeof(pView[ 37 ]) === 'object')){
            ctx.drawImage(tx[ pView[44] - 1], 175-50, 178, 50, 45 );
            ctx.fillRect(175-50, 178, 50, 45);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.90)";
        if( pView[ 43 ] >= 1 && pView[ 43 ] < 666 &&
            (pView[ 36 ] === 0 || typeof(pView[ 36 ]) === 'object')){
            ctx.drawImage(tx[ pView[43] - 1], 175-100, 178, 50, 45 );
            ctx.fillRect(175-100, 178, 50, 45);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
        if( pView[ 42 ] >= 1 && pView[ 42 ] < 666 &&
            (pView[ 35 ] === 0 || typeof(pView[ 35 ]) === 'object')){
            ctx.drawImage(tx[ pView[42] - 1], 175-150, 178, 50, 45 );
            ctx.fillRect(175-150, 178, 50, 45);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
        if( pView[ 46 ] >= 1 && pView[ 46 ] < 666  && 
            (pView[ 39 ] === 0 || typeof(pView[ 39 ]) === 'object')){
            ctx.drawImage(tx[ pView[46] - 1], 175+50, 178, 50, 45 );
            ctx.fillRect(175+50, 178, 50, 45);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.90)";
        if( pView[ 47 ] >= 1 && pView[ 47 ] < 666 &&
            (pView[ 40 ] === 0 || typeof(pView[ 40 ]) === 'object')){
            ctx.drawImage(tx[ pView[47] - 1], 175+100, 178, 50, 45 );
            ctx.fillRect(175+100, 178, 50, 45);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
        if( pView[ 48 ] >= 1 && pView[ 48 ] < 666 &&
            (pView[ 41 ] === 0 || typeof(pView[ 41 ]) === 'object')){
            ctx.drawImage(tx[ pView[48] - 1], 175+150, 178, 50, 45 );
            ctx.fillRect(175+150, 178, 50, 45);
        }

        //OBJECT PROCESSING
        
        
        
        
        
        
        /* -2 left check */
        if( pView[ 28 ] >= 1 && pView[ 28 ] < 666 ){
            ctx.drawImage(tx_side2[ pView[ 28 ] - 1 ],0,0,50,stone_side2.height,0,160,50,stone_side2.height);
        }
        if( typeof(pView[ 36 ]) === 'object' )
            drawObjView( pView[ 36 ].image, 88, 227, 0.2 );
        
        // -1 left check
        if( pView[ 29 ] >= 1 && pView[ 29 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 29 ] - 1 ],80,0,45,stone_side1.height,80,138,45,stone_side1.height);
        }
        if( typeof(pView[ 37 ]) === 'object' )
            drawObjView( pView[ 37 ].image, 145, 227, 0.2 );
        
        // left check
        if( pView[ 37 ] >= 1 && pView[ 37 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 37 ] - 1 ],170,0,5,stone_side.height,170,0,5,stone_side.height);
        }
        /* right -1 check */
        ////////////////////
        ////////////////////
        //right check
        if( typeof(pView[ 38 ]) === 'object' ){
            drawObjView( pView[ 38 ].image, 400 / 2, 227, 0.2 );
        }
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 34 ] >= 1 && pView[ 34 ] < 666 ){
            ctx.drawImage(tx_side2[ pView[ 34 ] - 1 ],0,0,50,stone_side2.height,-Math.abs(400),160,50,stone_side2.height);
        }
        ctx.restore();
        if( typeof(pView[ 39 ]) === 'object' )
            drawObjView( pView[ 39 ].image, 255, 227, 0.2 );

        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 33 ] >= 1 && pView[ 33 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 33 ] - 1 ],80,0,45,stone_side1.height,-Math.abs(400-80),138,45,stone_side1.height);
        }
        ctx.restore();
        if( typeof(pView[ 40 ]) === 'object' )
            drawObjView( pView[ 40 ].image, 300, 227, 0.2 );
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 39 ] >= 1 && pView[ 39 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 39 ] - 1 ],170,0,5,stone_side.height,-Math.abs(400-170),0,5,stone_side.height);
        }
        ctx.restore();
        /* -5 CHECK */
        /* flat */
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        if( pView[ 38 ] >= 1 && pView[ 38 ] < 666 ){
            ctx.drawImage(tx[ pView[38] - 1], 170, 173, 60, 55 ); 
            ctx.fillRect(170, 173, 60, 55);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.72)";
        if( pView[ 37 ] >= 1 && pView[ 37 ] < 666 && (pView[ 30 ] === 0 || typeof(pView[ 30 ]) === 'object')){
            ctx.drawImage(tx[ pView[37] - 1], 170-60, 173, 60, 55 );
            ctx.fillRect(170-60, 173, 60, 55);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.74)";
        if( pView[ 36 ] >= 1 && pView[ 36 ] < 666 && (pView[ 29 ] === 0 || typeof(pView[ 29 ]) === 'object')){
            ctx.drawImage(tx[ pView[36] - 1], 170-120, 173, 60, 55 ); 
            ctx.fillRect(170-120, 173, 60, 55);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.76)";
        if( pView[ 35 ] >= 1 && pView[ 35 ] < 666 && (pView[ 28 ] === 0 || typeof(pView[ 28 ]) === 'object')){
            ctx.drawImage(tx[ pView[35] - 1], 170-180, 173, 60, 55 ); 
            ctx.fillRect(170-180, 173, 60, 55);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.72)";
        if( pView[ 39 ] >= 1 && pView[ 39 ] < 666 && (pView[ 32 ] === 0 || typeof(pView[ 32 ]) === 'object')){
            ctx.drawImage(tx[ pView[39] - 1], 170+60, 173, 60, 55 ); 
            ctx.fillRect(170+60, 173, 60, 55);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.74)";
        if( pView[ 40 ] >= 1 && pView[ 40 ] < 666 && (pView[ 33 ] === 0 || typeof(pView[ 33 ]) === 'object')){
            ctx.drawImage(tx[ pView[40] - 1], 170+120, 173, 60, 55 );
            ctx.fillRect(170+120, 173, 60, 55);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 0.76)";
        if( pView[ 41 ] >= 1 && pView[ 41 ] < 666 && (pView[ 34 ] === 0 || typeof(pView[ 34 ]) === 'object')){
            ctx.drawImage(tx[ pView[41] - 1], 170+180, 173, 60, 55 ); 
            ctx.fillRect(170+180, 173, 60, 55);
        }

        
        
        
        
        
        
        if( typeof(pView[ 29 ]) === 'object' ){
            drawObjView( pView[ 29 ].image, 56, 235, 0.3 );
        }
        /* -1 left check */
        if( pView[ 22 ] >= 1 && pView[ 22 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 22 ] - 1 ],20,0,60,stone_side1.height,20,138,60,stone_side1.height);
        }
        /* left check */
        if( typeof(pView[ 30 ]) === 'object' ){
            drawObjView( pView[ 30 ].image, 128, 235, 0.3 );
        }
        if( pView[ 30 ] >= 1 && pView[ 30 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 30 ] - 1 ],160,0,10,stone_side.height,160,0,10,stone_side.height);
        }
        if( typeof(pView[ 32 ]) === 'object' ){
            drawObjView( pView[ 32 ].image, 272, 235, 0.3 );
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
        ctx.restore();
        if( typeof(pView[ 33 ]) === 'object' ){
            drawObjView( pView[ 33 ].image, 344, 235, 0.3 );
        }
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 32 ] >= 1 && pView[ 32 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 32 ] - 1 ],160,0,10,stone_side.height,-Math.abs(400-160),0,10,stone_side.height);
        }
        ctx.restore();
        if( typeof(pView[ 31 ]) === 'object' ){
            drawObjView( pView[ 31 ].image, 400 / 2, 235, 0.3 );
        }

        /* -4 CHECK */
        /* flat */
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        if( pView[ 31 ] >= 1 && pView[ 31 ] < 666 ){
            ctx.drawImage(tx[ pView[31] - 1], 160, 163, 80, 75 );
            ctx.fillRect(160, 163, 80, 75);
        }
        
        if( pView[ 30 ] >= 1 && pView[ 30 ] < 666 && (pView[ 23 ] === 0 || typeof(pView[ 23 ]) === 'object')){
            ctx.drawImage(tx[ pView[30] - 1], 160-80, 163, 80, 75 );
            ctx.fillRect(160-80, 163, 80, 75);
        }
        
        if( pView[ 29 ] >= 1 && pView[ 29 ] < 666 && (pView[ 22 ] === 0 || typeof(pView[ 22 ]) === 'object')){
            ctx.drawImage(tx[ pView[29] - 1], 0, 163, 80, 75 );
            ctx.fillRect(0, 163, 80, 75);
        }
        if( pView[ 32 ] >= 1 && pView[ 32 ] < 666 && (pView[ 25 ] === 0 || typeof(pView[ 25 ]) === 'object')){
            ctx.drawImage(tx[ pView[32] - 1], 160+80, 163, 80, 75 );
            ctx.fillRect(160+80, 163, 80, 75);
        }
        if( pView[ 33 ] >= 1 && pView[ 33 ] < 666 && (pView[ 26 ] === 0 || typeof(pView[ 26 ]) === 'object')){
            ctx.drawImage(tx[ pView[33] - 1], 160+160, 163, 80, 75 );
            ctx.fillRect(160+160, 163, 80, 75);
        }

        
        
        if( typeof(pView[ 22 ]) === 'object' ){
            drawObjView( pView[ 22 ].image, 2, 248, 0.5 );
        }
        /* -1 left check */
        if( pView[ 15 ] >= 1 && pView[ 15 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 15 ] - 1 ],0,0,20,stone_side1.height,0,138,20,stone_side1.height);   
        }
        if( typeof(pView[ 23 ]) === 'object' ){
            drawObjView( pView[ 23 ].image, 102, 248, 0.5 );
        }
        /* left check */
        
        if( pView[ 23 ] >= 1 && pView[ 23 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 23 ] - 1 ],140,0,20,stone_side.height,140,0,20,stone_side.height);
        }
        if( typeof(pView[ 24 ]) === 'object' ){
            drawObjView( pView[ 24 ].image, 400 / 2, 248, 0.5 );
        }
        /* right -1 check */
        ////////////////////
        ////////////////////
        //right check
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 19 ] >= 1 && pView[ 19 ] < 666 ){
            ctx.drawImage(tx_side1[ pView[ 19 ] - 1 ],0,0,20,stone_side1.height,-400,138,20,stone_side1.height);   
        }
        ctx.restore();
        if( typeof(pView[ 25 ]) === 'object' ){
            drawObjView( pView[ 25 ].image, 302, 248, 0.5 );
        }
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 25 ] >= 1 && pView[ 25 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 25 ] - 1 ],140,0,20,stone_side.height,-Math.abs(400-140),0,20,stone_side.height);
        }
        ctx.restore();
        
        if( typeof(pView[ 26 ]) === 'object' ){
            drawObjView( pView[ 26 ].image, 402, 248, 0.5 );
        }
        
        //////////////
        /* -3 CHECK */
        //////////////
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        if( pView[ 24 ] >= 1 && pView[ 24 ] < 666 ){
            ctx.drawImage(tx[ pView[24] - 1], 140,142, 120, 116 );
            ctx.fillRect(140, 142, 120, 116);
        }  

        if( pView[ 23 ] >= 1 && pView[ 23 ] < 666 && (pView[ 16 ] === 0 || typeof(pView[ 16 ]) === 'object')){
            ctx.drawImage(tx[ pView[23] - 1], 140-120, 142, 120, 116 );
            ctx.fillRect(140-120, 142, 120, 116);
        }

        if( pView[ 22 ] >= 1 && pView[ 22 ] < 666 && (pView[ 15 ] === 0 || typeof(pView[ 15 ]) === 'object')){
            ctx.drawImage(tx[ pView[22] - 1], 140-240, 142, 120, 116 );
            ctx.fillRect(140-240, 142, 120, 116);
        }

        if( pView[ 25 ] >= 1 && pView[ 25 ] < 666 && (pView[ 18 ] === 0 || typeof(pView[ 18 ]) === 'object')){
            ctx.drawImage(tx[ pView[25] - 1], 140+120, 142, 120, 116 );
            ctx.fillRect(140+120, 142, 120, 116);
        }      

        if( pView[ 26 ] >= 1 && pView[ 26 ] < 666 && (pView[ 19 ] === 0 || typeof(pView[ 19 ]) === 'object')){
            ctx.drawImage(tx[ pView[26] - 1], 140+240, 142, 120, 116 );
            ctx.fillRect(140+240, 142, 120, 116);
        }
        
        if( typeof(pView[ 15 ]) === 'object' ){
            drawObjView( pView[ 15 ].image, -84, 278, 0.7 );
        }
        if( typeof(pView[ 16 ]) === 'object' ){
            drawObjView( pView[ 16 ].image, 58, 278, 0.7 );
        }
        /* left check */
        if( pView[ 16 ] >= 1 && pView[ 16 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 16 ] - 1 ],100,0,40,stone_side.height,100,0,40,stone_side.height);
        }
        //right check
        if( typeof(pView[ 17 ]) === 'object' ){
            drawObjView( pView[ 17 ].image, 400 / 2, 278, 0.7 );
        }
        ctx.save();
        ctx.scale( -1, 1 );
        if( pView[ 18 ] >= 1 && pView[ 18 ] < 666 ){
            ctx.drawImage(tx_side[ pView[ 18 ] - 1 ],100,0,40,stone_side.height,-Math.abs(400-100),0,40,stone_side.height);
        }
        ctx.restore();
        if( typeof(pView[ 18 ]) === 'object' ){
            drawObjView( pView[ 18 ].image, 348, 278, 0.7 );
        }
        if( typeof(pView[ 19 ]) === 'object' ){
            drawObjView( pView[ 19 ].image, 532, 278, 0.7 );
        }

        //////////////
        /* -2 CHECK *
        //////////////
        /* -5 from last wall */
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        if( pView[ 17 ] >= 1 && pView[ 17 ] < 666 ){
            ctx.drawImage(tx[ pView[17] - 1], 100, 102, 200, 196 );
            ctx.fillRect(100, 102, 200, 196);
        }       

        if( pView[ 16 ] >= 1 && pView[ 16 ] < 666 && 
            (pView[ 9 ] === 0 || typeof(pView[ 9 ]) === 'object')){
            ctx.drawImage(tx[ pView[16] - 1], 100-200, 102, 200, 196 );
            ctx.fillRect(100-200, 102, 200, 196);
        }
        
        if( pView[ 18 ] >= 1 && pView[ 18 ] < 666 &&
            (pView[ 11 ] === 0 || typeof(pView[ 11 ]) === 'object')){
            ctx.drawImage(tx[ pView[18] - 1], 100+200, 102, 200, 196 );
            ctx.fillRect(100+200, 102, 200, 196);
            
        }

        //check for object
        if( typeof(pView[ 10 ]) === 'object' ){
            drawObjView( pView[ 10 ].image, 400 / 2, 324, 1);
        }
        if( typeof(pView[ 9 ]) === 'object' ){
            drawObjView( pView[ 9 ].image, -40, 324, 1);
        }
        if( typeof(pView[ 11 ]) === 'object' ){
            drawObjView( pView[ 11 ].image, 440, 324, 1);
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