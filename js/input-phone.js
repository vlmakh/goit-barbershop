// import IMask from "imask";

var element = document.getElementById("tel");
var maskOptions = {
  mask: "+{38}(000)000-00-00",
};
var mask = IMask(element, maskOptions);
