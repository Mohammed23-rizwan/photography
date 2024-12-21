import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import ContentHero from "./Components/ContentHero";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-[90%] h-full">
        <Hero />
        <ContentHero />
      </div>
    </div>
  );
};

export default App;
