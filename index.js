var list = document.getElementById("todo-list")
var btnAdd = document.getElementById("add-item")
var item1 = document.getElementById("item1")
var task = document.getElementById("task")
var updateItem = document.getElementById("update-item")

// btnAdd.addEventListener('click' , function(){
//     var newListElement = document.createElement('li')
//     var textNode = document.createTextNode('list of items ' + list.childElementCount )
//     newListElement.appendChild(textNode);
//     newListElement.id = "item" +(list.childElementCount )
//     // list.insertBefore(newListElement, item1)
//     list.appendChild(newListElement);
// });
var initialValue = " "
task.addEventListener("input", function(e){
    initialValue=(e.target.value)
})


    // btnAdd.addEventListener('click' , function(){
    //     if(initialValue !==  undefined && initialValue !== null && initialValue !== " "){
    //     var newListElement = document.createElement('li')
    //     var textNode = document.createTextNode(initialValue )
    //     newListElement.appendChild(textNode);
    //     newListElement.id = "item" +(list.childElementCount )
    //     // list.insertBefore(newListElement, item1)
    //     list.appendChild(newListElement);
    //     task.value =" "
    //     initialValue =" "
    //     }
    //     else{
    //         alert("please enter a valid item to be added")
    //     }
    // });
    function createNewNode(){
          var newListElement = document.createElement('li')
        var textNode = document.createTextNode(initialValue )
        newListElement.appendChild(textNode);
        newListElement.id = "item" +(list.childElementCount )
        return newListElement;
    }
    btnAdd.addEventListener('click' , function(){
        if(initialValue !==  undefined && initialValue !== null && initialValue !== " "){
            var newListElement = createNewNode();
        // list.insertBefore(newListElement, item1)
        list.appendChild(newListElement);
        task.value =" "
        initialValue =" "
    } 
    else{
        alert("please enter a valid item to be added")
    }
    // btnAdd.addEventListener('click' , addListItem)
    updateItem.addEventListener('click', function(){
        if (initialValue !== ' '){
            var firstElement = list.firstElementChild;
            var newListElement = createNewNode();
            list.replaceChild(newListElement, firstElement)
            
        }else{
            alert("please enter a valid item to be added")
        }
        
        task.value =" "
        initialValue =" "
       
        })
        
    });



