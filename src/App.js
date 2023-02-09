import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Logo } from "./components/Logo/Logo";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { Rank } from "./components/Rank/Rank";
import { Cover } from "./components/Cover/Cover";

const App = () => {
  return (
    <div className="App">
      <Cover />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecogntion /> */}
    </div>
  );
};

export default App;
