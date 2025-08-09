import { useContext } from "react";
import { CartContexts } from "../../context/CartContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const Statistics = () => {
  const { cart } = useContext(CartContexts); 

  // Prepare chart data: each item will be { name: productName, price: productPrice }
  const data = cart.map(item => ({
    name: item.product_title,  // change key if your product name is different
    price: item.price // change key if your price field is different
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Statistics</h1>
      
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ backgroundColor: "#ccc" }} />
        <Legend />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="price" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

export default Statistics;
