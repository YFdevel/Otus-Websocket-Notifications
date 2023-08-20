
const notificationBtn=document.getElementById("notification-btn");


const worker = new Worker("worker.js");

notificationBtn.addEventListener('click',  async(e) => {

    if(!e.target.classList.contains('yes')){
       e.target.innerHTML="Отключить уведомления";
        e.target.classList.remove('no');
        e.target.classList.add('yes');
       await worker.postMessage('start')


worker.addEventListener('message', (event) => {
    if (event.data.type === 'message') {
        const message = event.data.payload

        if (window.Notification && Notification.permission !== "denied") {
            Notification.requestPermission((status) => {

                const notification = new Notification('Yuriy', {
                    body: message,
                    icon: './images/notification.png'
                })
                 setTimeout(notification.close(), 500)
            })
        }
    }
    else if(event.data.type === 'close'){
        worker.removeEventListener('message',()=>{})
    }
});

       }
    else{
        await worker.postMessage( 'stop' );
        e.target.classList.remove('yes');
        e.target.classList.add('no');
        e.target.innerHTML="Хочу получать уведомления на этом сайте";
        location.reload()
    }
});





