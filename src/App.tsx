import {
  background,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  // Now instead of using individual variables state lets use Query Objects pattern

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      {/* template areas what you see in "" means first row then the second means the second row */}
      {/* Lets hide the left panel for small devices*/}
      <Grid
        templateAreas={{
          base: `"nav" "rightmain"`, // it will use this by default but if is > than 1024 will use the second
          lg: `"nav nav" "leftside rightmain"`, // 1024px it will use this when > 1024
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          {/* <GridItem area="leftside" bg="gold"> */}
          <GridItem area="leftside" paddingX={5}>
            <GenreList
              // selectedGenre={selectedGenre}
              // onSelectGenre={(genre) => setSelectedGenre(genre)}
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            ></GenreList>
          </GridItem>
        </Show>
        {/* <GridItem area="rightmain" bg="dodgerblue"></GridItem> */}
        <GridItem area="rightmain">
          <Flex paddingLeft={2} marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                // selectedPlatform={selectedPlatform}
                // onSelectPlatform={(plaform) => setSelectedPlatform(plaform)}
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              ></PlatformSelector>
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </Flex>
          <GameGrid
            // selectedGenre={selectedGenre}
            // selectedPlatform={selectedPlatform}
            gameQuery={gameQuery}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
