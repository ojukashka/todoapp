// TODO APP

// "Enter" tovch bolon "Add new task" tovch darj "todo" nemne
// Neg todo nemehed, hajuud n x tovch nemegdene
// x tovchiig darahad neg todo hasagdana
// "Clear All" tovchiig darahad buh todo ustgagdana

const button = document.getElementById("add");
const parent = document.getElementById("task-box");

// ADD TODO BY PRESSING THE BUTTON

button.addEventListener("click", onClick);

function onClick(event) {
  console.log("Add button clicked");

  let input = document.getElementById("text").value;
//   console.log(input);

  const count = document.getElementById("count");
  const elements = document.querySelectorAll("li");
  count.innerText = elements.length;
  console.log(count.innerText);
  


  const todo = document.createElement("li");
  todo.id = "todo";
  todo.class = "todos";
  todo.appendChild(document.createTextNode(input));
  todo.style.color = "#bfbfbf";

  const link = document.createElement("a");
  link.className = "delete-item";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  todo.appendChild(link);
  parent.appendChild(todo);

//   console.log(todo);

// DELETE ONE TODO

  link.addEventListener("click", deleteItem);

  function deleteItem(event) {
    console.log("Delete button clicked");
    todo.remove();
    const elements = document.querySelectorAll("li");
    count.innerText = elements.length;
  }

//   const count = document.getElementById("count");
//   const elements = document.querySelectorAll("li");

//   console.log(elements);

//   console.log(count);
}


// ADD TODO BY PRESSING THE ENTER KEY

document.addEventListener("keypress", onPress); 


function onPress(event) {

    if(event.keyCode === 13) {
        console.log("Enter tovch daragdlaa", event);

        let input = document.getElementById("text").value;
        // console.log(input);
  
        const todo = document.createElement("li");
        todo.id = "todo";
        todo.class = "todos";
        todo.appendChild(document.createTextNode(input));
  
        const link = document.createElement("a");
        link.className = "delete-item";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        todo.appendChild(link);
        parent.appendChild(todo);
  
        // console.log(todo);

        // DELETE ONE TODO
  
        link.addEventListener("click", deleteItem);
  
        function deleteItem(event) {
            console.log("Delete button clicked");
            todo.remove();
            const elements = document.querySelectorAll("li");
            count.innerText = elements.length;
        }
  
            const count = document.getElementById("count");
            const elements = document.querySelectorAll("li");
  
            count.innerText = elements.length;
  
            // console.log(elements);
  
            // console.log(count);
    }   
    
  }


  // DELETE ALL TODOS BY PRESSING THE CLEAR ALL BUTTON

  const clear = document.getElementById("clear");

//   console.log(clear);

  clear.addEventListener("click", deleteAll);

  function deleteAll(event) {
      console.log("Clear button clicked");
      parent.innerHTML = "";

      count.innerText = 0;
  }


