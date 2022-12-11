import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar/Sidebar'
import "./Admin.css"
import Table from './Table/Table'
import Patient from './Patient/Patient'


const Admin = () => {

    const [left, setleft] = useState("-500px")
    const [mobview, setmobview] = useState(window.innerWidth)
    const [user, setuser] = useState(true)
    const [booking, setbooking] = useState(true)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
            
        });
    }, [])

    

    

    console.log(user)


        return(
            <div className='admin'>
                    <Sidebar setbooking={setbooking} mobview={mobview} left={left} setleft={setleft} user={user} setuser={setuser} />  
                   
                   {
                    booking?  <Table /> : <Patient />
                   } 
                    
                </div>
        )
    


   
   }

export default Admin
