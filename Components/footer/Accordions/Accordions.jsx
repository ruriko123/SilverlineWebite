import React from 'react'

function Accordions() {
    return (
        <main className="container m-auto">
            <details>
                <summary role="button" className="secondary">Reputation</summary>
                <p className="text-gray-500">A company with a good track record and positive reviews from past customers.</p>
            </details>
            <details>
                <summary role="button" className="secondary">Experience & Trust</summary>
                <ul>
                    <li className="text-gray-500">A company with experience in the type of software you need.</li>
                    <li className="text-gray-500">Products that are used by many of our clients.</li>
                </ul>
            </details>
        </main>

    )
}

export default Accordions