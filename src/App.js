import { VStack } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ModalDelete } from "./components/ModalDelete";
import { ModalView } from "./components/ModalView";
import { Homepage } from "./pages/Homepage/index";

function App() {
  return (
    <VStack>
      <Header/>
    </VStack>
  );
}

export default App;
