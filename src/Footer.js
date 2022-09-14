import React from 'react';
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import gmail from "./gmail.png";
import house from "./home.png";
import phone from "./phone-call.png";
import phone1 from "./phone.png";
import mail from "./email.png";
function Footer(){


    return(


<div id='f2'>
<footer className="text-center text-lg-start text-white" style={{backgroundColor:'#f93f23',marginTop:'150px'}}>
    
    {/* <section className="d-flex justify-content-between p-4"style={{backgroundColor: "#f93f23"}} >
     
      <div className="me-5" >
        <span ><a href="#top" style={{textDecoration:"none",color: "white",fontWeight:"bold" ,fontSize:"30px"}}>Top of the page</a></span>
      </div>
      
     
    </section> */}
   
    <section className="">
      <div className="container text-center text-md-start mt-5">
       
        <div className="row mt-3">
         
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h4 className="text-uppercase fw-bold">About</h4>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "80px", backgroundColor: "#292929",height: "3px"}}
                />
            <p style={{fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold'}}>
            Kitchen Stories is a multinational 
            restaurant and food delivery company 
            founded by C Cube and D Square in 2011.
            For over a decade now, we've been empowering our customers in discovering new tastes and experiences across countries.


            </p>
          </div>
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h4 className="text-uppercase fw-bold">Menu</h4>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "70px", backgroundColor: "#292929",height: "3px"}}
                />
            <p style={{lineHeight:'1'}}>
              <a href="#!" className="text-white" style={{textDecoration: "none",fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold'}}>Snacks</a>
            </p>
            <p style={{lineHeight:'1'}}>
              <a href="#!" className="text-white" style={{textDecoration: "none",fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold'}}>Lunch Combos</a>
            </p>
            <p style={{lineHeight:'1'}}>
              <a href="#!" className="text-white" style={{textDecoration: "none",fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold'}}>Recipe Of The Day</a>
            </p>
            <p style={{lineHeight:'1'}}>
              <a href="#!" className="text-white" style={{textDecoration: "none",fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold'}}>Desserts & Shakes</a>
            </p>
          </div>
         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h4 className="text-uppercase fw-bold">Our Team</h4>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "125px", backgroundColor: "#292929",height: "3px"}}
                />
            <p style={{lineHeight:'1'}}>
              <a href="https://www.linkedin.com/in/chirag-gupta-4092231b7/" target='blank' className="text-white" style={{textDecoration: "none",fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold'}}>Chirag Gupta</a>
            </p>
            <p style={{lineHeight:'1'}}>
              <a href="https://www.linkedin.com/in/chirag-kapoor-7449b021b" target='blank' className="text-white" style={{textDecoration: "none",fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold'}}>Chirag Kapoor</a>
            </p>
            <p style={{lineHeight:'1'}}>
              <a href="https://www.linkedin.com/in/chhaya-madaan-b5ab5220b" className="text-white" target='blank' style={{textDecoration: "none",fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold'}}>Chhaya Madaan</a>
            </p>
            <p style={{lineHeight:'1'}}>
              <a href="https://www.linkedin.com/in/devan-thukral-78b7371ba" className="text-white" target='blank' style={{textDecoration: "none",fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold'}}>Devan Thukral</a>
            </p>
            <p style={{lineHeight:'1'}}>
              <a href="https://www.linkedin.com/in/dinesh-khemka-97bb1a1ba" className="text-white"target='blank' style={{textDecoration: "none",fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold'}}>Dinesh Khemka</a>
            </p>
          </div>
         
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h4 className="text-uppercase fw-bold">Contact</h4>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "110px", backgroundColor: "#292929",height: "3px"}}
                />
            <p style={{fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold',lineHeight:'1'}} ><img src={house}/>  12,Lake Street,Chandigarh</p>
            <p style={{fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold',lineHeight:'1'}}> <img src={mail} /> TheKitchenStories@gmail.com</p>
            <p style={{fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold',lineHeight:'1'}}><img src={phone}/>  9687054267</p>
            <p style={{fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold',lineHeight:'1'}}><img src={phone1}/> 0162818723</p>
          </div>
          
        </div>
        
      </div>
    </section>
   
    <div
         className="text-center p-3 text-white">
         
      <div>
        <a href="https://www.instagram.com/" className="text-white me-4">
          <img src={instagram} style={{height:'30px',width:'30px'}}/>
        </a>
        <a href="https://twitter.com/?lang=en-in" className="text-white me-4">
        <img src={twitter} style={{height:'30px',width:'30px'}}/>
          
        </a>
        <a href="https://www.facebook.com/" className="text-white me-4">
        <img src={facebook} style={{height:'30px',width:'30px'}}/>
          
        </a>
        <a href="https://www.google.com/gmail/about/" className="text-white me-4">
        <img src={gmail} style={{height:'30px',width:'30px'}}/>
          
        </a>
       
      </div>
     
     
    </div>
    <div style={{fontFamily:"'Source Pro Serif','serif'",fontWeight:'bold',fontSize:'18px',textAlign:'center',marginTop:'25px'}}>
      THE KITCHEN STORIES 2022 || ALL RIGHTS RESERVED
    </div>
   
  </footer>
 

</div>


)

}
export default Footer;