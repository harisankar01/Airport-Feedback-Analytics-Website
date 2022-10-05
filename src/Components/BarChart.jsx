import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Review of Different aspects in Airport',
    },
  },
};

// const labels = ['Queing', 'Cleaness', 'Seating', 'Signs ', 'Food', 'Shopping', 'Wi-fi','Staff'];
// // const data_Set=[1,2,4,5,3,4,5,6]
// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Rating',
//       data: [],
//       backgroundColor: 'rgba(239, 51, 243, 0.5)',
//     },
//   ],
// };

const Bar_Chart=({item})=> {
//   componentDidMount() {
//     this.getdata();
//   }
//   getdata = async() => {
//       const res= await fetch("/api",{
//          method: 'GET',
//       }).then(r=>r.json())
//       console.log(res);
//       this.setState({reviews_arr: {
//     labels,
//     datasets: [
//     {
//       label: 'Rating',
//       data: labels.map((i,j)=>res["rating_analysis"][j]),
//       backgroundColor: 'rgba(239, 51, 243, 0.5)',
//     },
//   ],
// }})
//     }
    return(
      <Bar options={options} data={item} id={1} />
    )
}
export default Bar_Chart;