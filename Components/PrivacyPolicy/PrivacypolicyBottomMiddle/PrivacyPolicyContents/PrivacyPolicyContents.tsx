import React from "react";
import { Panel, Placeholder } from 'rsuite';
import { List } from 'rsuite';



const PrivacyPolicycontentComponent = ()=>{
  return(
    <Panel  shaded className="m-4 bg-neutral-50  text-rose-600 font-bold">
      <div className="questions d-flex justify-center align-items-center flex-col w-auto m-3">


      <h1 className="header m-2">Products</h1>
          <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            
            <p className="question d-flex justify-center text-violet-600  underline decoration-solid decoration-pink-500 underline-offset-4 hover:decoration-dashed  font-bold capitalize m-5">
            1. Information We Collect:
            </p>
            
            <List hover size="md" autoScroll>
                
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> Personal Information: We may collect personal information such as your name, email address, contact details, and payment information when you register for our software or make a purchase.
            </p></List.Item>

            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> Device and Usage Information: We may automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, and interaction with our software.   
            </p></List.Item>  
            
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> Log Data: Our servers automatically record log data when you use our software, including the features you access, the duration of your sessions, and any errors encountered.
            </p></List.Item>

            </List>
            </div>
            <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-violet-600  underline decoration-solid decoration-pink-500 underline-offset-4 hover:decoration-dashed  font-bold capitalize m-5">
            2. Use of Information:
            </p>
            
            <List hover size="md" autoScroll>
                
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> Provide and Improve our Services: We use the collected information to deliver and maintain our software, process transactions, and provide customer support. We also use the data to enhance our software, develop new features, and improve user experience.
            </p></List.Item>

            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> Communication: We may use your contact information to send you updates, newsletters, marketing materials, or respond to your inquiries and requests.
            </p></List.Item>  
            
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> Legal Compliance: We may process your personal information to comply with applicable laws, regulations, or legal obligations.
            </p></List.Item>
            </List>
            </div>




            <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-violet-600  underline decoration-solid decoration-pink-500 underline-offset-4 hover:decoration-dashed  font-bold capitalize m-5">
            3. Information Sharing:
            </p>
            
            <List hover size="md" autoScroll>
                
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> Service Providers: We may share your personal information with trusted third-party service providers who assist us in delivering our services, such as payment processors and hosting providers. These third parties are obligated to protect your information and use it solely for the purposes we specify.
            </p></List.Item>

            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of the transaction. We will notify you and obtain your consent if required by applicable laws.
            </p></List.Item>  
            
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> Legal Requirements: We may disclose your personal information if required by law or in response to valid requests by public authorities.
            </p></List.Item>
            </List>
            </div>


            <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-violet-600  underline decoration-solid decoration-pink-500 underline-offset-4 hover:decoration-dashed  font-bold capitalize m-5">
            4. Data Security:
            </p>
            <List hover size="md" autoScroll>
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p></List.Item>

            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> While we strive to protect your personal information, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee its absolute security.
            </p></List.Item>  
            </List>
            </div>



            <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-violet-600  underline decoration-solid decoration-pink-500 underline-offset-4 hover:decoration-dashed  font-bold capitalize m-5">
            5. Data Retention:
            </p>
            <List hover size="md" autoScroll>
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p></List.Item>
            </List>
            </div>


            <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-violet-600  underline decoration-solid decoration-pink-500 underline-offset-4 hover:decoration-dashed  font-bold capitalize m-5">
            6. Your Rights:
            </p>
            <List hover size="md" autoScroll>
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> You have the right to access, correct, update, or delete your personal information. You may also have the right to restrict or object to certain processing activities. Please contact us using the information provided below to exercise these rights.
            </p></List.Item>
            </List>
            </div>

            <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-violet-600  underline decoration-solid decoration-pink-500 underline-offset-4 hover:decoration-dashed  font-bold capitalize m-5">
            7. Changes to the Privacy Policy:
            </p>
            <List hover size="md" autoScroll>
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> We may update this Privacy Policy from time to time. Any changes will be posted on our website, and the effective date will be revised accordingly. We encourage you to review the Privacy Policy periodically.
            </p></List.Item>
            </List>
            </div>

            <div className="questionwrapper d-flex justify-center align-items-center flex-col w-auto">
            <p className="question d-flex justify-center text-violet-600  underline decoration-solid decoration-pink-500 underline-offset-4 hover:decoration-dashed  font-bold capitalize m-5">
            8. Contact Us:
            </p>
            <List hover size="md" autoScroll>
            <List.Item><p className="answer text-stone-700 text-left m-2 normal-case text-medium">
            <span className="hyphen capitalize text-bold text-4xl text-center antialiased text-cyan-800">&#8209; </span> If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at info@silverlinepos.com or through our website's contact form.
            </p></List.Item>
            </List>
            </div>




        </div>
  </Panel>
  )
};



function PrivacyPolicyContents() {
  return (
    <div className="d-flex justify-center align-items-center flex-col gap-4 w-auto ">


          <PrivacyPolicycontentComponent/>

    </div>
  );
}

export default PrivacyPolicyContents;
