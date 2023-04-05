let Num=0, Opr=0,result=0;
function Number(Num){
    document.getElementById("Display").value=document.getElementById("Display").value+Num;
}
function DisableBtn(){
    document.getElementById("point").disabled = true;
}
function Operant(opr){
    Num=document.getElementById("Display").value;
    document.getElementById("Display").value="";
    Opr=opr; 
    document.getElementById("point").disabled = false;

}
function Result(){
    console.log(Opr)
    if(Opr==1){
        result=Num/document.getElementById("Display").value;
        document.getElementById("Display").value=result;
    }
    else if(Opr==2){
        result=Num*document.getElementById("Display").value;
        document.getElementById("Display").value=result;
    }
    else if(Opr==3){
        var a=document.getElementById("Display").value;
        result=parseFloat(Num)+parseFloat(a);
        document.getElementById("Display").value=result;
    }
    else if(Opr==4){
        result=Num-document.getElementById("Display").value;
        document.getElementById("Display").value=result;
    }
    document.getElementById("point").disabled = false;
}
function clrScrn(){
    document.getElementById("Display").value="";
}
