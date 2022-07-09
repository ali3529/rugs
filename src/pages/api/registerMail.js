import nc from 'next-connect';
const handler = nc();

var nodemailer = require('nodemailer');

handler.post(async (req, res) => {
    const {email, name, content, link } = req.body;
    console.log(email);
    const title = `Hi ${name},
    Thanks for signing up for magicrugs!
    Here is ${content}.
    ${link}.
    Don’t hesitate to visit our blog to get more insights on [Topic] or go to
     https://rug100.com
      to learn more about [Product/service you offer].
    Feel free to contact us at [Email address] if you have any questions. We’ll do our best to help.
    Regards,
    rug100.com`;



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
        to: email,
        subject: 'Welcome to magicrugs.com',
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