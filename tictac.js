function myfunc(){
    var b1=document.getElementById("b1").value;
    var b2=document.getElementById("b2").value;
    var b3=document.getElementById("b3").value;
    var b4=document.getElementById("b4").value;
    var b5=document.getElementById("b5").value;
    var b6=document.getElementById("b6").value;
    var b7=document.getElementById("b7").value;
    var b8=document.getElementById("b8").value;
    var b9=document.getElementById("b9").value;


    var bv1=document.getElementById("b1");
    var bv2=document.getElementById("b2");
    var bv3=document.getElementById("b3");
    var bv4=document.getElementById("b4");
    var bv5=document.getElementById("b5");
    var bv6=document.getElementById("b6");
    var bv7=document.getElementById("b7");
    var bv8=document.getElementById("b8");
    var bv9=document.getElementById("b9");



//x player won check-------------------------------------------------------------------
    //b1,b2,b3
    if((b1=="X") && (b2=="X") && (b3=="X")){
        document.getElementById('result') .innerHTML = "Player X won"; 
        bv4.disabled = true; 
        bv5.disabled = true; 
        bv6.disabled = true; 
        bv7.disabled = true; 
        bv8.disabled = true; 
        bv9.disabled = true; 
        bv1.style.color="blue";
        bv2.style.color="blue";
        bv3.style.color="blue";
        // console.log("x won")
        document.getElementById("overlay").style.display='flex';
    }

    //b4,b5,b6
    else if(b4=="X" && b5=="X" && b6=="X"){
        document.getElementById('result') .innerHTML = "Player X won"; 
        bv1.disabled = true; 
        bv2.disabled = true; 
        bv3.disabled = true; 
        bv7.disabled = true; 
        bv8.disabled = true; 
        bv9.disabled = true; 
        bv4.style.color="blue";
        bv5.style.color="blue";
        bv6.style.color="blue";
        document.getElementById("overlay").style.display='flex';

    }

    //b7,b8,b9
    else if(b7=="X" && b8=="X" && b9=="X"){
        document.getElementById('result') .innerHTML = "Player X won"; 
        bv1.disabled = true; 
        bv2.disabled = true; 
        bv3.disabled = true; 
        bv4.disabled = true; 
        bv5.disabled = true; 
        bv6.disabled = true; 

        bv7.style.color="blue";
        bv8.style.color="blue";
        bv9.style.color="blue";
        document.getElementById("overlay").style.display='flex';

    }

    //b1,b4,b7
    else if(b1=="X" && b4=="X" && b7=="X"){
        document.getElementById('result') .innerHTML = "Player X won"; 
        bv2.disabled = true; 
        bv3.disabled = true; 
        bv5.disabled = true; 
        bv6.disabled = true; 
        bv8.disabled = true; 
        bv9.disabled = true;         
        bv1.style.color="blue";
        bv4.style.color="blue";
        bv7.style.color="blue";
        document.getElementById("overlay").style.display='flex';

    }

    //b2,b5,b8
    else if(b2=="X" && b5=="X" && b8=="X"){
        document.getElementById('result') .innerHTML = "Player X won"; 
        bv1.disabled = true; 
        bv3.disabled = true; 
        bv4.disabled = true; 
        bv6.disabled = true; 
        bv7.disabled = true; 
        bv9.disabled = true; 

        
        bv2.style.color="blue";
        bv5.style.color="blue";
        bv8.style.color="blue";
        document.getElementById("overlay").style.display='flex';

    }

    //b3,b6,b9
    else if(b3=="X" && b6=="X" && b9=="X"){
        document.getElementById('result') .innerHTML = "Player X won";
        document.getElementById("overlay").style.display='flex';
        bv1.disabled = true; 
        bv2.disabled = true; 
        bv4.disabled = true; 
        bv5.disabled = true; 
        bv7.disabled = true; 
        bv8.disabled = true; 

        
        bv3.style.color="blue";
        bv6.style.color="blue";
        bv9.style.color="blue";
    }

    //b3,b5,b7
    else if(b3=="X" && b5=="X" && b7=="X"){
        document.getElementById('result') .innerHTML = "Player X won";
        document.getElementById("overlay").style.display='flex';

        bv1.disabled = true; 
        bv2.disabled = true; 
        bv4.disabled = true; 
        bv6.disabled = true; 
        bv8.disabled = true; 
        bv9.disabled = true; 

        bv3.style.color="blue";
        bv5.style.color="blue";
        bv7.style.color="blue";
    }


    //b1,b5,b9
    else if(b1=="X" && b5=="X" && b9=="X"){
        document.getElementById('result') .innerHTML = "Player X won";
        document.getElementById("overlay").style.display='flex';

        bv2.disabled = true; 
        bv3.disabled = true; 
        bv4.disabled = true; 
        bv6.disabled = true; 
        bv7.disabled = true; 
        bv8.disabled = true; 

        
        bv1.style.color="blue";
        bv5.style.color="blue";
        bv9.style.color="blue";
    }


// O player wins check
 //b1,b2,b3
 if((b1=="O") && (b2=="O") && (b3=="O")){
    document.getElementById('result') .innerHTML = "Player O won"; 
    document.getElementById("overlay").style.display='flex';

    bv4.disabled = true; 
    bv5.disabled = true; 
    bv6.disabled = true; 
    bv7.disabled = true; 
    bv8.disabled = true; 
    bv9.disabled = true; 
    bv1.style.color="red";
    bv2.style.color="red";
    bv3.style.color="red";
    // console.log("O won")
}

//b4,b5,b6
else if(b4=="O" && b5=="O" && b6=="O"){
    document.getElementById('result') .innerHTML = "Player O won"; 
    document.getElementById("overlay").style.display='flex';

    bv1.disabled = true; 
    bv2.disabled = true; 
    bv3.disabled = true; 
    bv7.disabled = true; 
    bv8.disabled = true; 
    bv9.disabled = true; 
    bv4.style.color="red";
    bv5.style.color="red";
    bv6.style.color="red";
}

//b7,b8,b9
else if(b7=="O" && b8=="O" && b9=="O"){
    document.getElementById('result') .innerHTML = "Player O won"; 
    document.getElementById("overlay").style.display='flex';

    bv1.disabled = true; 
    bv2.disabled = true; 
    bv3.disabled = true; 
    bv4.disabled = true; 
    bv5.disabled = true; 
    bv6.disabled = true; 
    bv7.style.color="red";
    bv8.style.color="red";
    bv9.style.color="red";
}

//b1,b4,b7
else if(b1=="O" && b4=="O" && b7=="O"){
    document.getElementById('result') .innerHTML = "Player O won"; 
    document.getElementById("overlay").style.display='flex';

    bv2.disabled = true; 
    bv3.disabled = true; 
    bv5.disabled = true; 
    bv6.disabled = true; 
    bv8.disabled = true; 
    bv9.disabled = true; 

    
    bv1.style.color="red";
    bv4.style.color="red";
    bv7.style.color="red";
}

//b2,b5,b8
else if(b2=="O" && b5=="O" && b8=="O"){
    document.getElementById('result') .innerHTML = "Player O won"; 
    document.getElementById("overlay").style.display='flex';

    bv1.disabled = true; 
    bv3.disabled = true; 
    bv4.disabled = true; 
    bv6.disabled = true; 
    bv7.disabled = true; 
    bv9.disabled = true; 

    
    bv2.style.color="red";
    bv5.style.color="red";
    bv8.style.color="red";
}

//b3,b6,b9
else if(b3=="O" && b6=="O" && b9=="O"){
    document.getElementById('result') .innerHTML = "Player O won"; 
    document.getElementById("overlay").style.display='flex';

    bv1.disabled = true; 
    bv2.disabled = true; 
    bv4.disabled = true; 
    bv5.disabled = true; 
    bv7.disabled = true; 
    bv8.disabled = true; 

    
    bv3.style.color="red";
    bv6.style.color="red";
    bv9.style.color="red";
}

//b3,b5,b7
else if(b3=="O" && b5=="O" && b7=="O"){
    document.getElementById('result') .innerHTML = "Player O won"; 
    document.getElementById("overlay").style.display='flex';

    bv1.disabled = true; 
    bv2.disabled = true; 
    bv4.disabled = true; 
    bv6.disabled = true; 
    bv8.disabled = true; 
    bv9.disabled = true; 

    bv3.style.color="red";
    bv5.style.color="red";
    bv7.style.color="red";
}


//b1,b5,b9
else if(b1=="O" && b5=="O" && b9=="O"){
    document.getElementById('result') .innerHTML = "Player O won"; 
    document.getElementById("overlay").style.display='flex';

    bv2.disabled = true; 
    bv3.disabled = true; 
    bv4.disabled = true; 
    bv6.disabled = true; 
    bv7.disabled = true; 
    bv8.disabled = true; 

    
    bv1.style.color="red";
    bv5.style.color="red";
    bv9.style.color="red";
}

// tie match
else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'|| b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O')&& 
(b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O'))
 { 
document.getElementById('result') .innerHTML = "Match Tie"; 
document.getElementById("overlay").style.display='flex';

}  

}


