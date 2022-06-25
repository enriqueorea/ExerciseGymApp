import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercise = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      //TODO: Continue here
      console.log("data", exerciseData);
      console.log(
        "chest filter",
        exerciseData.filter((exercise) => exercise.bodyPart == "chest")
      );
      const searchedExercise = exerciseData.filter(
        (exercise) =>
          exercise.name.includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercise);
      console.log(searchedExercise);
    }
  };

  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent={"center"}
      padding={"20px"}
    >
      <Typography
        fontWeight={600}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb={"50px"}
        textAlign="center"
      >
        Awesome exercise you <br /> should now
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "44px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercise;
