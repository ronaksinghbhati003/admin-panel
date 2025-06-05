import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
export default function CompanyProfile() {
  let apiUrl = import.meta.env.VITE_APIURL;
  let [image, setImage] = useState(null);
  let [value, setValue] = useState(JSON.parse(localStorage.getItem("value")) || { name: '', email: '', number: '', address: '', url: '', facebook: '', instagram: '', youtube: '', linkedin: '', twitter: '', telegram: '' });
  let [id, setId] = useState(JSON.parse(localStorage.getItem('id')) ?? null)
  let submit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);

    if (id) {
      axios.put(`${apiUrl}/company/update/${id}`, form)
        .then((res) => {
          toast.success(res.data.msg,{
            position:"top-center",
            theme:"dark",
            autoClose:1500
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }

    else {
      axios.post(`${apiUrl}/company/insert`, form)
        .then((res) => {
          setId(res.data.insertData.insertedId);
          if(res.data.status){
            toast.success(res.data.msg,{
              position:"top-center",
              theme:"dark",
              autoClose:1500
            })
          }
          else{
             toast.error(res.data.msg,{
              position:"top-center",
              theme:"dark",
              autoClose:1500
             })
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(value));
  }, [value])

  useEffect(() => {
    localStorage.setItem('id', JSON.stringify(id));
  }, [id])
  return (
    <>
      <ToastContainer />
      <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
        <p>Home</p>
        <p>/</p>
        <p>Company Profile</p>
      </div>


      <div className='p-[20px] w-full border-2 border-red-500 bg-white'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-[30%_auto]'>

            <div className=''>
              <p className='font-bold'>Logo</p>
              <div className='mb-4'>
                <label htmlFor="subCategoryUpload">
                  <div className=' relative cursor-pointer w-[300px] h-[250px] shadow-[0px_0px_5px_1px_gray] flex flex-col items-center justify-center mt-[10px]'>
                    <FaCloudDownloadAlt className='text-gray-400 text-[50px]' />
                    <span className='text-center'>Drag and Drop</span>
                    {image ? <div className='absolute w-[100%] h-[100%] top-[0] left-[0]'>
                      <img className='w-[100%] h-[100%]' src={image} />
                    </div> : ''}
                  </div>
                </label>
                <input type='file' className='hidden' id="subCategoryUpload" name="companyLogo" onChange={(e) => {
                  const File = e.target.files[0];
                  if (File) {
                    const imageUrl = URL.createObjectURL(File);
                    setImage(imageUrl);
                  }
                }} />
              </div>
            </div>

            <div className=''>
              <div className='mb-5'>
                <label className='font-semibold block mb-1'>Name</label>
                <input type='text' name='companyName' value={value.name} className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Name'
                  onChange={(e) => {
                    setValue({ ...value, name: e.target.value })
                  }}
                />
              </div>
              <div className='mb-5'>
                <label className='font-semibold block mb-1'>Email</label>
                <input type='text' name='companyEmail' value={value.email} className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Email'
                  onChange={(e) => {
                    setValue({ ...value, email: e.target.value })
                  }}
                />
              </div>
              <div className='mb-5'>
                <label className='font-semibold block mb-1'>Mobile Number</label>
                <input type='text' name='companyMobile' value={value.number} className='w-full border border-gray-300 p-[5px_10px] rounded-[10px]' placeholder='Enter Name'
                  onChange={(e) => {
                    setValue({ ...value, number: e.target.value })
                  }}
                />
              </div>
            </div>

          </div>

          <div className='mt-8'>
            <label className='mb-1 block'>Enter Facebook Link</label>
            <input type='text' name='companyFacebook' value={value.facebook} className='w-[100%] p-[5px_10px] border border-gray-300 rounded-[10px]' placeholder='Enter Facebook Link' onChange={(e) => {
              setValue({ ...value, facebook: e.target.value });
            }} />
          </div>
          <div className='mt-8'>
            <label className='mb-1 block'>Enter Instagram Link</label>
            <input type='text' name='companyInstagram' value={value.instagram} className='w-[100%] p-[5px_10px] border border-gray-300 rounded-[10px]' placeholder='Enter Instagram Link' onChange={(e) => {
              setValue({ ...value, instagram: e.target.value })
            }} />
          </div>
          <div className='mt-8'>
            <label className='mb-1 block'>Enter Twitter Link</label>
            <input type='text' name='companyTwitter' value={value.twitter} className='w-[100%] p-[5px_10px] border border-gray-300 rounded-[10px]' placeholder='Enter Twitter Link' onChange={(e) => {
              setValue({ ...value, twitter: e.target.value })
            }} />
          </div>
          <div className='mt-8'>
            <label className='mb-1 block'>Enter Youtube Link</label>
            <input type='text' name='companyYoutube' value={value.youtube} className='w-[100%] p-[5px_10px] border border-gray-300 rounded-[10px]' placeholder='Enter Youtube Link' onChange={(e) => {
              setValue({ ...value, youtube: e.target.value });
            }} />
          </div>
          <div className='mt-8'>
            <label className='mb-1 block'>Enter Linkedin Link</label>
            <input type='text' name='companyLinkedin' value={value.linkedin} className='w-[100%] p-[5px_10px] border border-gray-300 rounded-[10px]' placeholder='Enter Linkedin Link' onChange={(e) => {
              setValue({ ...value, linkedin: e.target.value });
            }} />
          </div>
          <div className='mt-8'>
            <label className='mb-1 block'>Enter Telegram Link</label>
            <input type='text' name='companyTelegram' value={value.telegram} className='w-[100%] p-[5px_10px] border border-gray-300 rounded-[10px]' placeholder='Enter Telegram Link' onChange={(e) => {
              setValue({ ...value, telegram: e.target.value });
            }} />
          </div>

          <textarea placeholder='Address' value={value.address} className='mt-8 resize-none w-[100%] p-2 border-1 border-gray-300 rounded-lg' name='companyAddress' rows={4}
            onChange={(e) => {
              setValue({ ...value, address: e.target.value })
            }}
          ></textarea>
          <textarea placeholder='Google Map URL' value={value.url} className='mt-8 resize-none w-[100%] p-2 border-1 border-gray-300 rounded-lg' rows={4} name='companyMap'
            onChange={(e) => {
              setValue({ ...value, url: e.target.value })
            }}
          ></textarea>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.625912922732!2d73.02805847520123!3d26.273801877033783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d6124914e7b%3A0x554409fadcb37085!2sLAXMI%20TOWER!5e0!3m2!1sen!2sin!4v1745942335004!5m2!1sen!2sin" width="100%" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <button className='p-[10px_20px] bg-purple-600 text-white mt-5 rounded-[10px]'>{id ? "Update Company Profile" : "Submit"}</button>
        </form>
      </div>
    </>
  )
}
