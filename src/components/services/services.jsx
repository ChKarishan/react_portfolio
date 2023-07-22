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
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
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
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>
          </ul>
        </article>


        {/* Content Creation */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>loru lalit loru lalit loru lalit loru lalit loru lalit</p>
            </li>
          </ul>
        </article>

      </div>

    </section>
  )
}

export default services