let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');
let elementlist = document.getElementsByClassName('element-list')[0]
let deletbutton= document.createElement('img')
deletbutton.src = 'remove.png'



btn.addEventListener('click', ()=> {
   
   //console.log (input + list + el)
     let txt = input.value;
    if(txt === ""){
        alert('you must write something');  
    }else{ 
        let row = document.createElement ('div');
        row.className = 'row' 
        elementlist.appendChild(row)
        deletbutton.style.float= 'right'


        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox' 
        row.appendChild(checkbox) 
        checkbox.style.float= 'left';
        checkbox.style.margin = '12px';
        let li = document.createElement('li');

        li.innerHTML = txt
        row.appendChild(li)
        row.appendChild(deletbutton)
        checkbox.onclick = function (){
            crossout(li,checkbox)

        }
    
        deletbutton.onclick = function(){
            elementlist.removeChild(row)
            
        }
 }






})
 





function crossout(task,checkbox){
    if(checkbox.checked){
        task.style.textDecoration='line-through'
        
    }
    else{
        checkbox.unchecked=false
        task.style.textDecoration='none'
    }

   
   
}
list.addEventListener('click', e =>{
   
    if(e.target.tagName == 'LI'){
        e.target.classlist.toggle('checked');

    }

})