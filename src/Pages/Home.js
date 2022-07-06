import { useState } from "react"
import React from 'react'
import {Box} from "@mui/material"
import HeroBanner from "../Components/HeroBanner"
import SearchExcercises from "../Components/SearchExcercises"
import Excercises from "../Components/Excercises"

function Home() {
  return (
    <Box>
     <HeroBanner/>
     <SearchExcercises/>
     <Excercises/>
    </Box>
    
  )
}

export default Home
