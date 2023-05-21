import React from "react";
import Header from "./componets/header";
import { Globalstyle } from "./componets/global";
import Body from "./componets/body";
import Middle from "./componets/middle";
import Footer from "./componets/footer"

function App() { 
  return(
  <>
  <Globalstyle></Globalstyle>
  <Header text = "Album"/>
  <Body text1 = "Album example"/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <Middle/>
  <Footer/>
  </>
)}

export default App;