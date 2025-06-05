import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { routePath } from './Config.jsx';
export default function AddFaq() {
     let [formValidate, setFormValidate] = useState({
          question: '', answer: '', order: ''
     })
     let navigate = useNavigate(null);
     let{id} =useParams();
    
     let faqSubmitData = async (event) => {
          event.preventDefault();
          let faqQuestion = event.target.faqQuestion.value;
          let faqAnswer = event.target.faqAnswer.value;
          let faqOrder = event.target.faqOrder.value;
          setFormValidate({ question: faqQuestion, answer: faqAnswer, order: faqOrder })
          let obj = {
               faqQuestion,
               faqAnswer,
               faqOrder
          }
  
           if(id){
                 axios.put(`${routePath}/faq/update/${id}`,obj)
                .then((res) => {
                    setFormValidate({...formValidate,question:'',answer:'',order:''});
                    navigate('/viewfaq');
                })
                .catch((err) => {
                    console.log(err);
                })
           }

          if (formValidate.question && formValidate.answer && formValidate.order) {
               axios.post(`${routePath}/faq/insert`, obj)
                    .then((res) => {
                         if (res.data.status == 1) {
                              console.log(res);
                              toast.success(res.data.msg);
                              event.target.reset();
                              navigate('/viewfaq')
                         }
                         else {
                              console.log(res);
                              toast.success(res.data.msg, {
                                   position: "top-center",
                                   autoClose: 1500,
                                   theme: "dark"
                              })
                         }

                    })
                    .catch((err) => {
                         alert(err.message)
                    })
          }
          else {
               if(!formValidate.question){
                    toast.error("Please fill Question entry",{
                         position:"top-center",
                         theme:"dark",
                         autoClose:1500,
                    })
               }
               else if(!formValidate.answer){
                    toast.error("Please fill Answer entry",{
                         position:"top-center",
                         theme:"dark",
                         autoClose:1500,
                    })
               }
               else{
                    toast.error("Please fill Order entry",{
                         position:"top-center",
                         theme:"dark",
                         autoClose:1500,
                    })
               }
              
          }

     }

       let editData = () => {
        axios.get(`${routePath}/faq/editdata/${id}`)
            .then(res => {
                console.log(res);
                setFormValidate({...formValidate,question:res.data.editData.faqQuestion,answer:res.data.editData.faqAnswer,order:res.data.editData.faqOrder});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        if(id){
          editData();
        }
    },[])
         
     return (
          <>
               <ToastContainer />
               <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                    <p>Home</p>
                    <p>/</p>
                    <p>Faq</p>
                    <p>/</p>
                    <p>{id?"Update":"Add"}</p>
               </div>
               <div className='w-full p-[10px_10px] bg-white rounded-lg'>
                    <h1 className='text-[20px] bg-[#F1F5F9] p-[10px_5px] font-medium rounded-lg'>{id?"Update Faq":"Add FAQ"}</h1>
                    <form className='my-[20px]' onSubmit={faqSubmitData}>
                         <div className='mb-[20px]'>
                              <label className='font-semibold'>Question</label>
                              <input type='text' placeholder='Question' className='p-[8px_10px] border rounded-lg w-[100%]' name='faqQuestion' value={formValidate.question} onChange={(e) => {
                                   setFormValidate({ ...formValidate, question: e.target.value })
                              }} />
                              {formValidate.question ? "" : <div className='text-red-400'>Please fill Entry this field can't be empty</div>}
                         </div>
                         <div className='mb-[20px]'>
                              <label className='font-semibold'>Answer</label>
                              <textarea className='w-[100%] min-h-[130px] border rounded-lg p-[8px_10px] resize-none' placeholder='Answer' name='faqAnswer' value={formValidate.answer} onChange={(e) => {
                                   setFormValidate({ ...formValidate, answer: e.target.value })
                              }}></textarea>
                              {formValidate.answer ? "" : <div className='text-red-400'>Please fill Entry this field can't be empty</div>}
                         </div>
                         <div className='mb-[20px]'>
                              <label className='font-semibold'>Order</label>
                              <input type='number' placeholder='Order' className='p-[8px_10px] border rounded-lg w-[100%]' name='faqOrder' value={formValidate.order} onChange={(e) => {
                                   setFormValidate({ ...formValidate, order: e.target.value })
                              }} />
                              {formValidate.order ? "" : <div className='text-red-400'>Please fill Entry this field can't be empty</div>}
                         </div>
                         <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[40px]" >{id?"Update Faq":"Add FAQ"}</button>
                    </form>
               </div>
          </>
     )
}
