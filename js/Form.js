class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("car Racing game")
        title.position(130,0)

        var input = createInput("name")
        var button = createButton("play")
        var greeting = createElement("h3")
        input.position(130,160)
        button.position(250,200)
    }
}