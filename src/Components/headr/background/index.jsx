import React from "react";
import {Glass, Section,Search,Results} from './background.styles'
import { TextField,Box,Paper} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import homeImage from "../airport.png"
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import {Airports} from "../data"
import { useState,useEffect } from "react";
import { styled,alpha } from '@mui/material/styles';
import SimpleBarReact from 'simplebar-react';


const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));


export const Background=({children})=> {
  const [result, setresult] = useState([])
  const [value, setvalue] = useState("")
  useEffect(() => {
    if(value){
    const regex = new RegExp(`^${value}`, 'gi');
    const matchedSites = Airports.filter((airport) => airport.match(regex));
    // const leng=matchedSites.length % 5
    setresult(matchedSites)
    }
    else{
      setresult([])
    }
  }, [value])

  return (
    <Section id="hero">
      <Search>
        <Box
      sx={{
        boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
        border:"none",
        borderRadius:5,
        backgroundColor:"#d6d6d6"
      }}
      noValidate
      autoComplete="off"
    >
            <TextField
              id="input-with-icon-textfield"
                variant="outlined"
                label="Seach Airports"
                sx={{
                  // borderStyle:"hidden",
                "& .MuiOutlinedInput-root": {
            "& fieldset": { 
                borderRadius: "20px",
                borderColor: "#000fff"
                   }},
                    "&.Mui-focused fieldset": {
            borderColor: "#C52328",
            borderWidth: "2px"
                 }
                }}
                style={{
                margin: "0 0 0 0",
                width:"40vw",
                backgroundColor:"transparent",
                color:"red",
              }}
                onChange={(e)=>{setvalue(e.target.value)}}
                InputProps={{
                startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
             ),
             }}
          />
          </Box>
      </Search>
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
          <Glass>
          <h2>Customer Feedback on airport and airline experiance</h2>
          <p>
            The webiste provides multiple infernce on the experiacne of users using multiple airports over the world 
          </p>
          </Glass>
          {result && (
          <Box style={{
                display: "inline-flex",
                height: "40vh",
                flex: 0.7,
                padding: 30,
                flexGrow:0.7,
                flexDirection: "column",
                overflowY: "auto"
          }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={false} sx={{overflowY: 'auto'}} >
            {result.map((airport)=>{
              return(
                <Link to={`/overall/${airport}`}>
            <Box component={Paper} style={{
              backgroundColor:"#e6fbfc", 
              marginTop:15, 
              paddingTop:10,
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              minHeight:50, 
              maxHeight:70,
              cursor:"pointer" ,
              }}>
           {airport}
          </Box>
          </Link>
              )
            })}
            </SimpleBarStyle>
          </Box>
          )}
      </div>
    </Section>
  );
}

