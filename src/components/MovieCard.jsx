import { Box, Image, Text } from "@chakra-ui/react";

function MovieCard({ img, name }) {
  return (
    <Box textAlign={"center"}>
      <Image width={"250px"} height={"300px"} src={img} alt="image" />
      <Text>{name}</Text>
    </Box>
  );
}

export default MovieCard;
