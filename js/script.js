// IIFE Begins
(function() {

  // Global variables. inputValueStorage is to store the data that is created
  // within the input field.
  var getListContainer = document.getElementById('container2');
  var getInput = document.getElementById('taskInput');
  var inputValueStorage = [];
  var getAddBtn = document.getElementById('addBtn');
  var getTaskName = document.querySelector('.form-check-label');



  //----------------------------------------------------------------------


  // Taking care of the demo task
  var demoTasksInit = function (){

    var getClearBtn = document.querySelectorAll('.clearBtnContainer');

    for (var i = 0; i < getClearBtn.length; i++) {
      getClearBtn[i].addEventListener('click', removeTask, false);
    }

  }();


  //----------------------------------------------------------------------


  // Click function for the add task button
  getAddBtn.addEventListener('click', addToList , false);

  // Settings for the task when added to list
  function addToList() {

    // Pushes the input value to the 'inputValueStorage' array.
    inputValueStorage.push(getInput.value);

    // This makes the task appear in the To Do List with the value of the
    // input that had been pushed into the array.
    getListContainer.insertAdjacentHTML('beforeend', '<div class="row box"><div class="col taskCol clearBtnContainer"><div class="clearTaskBtn"><i class="fas fa-times"></i></div></div><div class="col-8"><label class="form-check-label nameOfTask" for="exampleCheck1">' + inputValueStorage + '</label></div><div class="col taskCol"><input type="checkbox" class="form-check-input" id="exampleCheck1"></div></div>');

    // The array is cleared so that new tasks can be added.
    inputValueStorage.pop();

    // To clear the input field
    getInput.value = '';

    // Fired function for when removing the task.
    newItemClose();
  }


  // Function creates the loop for removing the task when the task is added
  // to the list on click.
  function newItemClose () {

    // Variable is placed inside this function to reference the clear button.
    // It is inside a function to make the loop work when adding item to the list.
    // This is a local variable and will not be found outside of the function.
    var getClearBtnB = document.querySelectorAll('.clearBtnContainer');

    // This is a loop which adds the click function to the removeTask button.
    for (var i = 0; i < getClearBtnB.length; i++) {
      getClearBtnB[i].addEventListener('click', removeTask, false);
    }
  } // newItemClose button ends


  // This function creates the removal of the task. This is done targetting
  // The outerHTML of the clear buttons parent.
  function removeTask() {

    var getClearBtnB = document.querySelectorAll('.clearBtnContainer');
    // console.dir(getClearBtnB); // ????????

    this.parentNode.outerHTML = '';
    console.log(getClearBtnB);

    // A message will be created when the task has deleted
    var message = document.createElement('p');
    message.innerText = 'Task has been deleted.';
    message.className = 'message';
    getListContainer.appendChild(message);

    $('.message').fadeOut(2400);

    // Function that could be created:
    // Mesage says "*Task name* has been deleted.".
    // Warning via modal after clicking the x.
  }

  // $('h3').fadeOut('slow');

}());
// IIFE Ends
