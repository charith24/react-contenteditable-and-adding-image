import React from "react";
import ReactDOM from "react-dom";

var wantoedit = "true";
var url = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="colour" contentEditable={wantoedit}>
      Fav Food
    </h1>
    <img src={url} alt="this is a random pic" />
    <ol>
      <li>pizza</li>
      <li>pizza</li>
      <li>pizza</li>
    </ol>
  </div>,
  document.getElementById("root")
);
