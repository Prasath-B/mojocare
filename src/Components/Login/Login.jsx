import React,{useState} from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
const [classname, setclassname] = useState('one')
const [form, setform] = useState({
    username:'',
    password:''
})
const [path, setpath] = useState('patient')
const [toggle, settoggle] = useState(true)

const navigate = useNavigate()

  const changeUser = (param,path)=>{
    setclassname(param)
    setform({
        username:'',
    password:''
    })
    setpath(path)
  }
  const handleSubmit = async()=>{

    if(path === "patient"){
        await addDoc(collection(db,'users'),{
            name:form.username,
        }
        )
    }
    navigate(`/${path}`)
    
  }
  return (
    <section  className='row'>
        <div className='col-lg-7 col-md-12 login-img' >
            <img  src={`login-img.jpg`}  alt="img" />
        </div>
        <div className='col-lg-5 col-md-12 login-right'>
            <h1>Log In</h1>
            <div className='user-select'>
               <span onClick={()=> changeUser('one','patient')} className={classname === 'one' ? 'selected-user' : ''} >Patient</span>
                <span onClick={()=> changeUser('two','admin')} className={classname === 'two' ? 'selected-user' : ''}>Admin</span>
                <span onClick={()=> changeUser('three','doctor')} className={classname === 'three' ? 'selected-user' : ''}>Doctor</span>
            </div>
            <div className='login-form'>
                <input value={form.username} onChange={(e)=>setform({...form, username:e.target.value})} type="text" placeholder='Enter your username' name="username" id="" />
                <div>
                <input style={{width:"270px",marginRight:"10px"}} value={form.password} onChange={(e)=>setform({...form, password:e.target.value})} type={ toggle ? 'password': 'text'} placeholder='Enter your password' name="username" id="" />
                {
                    toggle ? <i class="fa-solid fa-eye-slash" onClick={()=>settoggle(false)}></i>  :
                    <i class="fa-solid fa-eye" onClick={()=>settoggle(true)}></i>
                }
                </div>
                
                
                <button className='btn btn-lg btn-primary' onClick={handleSubmit}>Log In</button>
            </div>
        </div>
    </section>
  )
}

export default Login