function reset(){
    location.reload(); 
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
}

count=1;
function myfunc1(){
    if(count==1){
        document.getElementById('b1').value='X';
        // console.log(  document.getElementById('b1').value);
        document.getElementById('b1').disabled=true;
        count=0;
    }
    else{
        document.getElementById('b1').value='O';
        document.getElementById('b1').disabled=true;
        count=1;
    }
}

function myfunc2(){
    if(count==1){
        document.getElementById('b2').value="X";
        document.getElementById('b2').disabled=true;
        count=0;
    }
    else{
        document.getElementById('b2').value="O";
        document.getElementById('b2').disabled=true;
        count=1;
    }
}

function myfunc3(){
    if(count==1){
        document.getElementById('b3').value="X";
        document.getElementById('b3').disabled=true;
        count=0;
    }
    else{
        document.getElementById('b3').value="O";
        document.getElementById('b3').disabled=true;
        count=1;
    }
}
function myfunc4(){
    if(count==1){
        document.getElementById('b4').value="X";
        document.getElementById('b4').disabled=true;
        count=0;
    }
    else{
        document.getElementById('b4').value="O";
        document.getElementById('b4').disabled=true;
        count=1;
    }
}

function myfunc5(){
    if(count==1){
        document.getElementById('b5').value="X";
        document.getElementById('b5').disabled=true;
        count=0;
    }
    else{
        document.getElementById('b5').value="O";
        document.getElementById('b5').disabled=true;
        count=1;
    }
}

function myfunc6(){
    if(count==1){
        document.getElementById('b6').value="X";
        document.getElementById('b6').disabled=true;
        count=0;
    }
    else{
        document.getElementById('b6').value="O";
        document.getElementById('b6').disabled=true;
        count=1;
    }
}


function myfunc7(){
    if(count==1){
        document.getElementById('b7').value="X";
        document.getElementById('b7').disabled=true;
        count=0;
    }
    else{
        document.getElementById('b7').value="O";
        document.getElementById('b7').disabled=true;
        count=1;
    }
}


function myfunc8(){
    if(count==1){
        document.getElementById('b8').value="X";
        document.getElementById('b8').disabled=true;
        count=0;
    }
    else{
        document.getElementById('b8').value="O";
        document.getElementById('b8').disabled=true;
        count=1;
    }
}


function myfunc9(){
    if(count==1){
        document.getElementById('b9').value="X";
        document.getElementById('b9').disabled=true;
        count=0;
    }
    else{
        document.getElementById('b9').value="O";
        document.getElementById('b9').disabled=true;
        count=1;
    }
}

function closepopup(){
    document.getElementById("overlay").style.display="none"
}



