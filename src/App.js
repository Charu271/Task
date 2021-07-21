import logo from "./logo.svg";
import "./App.css";
import Top from "./components/Top/Top";
import Services from "./components/Services/Services";
import Payroll from "./components/Payroll/Payroll";
import Benefits from "./components/Benefits/Benefits";
import Services2 from "./components/Payroll/Services2";
import HR from "./components/HR/HR";
import WhyUs from "./components/WhyUs/WhyUs";
import Advisor from "./components/Advisor/Advisor";
import Started from "./components/Started/Started";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Top />
      <Services />
      <Payroll />
      <Benefits />
      <Services2 />
      <HR />
      <WhyUs />
      <Advisor />
      <Started />
      <Footer />
    </div>
  );
}

export default App;
