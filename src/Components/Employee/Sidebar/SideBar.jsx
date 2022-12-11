import React,{useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import "./SideBar.css"
// import { Link } from 'react-router-dom';

const SideBar = ({category,categoryValue,setcategoryValue}) => {
    const calendorMaxDate = new Date(new Date().setDate(new Date().getDate()+8));
    const [date, setdate] = useState(new Date(new Date().setDate(new Date().getDate()+1)))
    const [form, setform] = useState({
     name: "",
    email: "",
    date: "",
    time: "",
    message: ""
    })

    const [showBtn, setshowBtn] = useState(false)

    // console.log(date)

   const [mobview, setmobview] = useState(window.innerWidth)
   
   
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
        
    



    const handleClick = (e) =>{
                // console.log(e)
    }
    const handleFormSubmit = async (e) =>{
      e.preventDefault();
      let d  = new Date(date)
      await addDoc(collection(db,'booking'),{
        name:form.name,
        email:form.email,
        time:form.time,
        date: d.toString(),
        message:form.message
    }
    )

    setform(
      {
        name: "",
       email: "",
       date: "",
       time: "",
       message: ""
       }
    )
      
    }
    const nextBtn = () =>{

        return (
            <div  style={showBtn === false ? {backgroundColor:"white",width:"40px",height:"30px",borderRadius:"10px",paddingTop:"7px",boxShadow:"1px 1px 1px gray"}: {display:"none"}  } onClick={()=>setshowBtn(!showBtn)} ><i  className="fas fa-angle-right fa-lg"></i></div>
        )
    }
    const prevBtn = () =>{
  
        return (
            <div style={showBtn === true ? {backgroundColor:"white",width:"40px",height:"30px",borderRadius:"10px",paddingTop:"7px",boxShadow:"1px 1px 1px gray"}:{display:"none"}} onClick={()=>setshowBtn(!showBtn)} ><i  className="fas fa-angle-left fa-lg"></i></div>
        )
    }


    return (
        <>
       <div className='container'>
          <section   className={ mobview > "1140" ? 'employee-left-side-bar'  : null } >
           
            <div className={ mobview > "1140" ? null  : "row mob-employee-left-side-bar" } >
            <div className={ mobview > "1140" ? null  : "col-md-6 col-sm-12" } >
                <h6>What you get from our sessions? </h6>
                <ul>
                    <li>Understand your thoughts</li>
                    <li>Make sense of your feelings</li>
                    <li>Explore your personality and understand yourself better</li>
                    <li>Get Tools/ strategies to navigate through stressful situations</li>
                </ul>
            </div>

            <div className={ mobview > "1140" ? null  : "col-md-6 col-sm-12" } >
                <h6>Process Flow of Sessions</h6>
                <ul>
                    <li>First session - Discuss the issue and how you would like to benifit from the session</li>
                    <li>Remaining sessions - Typically range from 2-4 sessions where the issue would be discussed in details. Alongside, strategies and tools would be given to help you feel better and function better in personal and professional aspects of life </li>
                </ul>
            </div>
            </div>
            <div className='employee-feedback-link'>
              <button><i class="fas fa-thumbs-up fa-lg"></i>Feedback</button>
            </div>
           
          </section>  
            
          <section  className={ mobview > "1140" ? 'employee-right-side-bar'  : null } >
              <img   className={ mobview > "1140" ? 'employee-right-side-bar-logo' : 'mob-employee-left-side-bar-logo img-fluid' } src={`./images/ellipse.png`} style={mobview < "1150" ? {paddingBottom:"50px",paddingTop:"50px"} : null} alt="ellipse"  />
              <div className={ mobview > "1140" ? null  : 'mob-employee-right-side-bar' } >
                 <h2>Book a session</h2>
              <form action="" className='form'>

              <div className='row mob-employee-right-side-bar-inputs'>
                <div className={ mobview > "1140" ? null  : 'form-group col-md-6 col-sm-12' }>
                    <label htmlFor="name">Name</label>
                  <input type="text" 
                   name='name' 
                   required  
                   style={{width:"100%"}}
                   value={form.name}
                   onChange={(e)=>setform({...form,name:e.target.value})}

                   />
                </div>
                 <div className={ mobview > "1140" ? null  : 'form-group col-md-6 col-sm-12' }>
                    <label htmlFor="email">Email id</label>
                  <input type="email"  
                  name='email' 
                  required 
                  style={{width:"100%"}}
                   value={form.email}
                   onChange={(e)=>setform({...form,email:e.target.value})}
                   />
                 </div> 
              </div>
                <div className={mobview > "1140" ? null : "row"} style={mobview > "1140" ? null : {marginBottom:"30px"}} >
                <div className={mobview > "1140" ? null : "col-md-6 col-sm-12"}  >
                  <label htmlFor="calendar">Date:</label>
                  <Calendar
                    className="employee-right-side-bar-calendar"
                  value={date}
                  minDate={new Date(new Date().setDate(new Date().getDate()+1))}
                  maxDate={calendorMaxDate}
                  onChange={setdate} 
                  onClickDay={handleClick} 
                  next2Label={null}
                  tileDisabled={({date})=> date.getDay()===0}
                  prev2Label={null}
                  nextLabel={nextBtn()}
                  prevLabel={prevBtn()}
                  
                  />
                  </div>
                  <div className={mobview > "1140" ? null : "col-md-6 col-sm-12 time"}  >


                  <div style={{marginTop:"30px"}} >
                      <label htmlFor="professional">Professional:</label>
                      <select name="" id="" required style={{width:"100%"}} >
                        <option value="professional-one" selected>Professional 1</option>
                        <option value="professional-two">Professional 2</option>
                        <option value="professional-three">Professional 2</option>
                      </select>
                  </div>
          
                 
                  <div  style={{marginTop:"30px"}} >
                    <label htmlFor="time">Time:</label>
                      <select name="time" style={{width:"100%"}} onChange={(e)=>setform({...form,time:e.target.value})} >
                      
                      <option value="09:00" selected >09.00 AM</option>
                      
                      <option value="10:00">10.00 AM</option>
                      
                      <option value="11:00">11.00 AM</option>
                      
                      <option value="12:00">12.00 PM</option>
                      
                      <option value="13:00">01.00 PM</option>
                      
                      <option value="14:00">02.00 PM</option>
                      
                      <option value="15:00">03.00 PM</option>
                      
                      <option value="16:00">04.00 PM</option>
                      
                      <option value="17:00">05.00 PM</option>
                    
                      <option value="18:00">06.00 PM</option>
                     
                      <option value="19:00">07.00 PM</option>
                      
                      <option value="20:00">08.00 PM</option>
                      
                      <option value="21:00">09.00 PM</option>
                    
                      {/* <option value="22:00">10.00 PM</option>
                
                      <option value="23:00">11.00 PM</option> */}
                      
                  </select>
                  </div>
                
                 
                  
                  
                  <div style={{marginTop:"30px"}} >
                     <label htmlFor="category">Category:</label>
                      <select name="category" id="" style={{width:"100%"}} value={categoryValue} onChange={(e)=>{setcategoryValue(e.target.value)}} required >
                          <option value={category.one} selected >Feeling Stressed</option>
                          <option value={category.two}>Manage Burnout</option>
                          <option value={category.three}>Relationship/People Problems</option>
                          <option value={category.four}>Wish to Feel Good</option>
                          <option value={category.five}>Not Sure what to talk about</option>
                          <option value={category.six}>Need Mental Clarity</option>
                      </select>
                  </div>
                  </div>
                  </div>
                  <div className={mobview > "1140" ? null : "form-group"} style={{marginTop:"30px"}}>
                   
                  <label htmlFor="message">Any Message ?</label>
                  <textarea name="" id="" cols="30" rows="5" required className={mobview > "1140" ? null : "form-control"}
                    value={form.message}
                   onChange={(e)=>setform({...form,message:e.target.value})}
                   style={mobview < "1140" ? {background:"#f3f3f3"} : {background:"rgba(241, 234, 234, 0.562)"}}></textarea>
                  </div>
                  <div  className='sidebar-form-btn' >
                    <button type='submit'  onClick={(e)=>handleFormSubmit(e)}>Submit</button> 
                  </div>
                     
              </form>
              </div>
             
          </section>
        </div> 
        </>
    )
}

export default SideBar
