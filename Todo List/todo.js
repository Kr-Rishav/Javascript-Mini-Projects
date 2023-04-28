const item = document.querySelector("#item");
console.log(item);

const list = document.querySelector(".list");
console.log(list);


item.addEventListener("keyup", function(event){
              // console.log(event);
              if(event.key == "Enter"){
                            console.log(this.value);
                            addToDo(this.value);
                            this.value = "";
              }
}); 


const addToDo = (element)=>{
              const newList = document.createElement("li");
              newList.innerHTML = `${element}
               <i class="fas fa-times"> </i>`;

               newList.addEventListener("click",function(){
                            this.classList.toggle("done");
                           
               });

               newList.querySelector("i").addEventListener("click", function(){
                            newList.remove();
               });


              // console.log(element);
              todobox.appendChild(newList);
};




