var playing = false;
var score;
var trialsLeft;
var step;
var action;
var fruits =['apple' , 'banana' , 'cherry', 'grapes' , 'mango', 'orange' , 'pear' , 'strawberry' , 'watermelon'];


$(function(){
     
 document.getElementById("bg").play();
//click on start reset button
$("#startreset").click(function(){
   
  // we are playing
  if(playing == true){

      //reload page
     location.reload();
       
     }else{

         // we are not playing
         playing = true; //game initiated

         // set score to 0
         score = 0;
         $("#scorevalue").html(score);

         //show trials left box
         $("#trialsLeft").show();
         trialsLeft = 3;
         addHearts();

         //hide game over box
         $("#gameover").hide();

         //change button to reset game
         $("#startreset").html("Reset Game");

         //start sending fruits
         startAction();
     }
});


    
$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); //update score
    
    document.getElementById("slicesound").play(); //play sound
    
    //stop fruit 
   clearInterval(action);
    
    //hide fruit 
    $("#fruit1").hide("explode",{pieces: 15}, 500); //slicing the fruit
    
    
    //send new fruit
    setTimeout(startAction, 500);
}); 
// slice a fruit
  //play sound
  //explode fruit

// functions

function addHearts(){
     $("#trialsLeft").empty();
     for(i = 0; i < trialsLeft; i++){
                  
                 $("#trialsLeft").append(' <img src="images/heart.png" class="life"> ');
      }
}


// start sending fruits

function startAction(){
    
    //generating a fruit
   $("#fruit1").show();
    chooseFruit(); //choose a random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top': -50})
    //random position
    
    //generate a random step
     step = 1+ Math.round(5*Math.random());
    // change step
    
    // move fruit down one step every 10sec
    action = setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top + step);
        
        //check if fruit is too low
        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            
            //check if any trials left
            if(trialsLeft > 1){
                
                    //generating a fruit
   $("#fruit1").show();
    chooseFruit(); //choose a random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top': -50})
    //random position
    
    //generate a random step
     step = 1+ Math.round(5*Math.random());
    // change step
                
                //reduce trials by 1
                trialsLeft--;
                //populate trialsLeft box
                addHearts();
                
            }else{
                //game over
                playing = false; //we are not playing
                
                $("#startreset").html("Start Game"); //change button to start game
                
                $("#gameover").show();
                $("#gameover").html('<p> Game Over:</p> <p>Your Score is ' + score + '</p>');
                $("#trialsLeft").hide();
                stopAction();
            }
            
            
        } 
    },10);
}

// generate a random fruit

function chooseFruit(){
    $("#fruit1").attr('src','images/' + fruits[Math.round(8*Math.random())] + '.png');
}

//stop dropping fruit

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}



});












