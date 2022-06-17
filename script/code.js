function Create(){
    let container = document.getElementById("container");
    
    container.innerHTML=`<form>
    <h1>AddUp</h1>
    <label>List:
    <div id="List" type="text" placeholder="age">
     
    </div>
    <br>
    <br>
    </label>
    <label>Answer:
         <input id="Answer" type="text" placeholder="answer">
         
        </input>
        </label>
        <br>
        <button id="Button" type="button" onclick="Converter1()">Min</button>
        <button id="Button" type="button" onclick="Converter2()">Max</button>
    </form>`
    
    }
    
    Create()
    
    let array = [5,4,5,7,3,8,6,1];
    document.getElementById('List').innerHTML=array; 

     
    
    

function Converter1(){
    let min = Math.min.apply(0,array)
    document.getElementById('Answer').value= min; 
    
}

function Converter2(){
    let max = Math.max.apply(0,array)
    document.getElementById('Answer').value= max; 
    
}
