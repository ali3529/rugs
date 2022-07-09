import MailchimpSubscribe from 'react-mailchimp-subscribe';
import FormMail from './FormMail';
// import NewsletterForm from './NewsletterForm';

const MailCimp = () => {

    const MAILCHIMP_URL = 'https://gmail.us20.list-manage.com/subscribe/post?u=e0eda9c68489527fca1dc4aa0&amp;id=9fd6a47909';
    console.log("vsdvsdv",MAILCHIMP_URL);
    const SimpleForm = () => <MailchimpSubscribe url={MAILCHIMP_URL} />
    return (
        <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={(props) => {
                const { subscribe, status, message } = props || {};
                return (

                    <FormMail
                    status={ status }
                    message={ message }
                    onValidated={ formData => subscribe( formData ) }
                  />


                    // <div>
                    //     <SimpleForm onSubmitted={formData => subscribe(formData)} />
                    //     {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                    //     {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                    //     {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                    // </div >
                    //     <div className="flex my-1 mx-1 ms:mx-3 lg:min-w-96">
                    //     <input
                    //         className="h-10 border-r-0 rounded-r-none pl-2"
                    //         placeholder="Email Address"
                    //         onValidated={ formData => subscribe( formData ) }
                    //     />
                    //     <button className="h-10 border-l-0 rounded-l-none bg-indigo-500 whitespace-nowrap">
                    //         Submit
                    //     </button>
                    // </div>
                );
            }}
        />
    );
};

export default MailCimp;