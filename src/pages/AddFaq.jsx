import React from 'react'

export default function AddFaq() {
  return (
     <>
           <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Faq</p>
                <p>/</p>
                <p>Add</p>
           </div>
           <div className='w-full p-[10px_10px] bg-white rounded-lg'>
             <h1 className='text-[20px] bg-[#F1F5F9] p-[10px_5px] font-medium rounded-lg'>Add FAQ</h1>
             <form className='my-[20px]'>
                  <div className='mb-[20px]'>
                       <label className='font-semibold'>Question</label>
                       <input type='text' placeholder='Question' className='p-[8px_10px] border rounded-lg w-[100%]' name='addQuestion' />
                  </div>
                  <div className='mb-[20px]'>
                       <label className='font-semibold'>Answer</label>
                       <textarea className='w-[100%] min-h-[130px] border rounded-lg p-[8px_10px] resize-none' placeholder='Answer' name='faqAnswer'></textarea>
                  </div>
                  <div className='mb-[20px]'>
                       <label className='font-semibold'>Order</label>
                       <input type='number' placeholder='Order' className='p-[8px_10px] border rounded-lg w-[100%]' name='faqOrder' />
                  </div>
                  <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[40px]" >Add Faq</button>
             </form>
        </div>
     </>
  )
}
