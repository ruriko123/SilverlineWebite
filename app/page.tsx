"use client";
import Navbarcomponent from '@components/top/navbar/Navbar';
import NavbarBottom from "@components/top/navbarbottom/NavbarBottom";
import Main from '@components/main/Main';
import "@styles/App.scss"
import Form from '@components/footer/form/Form';
import Accordions from '@components/footer/Accordions/Accordions';
import "@picocss/pico";
import Topmiddle from '@/Components/middle/Topmiddle';
import "@styles/globals.css"
import Bottommiddle from '@/Components/middle/Bottommiddle';


export default function Home() {
    return (
        <div className="App">
            <div className="top ">

                <div className="hero">
                    <div
                        className="navbottom_wrapper vh-100 "
                        style={{
                        backgroundImage: "url('background.jpg')"
                    }}>
                        <Navbarcomponent/>
                        <NavbarBottom/>
                    </div>
                </div>

            </div>
            <div className="main vh-50" data-theme="dark">
                <Topmiddle/>
            </div>
            <div className="main vh-50" data-theme="dark">
                <Bottommiddle/>
            </div>

            <div className="main" data-theme="dark">
                <Main/>
            </div>
            <div className="container">
                <main className="container">
                    <Accordions/>
                </main>
                <main className="container">
                    <Form/>
                </main>
            </div>

        </div>
    )
}
