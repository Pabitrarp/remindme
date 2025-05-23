const nodemailer=require("nodemailer");

const sendmail=async(email,text)=>{
    try {
         const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to:email,
      subject:"Reminder",
      text
    });

    } catch (error) {
        console.log(error.message);
        }
}
module.exports=sendmail;