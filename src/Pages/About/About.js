import React from 'react';
import Tittle from '../../Hook/Tittle';

const About = () => {
    Tittle('About')
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">
                            Here are some dental doctors</h2>
                        <p className="font-serif text-sm dark:text-gray-400">Find Dentist In New York City. Search Faster, Better & Smarter Now! Get Results for Dentist In New York City</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src='https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=1380&t=st=1669094092~exp=1669094692~hmac=0f11e4fbe248d3033e5c1e85f815e6ebed4c690a06eaca72ad626bc4781b34f3' />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Teeth Cleaning</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The role of the general dental practitioner in managing patients who self-harm</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=996&t=st=1669094473~exp=1669095073~hmac=e9082a15431fa9cf676230f9b9c76458fa0b25f59214bca53d00dc78439ae7f7" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Oral Surgery</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The role of the general dental practitioner in managing patients who self-harm</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 2, 2020</span>
                                    <span>2.2K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=1380&t=st=1669094546~exp=1669095146~hmac=f744cfc92d777feeec44daad1a8438909a663a82402f7dfd7e3583b786f526b9" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Teeth Orthodontics</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The role of the general dental practitioner in managing patients who self-harm</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 3, 2020</span>
                                    <span>2.3K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://img.freepik.com/free-photo/doctor-crossing-arms-while-holding-stethoscope-white-coat_176474-8491.jpg?w=1380&t=st=1669094589~exp=1669095189~hmac=7a2368ff496ab4bd6681489712803c812f5e96456e6da992bc5418ccc39d0739" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Cosmetic Dentistry</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The role of the general dental practitioner in managing patients who self-harm</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 4, 2020</span>
                                    <span>2.4K views</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;