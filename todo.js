var count=0;
function addtask(){
    var task = ""; 
    task  = prompt("Enter the task ");
    if(task==null){
        return;
    }
    task = task.charAt(0).toUpperCase() + task.slice(1);

    document.getElementById("list").innerHTML += " <div class = task><div class=topic><div>"+task+"</div><div><button type=button onclick=addtoList("+count+")>+</button></div></div><div class=todo id=todo"+count+"></div></div> ";
    count++;

}

var cnt=0;
function check(a){
    var x = "d"+a;
    var z = "l"+a;
    var y = document.getElementById(x);
    if(y.checked == true){
        document.getElementById(z).setAttribute("style","text-decoration:line-through; opacity:0.5;");
    }else{
        document.getElementById(z).setAttribute("style","text-decoration:none; opacity:1;");
    }
    
}
function addtoList(x){
    var todo = "";
    
    todo  = prompt("Enter the sub-tasks ");
    if(todo==null){
        return;
    }
    var a = "todo"+x;
    todo = todo.charAt(0).toUpperCase() + todo.slice(1);
    document.getElementById(a).innerHTML += "<input type=checkbox id=d"+cnt+" onclick=check("+cnt+")><label id=l"+cnt+">"+todo+"</label><br>";
    cnt++;
}



