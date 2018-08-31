function updateTodo(){
    var todoInput = $("input[name='todoInput']").val();
    var todoPayload = {
        todoInput: todoInput,
        completed: '0'
    };
    $.post("http://localhost:3000/post", todoPayload, function(data){
        alert("the response was: " + data);
    });

}