import React from 'react';
import { GiRocketFlight } from 'react-icons/gi';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import Button from "../Components/Utils/button"
import { Link } from 'react-router-dom';
import LineChart from "../Components/Charts/Line"
import { Backdrop,CircularProgress } from '@mui/material';
import { earningData, dropdownData, } from '../Components/Utils/data';
import Pie_Chart from '../Components/Pie';
import Line_Chart from '../Components/Line';
import  Bar_Chart  from '../Components/BarChart';
import MapChart from '../Components/Maps';
import TripleBar from '../Components/Charts/double_bar';
import SimpleCloud from '../Components/Cloud';
import jsPDF from "jspdf"
import Token from '../Components/Cloud/Card';
const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

class Ecommerce extends React.Component{
    
    constructor(props)    {
        super(props)
        console.log(this.props.match.params.AirportName);
        // console.log();
        const labels = ['Queing', 'Cleaness', 'Seating', 'Signs ', 'Food', 'Shopping', 'Wi-fi','Staff'];
            const data = {
  labels,
  datasets: [
    {
      label: 'Rating',
      data: [],
      backgroundColor: 'rgba(239, 51, 243, 0.5)',
    },
  ],
};
      this.state={
        backdrop:false,
            time_analyis:{
          labels:[],
          datasets:[]
        },
        coordinates:{},
        reviews_arr:data,
        sentiment:[],
        image:"",
        series:[],
        keywords:[],
        comments:[]
        }
    }
    componentDidMount() {
    this.getdata();
  }

  handleClose=()=>{
    this.setState({backdrop:false})
  }
  setTickets=(val)=>{
    this.setState({comments:val});
    console.log(this.state.comments);
  }

  getdata = async() =>{
    this.setState({backdrop:true})
   
// const data_Set=[1,2,4,5,3,4,5,6]
////////////////////////
    const res= await fetch(`/api/rating/${this.props.match.params.AirportName}`,{
         method: 'GET',
      }).then(r=>r.json())
      // console.log(res);
       const labels = ['Queing', 'Cleaness', 'Seating', 'Signs ', 'Food', 'Shopping', 'Wi-fi','Staff'];
/////
      this.setState({
        coordinates:res["coors"]
      })
      this.setState({reviews_arr: {
    labels,
    datasets: [
    {
      label: 'Rating',
      data: labels.map((i,j)=>res["rating_analysis"][j]),
      backgroundColor: 'rgba(239, 51, 243, 0.5)',
    },
  ],
}})

/////////////////
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
////////////
this.setState({ sentiment: res.sentiment,image:res.image,comments:res.tickets});
const keys= await fetch(`/api/keywords/${this.props.match.params.AirportName}`,{
         method: 'GET',
      }).then(r=>r.json())
  this.setState({keywords:keys})
const feautures = ["airport", "terminal", "check in","security", "queue", "experience", "toilets", "shop"]
// console.log(keys[0]["airport"]);
  const barChartData = [
    keys?.map((i,j)=>({
      x:feautures[j],
      y:i[feautures[j]]["pos"],
    })),
    keys?.map((i,j)=>({
      x:feautures[j],
      y:i[feautures[j]]["neu"]
    })),
    keys?.map((i,j)=>({
      x:feautures[j],
      y:i[feautures[j]]["neg"]
    }))
  ]
  console.log(barChartData);
  const ll_i=["positive","neutal","negative"]
const barCustomSeries = barChartData?.map((i,j)=>(
{
    dataSource: i,
    xName: 'x',
    yName: 'y',
    name: ll_i[j],
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '800', color: '#ff0000' },
      },
    },
  }
))
this.setState({series:barCustomSeries});
this.setState({backdrop:false})
}

