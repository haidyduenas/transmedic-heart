import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'

const Home = () =>{ 
			return (<div className="main-content home">
				<h2>How Will Heart In A Box Revolutionize Heart Transplants </h2>
				<p>The Organ Care System (OCS) or Heart-in-a-Box is a new way to transport a donated heart.
          Because it is still brand new the system is going through testing which are showing 
          promise and could lead the way to expanding new way to improve the heart before being transplanted.
          The heart-in-a-box machine is still new and being tested in hospitals around the US but doctors hope
          that It will one day reach many other hospitals in order to save more lives. One of the difficulties
          is when to declare a person brain dead or persistent vegetative state, which still stands as an ongoing
          issue that prevents advancements. Although it will be mentioned briefly to give an idea of the situation
          I will not be able to go in depth because it is a very broad and long topic that requires more writing 
          and research which I hope to keep enforcing later on as I keep writing more about this topic.
        </p>
				<hr />
			</div>);
}

const Reference = () => {
  return(<div className="main-content">
				<h2>Reference</h2>
				<p>'Beating heart' technology could revolutionize field of heart transplantation. (n.d.). Retrieved September 19, 2017, from http://heart.ucla.edu/beating-heart-technology
        <hr/>
        Brain Death vs. Persistent Vegetative State: What is the Legal Difference? (n.d.). Retrieved September 24, 2017, from http://healthcare.findlaw.com/patient-rights/brain-death-vs-persistent-vegetative-state-what-is-the-legal-difference.html
        <hr/>
        DiGiulio, S. (2017, March 9). 'Beating Heart in a Box' Promises Major Revolution in Medical Care. Retrieved September 25, 2017, from https://www.nbcnews.com/mach/technology/beating-heart-box-promises-major-revolution-medical-care-n770236
        <hr/>
        Heart Transplant Surgery 101. (n.d.). Retrieved September 20, 2017, from http://www.hopkinsmedicine.org/healthlibrary/test_procedures/cardiovascular/heart_transplantation_procedure_92,P07974
        <hr/>
        Kuang, J., Sun, Y., Wang, W., Ke, H., & Ye, H. (2015, April 15). Myocardial apoptosis and injury of donor hearts kept in completely beating status with normothermic blood perfusion for transplants. Retrieved September 21, 2017, from https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4483873/#b4
        The Living Donation Process. (n.d.). Retrieved September 21, 2017, from https://organdonor.gov/about/process/living-donation.html
        </p>
			</div>);
}
 
