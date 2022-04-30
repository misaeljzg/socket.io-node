//HTML REFERENCES

const lblOnline = document.querySelector('#lblonline');
const lblOffline = document.querySelector('#lbloffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
    //console.log('Connected');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    //console.log('Disconnected from the server');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('send-message', (payload) => {
    console.log(payload);
});

btnSend.addEventListener('click', () => {
    const message = txtMessage.value;
    const payload = {
        message,
        id: 'Adsfasdfas',
        date: new Date().getTime()
    };

    socket.emit('send-message', payload, (id) => {
        console.log('From the server', id);
    });

});