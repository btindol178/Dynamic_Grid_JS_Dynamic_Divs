function view1function() {
        
    let elements2 = document.querySelectorAll('.child');
    for(let i = 0; i<elements2.length;i++){
      elements2[i].className ="child2";
  
    }   
}

// when the button is clicked with the id go then it changes the format!! 
document.getElementById('view1').addEventListener('click', view1function);

//////////////////////////////////////////////////////////////////////////////////////////

function view2function() {

    let elements2 = document.querySelectorAll('.child2');
    for(let i = 0; i<elements2.length;i++){
      elements2[i].className ="child";
  
    }   
}

document.getElementById('view2').addEventListener('click', view2function);