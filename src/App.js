import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Box, Grid, SimpleGrid, Text } from '@chakra-ui/react';
import MovieCard from './components/MovieCard';


async function getMovies(){
  const res=await fetch("https://api.tvmaze.com/shows")
  const data=await res.json()
  return data
}

function App() {

  const [movies,setMovies]=useState([])

  useEffect(()=>{
    getMovies()
    .then(res=>setMovies(res))
  },[])

  console.log(movies);

  return (
    <Box className="App">
      <SimpleGrid columns={[2, null, 4]} spacing='40px'>
      {movies.map((e)=><MovieCard name={e.name} img={e.image.original} />)}
      </SimpleGrid>
    </Box>
  );
}

export default App;
