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
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default class Pie_Chart extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        sentiment:[]
    }
}
componentDidMount() {
    this.getSenti();
  }

  getSenti = async() => {
      const res= await fetch("/api",{
         method: 'GET',
      }).then(r=>r.json())
      this.setState({ sentiment: res.sentiment });
      console.log(res.sentiment);
  };

    render(){
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={this.state.sentiment}
        cx={220}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {this.state.sentiment?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip/>
    </PieChart>
  );}
}