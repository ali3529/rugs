
export const UseMail = () => {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'alirezaabbasi442@gmail.com',
            pass: 'bmjjfhzesjwgkfqc'
        }
    });

    const sendOption = (mailOptions) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ success: true })
            }
        });
    }

    const registerMail = () => {
        var mailOptions = {
            from: 'alirezaabbasi442@gmail.com',
            to: 'javad.salehnia@gmail.com',
            subject: 'Welcome to rugs.com',
            text: title
        };

        sendOption(mailOptions)
    }

    return {registerMail}

}

