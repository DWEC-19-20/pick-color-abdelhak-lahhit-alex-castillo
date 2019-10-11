'use strict';

/* Función que al pasar un valor RGB devuelva el resultado en representación hexadecimal
*/

var r=document.getElementById('r');
var g=document.getElementById('g');
var b=document.getElementById('b');

var hexad=document.getElementById('hex');
function convert(){

  var red= r.value;
  var green= g.value;
  var blue= b.value;


  var hexC= "#"+getHex(red)+getHex(green)+getHex(blue);
  hexad.value=hexC;
  var caja=document.getElementById("caja");
  caja.style.background = "rgb("+red+","+green +","+ blue+")";

};
function rgb(r,g,b){
  var r, g ,b;
  r=others(r);
  g=others(g);
  b=others(b);
  var hexC= "#"+getHex(r)+getHex(g)+getHex(b);
  
  return hexC.toUpperCase();
};

function getHex(value){
  var hexa=parseInt(value).toString(16);
  return hexa.length==1?"0"+hexa:hexa;
 
};
function others(x){
  if (x>255)x=255;
  else if (x<0)x=0;
return x;
}

/* Función que al pasar un valor RGB en representación hexadecimal
   devuelve la representación en formato decimal con el formato RRRGGGBB
*/
function hex(hexa){
                   
 
    var r,g,b,i;
    if (hexa.substr(0,1)=="#"){
      i=1;
    }
    else {
      i=2;
    }
    r=hexa.substr(i,2);
    r=hexAdecimal(r);
    r=sicero(r);
    g=hexa.substr(i+2,2);
    g=hexAdecimal(g);
    g=sicero(g);
    b=hexa.substr(i+4,2);
    b=hexAdecimal(b);
    b=sicero(b);
return r+""+g+""+b;

  }

  function hexAdecimal(hex){

    var decimal=parseInt(hex,16);
    return decimal;
  }
  function sicero(x){
    if (x<10)x="0"+x;
    if (x<100)x="0"+x;
    return x;
  }
  

  function convertir(){
                     
    var hexadecimal='#';
    var h=document.getElementById('rgb').value;
  
  if(h.length==4){
    for(var i=1;i < h.length;i++){
        hex+=h[i]+h[i];
    }
  }
  else if(h.length==7){
    hex=h;
  }
  else
    {
      window.alert("mete un numero valido ");
    }
  var getHex=hex.substring(1);
  var getHex1=getHex.substring(0,2);
  var getHex2=getHex.substring(2,4);
  var getHex3=getHex.substring(4);
  
  var getInt1=parseInt(getHex1,16);
  var getInt2=parseInt(getHex2,16);
  var getInt3=parseInt(getHex3,16);
  var setInt = document.getElementById('int')
  setInt.value='rgb('+getInt1+' ,'+getInt2+' ,' + getInt3 +')';
  var caja=document.getElementById("cajaa");
  caja.style.background = "rgb("+getInt1+","+getInt2 +","+ getInt3+")";
  };

  
