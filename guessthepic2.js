


var view = {
        displayMessage: function (msg) {
        var cell = document.getElementById("messageBoard");
        cell.innerHTML=msg;
        },

        displayMiss: function (counter) {
        var msgMiss = model.missMessage[counter];
        var cell2 = document.getElementById("messageBoard");
        cell2.innerHTML=msgMiss;
        }

};

var model = {
    picLocation:"",

    missMessage: [ "Nope","Isa pa","Mali","Hmmmm","try Again","Sige Pa","Nope","Wrong","Error"],



    generatePic: function() {
        var loc = Math.floor(Math.random() * 9);
        var location = loc + 1;
        this.picLocation = "c" + location;
    },

    fire: function (guess) {
       
            if (guess == this.picLocation) {
                var hit = document.getElementById(guess);
                hit.setAttribute ("class","hit");
                
                view.displayMessage("Sakto ka Josh");  
               
            
            }
            else {
               var miss = document.getElementById(guess);
               miss.setAttribute ("class","miss");
                
               controller.guessMiss++;
                            
                   view.displayMiss(controller.guessMiss);
            }        
    }
};


var controller = { 
    
    guessMiss: 0,
    processGuess: function (guess) {
       
        var hit = model.fire(guess);  
    }
};

   
function parseClick (guess) {
    var guess1 = guess.target;
    var guess2 = guess1.id;
    controller.processGuess(guess2);

}
    


window.onload = init;

function init (){

    //onclick handler
    var mc = document.getElementsByTagName("td");
        for ( var i = 0; i < mc.length; i++) {
        mc[i].onclick = parseClick; 
        }

    model.generatePic();
    console.log(model.picLocation);
    
}


