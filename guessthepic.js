
        var view = {
            
            displayMessage: function(msg) {
                var cell= document.getElementById("messageBoard");
                cell.innerHTML=msg;
                },

            displayMiss: function (location) {
                var cell = document.getElementById(location);
                cell.setAttribute ("class","miss");
                },

            displayHit: function (location) {
                var cell = document.getElementById(location);
                cell.setAttribute ("class","hit");
               
                }

        };

   
        var model = {

            picLocation:"",
            guessTry: 3,
           


            generatePicLocation: function () {
                var loc= Math.floor(Math.random() * 9);
                var location = loc + 1;
                this.picLocation = "c" + location;
                },

          
               
        };




        var controller = {
                fire: function (guess) {
                    var num = guess.target;
                    var numS = num.id;
              
                       
                           
                                if (model.picLocation == numS) {
                                    guess.target.setAttribute ("class","hit");  
                                        
                                      
                                            
                                    }
                                
                                else {
                                    guess.target.setAttribute ("class","miss");    
                                   // view.displayMessage ("try again");
                                
                                    }
    
                        
                   
                }
        };
            




//hard code test only
function testHit(e) {
    var td = e.target;
    td.setAttribute ("class","hit");
    }
    
//console.log(numS);  
//console.log(typeof(model.guesses));    

//document.getElementById("messageBoard").innerHTML = "OPSsssssssssssssssssssssss";

//Below are test function only... As the window onload



   





window.onload = init;

    function init (){

        var mc = document.getElementsByTagName("td");
            for (var i = 0; i < mc.length; i++) {
            mc[i].onclick = controller.fire;
            }  

 
         model.generatePicLocation();
           console.log(model.picLocation);
    }
      
      













    
