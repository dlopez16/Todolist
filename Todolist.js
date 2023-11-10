

// 1. when submit is pressed it will add the input text into the li's
// 2.  render  the rest of the list







const checkbox = document.querySelectorAll("li");

// const addClass = function () {
//     for (let i = 0; i < checkbox.length; i++) {
//         checkbox[i].addEventListener('change', function () {
//             console.log(this.name)
//             if (this.checked) {
//                 console.log("checked")
//             } else {
//                 console.log("unchecked")
//             }
//         });
//     }
// }

// addClass();

document.querySelector("button").addEventListener('click', function () {
    let parent = document.querySelector("#parent")
    const inputText = document.querySelector('.submitInput').value;
    if (inputText === "") return
    let inputBox = document.createElement('input');
    let todoLi = document.createElement('li');
    inputBox.setAttribute('type', 'checkbox');

    inputBox.addEventListener('change', function () {
        todoLi.style.textDecoration = inputBox.checked ? 'line-through' : 'none';
    })

    let deleteButton = document.createElement('button');
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", function () {
        todoLi.remove();

    })


    todoLi.appendChild(inputBox);
    todoLi.appendChild(document.createTextNode(inputText));
    todoLi.appendChild(deleteButton);

    parent.appendChild(todoLi)



    // addClass();

})



// document.querySelector("button").addEventListener('click', function () {
//     let parent = document.querySelector("#parent")
//     const inputText = document.querySelector('.submitInput').value;
//     if (inputText === "") return
//     let li = document.createElement('li');
//     let text = li.textContent = inputText;
//     li.setAttribute('class', 'strike')
//     li.innerHTML = `<input type="checkbox" name="checkbox">${text}</input>`
//     parent.appendChild(li)

// })





// https://stackoverflow.com/questions/50891965/how-do-i-put-a-line-through-the-text-after-the-check-box-is-clicked



