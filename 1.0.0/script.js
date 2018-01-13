"use strict";

function $error(message) {
  if (message === undefined||null||"") {
    alert("Error:\nMessage is '" + message + "'");
    
    return "$error: Error: Message is '" + message + "'";
  } else {    
    alert("Error:\n" + message);
    
    return "$error: OK";
  }
}
