import React, { useState } from 'react';
import { category } from '../utilities/data';
import Loading from './Loading';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage' ;
import { storage } from '../firebase.config';
import { getAllProducts, saveProduct } from '../utilities/firebaseFunctions';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import {Switch} from "antd";
import ReturnButton from './ReturnButton';

const AddProduct = () => {

  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [unit, setUnit] = useState(1);
  const [categories, setCategories] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState('');
  const [notice, setNotice] = useState('Product Name Not Entered');
  const [productImage, setProductImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{produceSelection}, dispatch] = useStateValue();

  const checkVegan = () => {
    vegan ? setVegan(false) : setVegan(true);
  }  
  const checkVegetarian = () => {
    vegetarian ? setVegetarian(false) : setVegetarian(true);
  }
    
  const uploadProductImage = (e) => {
    setIsLoading(true);
    // 0 because its only 1 image atm
    const productImage = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${productImage.name}`)
    const uploadTask = uploadBytesResumable(storageRef, productImage);
    

    

    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, (error) => {
      console.log(error);
      setFields(true);
      setNotice('Error occured while uploading! Please Try Again!');
      setAlertStatus('danger');
      setTimeout(() => {
        setFields(false)
        setIsLoading(false)
      }, 5000);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        setProductImage(downloadURL);
        setIsLoading(false);
        setFields(true);
        setNotice("Product image successfully uploaded!");
        setAlertStatus('success')
        setTimeout(() => {
          setFields(false);
        }, 5000);
      });
    });
  };

  const clearImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, productImage);
    deleteObject(deleteRef).then(( ) => {
      setProductImage(null);
      setIsLoading(false);
      setFields(true);
      setNotice("Product image successfully deleted!");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 5000);
    });
  };

  const saveInfo = () => {
    setIsLoading(true);
    try {
      if((!productImage || !name || !categories|| !price || !description)) {

        setFields(true);
        setNotice("All fields must be filled!");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 5000);
      } else {
        const data = {
          id : `${Date.now()}`,
          name : name,
          imageURL : productImage,
          category : categories,
          vegan: vegan,
          vegetarian: vegetarian,
          unit: unit,
          price : price,
          calories : calories,
          description : description,
          qty : 1
        }
        saveProduct(data)
        setIsLoading(false);
        setFields(true);
        setNotice("Data uploaded successfully!");
        setAlertStatus("success");
        clearData();
        setTimeout(() => {
          setFields(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setNotice('Error occured while uploading! Please Try Again!');
      setAlertStatus('danger');
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 5000);
    }

    fetchData();
  };

  const clearData = () => {
    setName("");
    setProductImage(null);
    setCalories('');
    if(vegan) {
      setVegan(false)
    }
    if(vegetarian) {      
    setVegetarian(false);
    }
    setUnit("");
    setPrice("");
    setDescription("");
    setCategories("Select Category");
  }

  const fetchData = async () => {
    await getAllProducts().then(data => {
      dispatch({
        type: actionType.SET_PRODUCE_SELECTION,
        produceSelection : data,
      });
    });
  };

    
  return (
    <div className='p-2'>
      <ReturnButton name="Back To Admin" link="../Admin"/>
      
      <div className='border-2 rounded-lg p-4 text-center bg-slate-200'>
        <h1 className='text-center mt-8 '>Add Product</h1>

        <div>
          {fields && (
            <p className={`varela-round text-center text-xl w-full p-1 rounded-xl
            ${alertStatus === 'danger' ? 'bg-slate-50 text-red-500' : 'text-green-600'} `}>
              {notice}
            </p>

          )}

        </div>
    
        <div className='add-product-selection flex w-full justify-center'> 
          <div className='flex justify-center flex-row w-2/4'>
            <div className='border-2 p-2 h-80'>
              {isLoading ? ( <Loading /> ): (
              <> {!productImage ? (
                    <>
                      <div className='add-product-image p-3 cursor-pointer flex flex-col justify-center bg-slate-50 h-full align-middle'>
                        <h4><i className="fa-solid fa-file-image"></i> Add Product Image</h4>

                        <input type='file' name='productimage' accept='images/*' 
                          onChange={uploadProductImage}
                          className='w-60 h-10'
                        />
                      </div>
                    </>
                  ) : (<>
                      <div className='relative'>
                        <img src={productImage} alt='uploaded product image' className='max-w-96 max-h-96' />
                        <button type='button' 
                        className='absolute bottom-1 right-1 rounded-xl cursor-pointer bg-slate-700 opacity-80 text-slate-50 p-1 hover:opacity-100 font-bold'
                        onClick={clearImage}><i className="fa-solid fa-trash-can"></i> Clear Image</button>
                      </div>
                    </>
                  )
                }
              </>) }
            </div>
          </div>

          <div className='w-2/4 p-4'>
            <div>
              <h4>Product Name:</h4>
              <input
                className='w-full text-xl font-bold placeholder:text-gray-400 border-2 p-1 rounded-lg border-slate-900' 
                type="text" value={name} required placeholder='Momo (8 Pcs) / Mango Lassi' 
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
                  {/* Category */}
              <div className='mt-2 mb-3'>
                  <h4>Product Category:</h4>
                  <select onChange={(e) => setCategories(e.target.value)}>
                    <option value='other'>Select Category</option>

                    {category && category.map(item => (
                      <option key={item.id} className="capitalize bg-slate-50 text-slate-900 text-lg"
                      value={item.urlParamName}>{item.name}</option>
                    ))}
                  </select>
              </div>

              {/* Vegan and Veg ? */}
              <div className='flex flex-row p-2 justify-center'>
                <div className='mx-2'>
                  <h3 className={`${vegan ? 'text-green-700' : 'text-red-700'}`}>Vegan</h3>
                  <Switch onClick={checkVegan}/>
                  {
                    vegan ? <div className='font-bold text-green-700'>Yes</div> : <div className='font-bold text-red-700'>No</div>
                  }
                </div>

                <div className='mx-2'>
                  <h3 className={`${vegetarian ? 'text-green-700' : 'text-red-700'}`}>Vegetarian</h3>
                  <Switch onClick={checkVegetarian}/>
                  {
                    vegetarian ? <div className='font-bold text-green-700'>Yes</div> : <div className='font-bold text-red-700'>No</div>
                  }
                </div>
              </div>



            </div>
                  
            <div className='flex flex-row p-2'>
              
              {/* Unit */}
              <div className='mt-2 mb-3'>
              <h5>Unit:</h5>
              <input name='unit' type="number" max="20" min="20" value={unit} onChange={(e) => setUnit(e.target.value)}></input>
              </div>   

              {/* Price */}
              <div className='w-2/4'>
                <h5>
                  Price: <br></br><input type='text' placeholder='12.30 / 8.99' className='bg-slate-50 w-3/5' required value={price} onChange={(e) => setPrice(e.target.value)}/>
                </h5>
              </div>  
              
              {/* Calories */}
              <div className='w-2/4'>
                <h5>
                  Calories:<br></br> <input type='text' placeholder='458.7 / 299' className='bg-slate-50 w-3/5' required value={calories} onChange={(e) => setCalories(e.target.value)}/>
                </h5>
              </div>
            </div>

            <div>
              <h5 className='text-left flex flex-col'>
              Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='h-20 overflow-auto'
                 placeholder='Steamed chicken dumplings served with achar (spicy tomato sauce w/ sesame). / Blend of yogurt, water, spices and fruit. Choose between Sweet, Mango or Strawberry.' 
                 />
              </h5> 
            </div>

          </div>       

        </div> 

        <div>
          <button onClick={saveInfo} type='button' className='bg-green-600 p-2 rounded-xl text-slate-100 font-bold'>
            <i className="fa-solid fa-circle-plus"></i> Add Product</button>
        </div>

      </div>



    </div>
  )
}

export default AddProduct