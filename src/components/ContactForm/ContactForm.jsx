import Button from "../Button/Button"
import "./ContactForm.css"
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className="section-form">
        <div className="contact-form">
          <div className="top-btn">
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon = {<IoIosCall fontSize="24px"/>}/>
          </div>
            <Button isOutline ={true}  text="VIA EMAIL FORM" icon={<HiMail  fontSize="24px"/>}/>
            <form>
              <div className="input-label">
              <label htmlFor="name">Name</label>
              <input type="text" id ="name"/>
              </div>
              <br/>
              <div className="input-label">
              <label htmlFor="email">E-mail</label>
              <input type="text" id ="email"/>
              </div>
              <br/>
              <div className="input-label">
              <label htmlFor="text">Text</label>
              <textarea type="text" id ="text"/>
              </div>
              <div className="end-btn">
                <Button text="SUBMIT BUTTON"/>
              </div>
            </form>
        </div>
        <div className="contact-image">
          <img src="/images/image-2.svg" alt="image-2"/>
        </div>
    </section>
  )
}

export default ContactForm