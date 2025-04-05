emailjs.init("7dCV6thJfWEIELt4G")

function sendEmail(title, name, message, emailGet){
    emailjs.send("fckuiosif","template_8e9j99w",{
        title: title,
        name: name,
        message: message,
        email: emailGet,
    })
}









