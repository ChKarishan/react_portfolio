import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
// import { useRef, useEffect, useState } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {


  // const emailRef = useRef<HTMLInputElement>(null);
  // const nameRef = useRef<HTMLInputElement>(null);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => emailjs.init("Pz3Gj62a99ea4F_OK"), []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const serviceId = "service_sotp8jd";
  //   const templateId = "template_gvycy3";
  //   try {
  //     setLoading(true);
  //     await emailjs.send(serviceId, templateId, {
  //      name: nameRef.current.value,
  //       recipient: emailRef.current.value
  //     });
  //     alert("email successfully sent check inbox");
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section id='contact'>

      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        {/* contact options */}
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>karishan.897@gmail.com</h5>
            <a href='mailto:karishan.897@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Karishan Mehmood</h5>
            <a href='https://m.me/karishan.mehmood' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+923074767281</h5>
            <a href='https://wa.me/+923074767281' target='_blank'>Send a message</a>
          </article>
        </div>
        {/*  */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact