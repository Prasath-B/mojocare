import React from 'react'
import "./Admin.css"
// import {useNavigate} from 'react-router-dom';

const AdminCard = ({user}) => {

        // const history = useNavigate()

        const handleClick = (route)=>{
            // history(route)
        }
        // console.log(user)

    return (
        <>  
            

            <section className='admin-card-wrap container'>

                 <div className='admin-card' onClick={()=>handleClick("/admin/booking")}>
                    <div>
                        <img src={`/images/Admin/book.png`} alt="" />
                    </div>
                    
                         
               <h3 className='admin-card-btn' >Bookings</h3>
                
           
                    
                    
                </div>
                
                <div className='admin-card ' onClick={()=>handleClick("/admin/register")} >
                    <div>
                        <img src={`/images/Admin/reg.jpg`}  alt="" />
                    </div>
                         <h3 className='admin-card-btn' >Register</h3>
                </div>
                
     
                 {user ?  <div className='admin-card' onClick={()=>handleClick("/admin/users")} >
                    <div>
                        <img src={`/images/Admin/employer.jpg`} alt="" />
                    </div>
                
                      <h3 className='admin-card-btn' >Users</h3>
                   
                </div> :
                 <div className='admin-card' onClick={()=>handleClick("/admin/employer")} >
                    <div>
                        <img src={`/images/Admin/employer.jpg`} alt="" />
                    </div>
                
                      <h3 className='admin-card-btn' >Employers</h3>
                   
                </div>
                }
                <div className='admin-card' onClick={()=>handleClick("/admin/professional")} >
                    <div>
                        <img src={`/images/Admin/professional.png`}  alt="" />
                    </div>
                        <h3 className='admin-card-btn' >Professionals</h3>
                </div>
            
            

               
              
            </section> 
        </>
    )
}

export default AdminCard
