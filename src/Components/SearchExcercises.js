import React, { useEffect } from 'react'
import {useState} from "react";
import {Stack,Button,Typography,Box,TextField} from "@mui/material"
import {exerciseOptions,fetchData} from "../Utils/fetchData"

function SearchExcercises() {

  const [search,setsearch]=useState("")
  const [exercises,setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
     const fetchExercisesData = async()=>{
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);

      setBodyParts(["all",...bodyPartsData])
     }
     fetchExercisesData()
  },[])

  const handleSearch =async()=>{
      if(search){
        const ExcersicesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions);
        
        const SearchExcercises = ExcersicesData.filter(
          (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
        ||exercise.equipment.toLowerCase().includes(search)
        ||exercise.bodyPart.toLowerCase().includes(search)
        );

        setsearch("")
        setExercises(SearchExcercises)
      }

     
  }
  return (
    <Stack alignItems="center"mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize:{lg:"44px",xs:"30px"}}}
        mb="50px" textAlign="center">
        Awsome Excersise you <br/> Should know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input:{fontWeight:"700",border:"none",borderRadius:"4px"},
          width:{lg:"800px", sx:"350px"},
          background : "#fff",
          borderRadius : "40px"
        }}
        height="76px"
        value={search}
        onChange={(e)=>setsearch(e.target.value.toLowerCase())}
        placeholder="Search Excersise"
        type = "text"
        />
        <Button className='search-btn'
        sx={{
          bgcolor:"#FF2625",
          color:"#fff",
          textTransform:"none",
          width:{lg:"175px", sx:"80px"},
          fontSize:{lg:"20px",xs:"14px"},
          height:"56px",
          position:"absolute",
          right:"0"
        }}
        onClick={handleSearch}>Search</Button>
      </Box>

      

    </Stack>
  )
}

export default SearchExcercises