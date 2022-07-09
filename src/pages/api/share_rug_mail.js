import nc from 'next-connect';
const handler = nc();

var nodemailer = require('nodemailer');
handler.post(async (req, res) => {
    const {email,femail, name,subject, massage } = req.body;
    console.log(femail);
    console.log(req.body);

    let title=`Hi Your Frind  ${name} Whit Email ${email} Share Rug Whit You From Rug100.com
    
    ${massage}
    `
   



    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        // port: 465,
        // secure: true,
        port: 587,
        secure: false,
        auth: {
            user: 'alirezaabbasi442@gmail.com',
            pass: 'bmjjfhzesjwgkfqc'
        }
    });

    var mailOptions = {
        from: 'alirezaabbasi442@gmail.com',
        to: femail,
        subject: subject,
        text: title
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true })
        }
    });
})

export default handler;