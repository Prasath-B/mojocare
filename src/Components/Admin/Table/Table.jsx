import React,{useEffect,useState} from 'react'
import { setDoc, doc,collection,onSnapshot,query ,deleteDoc} from 'firebase/firestore';
import { db } from '../../../firebase';
import { getDoc , addDoc} from 'firebase/firestore';
import "./Table.css"

const Table = () => {
    const [posts, setposts] = useState([]);
    const [form, setform] = useState({
        name:'',
        email:'',
        time:'',
        date:'',
        message:''
    })
    const [editid, seteditid] = useState('')

    useEffect(() => {
        fetchData()
        console.log(posts)
    }, [])
    
    function editData(rowData){
        let q = posts.filter((ele)=> ele.id === rowData )
        let data = q[0].data;
        setform({
            name:data.name,
            email:data.email,
            time:data.time,
            date: new Date(data.date),
            message:data.message 
        })
        seteditid(rowData)
    }
    function fetchData() {
        const q = query(collection(db,"booking"))
        onSnapshot(q,(querySnapshot)=>{
            console.log(querySnapshot)
            setposts(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
              })))
        })
       }

    async function handleSubmit() {
            if(editid != ''){
                console.log(editid,form)
                let dbRef = doc(db,"booking",editid);
                let d = new Date(form.date)
                let data = {...form, date: d.toString()}
                setDoc(dbRef,data)
            }else{
                let d  = new Date(form.date)
                    await addDoc(collection(db,'booking'),{
                        name:form.name,
                        email:form.email,
                        time:form.time,
                        date: d.toString(),
                        message:form.message
                    }
                    )
       }
    }
    const deleteDocument = async(id) =>{
    let ref = await doc(db,"booking",id)
    let getoc = await getDoc(ref)
    if(!getoc.exists()){
        console.log("do not exist")
        return
    }
        deleteDoc(ref)
        .then(() => {
            console.log("Entire Document has been deleted successfully.")
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className='admin-table'>
    <table >
        <thead>
            <tr>
                <th> Name </th>
                <th> Email </th>
                <th> Date </th>
                <th> time </th>
                <th> message </th>
            </tr>
        </thead>
        <tbody>
            {posts.map((post)=>{
                console.log(post)
            return(
                <tr>
                    <td>{post.data.name}</td>
                    <td>{post.data.email}</td>
                    <td>{post.data.date}</td>
                    <td>{post.data.time}</td>
                    <td>{post.data.message}</td>
                    <td>
                    <button class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#staticBackdrop">
                    <i class="fa-solid fa-pen-to-square" id={post.id} onClick={(e)=>editData(e.target.id)} ></i></button>
                    <button className="btn btn-danger"  >
                    <i class="fa-solid fa-trash" id={post.id} onClick={(e)=>deleteDocument(e.target.id)} ></i></button>
                    </td>
                </tr>
            )
            })}
        </tbody>
    </table>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Form</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     <form action="">
        <input type="text" value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} placeholder='Enter a name' />
        <input type="email"  value={form.email} onChange={(e)=>setform({...form,email:e.target.value})}  name="" id="" placeholder='Enter your email' />
        <input type="date"   onChange={(e)=>setform({...form,date:e.target.value})} name="" id="" />
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

        </select>
        <textarea  placeholder='Enter your message' value={form.message} onChange={(e)=>setform({...form,message:e.target.value})} cols="30" rows="5"></textarea>
     </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleSubmit} class="btn btn-primary" data-bs-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
</div>

   
     
    </div>
  )
}

export default Table