const Annotated = (props) => {
  return (
    <div className="main-content">
      <h2>Annotated Bibliography</h2>
      <p>1.)“ But some organs and tissues can be donated while the donor is alive. Nearly 6,000 living
        donations take place each year. That's about 4 out of every 10 donations.” (Living). 
        This quote talked about how there are many organ donations in which the patient does not
        need to be dead. The source informed the reader that out of all donations, living donations
        make up about 40%. This information was obtained from the U.S. Department of Health and Human
        Services website, more specific their living organ donation section that informs future people
        that would like to donate organs or living organisms/tissues. The site informs the reader about
        what organs can be donated, the process, long term effects, and financial assistance.<hr/>
        2.)“a diagnosis of heart failure does not mean the heart is about to stop beating. The term failure means the heart muscle is failing to pump blood normally because it is damaged or very weak, or both.” (Heart Transplant, 2017).This source was obtained from John Hopkins’ medical library online. The article was an overview information about heart transplants, seemed somewhat like it was information that was given to a patient informing the of what it was, what was going to happen, risks, and how to get ready for a transplant. In this quote we see that heart failure does not mean the heart will stop beating, it just means that the heart is not able to function normally because the heart is damaged.<hr/>
        3.)“Due to the duration of cold storage is still limited to 4 to 6 hours, during which period myocardial injury will occur in to more or less degree” (Kwang et al, 2015). This was an article written by five Chinese doctors working in the same research hospital but they all specialized in different areas. Doctors wrote this article in order to study how a heart can be transferred from one place to another. They also talked about the reason why hearts cannot be stored for more than 4-6 hours because then the heart can develop a myocardial injury due to the lack of oxygen. That being said, the heart would be useless if it isn’t used between that time period.<hr/>
        4.)“it [the heart] is placed in a high-tech OCS box and is immediately revived to a beating state, perfused with oxygen and nutrient-rich blood, and maintained at an appropriate temperature. The device also features monitors that display how the heart is functioning during transport.” (Beating, 2017). This information was obtained from the UCLA medical school website. This source is an article talking about the Organ Care System since they are one of the few hospitals across the US testing this machine. UCLA medical school is one of the best schools in the US so it makes them reliable, especially since they are talking directly on how this machine could help future heat transplants.<hr/>
        5.)Brain Death vs. Persistent Vegetative State: What is the Legal Difference?. For this article i used/gave a brief definition of what is the difference between Brain Death and Persistent Vegetative State. This source came from a website that was about laws in the US so this source informed the reader about what requirements need to be met in order to be considered brain dead or vegetative state. The article did not go too in depth because it is controversial and requires more research and focus on more than just law. I just needed a brief description on why this is controversial.<hr/>
        6.)  “In the future it may be possible to apply new fields of research, such as gene therapy or regenerative medicine, to actually improve organs before a transplant, Hassanein says. “It opens up a huge area of scientific and clinical innovation.” (DiGiulio, 2017). This was a news article about the Organ Care System so they focused on what the machine did and how it helped with heart transplant. The article was written by an journalist who has a good record of researching and writing about medical topics. The article talks about how a doctor who is testing this machine talks about how this revolutionizes the way hearts a transported from one place to another without having a risk of the heart failing and becoming useless. The doctor also mentions that this machine, as it improves, it will open up many more medical advancements such a gene therapy and regenerative medicine to help improve organs before it is transplanted.<hr/>
        </p>
    </div>
  );
}
const Transplant =  (props) => {
  const Courses = [
    {
      title: "Transplant",
      img_src : "http://img.medicalexpo.es/images_me/projects/images-g/sistema-cuidado-organo-por-transmedics-5668-8871834.jpg",
      description : "Transplant simply means that a certain part/piece is replaced with another one, but in medicine the transplant means that a certain organ is replaced with a healthy organ in order to save/improve quality of life. Some transplants do not require the donor to be legally dead. This means that the donor is still alive and donate an organ to an individual that needs it. According to the U.S. Department of Health and Human Services mentions “ But some organs and tissues can be donated while the donor is alive. Nearly 6,000 living donations take place each year. That's about 4 out of every 10 donations.” (Living). According to these statistics, about 40% of all transplants are living transplants, meaning that the person is able to donate a certain organ without being declared brain dead. Some of the organs and/or living tissue that can be used during the living transplant are one of the two kidneys, lobe of a liver, part or one lung, skin, healthy stem cells, and blood are just a few of the many that could be named. Of course, before a person could donate a living tissue or organ it is necessary to be thoroughly evaluated in order to be sure that the patient will be able to accept the donation without any problems. Continuing with the statistics given by U.S. Department of Health and Human Service, the other 60% should be donations that require organs that a living person is not able to donate. This means that the Individual who will be donating the organ should be legally declared dead. One of the organs that can only be donated by a dead person is the heart."
    }
    ];	
    return (
      <ul>
      {Courses.map((item, index) => {
                return <li className="course media group" key={index}>
                  <img className="course-img" src = {item.img_src} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
                
              })}
              </ul>
     );
}
const Heart =  (props) => {
  const Courses = [
	{
    title: "Heart-in-a-Box",
    img_src : "http://america.aljazeera.com/content/ajam/watch/shows/techknow/blog/2013/9/8/transmedics-keepsdonorheartsbeatingenroutetotransplantpatients/jcr:content/blog/mainpar/adaptiveimage_0/src.adapt.960.high.HeartBox-TransMedicsHeartVitals.1378533576126.jpg",
    description : "For a heart transplant the patient has to be diagnosed with heart failure by a doctor specialised in Cardiology. It is better to see a cardiologist when there are heart complications because only he/she will be able to identify the best treatment for the heart. Sometimes the heart could be treated with medicine. In some extreme cases the patient can be diagnosed with heart failure. John Hopkins Medicine Library website gives a brief description on what heart failure means saying, “a diagnosis of heart failure does not mean the heart is about to stop beating. The term failure means the heart muscle is failing to pump blood normally because it is damaged or very weak, or both.” (Heart Transplant, 2017). That being said, heart failure does not mean that the heart will suddenly stop beating it just means that the heart is not able to pump blood normally due to malfunction of one or two ventricles or atriums while pumping blood. But of course, this is only required when any other type of treatment is not giving any improvement. The one of the most difficult obstacles with a heart transplant is not necessarily the finding the correct heart for the patient or the surgery itself, the difficult part is transferring the heart from one place to another. One of the most crucial steps to a heart transplant is being able to move the donated heart from one location to the other. Once the donated heart is obtained the doctors have a time period to be able to transfer the heart and perform the surgery. The usual storage for a donated heart is actually simple and surprising, when the heart is taken out of the body it is placed in an iced lunchbox in order to preserve the heart. This method of storage and transport has its problems because storage time is short, as mentioned in the article about Myocardial apoptosis, which said “Due to the duration of cold storage is still limited to 4 to 6 hours, during which period myocardial injury will occur in to more or less degree” (Kwang et al, 2015). In this article written by five chinese doctors working in Hubei University of Medicine in China did a research about Myocardial apoptosis and injury of donor hearts. In this part they mention that once the heart is taken out of the donor’s body then they only have about 4-6 hours to preserve and transfer to the patient needing the heart transplant. They mentioned that the reason that they are only able to store that heart for such a short time is due to myocardial injury. Myocardial injury is when the heart has a higher intake of CO and not enough oxygen which causes the heart muscles to fail...in a living body this is known as a heart attack (infarct). This is due to the lack of oxygenized blood moving through the small coronary veins and arteries. A company called TrasnMedics has created a machine that is called Organ Care System (OCS) or “Heart-In-a-Box”. This machine is still being tested in a few hospitals all over the US to obtain more statistics and information on how this machine could improve the transport of the donated hearts. OCS recreates an environment similar to the body in order to help the heart survive longer outside the body. The UCLA Medical center is one of the medical centers in the US testing the OCS and they gave a brief description of the machine’s function, in their medical page it shows, “it [the heart] is placed in a high-tech OCS box and is immediately revived to a beating state, perfused with oxygen and nutrient-rich blood, and maintained at an appropriate temperature. The device also features monitors that display how the heart is functioning during transport.” (Beating, 2017). The heart, once placed inside the OCS machine, will be a beating heart outside of the human body. The system is able to keep blood flowing through the heart to elongate life span to be able to transport the heart from one state to another without having to worry so much that the heart could not be used, which happens often with the current heart transport that is still being used. Not only does the machine keep the heart beating but it is able display the functioning of the heart through a monitor.  With this machine it is expected to not only simplify the transport of the heart but also rise the number in successful heart transplant since the heart will not be thrown away since the new method elongates the time period of the heart being able to stay out of the body.",
	},
	];
  return (
    <ul>
    {Courses.map((item, index) => {
              return <li className="course media group" key={index}>
                <img className="course-img" src = {item.img_src} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
              
            })}
            </ul>
   );
}
const Issues =  (props) => {
  const Courses = [
    {
      title:"Issues Faced and Future advancements",
      img_src:"https://i.pinimg.com/736x/61/14/6a/61146a36bf0c0dc6ae090c8219a65e3b--freeze-doctors.jpg",
      description : "Current ongoing issue that current heart transplant face are heart donors and current cost of the OCS machine. At the moment it is difficult to find heart donors because there are legal and ethical issues about when is a patient considered brain dead or in a vegetative state. As mentioned in Brain Death vs. Persistent Vegetative State: What is The Legal Difference?,  Many people confuse Persistent Vegetative State (PVS) with brain death. When a patient is declared brain dead when there is no activity or loses all functionality. Due to the loss of brain functionality, the patient enters a comatose stage and would not be able to respond to any kind of stimuli that the doctor applies on the patient. In this stage the hospital, through judge orders, is permitted to pull the plug unless there are doubts about the patient’s condition. PVS the patient is conscious but it’s limited to the amount of movement and communication. It is difficult for a patient to fully recover from PVS due to the damage the patient has received, therefore the patient will become more dependent (Brain Death, 2015). Of course there are times when the patient stays on what seems a permanent PVS so it is necessary that the family is ready to pull the plug. If the patient already wrote and Advanced Directive saying that resuscitation is not necessary then the doctor can follow the patient’s wish, the problem with that is that maybe the patient changes mind and does not want to live or the family doesn’t want to pull the plug and/or donate the organs. Such situations are still controversial and certainly delay a possible heart donation. Just as this is a problem encountered many doctors are hopeful that with the OCS doctors are going to be able to study the heart outside the body. One doctor interviewed by NBC news said, “In the future it may be possible to apply new fields of research, such as gene therapy or regenerative medicine, to actually improve organs before a transplant, Hassanein says. “It opens up a huge area of scientific and clinical innovation.” (DiGiulio, 2017). Here the doctor testing the OCS machine believes that later in the future, as the machine is updated and improved, doctors will be able improve the heart before it reaches the patient in need of the heart. For example, maybe if the heart is healthy but all it needs is to close one of the septums due to a malformation then that will be possible due to regenerative medicine and such. There are many possibilities that are being opened due to this technological advancement."
    },
    ];
    return (
      <ul>
      {Courses.map((item, index) => {
                return <li className="course media group" key={index}>
                  <img className="course-img" src = {item.img_src} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
                
              })}
              </ul>
     );
}

