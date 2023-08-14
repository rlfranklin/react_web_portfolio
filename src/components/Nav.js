import { useState, useEffect } from "react"
import {Nav, Container} from "react-bootstrap"
export const Nav = () => {
    const [activeLink, setActiveLink] = useState('home');
     const [userStatic, userScrolling] = useState(false);

     useEffect (() => {
        const scrollActive = () => {
            if (window.scrollY > 50) {
                userScrolling(true);
            } else
            userScrolling(false);
        }
        window.addEventListener("scroll", scrollActive);

        return () => window.removeEventListener("scroll", scrollActive)
     }, [] )
     
     const onUpdateActiveLink = (value) => {
        setActiveLink(value);
     }
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary" className={userStatic ? "userStatic": ""}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Take a Look</a>
                {/* img src ={} alt="Icon representing my new brand"*/}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active"  aria-current="page" href="#" className={activeLink === "home" ? 'active nav-link' : 'nav-link'} onClick={() =>onUpdateActiveLink("home")}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-resume" href="#" className={activeLink === "resume" ? 'active nav-link' : 'nav-link'} onClick={() =>onUpdateActiveLink("reume")}>Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link projects" aria-disabled="true" className={activeLink === "projects" ? 'active nav-link' : 'nav-link'} onClick={() =>onUpdateActiveLink("projects")}>Projects</a>
                        </li>
                        <span className="nav-text"></span>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/rikefranklin/"><img scr={} alt="LinkedIN"></img></a>
                            <a href="https://github.com/rlfranklin"><img scr={} alt="GitHub"></img></a>
                        </div>
                        <button className="connect" onClick={() => console.log('Contact Me')}><span>Contact</span></button>
                    </ul>
                </div>
            </div>
        </nav>     
    )
}