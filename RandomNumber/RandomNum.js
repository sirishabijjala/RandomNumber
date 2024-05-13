let len=5
while(true){
    let x = Math.floor((Math.random() * 10)+1);
for(i=1;i<=len;i++){
    let y = prompt("Guess a number")
    if (y==x){
        alert("Congrats, you won the game!!")    
        break;
    }
    if(y>x){
      alert("Choose the number less than given number")
    }
    if(y<x){
         alert("Choose the number greater than given number")
    }
    if(i==len && y!=x){
        alert(" you Lose the game")
    }
}
s=prompt("Do you want to continue the game? type yes or no")
    if(s=="no"){
        break;
    }
}