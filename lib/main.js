const DOMNodeCollection = require ('./dom_node_collection.js');

// console.log("Hello Alice");
// 
// // function newFunction() {
// //   window.$l
// // }

window.$l = function (arg) {
  let result;
  if (typeof(arg) === "string") {
   result = document.querySelectorAll(arg);
 } else if (arg instanceof HTMLElement) {
   result = arg;
 }

  return new DOMNodeCollection(Array.from(result));
};