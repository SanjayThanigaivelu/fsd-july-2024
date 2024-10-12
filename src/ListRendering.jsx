import React from 'react'


export default function ListRendering() {
  
    let arr=[
        {
            ProductName:'Apple',
            Rate:'150$',
            Design:'Mate-Finish'
        },
        {
            ProductName:'Samsung',
            Rate:'130$',
            Design:'Mate-Finish'
        },
        
        {
ProductName:'Motorlla',
Rate:'90',
Design:'Furnished'
        },

{
ProductName:'Real-Mi',
Rate:'70',
Design:'Furnished'
        },
        {
            ProductName:'Nokia',
            Rate:'60',
            Design:'Furnished'
                    },
                    {
                        ProductName:'Infinix',
                        Rate:'50',
                        Design:'Furnished'
                                }

    ];
    return (
   
   <div>
        <h1>List of Fruits</h1>
        {
           
arr.map((x)=>(<div className='product'>
    <div>ProductName:{x.ProductName}</div>
    <div>Rate:{x.Rate}</div>
    <div>Design:{x.Design}</div>
</div>))

}
    </div>
  )
}
