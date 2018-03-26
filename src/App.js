import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Bio />
                <Projects />
                <Contact />
                <Footer />
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <header id='landing' className="App-header">
                <a href='#'><img id='logo' src='./alj.jpg' alt='alj logo' /></a>
                <div id='intro'>
                    <h1>hi, i'm andrea.</h1>
                    <hr id='intro-div' />
                    <h6>software supporter | data devotee</h6>
                    <a id='to-bio' href='#bio' className='btn btn-outline-dark'>who am I?</a>
                </div>
            </header >
        )
    }
}

class Bio extends Component {
    render() {
        return (
            <section id='bio'>
                <h3>bio</h3>
                <br />
                <div className='row'>
                    <div id='bio-text' className='col col-sm-12 col-md-7'>
                        <p>I'm Andrea Jorge, nice to meet you! I'm a 3rd-year student at the University of Washington majoring in Informatics, with focuses in software development and data science. I love technology, its ubiquity, and overall effect on the human experience. More specifically, I'm passionate about the role tech plays in women's rights and gender equality. My skills include Java, HTML & CSS, React.js, and R, just to name a few. </p>
                        <p>In my free time, I enjoy singing, playing my ukulele, and pretending to be an amateur food critic. If you're ever the Seattle area and need a good spot to eat, feel free to reach out!</p>
                    </div>
                    <div id='andrea' className='col'>
                        <img id='andrea-img' src='./linkedin.jpg' alt='andrea jorge' />
                    </div>
                </div>
                <a id='to-proj' href='#projects' className='btn btn-outline-info'>what have I done?</a>
            </section>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <section id='projects'>
                <h3>projects</h3>
                <br />
                <div id='proj-links'>
                    <a href='#kitch-a-dee'>Kitch-A-Dee</a>
                    <a href='#diversity'>U.S. Restaurant Diversity</a>
                    <a href='#itimeline'>iTimeline</a>
                </div>
                <br /><br />
                <div style={{ paddingBottom: '3em' }} className='container'>
                    <div id='kitch-a-dee' className='row'>
                        <div className='col col-sm-12 col-md-6'>
                            <a href='#kitch-a-dee'><h5>Kitch-A-Dee</h5></a>
                            <h6 style={{ fontSize: '75%' }}>Jan 2017 - Mar 2017</h6>
                            <p id='kitch-des'>Solving the problem of food waste at home, Kitch-A-Dee is a 2-part system RFID chip + iOS app concept, enabling users to get accurate real-time data describing what they have in their kitchens.
                            Inspired by Amazon Go, we worked under the assumption that traditional barcoded products will be a thing of the past.  It utilizes RFID chip sensors to be placed throughout your kitchen, which are synced via Bluetooth. The app displays the items users have at home, sends notifications when food is about to expire, has a suggested customizable grocery list, and even recommends recipes based on the ingredients in your kitchen.
                            </p>
                        </div>
                        <div id='kitch' className='col'>
                            <img id='kitch-img' src='./kitchadee.png' alt='kitch-a-dee logo' />
                        </div>
                    </div>
                    <br /><br />
                    <div id='diversity' className='row'>
                        <div id='div' className='col'>
                            <img id='div-img' src='./diversity.png' alt='restaurant diversity map' />
                        </div>
                        <div className='col col-sm-12 col-md-6'>
                            <a href='https://katiebre.shinyapps.io/info-201-git-R-done/' target="_blank"><h5>U.S. Restaurant Diversity</h5></a>
                            <h6 style={{ fontSize: '75%' }}>Mar 2017 - Jun 2017</h6>
                            <p>In a study of U.S. restaurant diversity, we employed the Yelp API to examine ten popular cuisines. The data retreived was showcased by different visualizations created in R, with libraries like ggplot and plotly, including:
                                <ul>
                                    <li>
                                        A Word Cloud that compared the differences in how restaurants of various cuisines choose their names in Washington State
                                    </li>
                                    <li>
                                        A Stacked Bar graph that compared restaurant type by price level in major U.S. cities
                                    </li>
                                    <li>
                                        A Map that displayed the mean restaurant rating by type in each state
                                    </li>
                                    <li>
                                        A Scatter Plot that showed where each type of food lands on a scale of ratings vs. average price
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <br /><br />
                    <div id='itimeline' className='row'>
                        <div className='col col-sm-12 col-md-6'>
                            <a href='http://students.washington.edu/ljandrea/INFO/info343-final/#/' target="_blank"><h5>iTimeline</h5></a>
                            <h6 style={{ fontSize: '75%' }}>Feb 2018 - Mar 2018</h6>
                            <p>iTimeline lets users search their favorite artists and learn about the progression of their careers via genre analysis, with data supplied by the iTunes API.
                                Features comprise of:
                                <ul>
                                    <li>
                                        A radar chart that shows the number of singles and albums within a specific genre for a given artist
                                    </li>
                                    <li>
                                        A time-wise scatter plot mapping out the genre of the searched artist for their album of that year across their career.
                                    </li>
                                    <li>
                                        A timeline with album information and track previews.
                                    </li>
                                    <li>
                                        A comment section for users to express their feelings about their favorite artists
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div id='time' className='col'>
                            <img id='time-img' src='./itimeline.png' alt='iTimeline preview' />
                        </div>
                    </div>
                </div>
                <a id='to-contact' href='#contact' className='btn btn-outline-dark'>like what you see?</a>
            </section>
        )
    }
}

class Contact extends Component {
    render() {
        return (
            <section id='contact'>
                <h3>contact</h3>
                <br />
                <p>Feel free to get in touch! I'm always happy to talk more about my work, professional opportunities, or anything else you may want to discuss.</p>
                <hr id='contact-div' />
                <p>Let's connect!</p>
                <a id='resume' href='#projects' style={{ marginBottom: '1em' }} className='btn btn-outline-info'>view my resume</a>
                <div id='external-links'>
                    <a href='https://github.com/ljandrea' target="_blank">
                        <FontAwesome className='fab fa-github' name='github' />
                    </a>
                    ljandrea@uw.edu
                    <a href='https://www.linkedin.com/in/ljandrea/' target="_blank">
                        <FontAwesome className='fab fa-linkedin' name='linkedin' />
                    </a>
                </div>
            </section>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <footer>
                From the inner workings of my mind &copy; 2018
        </footer>
        )
    }
}

export default App;
