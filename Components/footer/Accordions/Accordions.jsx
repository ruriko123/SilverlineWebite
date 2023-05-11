import React from 'react'

function Accordions() {
    return (
        <main className="container m-auto">
            <details>
                <summary role="button" className="secondary">Reputation</summary>
                <p>A company with a good track record and positive reviews from past customers.</p>
            </details>
            <details>
                <summary role="button" className="secondary">Experience & Insurance</summary>
                <ul>
                    <li>A company with experience in the type of roofing you need and in your specific location.</li>
                    <li>Proper insurance to protect you and your property in case of accidents or damage.</li>
                </ul>
            </details>
        </main>

    )
}

export default Accordions