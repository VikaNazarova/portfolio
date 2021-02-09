import Intro from "./components/Intro";
import Services from "./components/Services";
import ServiceQuestion from "./components/ServiceQuestion";
import TechStack from "./components/TechStack";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <main>
        <Intro />
        <Services />
        <ServiceQuestion />
        <TechStack />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
