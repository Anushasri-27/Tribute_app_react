import '../styles/App.scss';
import Contacts from '../COMPONENT/Contacts';
function Contact(){
    return(
        <div className='contact-us'>
             <div className="form-container">
                  <h1>Contact Us</h1>
                  <Contacts />
             </div>
        </div>
    )
}

export default Contact;