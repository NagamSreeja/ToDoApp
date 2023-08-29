function allTasks(){
    var ul = document.getElementById("list-container");
    var inputBox = document.getElementById("inputTask");
    if(inputBox.value === ""){
        alert("You must add a task !!");
    }
    else{
        var task = document.getElementById("inputTask").value;
        var listItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var taskSpan = document.createElement("span");
        taskSpan.textContent = task;  
        var deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-circle-xmark");
        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteIcon);
        ul.appendChild(listItem);
        deleteIcon.addEventListener("click", function(){
            ul.removeChild(listItem);
        });
    }
    inputBox.value = ""; 

    document.addEventListener("click",function(){
        checkbox.addEventListener("click", function() {
            if (checkbox.checked) {
              taskSpan.classList.add("completed");
            } else {
              taskSpan.classList.remove("completed");
            }
          });
    });

};



