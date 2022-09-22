// import React from 'react'
// import { Pie } from 'react-chartjs-2'
import React,{useState} from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
export default class LineChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        time_analyis:{
          labels:[],
          datasets:[]
        }
    }
  }
  componentDidMount() {
    this.getdata();
  }
   getdata = async() => {
      const res= await fetch("/api",{
         method: 'GET',
      }).then(r=>r.json())
      
    this.setState({ time_analyis: {
    "labels": res?.time_analysis?.map((data) => {
    if(data.overall_rating!=""){
        return data.date
      }
    }),
    "datasets": [
      {
        "label": "Rating timeline",
        "data": res?.time_analysis?.map((data) => {
          if(data.overall_rating!=""){
            return data.overall_rating
          }
        }),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }
});
      console.log(res.time_analysis);
   }
  render(){
    return(
      <Line data={this.state.time_analyis} />
    )
   }
}


// const LineChart = () => {
//   return (
//     <div>
//       <Pie
//         data={{
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [
//             {
//               label: '# of votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//               ],
//               borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//               ],
//               borderWidth: 1,
//             },
//             // {
//             //   label: 'Quantity',
//             //   data: [47, 52, 67, 58, 9, 50],
//             //   backgroundColor: 'orange',
//             //   borderColor: 'red',
//             // },
//           ],
//         }}
//         height={400}
//         width={600}
//         options={{
//           maintainAspectRatio: false,
//           scales: {
//             yAxes: [
//               {
//                 ticks: {
//                   beginAtZero: true,
//                 },
//               },
//             ],
//           },
//           legend: {
//             labels: {
//               fontSize: 25,
//             },
//           },
//         }}
//       />
//     </div>
//   )
// }

// export default LineChart