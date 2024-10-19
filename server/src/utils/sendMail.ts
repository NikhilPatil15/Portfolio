import {createTransport} from 'nodemailer' 

const sendMail = async(userName:any,password:any,email:string,message:string,name:string) => {
  const transport = createTransport({
    host:'smtp.gmail.com',
    port:587,
    auth:{
        user:userName,
        pass:password
    }
  })

  await transport.sendMail({
    from:email,
    to:userName,
    replyTo:email,
    subject:"Contacting you through your portfolio!",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #4CAF50;">New Mail From PORTFOLIO!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Message:</strong></p>
      <p style="background-color: #f1f1f1; padding: 15px; border-radius: 5px;">${message}</p>
      <br />
      <p style="font-size: 0.9em; color: #555;">This message was sent from your portfolio's contact form.</p>
    </div>
  `,
  })

  // console.log("Transport: ", transport);
  
  return transport
}

export{sendMail}

