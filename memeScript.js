
const inputLink = document.querySelector("input[name ='memeLink']")
const inputTopText = document.querySelector("input[name ='topText']")
const inputBottomText = document.querySelector("input[name ='bottomText']")
const outPut = document.querySelector("#outPutImage")
const form = document.querySelector("#memeForm")





form.addEventListener("submit",function(e){
    e.preventDefault();
    // console.log(inputLink.value,inputTopText.value, inputBottomText.value);
    makeMeme(inputLink.value,inputTopText.value, inputBottomText.value);   


});



function makeMeme(Link,TopText,BottomText){
    const enteredMeme = document.createElement('img');
    const top = document.createElement('h2');
    const imageDiv = document.createElement('div');
    // const newDiv = document.createElement('div');
    const h2Div = document.createElement('div');
    const bottom = document.createElement('h2');
    const removeButton = document.createElement("button");
    
    h2Div.appendChild(top);
    h2Div.appendChild(bottom);
    outPut.appendChild(imageDiv);    
    outPut.appendChild(h2Div);    
    imageDiv.appendChild(enteredMeme);    
    
    imageDiv.appendChild(removeButton);
    // imageDiv.appendChild(removeButton); 

    
    removeButton.innerText = "X";
    enteredMeme.classList.add('image');
    top.classList.add('topText');
    bottom.classList.add('bottomText');
    imageDiv.classList.add('imageDiv');
    removeButton.classList.add('remove');
    newDiv.classList.add("newDiv")
    top.innerText = TopText;
    bottom.innerText= BottomText; 

    enteredMeme.setAttribute('src', Link);

    enteredMeme.innerHTML = Link; 

    removeButton.addEventListener("mouseover", function( event ){
        event.target.style.color = "gray";
        setTimeout(function(){
            event.target.style.color = "";
        },1000);
    }, false); 

    removeButton.addEventListener('click', function(event){
        event.preventDefault();
        if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
      }

    }) 
    
    
    return makeMeme 
    
}
