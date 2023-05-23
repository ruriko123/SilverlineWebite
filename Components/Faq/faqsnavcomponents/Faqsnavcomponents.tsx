import React from "react";
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Nav } from 'rsuite';
import { Panel, Placeholder } from 'rsuite';
import Plus from "@rsuite/icons/Plus";
import Money from "@rsuite/icons/legacy/Money";
import Remind from "@rsuite/icons/legacy/Remind";
import Drupal from "@rsuite/icons/legacy/Drupal";




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
      <Panel shaded className="m-4 bg-gray-700 text-rose-700 font-bold">
        <div className="questions d-flex justify-center align-items-center flex-col w-auto m-3">
          <h1 className="header m-2">General</h1>
          <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1">
            Query 1. What is the difference between Return and Inbound Order?
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            Return orders are for items that have been retrieved from your storage for an event or any business purposes and you wish to return them to our warehouse. However, these items must be returned back within 30 days from the date of retrieval. To learn how to schedule a return order.
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            Return orders are for items that have been retrieved from your storage for an event or any business purposes and you wish to return them to our warehouse. However, these items must be returned back within 30 days from the date of retrieval. To learn how to schedule a return order.
            </p>
            </div>

            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1">
            Query 2. What are your Delivery options?
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            There are 3 delivery options:  
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            - Same day delivery - delivery fulfilled within 24 hours from the time order is being created. Additional charges apply. The cut-off time: 12pm.
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            - Express delivery - delivery fulfilled within 2 hours from the time order is being created. Additional charges apply. The cut-off time: 4pm.
            </p>
            
        </div>
      

    </Panel>
    )
  };
  

const PaymentComponent = ()=>{
  return(
    <Panel  shaded className="m-4 bg-gray-700  text-rose-700 font-bold">
        <div className="questions d-flex justify-center align-items-center flex-col w-auto m-3">
        <h1 className="header m-2">Payment & Billing</h1>
          <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1">
            Query 1. What is the difference between Return and Inbound Order?
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            Return orders are for items that have been retrieved from your storage for an event or any business purposes and you wish to return them to our warehouse. However, these items must be returned back within 30 days from the date of retrieval. To learn how to schedule a return order.
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            Return orders are for items that have been retrieved from your storage for an event or any business purposes and you wish to return them to our warehouse. However, these items must be returned back within 30 days from the date of retrieval. To learn how to schedule a return order.
            </p>
            </div>

            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1">
            Query 2. What are your Delivery options?
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            There are 3 delivery options:  
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            - Same day delivery - delivery fulfilled within 24 hours from the time order is being created. Additional charges apply. The cut-off time: 12pm.
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            - Express delivery - delivery fulfilled within 2 hours from the time order is being created. Additional charges apply. The cut-off time: 4pm.
            </p>
            
        </div>
  </Panel>
  )
};

const SecurityComponent = ()=>{
  return(
    <Panel  shaded className="m-4 bg-gray-700  text-rose-700 font-bold">
       <div className="questions d-flex justify-center align-items-center flex-col w-auto m-3">
       <h1 className="header m-2">Security</h1>
          <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1">
            Query 1. What is the difference between Return and Inbound Order?
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            Return orders are for items that have been retrieved from your storage for an event or any business purposes and you wish to return them to our warehouse. However, these items must be returned back within 30 days from the date of retrieval. To learn how to schedule a return order.
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            Return orders are for items that have been retrieved from your storage for an event or any business purposes and you wish to return them to our warehouse. However, these items must be returned back within 30 days from the date of retrieval. To learn how to schedule a return order.
            </p>
            </div>

            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1">
            Query 2. What are your Delivery options?
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            There are 3 delivery options:  
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            - Same day delivery - delivery fulfilled within 24 hours from the time order is being created. Additional charges apply. The cut-off time: 12pm.
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            - Express delivery - delivery fulfilled within 2 hours from the time order is being created. Additional charges apply. The cut-off time: 4pm.
            </p>
            
        </div>
  </Panel>
  )
};

const ProductsComponent = ()=>{
  return(
    <Panel  shaded className="m-4 bg-gray-700  text-rose-700 font-bold">
      <div className="questions d-flex justify-center align-items-center flex-col w-auto m-3">
      <h1 className="header m-2">Products</h1>
          <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1">
            Query 1. What is the difference between Return and Inbound Order?
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            Return orders are for items that have been retrieved from your storage for an event or any business purposes and you wish to return them to our warehouse. However, these items must be returned back within 30 days from the date of retrieval. To learn how to schedule a return order.
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            Return orders are for items that have been retrieved from your storage for an event or any business purposes and you wish to return them to our warehouse. However, these items must be returned back within 30 days from the date of retrieval. To learn how to schedule a return order.
            </p>
            </div>

            <p className="question d-flex justify-center text-emerald-500 underline decoration-solid decoration-sky-600 underline-offset-4 hover:decoration-wavy font-bold capitalize m-1">
            Query 2. What are your Delivery options?
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            There are 3 delivery options:  
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            - Same day delivery - delivery fulfilled within 24 hours from the time order is being created. Additional charges apply. The cut-off time: 12pm.
            </p>
            <p className="answer text-rose-400 mt-4 text-left m-2 normal-case text-medium">
            - Express delivery - delivery fulfilled within 2 hours from the time order is being created. Additional charges apply. The cut-off time: 4pm.
            </p>
            
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
