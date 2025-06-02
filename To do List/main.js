document.querySelector('#add').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert('You Do not Enter any Task!!')
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                
                <button class= "del">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;


        var current_text = document.querySelectorAll(".del")
        for (var i =0; i<current_text.length;i++){
            current_text[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task")
        for (var i =0; i<tasks.length;i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        } 

        document.querySelector("#newtask input").value = ""
    }
}