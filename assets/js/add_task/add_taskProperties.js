
/**
 * Removes the "clearAddButtons" element's "d-none" class and adds the "ddArrow" element's "d-none" class.
 * Also sets an attribute after a delay of 200 milliseconds.
 */
function removeClearBtnAndAddArrow() {
  document.getElementById("clearAddButtons").classList.add("d-none");
  document.getElementById("ddArrow").classList.remove("d-none");
  setTimeout(setAttribute, 200);
}

/**
 * Adds the "clearAddButtons" element's "d-none" class and removes the "ddArrow" element's "d-none" class.
 * Also removes the "onclick" attribute from the "contactsToAssingContainer" element.
 */
function addClearBtnAndRemoveArrow() {
  document.getElementById("clearAddButtons").classList.remove("d-none");
  document.getElementById("ddArrow").classList.add("d-none");
  document
    .getElementById("contactsToAssingContainer")
    .removeAttribute("onclick");
}

/**
 * Changes the style of the element based on the provided priority.
 * @param {string} clicked - The identifier of the element that was clicked.
 */
function changeStyleForPriority(clicked) {
  if (clicked == "prioHigh") {
    document.getElementById(clicked).style = `background-color: rgb(236, 85, 32); color: white`;
  } else if (clicked == "prioMedium") {
    document.getElementById(clicked).style = `background-color: rgb(243, 173, 50); color: white`;
  } else if (clicked == "prioLow") {
    document.getElementById(clicked).style = `background-color: rgb(147, 222, 70); color: white`;
  }
}

/**
 * Resets the style and images of priority buttons.
 * @param {string} notClicked - The identifier of the button that was not clicked.
 * @param {string} alsoNotClicked - The identifier of the other button that was not clicked.
 */
function resetPrioButton(notClicked, alsoNotClicked) {
  document.getElementById(notClicked).style = ``;
  document.getElementById(alsoNotClicked).style = ``;
  document.getElementById("prioHighImg").src = `assets/img/prio_high.svg`;
  document.getElementById("prioMediumImg").src = `assets/img/prio_medium.svg`;
  document.getElementById("prioLowImg").src = `assets/img/prio_low.svg`;
}

/**
 * Changes the color of the specified image.
 * @param {string} img - The identifier of the image to change the color.
 */
function changeColor(img) {
  imgPath = document.getElementById(img);
  if (img == "prioHighImg") {
    imgPath.src = `assets/img/prio_high_white.svg`;
  }
  if (img == "prioMediumImg") {
    imgPath.src = `assets/img/prio_medium_white.svg`;
  }
  if (img == "prioLowImg") {
    imgPath.src = `assets/img/prio_low_white.svg`;
  }
}

/**
 * Switches the icons and behavior of the subtask elements based on the boolean argument.
 * @param {boolean} booleanArgument - The boolean argument to determine the state.
 * @param {HTMLElement} addSubtask - The add subtask button element.
 * @param {HTMLElement} subtaskInput - The subtask input element.
 */
function switchIconsfromSubtask(booleanArgument, addSubtask, subtaskInput) {
  if (booleanArgument == true) {
    subtaskInput.removeAttribute("onclick");
    createSubtask.classList.remove("d-none");
    addSubtask.classList.add("d-none");
    subtaskInput.focus();
  } else {
    subtaskInput.setAttribute("onclick", "switchSubtaskIcons()");
    createSubtask.classList.add("d-none");
    addSubtask.classList.remove("d-none");
    subtaskInput.blur();
    subtaskInput.value = "";
  }
}

/**
 * Opens the create category section by modifying the relevant elements' classes and invoking other functions.
 */
function openCreateCategory() {
  document.getElementById("categoryPlaceholder").classList.add("d-none");
  document.getElementById("newCategoryContainer").classList.remove("d-none");
  document.getElementById("color-picker").classList.remove("d-none");
  pullDownMenu("category", "assingedTo", "moreCategorys", "moreContacts");
  getRandomColor();
}

/**
 * Closes the create category section by modifying the relevant elements' classes.
 */
function closeCreateCategory() {
  document.getElementById("categoryPlaceholder").classList.remove("d-none");
  document.getElementById("newCategoryContainer").classList.add("d-none");
  document.getElementById("color-picker").classList.add("d-none");
}

/**
 * Removes the "d-none" CSS class from the element with the specified report ID.
 * @param {string} reportId - The ID of the element to remove the "d-none" CSS class from.
 */
function remove_D_NoneCSSByReportId(reportId) {
  document.getElementById(reportId).classList.remove("d-none");
}

/**
 * Adds the "d-none" CSS class to the element with the specified report ID.
 * @param {string} reportId - The ID of the element to add the "d-none" CSS class to.
 */
function add_D_NoneCSSByReportId(reportId) {
  document.getElementById(reportId).classList.add("d-none");
}