const Information = () => {
   return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2> Information </h2> 
          <ul className="course-nav"> 
             <li>  <NavLink exact to="/information/transplant">Transplant</NavLink> </li>
             <li>  <NavLink to="/information/heart-in-a-box">Heart-in-a-Box</NavLink></li>
             <li>  <NavLink to="/information/issues">Issues Faced and Future advancements</NavLink> </li>            
          </ul>
        </div>
          <Switch> 
            <Route exact path= "/information" 
                   render={()=><Redirect to="/information/transplant" /> } />

            <Route path = "/information/transplant" component = {Transplant}/>
            <Route path = "/information/heart-in-a-box" component = {Heart}/>
            <Route path = "/information/issues" component = {Issues}/>
          </Switch>
      </div>
   );   
}

const App = () => (
  <BrowserRouter>
    <div className="data-reactroot container">
      <header>
      <span className="icn-logo">
        <i class="material-icons">face</i>
			</span>
      <ul className="main-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/information">Information</NavLink></li> 
        <li><NavLink to="/reference">Reference</NavLink></li> 
        <li><NavLink to="/annotated">Annotated</NavLink></li>                 
      </ul>
      </header>
      <hr/>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/annotated" component={Annotated}/> 
         <Route path="/information" component={Information}/> 
         <Route path="/reference" component={Reference}/> 
         <Route component={Home}/>
      </Switch>
    </div>
  </BrowserRouter>
)


export default App;
