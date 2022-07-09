import { useState } from 'react';
// import { sanitize } from '../../../utils/miscellaneous';
// import Loading from '../../loading';

const FormMail = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
    //   return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    // return formattedMessage ? sanitize( formattedMessage ) : null;
  }

  return (
    <div>
   
      <div className="flex newsletter-input-fields  space-x-2 ">
        <div className="mc-field-group">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email"
            className="appearance-none rounded-lg  border border-gray-400 border-b block pl-4 pr-6 py-2  w-56 sm:w-80
            sm:containerw-96 h-14  bg-white text-sm placeholder-gray-400 text-gray-700 
            focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button className="cursor-pointer	 h-14 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none 
          hover:bg-indigo-600 rounded-md" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="min-h-42px">
        { 'sending' === status ? <false showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-green-200 font-bold pt-2 w-72" dangerouslySetInnerHTML={{ __html: message }} />
        )}
      </div>
    </div>
  );
}

export default FormMail