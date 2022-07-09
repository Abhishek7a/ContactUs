let text=document.getElementsByClassName("text")[0];

let t=0,txt;
txt="CONTACT US     "

function typing(){
    if(t==15){
        t=-1;
        text.innerHTML="";

    }
    if(t<txt.length){
        text.innerHTML+=txt.charAt(t);
        t++;
        setTimeout(typing,200);
    }}
    
    typing();