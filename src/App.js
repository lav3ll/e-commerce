import React  from "react";
import Header from "./components/header/Header";
import Navigation from "./components/nav/Navigation";
import Main from "./components/main/Main";
import Activewear from "./components/activewear/Activewear";
import Main2 from "./components/main2/Main2";
import Stylefeed from "./components/style/Stylefeed";
import Lowerstyle from "./components/style/lowerstyle/Lowerstyle";
import Trending from "./components/trending/Trending";
import Footer from "./components/footer/Footer";

function App() {
  
  
  
 
  return (
    <div className="App">
      <Header />
      <Navigation />
      {/* <SubHeader /> */}
      <Main />
      <Activewear />
      <Main2 />
      <Stylefeed />
      <Lowerstyle />
      <Trending />
      <Footer />
      
      

    </div>
  );
}

export default App;
