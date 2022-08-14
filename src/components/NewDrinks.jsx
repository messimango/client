import React from 'react'
import { useStateValue } from '../context/StateProvider';

const NewDrinks = () => {
    const [{produceSelection}, dispatch] = useStateValue();
    const drinkSelection = produceSelection?.filter((n) => n.name === 'Chhaang/Tongba');

    return (
    <div className='mt-10'>
        <div className='feature-box text-center'>
        <h1 className='font-bold text-slate-50 '>Try our Special New Drink!</h1> 
        <div className='underline w-40'></div>
        </div>

        <div className='feature-products flex items-center mt-8'>             
        {drinkSelection && drinkSelection.map((item)=>(
            <div key={item.id} className='feature-product bg-slate-100 w-2/5 border-4 rounded-lg border-blue-800 p-2 m-2 hover:scale-105'>
                <div className='flex flex-row justify-center align-middle'>                          
                    <img className='h-32 drop-shadow-2xl hover:shadow-md border-red-700 border-2 m-2 rounded-lg w-2/5' src={item.imageURL} alt={item.name} />
                
                    <div>
                    <h4 className='text-slate-900 text-center'>{item.name}{item.unit > 1 ? <><p className='text-slate-900 text-xs'>({item.unit} PCS)</p></> : <></>}</h4>

                    <h6 className='text-slate-900'>${item.price}</h6>                      
                    <button className='btn btn-danger btn-sm'>Add to Basket</button>
                    </div>
                </div>
                
                
                
            </div>
        ))}
        </div>

    </div>
    )
}

export default NewDrinks