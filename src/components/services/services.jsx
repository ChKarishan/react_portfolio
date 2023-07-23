import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>

      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        {/* APP Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>APP Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Material Design: Eye-catching, user-friendly interfaces following Material Design guidelines.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Room Database: Effective local data storage and retrieval with Room SQLite.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ktor Integration: Building asynchronous servers and clients for robust apps.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>MVVM Architecture: Well-structured, maintainable apps using MVVM design pattern.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>SDK Implementation: Extending app functionality by integrating various SDKs.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className='service'>
          <div className='service__head'>
            <h3> Web Development</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>React Frontend: Building interactive and user-friendly interfaces with React.js.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Express.js Backend: Developing scalable and secure backend applications with Express.js.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Node.js Development: Server-side JavaScript expertise for fast and event-driven applications.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Redux Implementation: Managing state efficiently with Redux in React applications.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Next.js Development: Crafting performant and SEO-friendly web apps using Next.js.</p>
            </li>
          </ul>
        </article>


        {/* Cloud Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Cloud Development</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>AWS SAM (Serverless Application Model): Creating serverless applications on AWS infrastructure.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>AWS S3: Utilizing AWS S3 for scalable and cost-effective object storage</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>API Gateway: Building secure and reliable APIs using AWS API Gateway.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Firebase Development: Developing real-time, serverless applications using Firebase.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Firebase Firestore: NoSQL database expertise with Firebase Firestore for seamless data storage.</p>
            </li>
          </ul>
        </article>

      </div>

    </section>
  )
}

export default services