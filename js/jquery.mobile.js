function $Showhtml(){
    document.getElementById('loading').style.display = "none";
    document.getElementById('loadBox').innerHTML = loading;
}
setTimeout("$Showhtml();",parent.cs_adloadtime*10);
