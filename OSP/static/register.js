function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    // Create a SMTP crendentials that I showed u in my previous video

    // Generating random number as OTP;

    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>Welocome to online salesportal</h1> <br>
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        SecureToken : "9d2bf466-2671-47b5-8b47-4ee277c51dce",
        To : email.value,
        From : "onlinesalesportal14@gmail.com",
        Subject : "OTP for registering to Online Sales Portal",
        Body : emailbody
    }).then(
        //if success it returns "OK";
      message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value+"\n (If not recieved Check Spam)");

            // now making otp input visible
            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',()=>{
                // now check whether sent email is valid
                if(otp_inp.value == otp_val){
                    alert("Email address verified...");
                    document.getElementsByClassName("register_button")[0].classList.remove('disabled')
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
      }
    );
}