render(){
  return (
    <div className="bg-zinc-100" id='1'>
      <Backdrop
  sx={{ color: '#fff', zIndex:5000 }}
  open={this.state.backdrop}
  onClick={this.handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Download Report</p>
              <p className="text-2xl">Chennai Airport</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: "#03C9D7" }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <GiRocketFlight />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={"#03C9D7"}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center items-center">
          {earningData.map((item,j) => (
            <div key={j} className="bg-white ml-17 flex h-44 justify-center flex-wrap items-center dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <Link to={`/category/${item.Link}/${this.props.match.params.AirportName}`}>
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl "
              >
                {item.icon}
              </button>
              </Link>
              <p className="mt-3">
                <span className="text-lg font-bold ml-2">{item.title}</span>
              </p>
              <p className="text-sm text-gray-400  mt-1"></p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="bg-white dark:text-gray-200 w-3/5 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex">
            <p className="font-bold text-xl">Airport Ratings</p>
          </div>
          <div className="mt-10 flex gap-10">
            <Bar_Chart item={this.state.reviews_arr}/>
        </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: "#03C9D7" }}
          >
            <div className="flex justify-between items-center ">
              <img src={this.state.image} style={{width:350,height:200}}/>
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">Sentimental</p>
              <p className="text-red-400">Analysis</p>
            </div>

            <div className="w-40 h-50">
              <Pie_Chart item={this.state.sentiment}/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl ">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Map Location</p>
          </div>
          <div className="mt-10 w-72 md:w-400">
            <MapChart data={this.state.coordinates}/>
          <div className="flex-auto flex-col align-middle justify-center ">
            <p className="text-red-400  text-2xl">Airport Location: </p>
            <p className="text-blue-400 text-2xl">Chennai</p>
            <p className="text-red-400 mt-4 text-2xl">Country:<p className="text-blue-400 text-2xl">India</p></p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 w-3/5 dark:bg-secondary-dark-bg m-1 p-1 rounded-2xl md:w-780">
          <TripleBar barCustomSeries={this.state.series}/>
        </div>
      </div>

      <div className="bg-emerald-50 dark:text-gray-200 dark:bg-secondary-dark-bg  m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="text-xl font-bold text-red-400">Overall Rating Timeleine</p>
            </div>
          <div className="mt-10">
            <Line_Chart item={this.state.time_analyis}/>
            {/* <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div> */}
          </div>
        </div>
        <div>
        <div className=" bg-white   dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="mb-10  ">
            <p className="text-2xl w-[76rem] inline-flex align-middle  justify-center cursor-pointer hover:drop-shadow-xl font-bold rounded-lg   bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
              Improvements and remarks
            </p>
          </div>
          <div className="flex grow gap-10 flex-row overflow-auto">
        {this.state.keywords.map((i,j)=>{
          const feautures = ["airport", "terminal", "check in","security", "queue", "experience", "toilets", "shop"]
          const details={
            "airport":"Represent the total architecture of runways and buildings for the take-off, landing, and maintenance of civil aircraft.",
            "terminal":"The building at an airport where passengers transfer between ground transportation and act as the groundwork of airport",
            "check in":"The process whereby an airline approves airplane passengers to board an airplane for the reasons of  boarding a flight.",
            "security":"Security refers to measures taken to keep aircraft and their passengers and crew safe. This is usually done at the enternace of the airport.",
            "queue":"To attain order of maintaing things, Passengers, aircraft, bags etc form queues at these facilities and wait to be served",
            "experience":"To over view about the experiance of the person visiting the aitports",
            "toilets":"Reviews on the cleaness and quality of the lavatory in airport",
            "shop":"The shooping environment and the prices in the shops in the restarurent"
          }
          let remark_on="bad comments of airport";
          if (i[feautures[j]]?.remarks.length==0){
            remark_on="Neutal comments of airport"
            if(i[feautures[j]]?.neutal_points.length==0){
                remark_on="good comments of airport"
            }
          }
          return(
          <div className="inline-flex static ml-4 justify-center w-1/7 max-w-xs " key={j}>
          <div className="rounded-lg shadow-lg bg-white max-w-s ">
            <SimpleCloud val={j} item={i} func={this.setTickets} airport={this.props.match.params.AirportName}/>
            <div className="p-4">
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-80 bg-orange-400 py-1 px-2 text-gray-200 mt-10">
            Remark made on : {remark_on}
          </p>
             <h5 className="text-gray-900 text-xl font-medium mb-2">{feautures[j]}</h5>
             <p className="text-gray-700 text-base mb-4">
            {details[feautures[j]]}
          </p>
          </div>
        </div>
        </div>
        )})}
          </div>
        </div>

        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 ">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Tickets to be resolved</p>
          </div>
          <div className="flex md:flex-row-reverse -mx-2 overflow-auto ">
            {this.state.comments.map((i,j)=>(
              <div className="inline-block  static gap-2 p-3 m-1 ml-auto rounded-2xl " key={j}>
              <Token content={i["content"]} user_name={i["user_name"]} date={i["date"]} country={i["user_country"]} Rat={i["rating"]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
              }
};

export default Ecommerce;
