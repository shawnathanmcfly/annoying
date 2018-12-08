//
//
//      ENUMS of items. Used underscore naming convention so
//      I can remove them and insert a space for item listing
//      in game
//
//

function Obj( type, attribute, image, solid, msg ){

    this.type = type;
    this.attribute = attribute;
    this.image = document.getElementById(image);
    this.solid = solid;
    this.msg = msg;

}

var obj = {

    //HEALTH
    
    //AMMO
    clip : new Obj( "ammo", 8, "clip", false, "You picked up a clip" ),


    //DECOR
    plant : new Obj( "solid_decor", 0, "plant", true, "A plant blocks your path. The leaves smell pleasant." ),
    table : new Obj( "solid_decor", 0, "table", true, "Boring-ass table"),


};

