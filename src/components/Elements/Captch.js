import axios from 'axios';
import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";


function Captch({cp}) {
    function onChange(token) {
    //     console.log("Captcha value:", token);
    //     axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SITE_KEY}&response=${token}`)
    //     .then(res=>console.log("Captcha value",res))
    //     .catch(res=>console.log("Captcha value",res))
    cp(true)
     }
    return (
        <div className='flex justify-center mt-4'>
            <ReCAPTCHA
                sitekey={process.env.CAPTCHA_SITE_KEY}
                onChange={onChange}
            />
        </div>
    )
}

export default Captch