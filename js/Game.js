class Game{
    constructor(){

    }

    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        player = new Player()
        player.getCount();
        form = new Form()
        form.display();
    }
}