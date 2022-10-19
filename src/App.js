import { VStack } from "@chakra-ui/react";
import { Homepage } from "./pages/Homepage/index";
import { ButtonTypeAdProvider } from "./providers/ButtonTypeAd";

function App() {
  return (
    <VStack>
      <ButtonTypeAdProvider>
        <Homepage />
      </ButtonTypeAdProvider>
    </VStack>
  );
}

export default App;
