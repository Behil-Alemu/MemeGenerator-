
const inputLink = document.querySelector("input[name ='memeLink']")
const inputTopText = document.querySelector("input[name ='topText']")
const inputBottomText = document.querySelector("input[name ='bottomText']")
const outPut = document.querySelector(".outPutImage")
const form = document.querySelector("#memeForm")





form.addEventListener("submit",function(e){
    e.preventDefault();
    // console.log(inputLink.value,inputTopText.value, inputBottomText.value);
    makeMeme(inputLink.value,inputTopText.value, inputBottomText.value);   


});



function makeMeme(Link,TopText,BottomText){
    const newDiv = document.createElement('div');
    newDiv.classList.add('memeDiv');
    const imgMeme = document.createElement('img');
    imgMeme.classList.add('image');
    imgMeme.setAttribute('src', Link);
    newDiv.append(imgMeme)


    const top = document.createElement('p');
    top.classList.add('topText');
    top.innerText = TopText;
    newDiv.append(top);

    const bottom = document.createElement('p');
    bottom.classList.add('bottomText');
    bottom.innerText= BottomText; 
    newDiv.append(bottom);
    
    const removeButton = document.createElement("button");
    removeButton.classList.add('remove');
    removeButton.innerText = "X";
    newDiv.append(removeButton);

    outPut.append(newDiv);



    removeButton.addEventListener("mouseover", function( event ){
        event.target.style.color = "gray";
        setTimeout(function(){
            event.target.style.color = "";
        },1000);
    }, false); 
}

    outPut.addEventListener('click', function(event){
        if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
      }

    }) 
    
    

