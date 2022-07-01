import { MdEmail } from "react-icons/md";
import { RiInstagramFill, RiGithubFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './Home.css';

function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-bg fixed-top">
                <div className="container">
                    <a className="navbar-brand">Jason Tandiono</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#abtme">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#proj">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cont">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0" >
                <div className='container' id="abtme">
                    <div className='aboutme' data-aos="zoom-in-right" data-aos-duration="1000">
                        <h1><b>Hi, I'm Jason Tandiono</b></h1>
                        <p id='details'>I'm a student who is eager to find work experience as a front end developer. Have experience in creating and designing websites. I also enjoy working with other people and learning new things related to technology.</p>
                    </div>
                    <div className='frame' data-aos="flip-up" data-aos-duration="2000">
                        <img className="image" src="https://i.ibb.co/RpBwcMc/jason.jpg" alt="Jason Profile Picture" />
                    </div>
                </div>
                <div className='container mt-5' id="proj">
                    <h1 className='title'><b>Projects</b></h1>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <a href='https://sei-you.vercel.app/welcome' target="_blank" className='link w3-animate-left'>
                                <div className="card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                                    <img src="https://i.ibb.co/j51c9dg/unknown.png" className="card-img-top" alt="SeiYou" />
                                    <div className="card-body">
                                        <h5 className="card-title">SeiYou</h5>
                                        <p className="card-text">SeiYou is a Cross-Platform Mobile Application that used for people who wanted to share their voice acting skills.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://sei-you.vercel.app/welcome' target="_blank" className='link'>
                                <div className="card" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                                    <img src="https://i.ibb.co/Hz4Xt0k/logo.png" className="card-img-top" alt="Quick Recipe" />
                                    <div className="card-body">
                                        <h5 className="card-title">Quick Recipe</h5>
                                        <p className="card-text">Quick Recipe is a Mobile Application that provides the steps and ingredients needed to make various types of food recipes in the form of videos and writings.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <h1 className='title'><b>Certificates</b></h1>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <a href='https://www.dicoding.com/certificates/MRZMDL8E0ZYQ' className='link'>
                                <div className="card" data-aos="fade-down-right" data-aos-duration="1000">
                                    <img src="https://i.ibb.co/ZTSX4ts/image.png" className="card-img-top" alt="C" />
                                    <div className="card-body">
                                        <h5 className="card-title">Memulai Pemrograman Dengan C</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='https://www.dicoding.com/certificates/98XWR6JK0ZM3' className='link'>
                                <div className="card" data-aos="fade-down-left" data-aos-duration="1000">
                                    <img src="https://i.ibb.co/ZTSX4ts/image.png" className="card-img-top" alt="Java" />
                                    <div className="card-body">
                                        <h5 className="card-title">Memulai Pemrograman Dengan Java</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='container mt-5 mb-5' id="cont">
                    <h1 className='title'><b>Contact</b></h1>
                    <div className='contact'>
                        <p id="socialmedia">Follow My Social Media</p>
                        <div className='socialmedia'>
                            <a href="mailto: jason.tandiono@student.umn.ac.id"><MdEmail size="2em" color="blue" className="icons" /></a>
                            <a href="https://www.instagram.com/soluseagt/?hl=en" target="_blank"><RiInstagramFill size="2em" color="#E1306C" className="icons" /></a>
                            <a href="https://github.com/JasonJT01" target="_blank"><RiGithubFill size="2em" color="black" className="icons" /></a>
                            <a href="https://www.linkedin.com/in/jason-tandiono-773044237/" target="_blank"><BsLinkedin size="1.63em" color="#0072b1" className="icons linkedin" /></a>
                        </div>
                        <p>Copyright @ 2022 by Jason Tandiono</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;