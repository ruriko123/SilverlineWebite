import React from 'react'

function Form() {
    return (

        <div className="form">
            <form>
                <kbd> <strong>Contact Us</strong></kbd>


                <div className="grid">
                    <label htmlFor="firstname" data-tooltip="firstname" data-placement="top">
                        First name
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="First name"
                            required/>
                    </label>
                    <label htmlFor="lastname" data-tooltip="lastname" data-placement="top">
                        Last name
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Last name"
                            required/>
                    </label>
                </div>
                <label htmlFor="email" data-tooltip="Email" data-placement="top">Email address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    required/>
                <small data-tooltip=":)">We'll never share your email with anyone else.</small>
                <label data-tooltip="Phone Number" data-placement="top">Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="Phone Number"
                    placeholder="Phone Number"
                    required/>

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