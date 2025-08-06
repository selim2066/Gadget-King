import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetDetails = () => {
    const {product_id}=useParams()
    const gadgetData = useLoaderData()
    const id =parseInt(product_id)
    
    const gadget =gadgetData.find((gadget)=>gadget.product_id === id)

     const {
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget;
    
    return (
        <div>
            
        </div>
    );
};

export default GadgetDetails;