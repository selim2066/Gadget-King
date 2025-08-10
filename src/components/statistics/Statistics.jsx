import { useContext } from "react";
import { CartContexts } from "../../context/CartContext";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

const Statistics = () => {
  const { cart } = useContext(CartContexts);

  // Prepare chart data: each item will be

  const data = cart.map((item) => ({
    name: item.product_title,
    price: item.price,
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Statistics</h1>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ backgroundColor: "#ccc" }} />
          <Legend />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis dataKey="price" />
          <Bar dataKey="price" fill="#8884d8" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
