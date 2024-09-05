import {
  background,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      {/* template areas what you see in "" means first row then the second means the second row */}
      {/* Lets hide the left panel for small devices*/}
      <Grid
        templateAreas={{
          base: `"nav rightmain"`, // it will use this by default but if is > than 1024 will use the second
          lg: `"nav nav" "leftside rightmain"`, // 1024px it will use this when > 1024
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="leftside" bg="gold">
            Left Area
          </GridItem>
        </Show>
        <GridItem area="rightmain" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
