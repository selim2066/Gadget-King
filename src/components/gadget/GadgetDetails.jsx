import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetDetails = () => {
    const {product_id}=useParams()
    const gadgetData = useLoaderData()
    
    return (
        <div>
            
        </div>
    );
};

export default GadgetDetails;