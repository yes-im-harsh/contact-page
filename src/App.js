import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function App() {
  return (
    <div className="App">
    <h1 className="text-center text-pink-878 text-3xl">Contact Us</h1>
      <p className="text-center text-gray-500 text-lg">Any question or remarks? Just write us a message!</p>
      <div className="contact-container flex bg-white rounded-2xl overflow-hidden max-w-6xl p-2.5">
        <div className="contact-info bg-pink-790 flex-col flex-grow-0 flex-shrink rounded-2xl text-white w-1/2 p-10">
          <h4 className="text-4xl font-medium my-0">Contact Information</h4>
          <p className="text-base font-extralight mb-14 text-gray-400">Fill up the form and our Team will get back to you within 24 hours. </p>
            <div className="icon-text flex justify-start items-center mb-14">
             <i  className="icon flex-grow-0 flex-shrink-0 w-3.5 mr-6 "><FaPhoneAlt style={{ fill: '#FA949D' }}/></i>
             <span className="text-base">000-000-0000</span>
            </div>
            <div className="icon-text flex justify-start items-center mb-14">
             <i  className="icon text-xl  flex-grow-0 flex-shrink-0 w-3.5 mr-6 "><FaEnvelope style={{ fill: '#FA949D' }}/></i>
             <span className="text-base">admin@me.com</span>
            </div>
            <div className="icon-text flex justify-start items-center mb-14">
             <i  className="icon text-xl  flex-grow-0 flex-shrink-0 w-3.5 mr-6"><FaMapMarkerAlt style={{ fill: '#FA949D' }}/></i>
             <span className="text-base">Out of world, Some where near mars, 899010</span>
            </div>
            <div className="social-media mt-12 flex justify-between  w-3/5">
              <a href="https://www.facebook.com/PatnaAmityUniversity/" className="icon-circle transition ease-in-out duration-700 flex justify-center items-center h-9 hover:bg-pink-880 rounded-full flex-grow-0 flex-shrink-0 w-9">
                <i className="icon text-base"> <FaFacebookF style={{ fill: '#FFFFFF' }}/></i>
              </a>
              <a href="https://www.instagram.com/amityuniversitypatna/?hl=en" className="icon-circle transition ease-in-out duration-700 flex justify-center items-center h-9 hover:bg-pink-880 rounded-full flex-grow-0 flex-shrink-0 w-9">
                <i className="icon text-base"><FaInstagram style={{ fill: '#FFFFFF' }}/></i>
              </a>
              <a href="https://twitter.com/amity_patna" className="icon-circle transition ease-in-out duration-700 flex justify-center items-center h-9 hover:bg-pink-880 rounded-full flex-grow-0 flex-shrink-0 w-9">
                <i className="icon text-base"><FaTwitter style={{ fill: '#FFFFFF' }}/></i>
              </a>
              <a href="https://in.linkedin.com/school/amity-university-patna/" className="icon-circle transition ease-in-out duration-700 flex justify-center items-center h-9 hover:bg-pink-880 rounded-full flex-grow-0 flex-shrink-0 w-9">
                <i className="icon text-base"><FaLinkedinIn style={{ fill: '#FFFFFF' }}/></i>
              </a>
            </div>
        </div>
        <form className='p-5 w-full'>
          <div className='col flex flex-grow-0 flex-shrink-0 w-full'>
            <div className='form-group flex flex-col justify-start flex-grow-0 flex-shrink w-full p-4'>
              <label className='text-base mb-3 text-pink-888'>First Name</label>
              <input type="text" className=' border-0 p-1.5 text-base font-extralight border-b-2 border-pink-888 focus:border-0 focus:outline-none focus:border-b-2 focus:border-pink-999 transition ease-in-out duration-700'/>
            </div>
            <div className='form-group flex flex-col justify-start flex-grow-0 flex-shrink w-full p-4'>
              <label className='text-base mb-3 text-pink-888'>Last Name</label>
              <input type="text" className='border-0 p-1.5 text-base font-extralight border-b-2 border-pink-888 focus:border-0 focus:outline-none focus:border-b-2 focus:border-pink-999 transition ease-in-out duration-700'/>
            </div>
          </div>
          <div className='col flex flex-grow-0 flex-shrink-0 w-full'>
            <div className='form-group flex flex-col justify-start flex-grow-0 flex-shrink w-full p-4'>
              <label className='text-base mb-3 text-pink-888'>Email</label>
              <input type="email" className=' border-0 p-1.5 text-base font-extralight border-b-2 border-pink-888 focus:border-0 focus:outline-none focus:border-b-2 focus:border-pink-999 transition ease-in-out duration-700'/>
            </div>
            <div className='form-group flex flex-col justify-start flex-grow-0 flex-shrink w-full p-4'>
              <label className='text-base mb-3 text-pink-888'>Phone </label>
              <input type="tel" className='border-0 p-1.5 text-base font-extralight border-b-2 border-pink-888 focus:border-0 focus:outline-none focus:border-b-2 focus:border-pink-999 transition ease-in-out duration-700'/>
            </div>
          </div>
          <div className='col flex flex-grow-0 flex-shrink-0 w-full'>
            <div className='form-group flex flex-col justify-start flex-grow-0 flex-shrink w-full p-5'>
              <label className='text-base mb-3 text-pink-888 font-black'> Which college you are from ?</label>
              <div className="radio-buttons flex">
              <div className="radio-button mr-20">
              <input type="radio" id="radioamity" name="type" value="Amity" /><label for="radioamity" className="text-base text-pink-888 font-black">Amity</label>
              </div>
              <div className="radio-button mr-20">
              <input type="radio" id="radioiits" name="type" value="IITs" /><label for="radioiits" className="text-base text-pink-888 font-black">IITs</label>
              </div>
              <div className="radio-button mr-20">
              <input type="radio" id="radionits" name="type" value="NITs" /><label for="radionits" className="text-base text-pink-888 font-black">NITs</label>
              </div>
              <div className="radio-button mr-20">
              <input type="radio" id="radioother" name="type" value="Other" /><label for="radioother" className="text-base text-pink-888 font-black">Other</label>
              </div>
              </div>
            </div>
          </div>
          <div className='col flex flex-grow-0 flex-shrink-0 w-full'>
            <div className='form-group flex flex-col justify-start flex-grow-0 flex-shrink w-full p-5'>
            <label className='text-base mb-3 text-pink-888'>Message</label>
            <textarea placeholder="Write your message..." className=' resize-none border-0 p-0 text-base font-extralight border-b-2 border-pink-888 focus:border-0 focus:outline-none focus:border-b-2 focus:border-pink-999 transition ease-in-out duration-700'></textarea>
            </div>
          </div>
          <div className='col flex flex-grow-0 flex-shrink-0 w-full'>
             <div className='form-group flex items-end justify-start flex-col flex-grow-0 flex-shrink w-full p-5'>
             <button className=" bg-pink-790 hover:bg-pink-999 text-white font-bold py-2 px-4 w-40 h-12 cursor-pointer border border-blue-700 rounded transition ease-in-out duration-700">Send Message</button>
             </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