/**
 * Resets the background color and text color of the priority buttons.
 * @param {HTMLElement} highPrio - The high priority button element.
 * @param {HTMLElement} midPrio - The medium priority button element.
 * @param {HTMLElement} lowPrio - The low priority button element.
 */
function resetColorOfPrioButtons(highPrio, midPrio, lowPrio) {
  highPrio.style.background = "white";
  midPrio.style.background = "white";
  lowPrio.style.background = "white";
  highPrio.style.color = "black";
  midPrio.style.color = "black";
  lowPrio.style.color = "black";
}

/**
 * Resets the image source of the priority buttons to their default images.
 */
function resetImgOfPrioButtons() {
  document.getElementById("prioHighImg").src = `assets/img/prio_high.svg`;
  document.getElementById("prioMediumImg").src = `assets/img/prio_medium.svg`;
  document.getElementById("prioLowImg").src = `assets/img/prio_low.svg`;
}

/**
 * Generates a random color in hexadecimal format.
 * @returns {Promise<string>} A promise that resolves to a randomly generated color.
 */
async function generateRandomColor() {
  let color = "#" + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);

  while (r + g + b < (255 * 3) / 2) {
    color = "#" + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
    r = parseInt(color.substring(1, 3), 16);
    g = parseInt(color.substring(3, 5), 16);
    b = parseInt(color.substring(5, 7), 16);
  }
  return color;
}

/**
 * Opens the add task container and applies the appropriate slide-in animation based on the window width.
 * @param {number} [idx] - Optional index value for selecting a contact.
 */
function openAddTaskContainer(idx) {
  let greyBackground = document.getElementById("greyBackground");
  let addTaskPopUp = document.getElementById("addTaskWrapper");
  let profile = document.getElementById('userPicture');
  let addTaskBtn = document.getElementById("addTaskBtn");

  if (window.innerWidth < 1300) {
    slideInAnimationDesktop(greyBackground, addTaskPopUp, profile, addTaskBtn)
  } else {
    slideInAnimationResponsive(greyBackground, addTaskPopUp);
  }
  loadInfos();

  if (idx) {
    selectedForTask(combineNames(contacts, idx), `contactName${idx}`, contacts[idx]["color"]);
  }
  pullDownMenu('assingedTo', 'category', 'moreContacts', 'moreCategorys');
  addContacts();
}

/**
 * Resets the priority buttons to their default state.
 */
function setPrioButtonsToDefault() {
  let prioId = getIdOfPrioButtons();
  resetColorOfPrioButtons(prioId[0], prioId[1], prioId[2]);
  resetImgOfPrioButtons();
}

/**
 * Removes the 'choosenCategory' class from all color circles in the color picker.
 */
function removeClassFromColorPicker() {
  // Retrieve all color circles
  let colorCircles = document.querySelectorAll('[id^="colorPickCircle"]');

  // Remove the 'choosenCategory' class from all color circles
  colorCircles.forEach((circle) => {
    circle.classList.remove('choosenCategory');
  });
}

/**
 * Selects a color by adding the 'choosenCategory' class to the specified color circle and sets the color for a new category.
 * @param {number} r - The red component value (0-255) of the selected color.
 * @param {number} g - The green component value (0-255) of the selected color.
 * @param {number} b - The blue component value (0-255) of the selected color.
 * @param {number} index - The index of the selected color circle.
 */
function selectedColor(r, g, b, index) {
  removeClassFromColorPicker();
  smallCirleColor = true;
  // Add the 'choosenCategory' class to the selected color circle
  let selectedCircle = document.getElementById('colorPickCircle' + index);
  selectedCircle.classList.add('choosenCategory');
  colorForNewCategory = `rgb(${r}, ${g}, ${b})`;
}

/**
 * Adds the "selection-point" class to the specified element to indicate selection.
 * @param {string} selected - The ID of the element to add the "selection-point" class to.
 */
function addSelectedPoint(selected) {
  document.getElementById(selected).classList.add("selection-point");
}

/**
 * Selects a contact for a task by adding it to a collected contacts array, adding a selected point indicator,
 * managing initials and color, and switching contact icons.
 * @param {Array} collectedContact - The array to collect selected contacts.
 * @param {string} selectedContact - The selected contact to add to the collected contacts array.
 * @param {string} selected - The ID of the element representing the selected contact.
 * @param {string} colorOfContact - The color associated with the selected contact.
 */
function selectContactForTask(collectedContact, selectedContact, selected, colorOfContact) {
  collectedContact.push(selectedContact);
  addSelectedPoint(selected);
  manageInitials(selectedContact, colorOfContact);
  switchContactIcons();
}

/**
 * Deselects a contact for a task by removing it from a collected contacts array, managing initials and color,
 * removing the selected point indicator, and switching contact icons.
 * @param {Array} collectedContact - The array of collected contacts.
 * @param {string} selectedContact - The selected contact to remove from the collected contacts array.
 * @param {string} colorOfContact - The color associated with the deselected contact.
 * @param {string} selected - The ID of the element representing the deselected contact.
 */
