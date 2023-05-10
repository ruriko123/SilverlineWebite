import React from 'react'
import "./main.scss"
function Main() {
    return (

        <main className="container" data-theme="dark">
            <div className="grid">

                <section>

                    <h2>Why Choose Silverline?</h2>

                    <p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Expertise and Experience</a><br/>
                        <small>Our team of technicians is highly trained and experienced in all aspects
                            of roofing, from installation to repair to maintenance. We have years of
                            experience working on roofs of all types and sizes, and we are knowledgeable in
                            the latest techniques and materials used in the industry.</small>
                    </p>

                    <figure>
                        <img className='main_image' src="cardimage1.jpg" alt="experience"/>

                    </figure>

                    <p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Quality Materials</a><br/>
                        <small>We use only the highest-quality materials in all of our roofing projects.
                            This includes roofing shingles, underlayment, flashing, and other materials that
                            are designed to provide long-lasting protection and durability for your roof.</small>
                    </p>

                    <figure>
                        <img className='main_image' src="cardimage.jpg" alt="material"/>

                    </figure>
                    <p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Responsiveness</a><br/>
                        <small>We understand that roofing issues can be urgent, and we are dedicated to
                            responding quickly to your needs. Whether you need emergency roof repair or
                            routine maintenance, we are here to help and will work with you to find the best
                            solution for your situation.</small>
                    </p>
                    <a href="#" aria-label="Example" onClick={(e) => e.preventDefault()}><img className='sub_image' src="cardimage6.jpg" alt="warranty"/></a>

                </section>

                <aside>
                    <a href="#" aria-label="Example" onClick={(e) => e.preventDefault()}><img className='sub_image' src="cardimage2.jpg" alt="attention"/></a>
                    <p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Attention to Detail</a><br/>
                        <small>We take great pride in our work, and we are dedicated to providing the
                            highest level of craftsmanship in all of our projects. We pay close attention to
                            every detail, from the preparation of the roof deck to the final inspection, to
                            ensure that your roof is installed or repaired properly.</small>
                    </p>
                    <a href="#" aria-label="Example" onClick={(e) => e.preventDefault()}><img className='sub_image' src="cardimage3.jpg" alt="Architecture"/></a>
                    <p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Customer Satisfaction</a><br/>
                        <small>Our top priority is your satisfaction. We work closely with you to
                            understand your specific needs and preferences, and we strive to exceed your
                            expectations with every project we undertake. We take the time to listen to your
                            concerns and answer any questions you may have, and we keep you informed
                            throughout the project to ensure that you are completely satisfied with the
                            final result.</small>
                    </p>
                    <a href="#" aria-label="Example" onClick={(e) => e.preventDefault()}><img className='sub_image' src="cardimage4.jpg" alt="warranty"/></a>
                    <p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Warranty and Guarantee</a><br/>
                        <small>We stand behind our work and are confident in the quality of our
                            services. That's why we offer a warranty or guarantee on all of our work. This
                            gives you peace of mind knowing that your roof is protected and that we will be
                            there to address any issues that may arise.</small>
                    </p>

                    <a href="#" aria-label="Example" onClick={(e) => e.preventDefault()}><img className='sub_image' src="cardimage5.jpg" alt="warranty"/></a>
                    <p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Competitive Pricing</a><br/>
                        <small>We offer competitive pricing for all of our services, without sacrificing
                            quality or craftsmanship. We believe that everyone deserves a high-quality roof,
                            and we are committed to providing that to all of our clients, regardless of
                            budget.</small>
                    </p>

                    <a href="#" aria-label="Example" onClick={(e) => e.preventDefault()}><img className='sub_image' src="whychooseus.jpg" alt="warranty"/></a>
                    <p>
                        <a href="#" onClick={(e) => e.preventDefault()}>Timely completion of projects</a><br/>
                        <small>Trust us for all your roofing needs and expect a job well done, every time.</small>
                    </p>

                </aside>

            </div>
        </main>

    ) 
}

export default Main