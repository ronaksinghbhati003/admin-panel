import { RxCross1 } from "react-icons/rx";
export default function OrderDetail({orderDetail,setOrderDetail,id,orderData,imagePath}){
    let filterOrder=orderData.filter((item)=>{
        return item._id==id;
    })
    console.log(filterOrder);
    let products=filterOrder[0]?.orderItems;
    let productDetail={
        address:filterOrder[0]?.shippingAddress,
        subTotal:filterOrder[0]?.orderAmount,
        paymentMethod:filterOrder[0]?.paymentMethod=="1"?"Cash on Delivery":"Online Payment",
        shipping:filterOrder[0]?.shippingCharges,
        grandTotal:filterOrder[0]?.orderAmount

    }
    return(
        <>
           <div className="fixed top-10 left-1/2 -translate-x-1/2 w-[1320px]  border bg-white p-[20px]">
               <div className="flex justify-between border-b-1 pb-2 mb-3">
                    <h1 className="text-[23px] font-bold">Product Image's & Price</h1>
                    <RxCross1 className="cursor-pointer text-[20px]" onClick={()=>setOrderDetail(false)}/>
               </div>
               <div className="grid grid-cols-[70%_auto] gap-8">
                <div className="border-1 rounded p-[10px]">
                    {products?.map((item,index)=>{
                        let {product,quantity,color}=item;
                        return(
                     <div className="flex gap-5 items-center mb-3">
                           <img src={imagePath+product?.productImage} width={150} className="h-[150px]" />
                           <div>
                                <h1 className="text-[20px] text-red-500 mb-3">{product?.productName}</h1>
                                <p className="font-semibold mb-3">Price: Rs. {product?.productSalePrice}</p>
                                <p className="font-semibold mb-3">Quantity: {quantity}</p>
                                <p className="font-semibold mb-3">Color: {color?.colorName}</p>
                           </div>
                     </div>
                        )
                    })}
                </div>
                <div className="border p-[10px] rounded align-self-start">
                     <h1 className="font-bold text-[20px] mb-2">Product Details</h1>
                     <p className="text-gray-600 mb-2">{productDetail?.address?.streetAddress+" "+productDetail?.address?.apartMentAddress}</p>
                     <h1 className="font-bold text-[20px] mb-1">Order Summary</h1>
                     <p className="mb-1">Item SubTotal: Rs. {productDetail?.subTotal}</p>
                     <p className="mb-1">{productDetail?.paymentMethod}</p>
                     <p className="mb-1">Shipping Charges: Rs. {productDetail?.shipping}</p>
                     <p className="mb-1">Grand Total: Rs. {productDetail?.grandTotal}</p>
                </div>
                </div>

           </div>
        </>
    )
}