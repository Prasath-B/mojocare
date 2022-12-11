import React,{useEffect,useState} from 'react'
import { setDoc, doc,collection,onSnapshot,query ,deleteDoc} from 'firebase/firestore';
import { db } from '../../../firebase';
import { getDoc, addDoc} from 'firebase/firestore';

const Patient = () => {
    const [posts, setposts] = useState([]);
    const [form, setform] = useState({
        name:'',
    })
    const [editid, seteditid] = useState('')

    useEffect(() => {
        fetchData()
        console.log(posts)
    })
    
    function editData(rowData){
        console.log(posts,rowData)
        let q = posts.filter((ele)=> ele.id === rowData )
        let data = q[0].data;
        setform({
            name:data.name,
        })
        seteditid(rowData)
    }
    function fetchData() {
        const q = query(collection(db,"users"))
        onSnapshot(q,(querySnapshot)=>{
            console.log(querySnapshot)
            setposts(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
              })))
        })
       }

    async function handleSubmit() {
            
            if(editid !== ''){
                let dbRef = doc(db,"users",editid)
                console.log(editid,form)
                setDoc(dbRef,form)
            }else{
                    await addDoc(collection(db,'users'),{
                        name:form.name,
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
            </tr>
        </thead>
        <tbody>
            {posts.map((post)=>{
                console.log(post)
            return(
                <tr>
                    <td>{post.data.name}</td>
                    <td>
                    <button class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#staticBackdrop">
                    <i class="fa-solid fa-pen-to-square" id={post.id} onClick={(e)=>editData(e.target.id)}></i></button>
                    <button className="btn btn-danger"  >
                    <i class="fa-solid fa-trash" id={post.id} onClick={(e)=>deleteDocument(e.target.id)}></i></button>
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

export default Patient