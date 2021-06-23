// MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';

// function goBack() {
//     window.history.back()
// }

// // EVENTS

// // Mouse Event
// btn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(e.target.className);
//     document.getElementById('my-form').style.background = 'yellow';
//     document.querySelector('body').classList.add('bg-light');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// // Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//     document.querySelector('.container').append(nameInput.value);
// });


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Create new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

        // Append to ul
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}