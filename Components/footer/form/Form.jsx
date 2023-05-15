import React from 'react';
import { Divider } from 'rsuite';

function Form() {
    return (

        <div className="form m-auto mt-4">
            <form>
                <kbd> <strong>Contact Us</strong></kbd>


                <div className="grid">
                    <label htmlFor="firstname" data-tooltip="First name" data-placement="top">
                        First name
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="First name"
                            required/>
                    </label>
                    <label htmlFor="lastname" data-tooltip="Last name" data-placement="top">
                        Last name
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Last name"
                            required/>
                    </label>
                </div>
                <label htmlFor="email" data-tooltip="Email" data-placement="top">Email address
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    required/>
                    </label>
                <small data-tooltip=":)">We'll never share your email with anyone else.</small>
                {/* <Divider className="mb-5"></Divider> */}
                <label data-tooltip="Phone Number" data-placement="top">Phone Number
                <input
                    type="tel"
                    id="phoneNumber"
                    name="Phone Number"
                    placeholder="Phone Number"
                    required/>
                </label>
                <div className="grid">

                    <label htmlFor="date" data-tooltip="Date" data-placement="top">Date
                        <input type="date" id="date" name="date"/>
                    </label>

                    <label htmlFor="time" data-tooltip="Time" data-placement="top">Time
                        <input type="time" id="time" name="time"/>
                    </label>
                </div>

                <button
                    className="primary"
                    data-tooltip="Submit"
                    data-placement="top"
                    type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Form