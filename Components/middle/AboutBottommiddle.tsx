import React from "react";
import "./topmiddle.scss";
import "./bottommiddle.scss";
import { BiVerticalBottom } from "react-icons/bi";
import { BiSmile } from "react-icons/bi";
import { BiShieldQuarter } from "react-icons/bi";




function AboutBottommiddle() {
  let iconStyles = { color: "black", fontSize: "1.5em" };
  let iconStyles2 = { color: "purple", fontSize: "1.5em" };
  let iconStyles3 = { color: "red", fontSize: "1.5em" };

  return (
    <section className="blog text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-4xl  title-font mb-2 text-rose-600 font-bold capitalize"> About Us</h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-base text-emerald-600 ">
        With years of industry expertise, we have developed advanced software solutions that optimize business operations, elevate customer experiences, and fuel sustainable growth.</p>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

        
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
          <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden pt-5 pb-5 pl-1 pr-1">
            <div className="header-content inline-flex ">
              <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 mb-2 bg-purple-100">
                <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " />
              </div>
              <div className="category-title text-center flex-1 text-sm"> <BiVerticalBottom style={iconStyles}/> </div>
            </div>
            {/* <div className="title-post font-medium">Mon titre</div> */}
            <div className="summary-post  text-base text-center m-1">Welcome to our company! We are a team of professionals who are passionate about helping businesses embrace the digital age. Our goal is to create customized software solutions that make your operations more efficient and drive growth. 
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: 'url(https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
          <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden pt-5 pb-5 pl-1 pr-1">
            <div className="header-content inline-flex ">
              <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100 mb-2">
                <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 " />
              </div>
              <div className="category-title text-center flex-1 text-sm"> <BiSmile style={iconStyles2}/> </div>
            </div>
            {/* <div className="title-post font-medium">Mon titre</div> */}
            <div className="summary-post  text-base text-center m-1">Whether you are a small business or a large enterprise, we offer personalized software solutions that align with your goals. Our expertise lies in developing user-friendly software for point-of-sale (POS) devices and business management tools. 
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/10/10/18/59/online-6698352_1280.png'}} />
          <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden pt-5 pb-5 pl-1 pr-1">
            <div className="header-content inline-flex ">
              <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100 mb-2 ">
                <div className="h-2 w-2 rounded-full m-1 bg-green-500 " />
              </div>
              <div className="category-title text-center flex-1 text-sm"> <BiShieldQuarter   style={iconStyles3}/></div>
            </div>
            {/* <div className="title-post font-medium">Mon titre</div> */}
            <div className="summary-post  text-base text-center m-1">We are committed to delivering high-quality software that exceeds your expectations. Our team of experienced professionals follows a thorough development process, from planning and design to testing and deployment. 

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default AboutBottommiddle;
