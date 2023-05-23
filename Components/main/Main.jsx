import React from "react";
import "./main.scss";
import Image from "next/image";
import cardImage from "../../public/cardimage.jpg";
import cardImage1 from "../../public/cardimage1.jpg";
import cardImage2 from "../../public/cardimage2.jpg";
import cardImage3 from "../../public/cardimage3.jpg";
import cardImage4 from "../../public/cardimage4.jpg";
import cardImage5 from "../../public/cardimage5.jpg";
import cardImage6 from "../../public/cardimage6.jpg";
import whychooseus from "../../public/whychooseus.jpg";
import { Divider } from "rsuite";

function Main() {
  return (
    <main className="container mt-5 mb-5" data-theme="dark">
      <div className="grid">
        <section>
          <h2 className="d-flex justify-content-center align-item-center whychooseus underline decoration-rose-500 text-emerald-600 m-4">
            Why Choose Silverline?
          </h2>

          <p>
            <a
              href="#"
              className="hover:font-mono antialiased  font-sans font-medium tracking-wide text-center capitalize "
              onClick={(e) => e.preventDefault()}>
              Expertise and Experience
            </a>

            <br />
            <small>
              Our team of highly trained and experienced in all aspects of
              software development, from development to deployment to
              maintenance. We have years of experience working on softwares of
              all types, and we are knowledgeable in the latest trends and tools
              used in the industry.
            </small>
          </p>

          <figure>
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto main_image"
              src={cardImage1}
              priority="true"
              alt="experience"
            />
          </figure>
          <Divider className="mb-5"></Divider>
          <p>
            <a
              href="#"
              className="hover:font-mono antialiased  font-sans font-medium tracking-wide text-center capitalize "
              onClick={(e) => e.preventDefault()}>
              Quality Software
            </a>
            <br />
            <small>
              We rigorously test all our software before giving it to you. This
              includes security checks, unit tests, and other tests to ensure a
              long-lasting protection and durability of your purchase.
            </small>
          </p>

          <figure>
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto main_image"
              src={cardImage}
              priority="true"
              alt="experience"
            />
          </figure>
          <Divider className="mb-5"></Divider>
          <p>
            <a
              href="#"
              className=" hover:font-mono antialiased  font-sans font-medium tracking-wide text-center capitalize "
              onClick={(e) => e.preventDefault()}>
              Responsiveness
            </a>
            <br />
            <small>
              We understand that issues can be urgent, and we are dedicated to
              responding quickly to your needs. Whether you need emergency
              appointment or software maintenance, we are here to help and will
              work with you to find the best solution for your situation.
            </small>
          </p>
          <a
            href="#"
            aria-label="cardImage6"
            onClick={(e) => e.preventDefault()}>
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto main_image"
              src={cardImage6}
              priority="true"
              alt="cardImage6"
            />
          </a>
          <Divider className="mb-5"></Divider>
        </section>

        <aside>
          <a
            href="#"
            aria-label="cardImage2"
            onClick={(e) => e.preventDefault()}>
            {/* <img className="sub_image" src="cardimage2.jpg" alt="attention" /> */}
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto main_image mb-1"
              src={cardImage2}
              priority="true"
              alt="cardImage2"
            />
          </a>
          <p>
            <a
              href="#"
              className="hover:font-mono antialiased  font-sans font-medium tracking-wide text-center capitalize "
              onClick={(e) => e.preventDefault()}>
              Attention to Detail
            </a>
            <br />
            <small>
              We take great pride in our work, and we are dedicated to providing
              the highest level of efficiency in all of our projects. We pay
              close attention to every detail, from the periodic checks to the
              final inspection, to ensure that your software is working
              properly.
            </small>
          </p>
          <Divider className="mb-5"></Divider>
          <a
            href="#"
            aria-label="cardImage3"
            onClick={(e) => e.preventDefault()}>
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto main_image mb-1"
              src={cardImage3}
              priority="true"
              alt="cardImage3"
            />
          </a>
          <p>
            <a
              href="#"
              className="hover:font-mono antialiased  font-sans font-medium tracking-wide text-center capitalize "
              onClick={(e) => e.preventDefault()}>
              Customer Satisfaction
            </a>
            <br />
            <small>
              Our top priority is your satisfaction. We work closely with you to
              understand your specific needs and preferences, and we strive to
              exceed your expectations with every project we undertake. We take
              the time to listen to your concerns and answer any questions you
              may have, and we keep you informed throughout the project to
              ensure that you are completely satisfied with the final result.
            </small>
          </p>
          <Divider className="mb-5"></Divider>
          <a
            href="#"
            aria-label="cardImage4"
            onClick={(e) => e.preventDefault()}>
            {/* <img className="sub_image" src="cardimage4.jpg" alt="warranty" /> */}
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto main_image mb-1"
              src={cardImage4}
              priority="true"
              alt="cardImage4"
            />
          </a>
          <p>
            <a
              href="#"
              className="hover:font-mono antialiased  font-sans font-medium tracking-wide text-center capitalize "
              onClick={(e) => e.preventDefault()}>
              Warranty and Guarantee
            </a>
            <br />
            <small>
              We stand behind our work and are confident in the quality of our
              services. That's why we offer a warranty or guarantee on all of
              our work. This gives you peace of mind knowing that your software
              is protected and that we will be there to address any issues that
              may arise.
            </small>
          </p>
          <Divider className="mb-5"></Divider>
          <a
            href="#"
            aria-label="cardImage5"
            onClick={(e) => e.preventDefault()}>
            {/* <img className="sub_image" src="cardimage5.jpg" alt="warranty" /> */}
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto main_image mb-1"
              src={cardImage5}
              priority="true"
              alt="cardImage5"
            />
          </a>
          <p>
            <a
              href="#"
              className="hover:font-mono antialiased  font-sans font-medium tracking-wide text-center capitalize "
              onClick={(e) => e.preventDefault()}>
              Competitive Pricing
            </a>
            <br />
            <small>
              We offer competitive pricing for all of our services, without
              sacrificing quality or efficiency. We believe that everyone
              deserves access high-quality software, and we are committed to
              providing that to all of our clients, regardless of budget.
            </small>
          </p>
          <Divider className="mb-5"></Divider>
          <a
            href="#"
            aria-label="whychooseus"
            onClick={(e) => e.preventDefault()}>
            {/* <img className="sub_image" src="whychooseus.jpg" alt="warranty" /> */}
            <Image
              placeholder="empty"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto sub_image mb-1"
              src={whychooseus}
              priority="true"
              alt="whychooseus"
            />
          </a>
          <p>
            <a
              href="#"
              className="hover:font-mono antialiased  font-sans font-medium tracking-wide text-center capitalize "
              onClick={(e) => e.preventDefault()}>
              Timely completion of projects
            </a>
            <br />
            <small>
              Trust us for all your software needs and expect a job well done,
              every time.
            </small>
          </p>
          <Divider className="mb-5"></Divider>
        </aside>
      </div>
    </main>
  );
}

export default Main;
