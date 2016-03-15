// // init ScrollMagic Controller
// controller = new ScrollMagic();

// // Scene1 Handler
// var scene1 = new ScrollScene({
//   triggerElement: "#pinned-trigger1", // point of execution
//   duration: 2018, // pin the element for a total of 400px
//   triggerHook: 'onLeave'
// })
// scene1.setPin("#pinned-element1"); // the element we want to pin



// // Add Scenes to ScrollMagic Controller
// controller.addScene([
//   scene1
// ]);

// init ScrollMagic Controller
controller = new ScrollMagic();

// Scene1 Handler
var scene1 = new ScrollScene({
  triggerElement: "#pinned-trigger1", // point of execution
  duration: 3202, // pin the element for a total of 400px
  triggerHook: 'onLeave'  
})
scene1.setPin("#pinned-element1"); // the element we want to pi39
var scene99 = new ScrollScene({
  triggerElement: "#pinned-trigger1",
  /*duration: 100*/
})
scene99.setClassToggle("#pinned-element1", "active") // add class toggle


// Scene2 Handler
var scene2 = new ScrollScene({
  triggerElement: "#pinned-trigger2", // point of execution
  duration: 3180, // pin the element for a total of 400px
  triggerHook: 'onLeave'
})
scene2.setPin("#pinned-element2"); // the element we want to pin

// Add Scenes to ScrollMagic Controller
controller.addScene([
  scene1,
  scene2,
  scene99
]);