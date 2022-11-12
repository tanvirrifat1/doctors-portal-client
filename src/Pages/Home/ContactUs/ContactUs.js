import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButtons from '../../../components/PrimaryButtons/PrimaryButtons';


const ContactUs = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div>
                <div className='text-center relative top-6'>
                    <h2 className="text-3xl text-white">Stay connected with us</h2>
                </div>
                <div className="flex items-center justify-center text-center">
                    <form action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
                        <input id="username" type="text" placeholder='Email Address' className="flex  items-center h-12 px-4 mt-4 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                        <input id="password" type="password" placeholder='Subject' className="flex  items-center h-12 px-4 mt-4 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                        <input id="password" type="password" placeholder='Your message' className="flex items-center h-36 px-4 mt-4 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                        <div className="flex justify-center mt-6 space-x-2 text-xs">
                            <PrimaryButtons>Submit</PrimaryButtons>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;