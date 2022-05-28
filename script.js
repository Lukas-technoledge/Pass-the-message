const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

const message = () => {
    messageOut.innerHTML = messageIn.value.trim();
    messageIn.value = '';
};

sendBtn.addEventListener('click', message)