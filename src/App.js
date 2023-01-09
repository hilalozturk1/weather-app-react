import "./App.css";
import Header from "./components/Header";
import Response from "./components/Response";
import { NameProvider } from "./context/NameContext";
import { ResponseContextProvider } from "./context/ResponseContext";

function App() {
  return (
    <NameProvider>
      <ResponseContextProvider>
        <div className="App">
          <Header />
          <Response />
        </div>
      </ResponseContextProvider>
    </NameProvider>
  );
}

export default App;
