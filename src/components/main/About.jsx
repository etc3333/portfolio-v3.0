import '../../css/About.css';
import { useEffect, useState } from 'react';

const About = () => {
  const [currentTab, setCurrentTab] = useState('profile');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('pop-scale-animation');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      rootMargin: '-100px',
      threshold: .5 }
    );
    
    document.querySelectorAll('.observer-start-element').forEach(element => {
      observer.observe(element);
    });

    let containerRef = document.getElementById('content-tabs');
    let profileRef = document.getElementById('about-profile');
    let skillsRef = document.getElementById('about-skills');
    let questionnaireRef = document.getElementById('about-questionnaire');
    profileRef.style.transform = `translateX(0)`;
    skillsRef.style.transform = `translateX(${containerRef.clientWidth}px)`;
    questionnaireRef.style.transform = `translateX(${2*containerRef.clientWidth}px)`;

    let firstTab = document.querySelector('#about-nav-tabs > *:first-child');
    let dimensions = firstTab.getBoundingClientRect();
    document.getElementById('moving-tab-rectangle').style.left = dimensions.left - 34 + 'px';
    document.getElementById('moving-tab-rectangle').style.width = dimensions.width + 1 + 'px';
    document.getElementById('moving-tab-rectangle').style.height = dimensions.height + 'px';
  }, []);

  useEffect(() => {
    let containerRef = document.getElementById('content-tabs');
    let profileRef = document.getElementById('about-profile');
    let skillsRef = document.getElementById('about-skills');
    let questionnaireRef = document.getElementById('about-questionnaire');

    if (currentTab == 'profile') {
      profileRef.style.transform = `translateX(0)`;
      skillsRef.style.transform = `translateX(${containerRef.clientWidth}px)`;
      questionnaireRef.style.transform = `translateX(${2*containerRef.clientWidth}px)`;
    } else if (currentTab == 'skills') {
      profileRef.style.transform = `translateX(-${containerRef.clientWidth}px)`;
      skillsRef.style.transform = `translateX(0)`;
      questionnaireRef.style.transform = `translateX(${containerRef.clientWidth}px)`;
    } else if (currentTab == 'questionnaire') {
      profileRef.style.transform = `translateX(-${2*containerRef.clientWidth}px)`;
      skillsRef.style.transform = `translateX(-${containerRef.clientWidth}px)`;
      questionnaireRef.style.transform = `translateX(0)`;
    }
  }, [currentTab]);

  function changeTab(e, tab) {
    setCurrentTab(tab);
    let dimensions = e.currentTarget.getBoundingClientRect();
    document.getElementById('content-tabs').scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('moving-tab-rectangle').style.left = dimensions.left - 34 + 'px';
    document.getElementById('moving-tab-rectangle').style.width = dimensions.width + 1 + 'px';
    document.getElementById('moving-tab-rectangle').style.height = dimensions.height + 'px';
  }

  function toggleAccordion(event) {
    let accordion = event.currentTarget;
    let panel = event.currentTarget.nextElementSibling;
    accordion.classList.toggle('active');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  function openNewTab(url) {
    window.open(url, '_blank');
  }

  return (
    <div id='about-page-container'>
      <div className='title-container'>
        <h2>About Me</h2>
        <div className='banner-span'></div>
      </div>
      <div>
        <div id='about-layout'>
          <div id='about-nav-tabs'>
            <span onClick={(e) => changeTab(e, 'profile')} className={`${currentTab == 'profile' ? 'activeTab' : null} nav-tab`}>Profile</span>
            <span>|</span>
            <span onClick={(e) => changeTab(e, 'skills')} className={`${currentTab == 'skills' ? 'activeTab' : null} nav-tab`}>Skills</span>
            <span>|</span>
            <span onClick={(e) => changeTab(e, 'questionnaire')} className={`${currentTab == 'questionnaire' ? 'activeTab' : null} nav-tab`}>Commonly Ask Questions</span>
            <span id='moving-tab-rectangle'></span>
          </div>
          <div id='content-tabs-container'>
            <div id='content-tabs'>
              <section id='about-profile'>
                <div className='about-profile-intro-container'>
                  <div className='about-profile-intro observer-start-element'>
                    <h3>Ethan Chen</h3>
                    <h5>Full Stack Software Engineer</h5>
                    ethan.chen333@gmail.com | (818) 251-6099
                  </div>
                </div>
                <div>
                  <div className='about-profile-education observer-start-element'>
                    <h4>Education</h4>
                    <ul>
                      <li>UC San Diego 2020-April,2024 </li>
                      <li>B.S. Mathematics-Computer Science</li>
                      <li>3.418</li>
                    </ul>
                  </div>
                  <div className='about-profile-jobExperience observer-start-element'>
                    <h4>Job Experience</h4>
                    <ul>
                      <li style={{marginBottom: '1rem'}}>
                        <div className='about-profile-jobTitle'>Frontend Software Engineering Intern | NeuroLeap Corp</div>
                        <div>Jan 2023 - April 2024</div>
                        <ul>
                          <li>Tech Stack: Vue.js</li>
                          <li>Enhanced the UI/UX for NeuroLeap Corp&apos;s main site to improve customer engagement and streamline introductions to our services.</li>
                          <li>Enhanced site accessibility by implementing features to improve usability for users with disabilities and expanding overall audience reach.</li>
                          <li>Added translation feature to enhance audience for Neuroleap mainsite.</li>
                        </ul>
                      </li>
                      <li>
                        <div className='about-profile-jobTitle'>Full Stack Software Engineering | NeuroLeap Corp</div>
                        <div>April 2024 - Present</div>
                        <ul>
                          <li>Tech Stack: Vue.js, Golang, PostgreSQL, Docker</li>
                          <li>Developed and maintained a scalable cloud service enabling medical specialists to create custom applications for testing patients.</li>
                          <li>Implemented report generation features using <a href='https://d3js.org/'>D3.js</a> to create interactive visualize statistical data analysis.</li>
                          <li>Used <a href='https://www.docker.com/'>Docker</a> to orchestrate multi-container environments, facilitating ease integration of backend services, database, frontend services and reverse proxies.</li>
                          <li>Configured <a href='https://nginx.org/en/'>Nginx</a> as a reverse proxy to distribute incoming client request to multiople backend services enchancing load balancing and scalability.</li>
                          <li>Designed RESTful APIs to handle Create, Read, Update, and Delete (CRUD) operations.</li>
                          <li>Automated email transactions to imrove customer experience and interactivity.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className='socialMedia-container'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='socialMedia-icons' onClick={() => openNewTab('https://www.linkedin.com/in/ethan-chen-88649b229')} viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                  </div>
                </div>
              </section>
              <section id='about-skills'>
                <div>
                  <div className='about-skill-title-container observer-start-element'><span>Programming Languages / Markup Languages</span></div>
                  <div className='about-skill-content-container'>
                    <ul>
                      <li className='observer-start-element'>HTML</li>
                      <li className='observer-start-element'>CSS</li>
                      <li className='observer-start-element'>SASS</li>
                      <li className='observer-start-element'>Javascript</li>
                      <li className='observer-start-element'>Go</li>
                      <li className='observer-start-element'>Java</li>
                      <li className='observer-start-element'>Node.js</li>
                      <li className='observer-start-element'>Python</li>
                      <li className='observer-start-element'>C++</li>
                      <li className='observer-start-element'>C#</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className='about-skill-title-container observer-start-element'><span>Web Development Frameworks</span></div>
                  <div className='about-skill-content-container'>
                    <ul>
                      <li className='observer-start-element'>React.js</li>
                      <li className='observer-start-element'>Vue.js</li>
                      <li className='observer-start-element'>Express.js</li>
                      <li className='observer-start-element'>.NET</li>
                      <li className='observer-start-element'>Electron</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className='about-skill-title-container observer-start-element'><span>Databases</span></div>
                  <div className='about-skill-content-container'>
                    <ul>
                      <li className='observer-start-element'>PostgreSQL</li>
                      <li className='observer-start-element'>Firebase</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className='about-skill-title-container observer-start-element'><span>Version Control & Collaboration</span></div>
                  <div className='about-skill-content-container'>
                    <ul>
                      <li className='observer-start-element'>Git</li>
                      <li className='observer-start-element'>Trello</li>
                      <li className='observer-start-element'>Slack</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className='about-skill-title-container observer-start-element'><span>Deployment & Cloud Services</span></div>
                  <div className='about-skill-content-container'>
                    <ul>
                      <li className='observer-start-element'>Docker</li>
                      <li className='observer-start-element'>Firebase</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className='about-skill-title-container observer-start-element'><span>Security</span></div>
                  <div className='about-skill-content-container'>
                    <ul>
                      <li className='observer-start-element'>JWT Role Based Authentication</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className='about-skill-title-container observer-start-element'><span>Development Process</span></div>
                  <div className='about-skill-content-container'>
                    <ul>
                      <li className='observer-start-element'>Agile Methodologies</li>
                      <li className='observer-start-element'>SEO Principles</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section id='about-questionnaire'>
                <div className='questionnaire-title-container observer-start-element'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                  Why?
                </div>
                <div className='accordion-container observer-start-element'>
                  <button onClick={e => toggleAccordion(e)} className="accordion">Why Full Stack Software Engineering?</button>
                  <div className="panel">
                    <p>
                      Choosing Full Stack Software Engineering allows me to engage with a broader spectrum of the development process than focusing solely on frontend or backend development. This holistic view of the entire workflow provides me with a greater sense of fulfillment and enables me to perform my work more effectively. By understanding how different components come together, I can better identify what’s needed to drive a product to completion.
                    </p>
                  </div>
                </div>
                <div className='questionnaire-title-container observer-start-element'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                  Logistical
                </div>
                <div className='accordion-container observer-start-element'>
                  <button onClick={e => toggleAccordion(e)} className="accordion">When is the earliest you can start?</button>
                  <div className="panel">
                    <p>
                      After 2 Weeks of formal offer. May vary based on location.
                    </p>
                  </div> 
                </div>
                <div className='questionnaire-title-container observer-start-element'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                  Skill Wise
                </div>
                <div className='accordion-container observer-start-element'>
                  <button onClick={e => toggleAccordion(e)} className="accordion">What is my experience with Cloud Services.</button>
                  <div className="panel">
                    <p>
                      I have experience utilizing Firebase BaaS to perform backend operations, particularly in implementing authentication to enhance user security. One notable project involved developing an application that enables users to create groups and organize photos into folders based on those groups, facilitating easy sharing and collaboration with friends and family.
                    </p>
                  </div>
                </div>
                <div className='accordion-container observer-start-element'>
                  <button onClick={e => toggleAccordion(e)} className="accordion">Describe an application I am proud of.</button>
                  <div className="panel">
                    <p>
                    I designed a sophisticated testing creator that serves as a vital tool for medical personnel in digitizing assessments, such as ADHD tests commonly used by specialists. This platform enables healthcare professionals to create customized tests and incorporate additional features tailored to their specific needs when administering evaluations to patients. Notably, the application supports third-party integrations, including camera recording, EMG, ...etc , which enhance the documentation and monitoring of patient responses during the testing process. 
                    </p>
                  </div>
                </div>
                <div className='accordion-container observer-start-element'>
                  <button onClick={e => toggleAccordion(e)} className="accordion">What is my data visualization experience?</button>
                  <div className="panel">
                    <p>
                      I developed a comprehensive report generation application for my previous job that integrates both backend and frontend components. This application not only automates the generation of detailed reports but also includes robust data visualization and statistical analysis features. Users can easily interpret complex data sets through visual representations, enabling them to draw meaningful insights. Additionally, the application offers tailored recommendations based on the analyzed data, making it a valuable tool for informed decision-making. I take pride in this project because it combines my skills in both frontend and backend development while delivering a practical solution that enhances user experience and productivity.
                    </p>
                  </div>
                </div>
                <div className='accordion-container observer-start-element'>
                  <button onClick={e => toggleAccordion(e)} className="accordion">What is my experience with large data sets?</button>
                  <div className="panel">
                    <p>
                      I have experience working with large CSV files that contained application configurations. My role involved manipulating and processing this data to configure applications. After extracting and interpreting the data, I re-exported the updated files for further use.
                    </p>
                  </div>
                </div>
                <div className='accordion-container observer-start-element'>
                  <button onClick={e => toggleAccordion(e)} className="accordion">Have I worked on Desktop/Mobile Apps?</button>
                  <div className="panel">
                    <p>
                      I have worked with the software framework <a href='https://www.electronjs.org/' target="_blank">Electron</a>. This software builds desktop applications using web based technologies. I worked on the backend of the desktop app that provided functionality to a medical testing device.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;