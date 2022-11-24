var jmlAngkot=10;
var noAngkot=1;
var beroperasi=6;

for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){

    if(noAngkot <= 6 && noAngkot !== 5){
        console.log("nice" + noAngkot);
    }
    else if(noAngkot == 8 || noAngkot == 10 || noAngkot == 5){
        console.log("lembur"+ noAngkot)

    }
    
    else{
        console.log("not nice" + noAngkot)
    }


}