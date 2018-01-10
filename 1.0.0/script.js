"use strict"; //enable strict mode

function $error(t) {
  if (t === undefined||null||"") {
    alert("Error: t is '" + t + "'");
    
    return "$error: Error: t is '" + t + "'";
  } else {
    alert("Error: " + t)
    
    return "$error: "
}
