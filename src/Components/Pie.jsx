import React,{useState} from "react";
import { PieChart, Pie,  Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) /2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x-10}
      y={y+10}
      fill="white"
      textAnchor={"center"}
      dominantBaseline="center"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Pie_Chart=({item})=>{

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={item}
        cx={100}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {item?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip/>
    </PieChart>
  );
}

export default Pie_Chart;