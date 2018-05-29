// IIFE Begins
(function() {

  // Global variables. inputValueStorage is to store the data that is created
  // within the input field.
  var getListContainer = document.getElementById('container2');
  var getInput = document.getElementById('taskInput');
  var inputValueStorage = [];
  var getAddBtn = document.getElementById('addBtn');
  var getTaskName = document.querySelector('.form-check-label');


  //----------------------------------------------------------------------------

  // Today's date within the getDate div.
  function dateAndTime() {

    // Variables to create the date and time

    // Date
    var today = new Date();
    var dateNow = today.getDate();
    var monthNow = today.getMonth();
    var fullYearNow = today.getFullYear();

    // Time
    var hourNow = today.getHours();
    var minuteNow = today.getMinutes();

    // Date and time is placed in the HTML
    document.getElementById('getDate').innerHTML = dateNow + ' / ' + monthNow + ' / ' + fullYearNow;
    document.getElementById('getTime').innerHTML = hourNow + ':' + minuteNow;
  }

  dateAndTime();

  //----------------------------------------------------------------------------


  // Taking care of the demo task
  var demoTasksInit = function (){

    var getClearBtn = document.querySelectorAll('.clearTaskBtn');

    for (var i = 0; i < getClearBtn.length; i++) {
      getClearBtn[i].addEventListener('click', removeTask, false);
    }

  }();


  //----------------------------------------------------------------------------


  // Click function for the add task button
  getAddBtn.addEventListener('click', addToList , false);

  // Settings for the task when added to list
  function addToList() {

    // Pushes the input value to the 'inputValueStorage' array.
    inputValueStorage.push(getInput.value);

    // This makes the task appear in the To Do List with the value of the
    // input that had been pushed into the array.
    getListContainer.insertAdjacentHTML('beforeend', '<div class="row box"><div class="col taskCol clearTaskBtn clearBtnContainer"><i class="fas fa-times" id="icon"></i></div><div class="col-8"><label class="form-check-label nameOfTask" for="exampleCheck1">' + inputValueStorage + '</label></div><div class="col taskCol"><input type="checkbox" class="form-check-input" id="exampleCheck1"></div></div>');

    // The array is cleared so that new tasks can be added.
    inputValueStorage.pop();

    // To clear the input field
    getInput.value = '';

    // Fired function for when removing the task.
    newItemClose();
  }


  //----------------------------------------------------------------------------


  // Function creates the loop for removing the task when the task is added
  // to the list on click.
  function newItemClose () {

    // Variable is placed inside this function to reference the clear button.
    // It is inside a function to make the loop work when adding item to the list.
    // This is a local variable and will not be found outside of the function.
    var getClearBtnB = document.querySelectorAll('.clearTaskBtn');

    // This is a loop which adds the click function to the removeTask button.
    for (var i = 0; i < getClearBtnB.length; i++) {
      getClearBtnB[i].addEventListener('click', removeTask, false);
    }
  }


  //----------------------------------------------------------------------------


  // This function creates the removal of the task. This is done targetting
  // The outerHTML of the clear buttons parent.
  function removeTask(e) {

    console.dir(e.target);

    // This will remove the HTML code for the selected task a user wants deleted.
    // An if else statement has been used as the parent node is applied to the
    // contaienr as well.
    if (e.target.id === 'icon') {
      e.target.parentNode.parentNode.outerHTML = '';
    } else {
      e.target.parentNode.outerHTML = '';
    }

    // A message will be created when the task has deleted.
    var message = document.createElement('p');
    message.innerText = 'Task has been deleted.';
    message.className = 'message';

    // To add the message HTML as a child within the getListContainer div.
    getListContainer.appendChild(message);

    // jQuery method for fading the message away then uses a remove method to
    // delete the element from the HTML code.
    $('.message').fadeOut(2400, function(){
      $('.message').remove();
    });
  }

}());
// IIFE Ends
