import { faker } from '@faker-js/faker';
import {Card} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Page from '../Components/Utils/page';
import Iconify from '../Components/Utils/iconify';
import Token from '../Components/Cloud/Card';
import AppOrderTimeline from '../Components/Dashboard_comp/AppOrderTime';
import Pie_Chart from '../Components/Pie';
import AppWebsiteVisits from '../Components/Dashboard_comp/AppVisits';
import AppTrafficBySite from '../Components/Dashboard_comp/AppTraffic';
import AppWidgetSummary from '../Components/Dashboard_comp/AppWidget';
import AppCurrentSubject from '../Components/Dashboard_comp/Appcurren';
import AppConversionRates from '../Components/Dashboard_comp/AppCoversion';
import { Component } from 'react';
import SimpleCloud from '../Components/Cloud/superCloud';
import {createTheme} from '@mui/material/styles';
import {ChartWrapperStyle} from "../Components/Dashboard_comp/Appcurren"
// ----------------------------------------------------------------------

export default class DashboardApp extends Component {
  constructor(props){
    super(props);
    this.state={
      senti:[],
      pos:[],
      neg:[],
      air_food:[],
      tickets:[],
      arrow:[]
    }
  }
  setTickets=(val)=>{
    this.setState({tickets:val});
    console.log(this.state.tickets);
    // this.state.tickets=val;
  }
  componentDidMount() {
    this.getdata();
  }
   getdata = async() =>{
      const res= await fetch("/api/food",{
         method: 'GET',
      }).then(r=>r.json())

      this.setState({senti:res[1],pos:res[0].pos_items,neg:res[0].neg_items,air_food:res[2],
        tickets:res[3],arrow:res[4]
      })
      // console.log(this.state.words);
   }
   render(){
      const theme = createTheme({
  palette: {
    primary: {
      main: '#47c3fc'
    },
    secondary: {
      main: '#ff1a1a'
    },
    third:{
      main:'#12f10b'
    }
  }
});
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Welcome to the food statistics of food in the {} aiport
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={10} md={6} lg={4}>
            <Card>
          <Typography variant="h4" sx={{ mt: 6,ml:3 }}>
            Sentimental Analysis of feedbacks
          </Typography>
          <div className="flex justify-center align-middle ">
              <ChartWrapperStyle>
             <Pie_Chart item={this.state.senti}/>
             </ChartWrapperStyle>
          </div>
             </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Best Provider"
              subheader="Food based analysis"
              chartData={this.state.air_food}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Customer Statifaction comaprision"
              chartLabels={['Value for money', 'recommend', 'rating']}
              chartData={this.state.arrow}
              chartColors={[...Array(3)].map(() => theme.palette.secondary.main)}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Card key={12}>
            <SimpleCloud  item={this.state.pos} val={this.setTickets}/>
        </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Card key={12}>
            <SimpleCloud  item={this.state.neg} val={this.setTickets}/>
        </Card>
          </Grid>
         

          

          <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 ">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Tickets to be resolved</p>
          </div>
          <div className="mt-10 flex flex-nowrap overflow-x-auto">
            {this.state.tickets.map((i,j)=>(
              <div className="gap-2  p-3 m-1  rounded-2xl" key={j}>
              <Token content={i["content"]} user_name={i["user_name"]} date={i["date"]} country={i["user_country"]} Rat={i["rating"]} />
              </div>
            ))}
          </div>
        </div>
        </Grid>
      </Container>
    </Page>
  );}
}
