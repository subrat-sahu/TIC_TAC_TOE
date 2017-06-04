$(function(){var set=0,i=0;
var signH,signC;
var toWin=0;
var yoWinC=0;
var chalo=true;
var win=[7,292,448,273,73,84];
var gameArr = new Array(3);
for (var q = 0; q < 3; q++) {
  gameArr[q] = new Array(3);
}
for(var never=0;never<3;never++){
  for(var use=0;use<3;use++){
    gameArr[never][use]=0;
  }
}
//console.log(game[0][0]);
$( document ).ready(function() {
  $("#chance").hide();
  set=0;
});
//console.log(set);
   /* $("td").click(function(){
        $("td").text("L");
    });*/
    $("#X").click(function(){
      if(set===0){  signH="X";
        signC="O";
                 window.alert("you chose X,  GOOD LUCK");}
       set=1;
     // console.log(set);
      
    });
 $("#O").click(function(){
       if(set===0){ signH="O";
        signC="X";
                   window.alert("you chose O,  GOOD LUCK");}
       set=1;
     // console.log(set);
      if(signH){
    $("#di").text(signH);
  }
  
    });

var chance = true;

  
  
    $("td").click(function(event){
  var f=0;
for(var fu=0;fu<3;fu++){
  for(var ck=0;ck<3;ck++){
    if(gameArr[fu][ck]==0){
       f=1;
       break;
    }
  }
}
if(f==1){
  chalo=true
}
else{
  chalo=false
}

    //  $(this).addClass("red");
      if(!signH&&!set)
        window.alert("PLEASE SELECT SOMETHING FROM 'X' OR 'O'");
      var text = $(event.target).text();
      //console.log(text);
      
        
      if(!text&&set===1&&chalo){
          i++;
     //   console.log(i);
         $("#com").hide();
         $("#hum").show();
      
      //  console.log("human's chance");
        $(this).text(signH);
        var j=parseInt(this.id);
        var row,col;
     // console.log(j);
      if(j==0){gameArr[0][0]=1;row=0;col=0;}
            // window.alert("lelo");}
 else if(j==1) {gameArr[0][1]=1;row=0;col=1;}
 else if(j==2) {gameArr[0][2]=1;row=0;col=2;}
 else if(j==3) {gameArr[1][0]=1;row=1;col=0;}
 else if(j==4) {gameArr[1][1]=1;row=1;col=1;}
 else if(j==5) {gameArr[1][2]=1;row=1;col=1;}
 else if(j==6) {gameArr[2][0]=1;row=2;col=0;}
 else if(j==7) {gameArr[2][1]=1;row=2;col=1;}
 else if(j==8) {gameArr[2][2]=1;row=2;col=1;}
        
      
     //toWin=toWin+Math.pow(2,j);
      
       // window.alert(gameArr);
       //console.log(gameArr);
      
      humanWon();//human winning condition
      
      
      setTimeout(function(){ comp() }, 800);}
    });
  

function resetit(){
  $("#chance").hide();
  $("td").removeClass("red");
   $("#or").show();
 for(var never=0;never<3;never++){
  for(var use=0;use<3;use++){
    gameArr[never][use]=0;
  }
}
  i=0;
  toWin=0;
  signH=null;
  signC=null;
  set=0;
 $("td").each(function(){
    $(this).text("");
  });
};
$("#fuck").click(function(){
  resetit();
})
 $(".btn-primary").click(function(){
        $("#or").hide();
    });
$(".btn-danger").click(function(){
        $("#or").show();
    });
   
function humanWon(){
    if(gameArr[0][0]==1&&gameArr[1][1]==1&&gameArr[2][2]==1)
        {setTimeout(function(){window.alert("HUMAN YOU WON!");},250);
         setTimeout(function(){resetit()},300);
       }
        
          if(gameArr[0][2]==1&&gameArr[1][1]==1&&gameArr[2][0]==1)
          {setTimeout(function(){window.alert("HUMAN YOU WON!");},250);
           setTimeout(function(){resetit()},300);}
        
        for(var yo=0;yo<3;yo++){
       if(gameArr[yo][0]==1&&gameArr[yo][1]==1&&gameArr[yo][2]==1) {
         setTimeout(function(){window.alert("HUMAN YOU WON!");},259);
         $(this).text(signH);
         setTimeout(function(){resetit()},300);
       }
        }
        for( yo=0;yo<3;yo++){
       if(gameArr[0][yo]==1&&gameArr[1][yo]==1&&gameArr[2][yo]==1) {
         setTimeout(function(){window.alert("HUMAN YOU WON!");},250);
         setTimeout(function(){resetit()},300);
       }
        }
};
function compWon(){
    if(gameArr[0][0]==2&&gameArr[1][1]==2&&gameArr[2][2]==2){ setTimeout(function(){window.alert("THE COMPUTER WINS, BETTER LUCK NEXT TIME");},250);
         setTimeout(function(){resetit()},300);}
          if(gameArr[0][2]==2&&gameArr[1][1]==2&&gameArr[2][0]==2){setTimeout(function(){window.alert("THE COMPUTER WINS, BETTER LUCK NEXT TIME");},250);
         setTimeout(function(){resetit()},300);}
  for( yo=0;yo<3;yo++){
       if(gameArr[yo][0]==2&&gameArr[yo][1]==2&&gameArr[yo][2]==2) {
         
       $(this).text(signC);  setTimeout(function(){window.alert("THE COMPUTER WINS, BETTER LUCK NEXT TIME");},250);
         setTimeout(function(){resetit()},300);
       }
        }
        for( yo=0;yo<3;yo++){
       if(gameArr[0][yo]==2&&gameArr[1][yo]==2&&gameArr[2][yo]==2) {
        $(this).text(signC);
         setTimeout(function(){window.alert("THE COMPUTER WINS, BETTER LUCK NEXT TIME");},250);
         setTimeout(function(){resetit()},300);
       }
        }
  
}
function comp(){
// console.log();

    var f=0;
for(var fu=0;fu<3;fu++){
  for(var ck=0;ck<3;ck++){
    if(gameArr[fu][ck]==0){
       f=1;
       break;
    }
  }
}
if(f==1){
  chalo=true
}
else{
  chalo=false
}
//  console.log("computer's chance");
  var done=false;
  var x = document.getElementsByTagName("td");
  //console.log(chalo);
  if(signC&&chalo){
if(!x[4].innerHTML){
  gameArr[1][1]=2;
  x[4].innerHTML=signC;
  done=true;
}
if(!done){
  for(var god=0;god<3;god++){
    if(gameArr[1][god]==2&&gameArr[0][god]==2&&!x[god+6].innerHTML){
      gameArr[2][god]=2;
    x[god+6].innerHTML=signC;
  //  console.log(x[3*god+2].id);
     done=true;   break;
    } if(gameArr[1][god]==2&&gameArr[2][god]==2&&!x[god].innerHTML){
      gameArr[0][god]=2;
    x[god].innerHTML=signC;
 //   console.log(x[3*god].id);
     done=true;   break;  
    } if(gameArr[0][god]==2&&gameArr[2][god]==2&&!x[god+4].innerHTML){
      gameArr[1][god]=2;
      x[god+4].innerHTML=signC;
  //    console.log(x[3*god+1].id);
     done=true;   break;
    }
  }
}
if(!done){
  for(var god=0;god<3;god++){
    if(gameArr[1][god]==2&&gameArr[0][god]==2&&!x[god+6].innerHTML){
      gameArr[2][god]=2;
    x[god+6].innerHTML=signC;
 //   console.log(x[3*god+2].id);
     done=true;   break;
    } if(gameArr[1][god]==2&&gameArr[2][god]==2&&!x[god].innerHTML){
      gameArr[0][god]=2;
    x[god].innerHTML=signC;
 //   console.log(x[3*god].id);
     done=true;   break;  
    } if(gameArr[0][god]==2&&gameArr[2][god]==2&&!x[god+4].innerHTML){
      gameArr[1][god]=2;
      x[god+4].innerHTML=signC;
  //    console.log(x[3*god+1].id);
     done=true;   break;
    }
  }




if(!done){
  for(var god=0;god<3;god++){
    if(gameArr[god][1]==1&&gameArr[god][0]==1&&!x[3*god+2].innerHTML){
      gameArr[god][2]=2;
    x[3*god+2].innerHTML=signC;
   // console.log(x[3*god+2].id);
     done=true;   break;
    } if(gameArr[god][1]==1&&gameArr[god][2]==1&&!x[3*god].innerHTML){
      gameArr[god][0]=2;
    x[3*god].innerHTML=signC;
  //  console.log(x[3*god].id);
     done=true;   break;  
    } if(gameArr[god][0]==1&&gameArr[god][2]==1&&!x[3*god+1].innerHTML){
      gameArr[god][1]=2;
      x[3*god+1].innerHTML=signC;
  //    console.log(x[3*god+1].id);
     done=true;   break;
    }
  }
}
if(!done){
  for(var god=0;god<3;god++){
    
    if(gameArr[1][god]==1&&gameArr[0][god]==1&&!x[god+6].innerHTML){
      gameArr[2][god]=2;
    x[god+6].innerHTML=signC;
  //  console.log(x[3*god+2].id);
     done=true;   break;
    } if(gameArr[1][god]==1&&gameArr[2][god]==1&&!x[god].innerHTML){
      gameArr[0][god]=2;
    x[god].innerHTML=signC;
  //  console.log(x[3*god].id);
     done=true;   break;  
    } if(gameArr[0][god]==1&&gameArr[2][god]==1&&!x[god+4].innerHTML){
      gameArr[1][god]=2;
      x[god+4].innerHTML=signC;
   //   console.log(x[3*god+1].id);
     done=true;   break;
    }
  }}
if(!done){
    var l=0;
     
  var h=Math.floor((Math.random() * 9));
 while(x[h].innerHTML&&l<9){
  h=Math.floor((Math.random() * 9));
 l++;}
    if(h==0) gameArr[0][0]=2;
            // window.alert("lelo");}
 else if(h==1) gameArr[0][1]=2;
 else if(h==2) gameArr[0][2]=2;
 else if(h==3) gameArr[1][0]=2;
 else if(h==4) gameArr[1][1]=2;
 else if(h==5) gameArr[1][2]=2;
 else if(h==6) gameArr[2][0]=2;
 else if(h==7) gameArr[2][1]=2;
 else if(h==8) gameArr[2][2]=2;
 x[h].innerHTML=signC;}
    
   // compWon()
  }
 compWon(); 
 console.log(gameArr[0].concat(gameArr[1]).concat(gameArr[2]));// chance=true;
}
}




});