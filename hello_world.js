function greet() {
    document.getElementById('result').innerHTML = 'Hello World';
    
   
    var elements = document.getElementsByClassName('child');
    console.log(elements)
    for (i = 0; i < elements.length; i++) {
        console.log(i)
        // console.log("element length", elements.length)
        // console.log("Elements i" ,elements[i])
        // console.log("pre removal element clasname", elements[i].className)

        // console.log("class name ",elements[i].className)

        //elements[i].className
        //elements[i].className.remove('child');
        //elements[i].className.replace("child","child2") 
        //elements[i].className -= "child";
        //elements[i].className += "child2";
        console.log(elements[i].classList)
        elements[i].classList.replace('child','child2')
        //elements[i].classList.add('child2')

     }
    
}

document.getElementById('go').addEventListener('click', greet);


// var1 = document.getElementsByClassName('child') 
// console.log(var1)
// var1.className = 'child2'

// var testarray = document.getElementsByClassName("currentclass");
// for(var i = 0; i < testarray.length; i++)
// {
//     testarray[i].className += "classtobeadded";
// }
//     return false;
// }

// var el = document.getElementsByClassName('theClassThatsThereNow');
// el.className = el.className.replace(/\s*theClassThatsThereNow\s*/, ' newClassWithYourStyleRules ');