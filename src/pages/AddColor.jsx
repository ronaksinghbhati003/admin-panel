import axios from 'axios';
import { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { routePath } from './Config.jsx';
export default function AddColor() {
    let [color, setColor] = useState('#00000');
    let [colorName, setColorName] = useState('');
    let [colorOrder, setColorOrder] = useState('');
    let navigate = useNavigate(null);
    let id = useParams().id;
    console.log(useParams())
    useEffect(() => {
        colorChange
    }, [color])

    let colorChange = (color) => {
        setColor(color.hex)
    }

    let submitForm = (event) => {
        event.preventDefault();
        let colorName = event.target.colorName.value;
        let colorCode = color;
        let colorOrder = event.target.colorOrder.value;
        let obj = {
            colorName,
            colorCode,
            colorOrder
        }
        console.log(colorName, colorCode, colorOrder);

        if (id) {
            axios.put(`${routePath}/color/update/${id}`, {
                colorName,
                colorCode,
                colorOrder
            })
                .then((res) => {
                    setColor('#00000');
                    setColorName('');
                    setColorOrder('');
                    navigate('/viewcolor');
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        else {
            axios.post(`${routePath}/color/insert`, obj)
                .then((res) => {
                    if (res.data.status == 1) {
                        console.log(res);
                        event.target.reset();
                        setColor('');
                        toast.success(res.data.msg);
                        navigate('/viewcolor');
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
        }
    }

    let editData = () => {
        axios.get(`${routePath}/color/editdata/${id}`)
            .then(res => {
                console.log(res);
                setColorName(res.data.editData.colorName);
                setColorOrder(res.data.editData.colorOrder);
                setColor(res.data.editData.colorCode);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (id) {
            editData();
        }
    }, [])
    return (
        <>
            <ToastContainer />
            <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Color</p>
                <p>/</p>
                <p>{id ? "Update" : "Add"}</p>
            </div>
            <div className='w-full p-[10px_10px] bg-white rounded-lg border '>
                <h1 className='text-[20px] font-medium bg-[#F1F5F9] p-[10px_5px] rounded-lg border-b-1'>{id ? "Update Color" : "Add Color"}</h1>
                <form className='py-[20px]' onSubmit={submitForm}>
                    <div className='mb-[20px]'>
                        <label className='font-semibold'>Color Name</label>
                        <input type='text' className='w-[100%] p-[8px_10px] border rounded-lg' placeholder='Enter Color Name' name="colorName" required value={colorName} onChange={(e) => {
                            setColorName(e.target.value);
                        }} />
                    </div>
                    <div className='mb-[20px]'>
                        <label className='font-semibold'>Color Picker</label>
                        <div className="flex items-center gap-[35px]">
                            <SketchPicker
                                color={color}
                                onChangeComplete={colorChange}
                                className='mt-[10px]'
                            />
                            <input type="color" className="w-[40px] h-[40px]" value={color} name="colorValue" />
                        </div>
                    </div>
                    <div className='mb-[20px]'>
                        <label className='font-semibold'>Order</label>
                        <input type='number' className='w-[100%] p-[8px_10px] border rounded-lg' placeholder='Enter Order' name="colorOrder" value={colorOrder} onChange={(e) => {
                            setColorOrder(e.target.value);
                        }} />
                    </div>
                    <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[40px]" >{id ? "Update Color" : "Add Color"}</button>


                </form>

            </div>
        </>
    )
}
