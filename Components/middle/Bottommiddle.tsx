import React from 'react';
import "./topmiddle.scss";
import {Panel, Placeholder, Divider, Row, Col } from 'rsuite';
import "./bottommiddle.scss"
import { AiTwotoneStar } from "react-icons/ai";
import { ChatQuoteFill } from 'react-bootstrap-icons';


function Bottommiddle() {
    let iconStyles = { color: "white", fontSize: "2.5em" };

    return (
        <Panel  shaded className='mb-5 divide-y divide-blue-200 h-fit mt-5 d-flex justify-content-center flex-column align-items-center'>
                
    <div className="card-group">
  <div className="card border-light  m-3 ">
    <div className="card-body">
      <h4 className="card-title"><ChatQuoteFill /></h4>
      <p className="card-text">Document Storage</p>
      <p className="card-text"><small className="text-muted">Store offsite and manage online</small></p>
    </div>
  </div>
 <div className="card border-light    m-3 ">
 <div className="card-body">
      <h4 className="card-title"><ChatQuoteFill /></h4>
      <p className="card-text">Business Storage</p>
      <p className="card-text"><small className="text-muted">24/7 Online Access</small></p>
    </div>
  </div>

</div>

            
<div className="card-group  mt-5">


  <div className="card border-light m-3 ">
  <div className="card-body">
      <h4 className="card-title"><ChatQuoteFill /></h4>
      <p className="card-text">Retail and e-Commerce Storage</p>
      <p className="card-text"><small className="text-muted">We’ll receive, store, pick, pack and ship</small></p>
    </div>
  </div>
  
  <div className="card border-light   m-3 ">
  <div className="card-body">
      <h4 className="card-title"><ChatQuoteFill /></h4>
      <p className="card-text">Mero vault</p>
      <p className="card-text"><small className="text-muted">Work, store, operate and ship all in one place</small></p>
    </div>
  </div>

</div>
           


        </Panel>
    )
    }

export default Bottommiddle