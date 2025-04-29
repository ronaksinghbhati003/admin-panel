import { React, useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

export default function AddColor() {
    let [color, setColor] = useState('#fff');
    useEffect(() => {
        colorChange
    }, [color])

    let colorChange = (color) => {
        setColor(color.hex)
    }
    return (
        <>
            <div className='w-[100%] border-b pb-[10px]  my-[10px] flex gap-[5px] font-semibold text-[16.5px]'>
                <p>Home</p>
                <p>/</p>
                <p>Color</p>
                <p>/</p>
                <p>Add</p>
            </div>
            <div className='w-full p-[10px_10px] bg-white rounded-lg border '>
                <h1 className='text-[20px] font-medium bg-[#F1F5F9] p-[10px_5px] rounded-lg border-b-1'>Add Color</h1>
                <form className='py-[20px]'>
                    <div className='mb-[20px]'>
                        <label className='font-semibold'>Color Name</label>
                        <input type='text' className='w-[100%] p-[8px_10px] border rounded-lg' placeholder='Enter Color Name' name="colorName" required />
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
                        <input type='number' className='w-[100%] p-[8px_10px] border rounded-lg' placeholder='Enter Order' name="orderColor" />
                    </div>
                    <button className="p-[8px_15px] bg-[#7E22CE] rounded-lg text-white my-[40px]" >Add Color</button>


                </form>

            </div>
        </>
    )
}
