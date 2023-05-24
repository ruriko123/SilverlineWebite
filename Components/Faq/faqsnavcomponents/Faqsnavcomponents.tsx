import React from "react";
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Nav } from 'rsuite';
import { Panel, Placeholder } from 'rsuite';
import Plus from "@rsuite/icons/Plus";
import Money from "@rsuite/icons/legacy/Money";
import Remind from "@rsuite/icons/legacy/Remind";
import Drupal from "@rsuite/icons/legacy/Drupal";
import { Divider } from "rsuite";

import { BiAdjust as CiStar } from "react-icons/bi";

let iconStyles = { color: "white", fontSize: "2.5em" };

const Navbar = ({ active, onSelect, ...props }:any) => {
    return (
      <Nav vertical {...props} activeKey={active} onSelect={onSelect} style={{ marginBottom: 5 }}>
        <Nav.Item className="bg-white" eventKey="General" icon={<Plus/>}>
        <span className="text-lime-600 font-bold">General</span>
        </Nav.Item>
        <Nav.Item className="bg-white" eventKey="Payment & Billing" icon={<Money/>}><span className="text-lime-600 font-bold">Payment & Billing</span></Nav.Item>
        <Nav.Item className="bg-white" eventKey="Security" icon={<Remind/>}><span className="text-lime-600 font-bold">Security</span></Nav.Item>
        <Nav.Item className="bg-white" eventKey="products" icon={<Drupal/>}><span className="text-lime-600 font-bold">Products</span></Nav.Item>
      </Nav>
    );
  };



const GeneralComponent = ()=>{
    return(
      <Panel shaded className="m-4 bg-gray-900 rounded text-rose-700 font-bold">
        <div className="questions d-flex justify-center align-items-center flex-col w-auto m-3">
          <h1 className="header m-2">General</h1>
          <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1 mt-3">
            Query 1. How long has your company been in business?
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            Our company has been successfully operating for over a decade, establishing a strong presence in the industry.
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            With our extensive experience, we have garnered valuable insights and expertise to deliver exceptional software solutions.
            </p>
            </div>
            <Divider className="mt-5"><CiStar style={iconStyles}/></Divider>


            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1 mt-3">
            Query 2. What industries do you cater to?
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            - Our software solutions cater to a wide array of industries, including retail, hospitality, startups, and many others.
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            - We understand the unique needs and challenges of each industry, allowing us to provide tailored solutions that drive productivity and success.





            </p>
            
        </div>
      

    </Panel>
    )
  };
  

const PaymentComponent = ()=>{
  return(
    <Panel  shaded className="m-4 bg-gray-900 rounded  text-rose-700 font-bold">
        <div className="questions d-flex justify-center align-items-center flex-col w-auto m-3">
        <h1 className="header m-2">Payment & Billing</h1>
          <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1 mt-3">
            Query 1. What payment methods do you accept?
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            - We offer flexible payment options to accommodate our clients' preferences. You can choose to pay via credit/debit cards, electronic bank transfers, or other secure online payment gateways.
            </p>
            <Divider className="mt-5"><CiStar style={iconStyles}/></Divider>
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1 mt-3">
            Query 2. Are there any hidden fees or additional charges?
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            -  We believe in transparent pricing, and there are no hidden fees or surprise charges. Our billing structure is straightforward, and we provide clear breakdowns of the costs involved, ensuring you have full visibility into what you are paying for.
            </p> 
            <Divider className="mt-5"><CiStar style={iconStyles}/></Divider>
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1 mt-3">
            Query 3. Is my payment information secure with your company?
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            -  Absolutely. We prioritize the security and confidentiality of our clients' payment information. We implement robust encryption protocols and adhere to industry best practices to ensure that your payment details are protected from unauthorized access or misuse.
            </p> 
            </div>         
        </div>


  </Panel>
  )
};

const SecurityComponent = ()=>{
  return(
    <Panel  shaded className="m-4 bg-gray-900 rounded  text-rose-700 font-bold">
             <div className="questions d-flex justify-center align-items-center flex-col w-auto m-3">
        <h1 className="header m-2">Security</h1>
          <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1 mt-3">
            Query 1. How do you ensure the security of customer data within your software?
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            - We employ stringent security measures to safeguard customer data.
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            - Our software incorporates advanced encryption techniques, regular vulnerability assessments, and strict access controls to prevent unauthorized access and protect sensitive information.
            </p>

            <Divider className="mt-5"><CiStar style={iconStyles}/></Divider>
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1 mt-3">
            Query 2. Do you comply with industry security standards and regulations?
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            -  Yes, we are committed to upholding the highest standards of security and compliance. Our software adheres to industry-specific security regulations and frameworks, ensuring that your data is handled in accordance with best practices and applicable laws.
            </p> 

            <Divider className="mt-5"><CiStar style={iconStyles}/></Divider>
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1 mt-3">
            Query 3. Is my payment information secure with your company?
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            -  Absolutely. We prioritize the security and confidentiality of our clients' payment information. We implement robust encryption protocols and adhere to industry best practices to ensure that your payment details are protected from unauthorized access or misuse.
            </p> 
            </div>         
        </div>
  </Panel>
  )
};

const ProductsComponent = ()=>{
  return(
    <Panel  shaded className="m-4 bg-gray-900 rounded  text-rose-700 font-bold">
                   <div className="questions d-flex justify-center align-items-center flex-col w-auto m-3">
        <h1 className="header m-2">Products</h1>
          <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1 mt-3">
            Query 1. How can your products benefit my company?
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            - Our products are meticulously designed to address specific business needs and deliver tangible benefits.
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            - By leveraging our software solutions, you can streamline operations, improve productivity, enhance customer experiences, and gain valuable insights to make informed business decisions, ultimately leading to increased efficiency and growth.
            </p>
            <Divider className="mt-5"><CiStar style={iconStyles}/></Divider>

            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1 mt-3">
            Query 2. What sets your products apart from competitors in the market?
            </p>
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            - Our products stand out due to their exceptional quality, robust functionality, and user-friendly interfaces.
            </p> 
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            - We prioritize innovation and continuously evolve our offerings to stay ahead of the curve.
            </p> 
            <p className="answer text-rose-400 mt-4 text-center m-2 normal-case text-medium">
            - With our products, you can expect a seamless user experience, reliable performance, and ongoing support, ensuring that you have the tools you need to drive your company's success.
            </p> 
            </div>         
        </div>
  </Panel>
  )
};



function Faqsnavcomponents() {
 const [active, setActive] = React.useState('General');

  return (
    <div className="d-flex justify-center align-items-center flex-col gap-4 w-auto ">

        <Navbar appearance="subtle" reversed active={active} onSelect={setActive} />

         {active==="General" && <GeneralComponent/>}
         {active==="Payment & Billing" && <PaymentComponent/>}
         {active==="Security" && <SecurityComponent/>}
         {active==="products" && <ProductsComponent/>}

    </div>
  );
}

export default Faqsnavcomponents;
