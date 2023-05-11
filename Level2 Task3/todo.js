const list=document.getElementById('list');
const task=document.getElementById('task');
function addtask()
{
   if(task.value =='')
   {
    alert("PLEASE ENTER SOMETHING!!");
   }
   else
   {
    let li=document.createElement("li");
    li.innerHTML=task.value;
    list.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
   }
   task.value="";
savedata();
} 

list.addEventListener("click",function(e){
    if(e.target.tagName ==="LI")
    {
      e.target.classList.toggle("listdata");
savedata();
    }
    else if(e.target.tagName==="SPAN")
    {e.target.parentElement.remove();
      savedata();
   }
},false);


function savedata()
{
localStorage.setItem("data",list.innerHTML);



}
function showdata()
{
   list.innerHTML=localStorage.getItem("data");
}
showdata();
