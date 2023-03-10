

function saveToLocalStorage(event) {
    event.preventDefault();
    // console.log("hi")

    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let catagory = document.getElementById('catagory').value;
    const obj = {
        amount,
        description,
        catagory
    };

    localStorage.setItem(obj.catagory, JSON.stringify(obj));
    showUserOnScreen(obj)
}

function showUserOnScreen(obj) {
    // console.log("hi")
    const parentElem = document.querySelector('.expenseTracker');

    const childElem = document.createElement('li');
    childElem.className = "Newitem";
    childElem.style.marginTop = "20px"
    childElem.innerHTML = obj.amount + " - " + obj.description + " - " + obj.catagory;
    // console.log(parentElem)
    parentElem.appendChild(childElem);

    // Adding delet button.
    const del = document.createElement('input');
    del.type = "button";
    del.style.marginLeft = "5px"
    del.style.borderRadius = "4px"
    del.style.backgroundColor = "red"
    del.value = "Delet"

    // Adiing edit button.
    const edit = document.createElement('input');
    edit.type = 'button';
    edit.value = 'Edit';
    edit.style.marginLeft = '5px';
    edit.style.borderRadius = '4px';
    edit.style.backgroundColor = 'rgba(210,124,153,0.5)'

    del.onclick = () => {
        localStorage.removeItem(obj.catagory);
        parentElem.removeChild(childElem);

    }
    edit.onclick = () => {
        localStorage.removeItem(obj.catagory);
        parentElem.removeChild(childElem);

        document.getElementById('amount').value = obj.amount;
        document.getElementById('description').value = obj.description;
        document.getElementById('catagory').value = obj.catagory;

    }

    childElem.appendChild(del);
    childElem.appendChild(edit);
    parentElem.appendChild(childElem);

}