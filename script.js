const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

const message = () => {
    if (messageIn.value == '') {
        alert('please enter a message')
    }else{ messageOut.innerHTML = messageIn.value.trim();
        messageIn.value = '';}
};

sendBtn.addEventListener('click', message)