import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

//const element = <><h1>Hello world!</h1><p>yada</p></>; #2

//function Webpage() {
//  return <section><header><h1>Hello</h1></header><p>yada, yada</p></section>
//} #3

//function Webpage() {
//  const name = "Lisa Savoie";
//  return <><section><header><h1>Hello {name}</h1></header><p>yada, yada</p><//section><Clock /></>
//}
//function Clock() {
//  return <p>It's currently: {new Date().toLocaleTimeString("UK")}</p>
//} #4

//function Webpage() {
//  const name = "Lisa Savoie"
//  const date = new Date();
//  return <><section><header><h1>Hello {name}</h1></header><p>yada, yada</p></section><Clock time={date}/></>
//}
//function Clock(props) {
//  return<p>It's currently: {props.time.toLocaleTimeString("UK")}</p>
//} #5

//function Webpage() {
//  const name = "Lisa Savoie"
//  return <><section><header><h1>Hello {name}</h1></header><p>yada, yada</p></section><Clock /></>
//}
//function Clock() {
//  const [time, setTime] = useState(new Date().toLocaleTimeString("UK"));
//  setInterval(() => setTime(new Date().toLocaleTimeString("UK")), 1000);
//  return<p>It's currently: {time}</p>
//} //#6

ReactDOM.render(< App />, document.getElementById("root")); //#7 Components & multiple pages
//ReactDOM.render(< Webpage />, document.getElementById("root")); // #3,4,5,6
//#3 function, #4 function with a variable, #5 props, #6 State
//ReactDOM.render(element, document.getElementById("root")); #2 //Use a var
//ReactDOM.render("Hello world", document.getElementById("root")); only needs reactDOM, react allow JSX #1 //Just printing to the page
