
function calculate(){
    var c=document.getElementById("price").value;
    console.log(c);
    var q=document.getElementById("qty").value;
    console.log(q)
    var cq =c*q;
    var d=document.getElementById("dis").value/100;
    console.log(d);
    var l=(cq-(cq*d));
    console.log(l);
    var tt=document.getElementById("sub");
    tt.value=l;
}
var Items=[];
 
function Add(){

    var item = document.getElementById("iname").value;
    var pr   =document.getElementById("price").value;
    var qt   =document.getElementById("qty").value;
    var di   =document.getElementById("dis").value;
    var subtot=document.getElementById("sub").value;

    Items.push({
        it: item,
        ps: pr,
        qy: qt,
        ds: di,
        st: subtot,
    });
    clear();
    reloadTable();
}
function reloadTable(){
    var rows =" "; 
    for(var i=0; i<Items.length;i++){
        // var li =i+1;
        rows +="<tr id = 'table'><td>" + Items[i].it +
        "</td><td>" + Items[i].ps +
        "</td><td>" + Items[i].qy +
        "</td><td>" + Items[i].ds +
        "</td><td>" + Items[i].st +
        "</td></tr>"
    }
    document.getElementById('tbody').innerHTML = rows;
}
function clear(){
    document.getElementById("iname").value="";
    document.getElementById("price").value = "";
    document.getElementById("qty").value  ="";
    document.getElementById("dis").value  ="";
    document.getElementById("sub").value="";
}