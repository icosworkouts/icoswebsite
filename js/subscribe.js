function sendMail(params) {
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        message:document.getElementById("mssg").value,
    };

    emailjs.send('service_ae3men6','template_fz61bup',tempParams)
    .then(function(res){
        console.log("Sucess",res.status);
    })
    swal("Successfully Recorded", "Our Team Will Contact you within 24 Hours");
    
}