function deselectContactforTask(collectedContact, selectedContact, colorOfContact, selected) {
  contactToRemove = collectedContact.indexOf(selectedContact);
  collectedContact.splice(contactToRemove, 1);
  manageInitials(selectedContact, colorOfContact);
  document.getElementById(selected).classList.remove("selection-point");
  switchContactIcons();
}

/**
 * Renders the available contacts by generating HTML for each contact and appending it to the contact container.
 * @param {Array} contacts - The array of available contacts.
 * @param {number} i - The index of the contact to render.
 */
function renderAvailableContacts(contacts, i) {
  let contactName = combineNames(contacts, i);
  let colorOfContact = contacts[i]["color"];
  contactContainer.innerHTML += renderContactsHtml(contactName, colorOfContact, i);
}

/**
 * Switches the contact icons based on the state of collected contacts and initials rendering.
 * If there are no collected contacts or initials have been rendered, the clear button is removed and the arrow is added.
 * Otherwise, the clear button is added and the arrow is removed.
 */
function switchContactIcons() {
  if (collectedContact.length == false || initialsRenderd == true) {
    removeClearBtnAndAddArrow()
  } else {
    addClearBtnAndRemoveArrow()
  }
}

/**
 * Closes the add task section by resetting the pull-down menus for assignedTo and category,
 * clearing the task fields, and clearing the selected contacts.
 */
function closeAddTask() {
  pullDownMenu('assingedTo', 'category', 'moreContacts', 'moreCategorys');
  clearTaskFields();
  clearContacts();
}

/**
 * Shows or hides the create task button based on the current URL.
 * If the URL matches 'http://127.0.0.1:5501/add_task.html' or 'https://gruppe-join-421.developerakademie.net/add_task.html',
 * the create task button is shown. Otherwise, it is hidden.
 */
function showCreateTaskBtn() {
  if (
    window.location.href == 'http://127.0.0.1:5501/add_task.html' ||
    window.location.href == 'https://gruppe-join-421.developerakademie.net/add_task.html'
  ) {
    document.getElementById('addTaskBtn').classList.remove('d-none')
  } else {
    document.getElementById('addTaskBtn').classList.add('d-none')
  }
}

/**
 * Sets the onclick event for a color circle in the color picker.
 * Extracts the RGB color value from the color circle's style and assigns it to the onclick event.
 *
 * @param {HTMLElement} colorCircle - The color circle element to set the onclick event for.
 * @param {number} index - The index of the color circle.
 */
function setOnclickForColorpicker(colorCircle, index) {
  rgbColor = colorCircle.style["cssText"];
  i = rgbColor.length;
  onclickColor = rgbColor.slice(22, i - 2);
  colorCircle.setAttribute("onclick", `selectedColor(${onclickColor}, ${index})`);
}

/**
 * Adds CSS classes to a popup element to make it visible and styled as a popup.
 *
 * @param {HTMLElement} popUpId - The ID of the popup element to add CSS classes to.
 */
function addPopUpCSS(popUpId) {
  popUpId.classList.remove("d-none");
  popUpId.classList.add("popUp");
}

/**
 * Switches the icons and visibility of the subtask input and create subtask elements.
 */
function switchSubtaskIcons() {
  let addSubtask = document.getElementById("addSubtask");
  let createSubtask = document.getElementById("createSubtask");
  let subtaskInput = document.getElementById("subtaskInput");
  let createSubtaskClass = createSubtask.classList.value;
  let divClass = "d-none";
  if (createSubtaskClass.includes(divClass) == true) {
    booleanArgument = createSubtaskClass.includes(divClass);
    switchIconsfromSubtask(booleanArgument, addSubtask, subtaskInput);
  } else {
    booleanArgument = createSubtaskClass.includes(divClass);
    switchIconsfromSubtask(booleanArgument, addSubtask, subtaskInput);
  }
}

/**
Pushes the initial and color data of a contact to the 'initials' array.
Clears the selectedContact variable.
@param {string} initial - The initial of the contact.
@param {string} colorOfContact - The color associated with the contact.
@param {string} selectedContact - The selected contact.
*/
function pushInitialAndColorData(initial, colorOfContact, selectedContact) {
  initials.push({
    initial: initial,
    color: colorOfContact,
  });
  selectedContact = "";
}


/**
Removes the initial and color data of a contact from the 'initials' array.
Clears the selectedContact variable.
@param {string} initial - The initial of the contact to remove.
@param {string} selectedContact - The selected contact.
*/
function removeInitialAndColorData(initial, selectedContact) {
  const indexToRemove = initials.findIndex((obj) => obj.initial === initial);
  initials.splice(indexToRemove, 1);
  selectedContact = "";
}