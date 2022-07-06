import React from 'react'
import {Box,Stack,Typography,Button} from "@mui/material"

import HeroBannerImg from "../asset/HeroBannerImg.jpg"

function HeroBanner() {
  return (
    <Box sx={{
      mt:{lg:"212px", sx:"70px"},
      ml:{sx:"50px"}
  }} position="relative" p="20px">

        <Typography color="red" fontWeight="600px" fontSize="26px">
            Fitness Club
        </Typography>

        <Typography fontWeight={700}
        sx={{
          fontSize:{lg:"44px",sx:"40px"}
        }} mb="23px" mt="30px">
          sweat,smile <br/> and reapet
        </Typography>

        <Typography fontSize="22px"
        lineHeight="35px" mb={4}>
          Check out most effective Excersies
        </Typography>

        <Button variant="contained"
        color="error" href='#excercises'
        sx={{backgroundColor:"#ff2625",padding:"10px"}}>
          Expolre Excersise
        </Button>

        <Typography fontWeight={600}
        color="#ff2625"
        sx={{
          opacity:0.1,
          display:{lg:"block",sx:"none"}
        }} fontSize="200px">
          Excersices
        </Typography>

        <img src={HeroBannerImg} alt="banner" 
        className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner