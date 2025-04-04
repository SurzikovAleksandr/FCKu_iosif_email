emailjs.init("7dCV6thJfWEIELt4G")
let btnSend = document.querySelector('#sendEmail')
btnSend.addEventListener('click', ()=>{
    span.innerHTML = ''
    let data = (document.querySelector('#messageForm'))
    if( data.message.value.length != 0 & data.name.value.length != 0 & data.title.value.length != 0 & data.emailGet.value.length != 0 & data.message.value.length <= 200 & data.name.value.length <= 30 & data.title.value.length <= 50 & data.emailGet.value.length <= 50){
        sendEmail(data.title.value,data.name.value,data.message.value,data.emailGet.value)
    }else{
        console.log('Какая-то информация не заполнена или произошла ошибка')
        span.innerHTML = 'Какая-то информация не заполнена'
    }
    

})
let span = document.querySelector('span')
function sendEmail(title, name, message, emailGet){
    emailjs.send("fckuiosif","template_8e9j99w",{
        title: title,
        name: name,
        message: message,
        email: emailGet,
    }).then(
        (response) => {
           console.log('SUCCESS!', response);
           span.innerHTML = 'Сообщение успешно отправлено'
        },
        (error) => {
           console.log('Failed...', error)
           span.innerHTML = 'Неудачная попытка отправить сообщение... Видимо сам бог этого не хочет';
        },
    );
}