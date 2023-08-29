/**
Retrieves the IDs of input fields used in the task form.
@returns {object} An object containing references to the input fields.
titleField: The input field for the task title.
descriptionField: The input field for the task description.
chosenDateField: The input field for the chosen date.
categoryField: The input field for the chosen category.
contactField: The input field for the selected contacts.
*/
function getIdsOfInputFields() {
  let titleField = document.getElementById("titleInput");
  let descriptionField = document.getElementById("descriptionInput");
  let chosenDateField = document.getElementById("date");
  let categoryField = document.getElementById("chosenCategory");
  let contactField = document.getElementById("initialsContainer");

  return {
    titleField,
    descriptionField,
    chosenDateField,
    categoryField,
    contactField,
  };
}

/**
Retrieves the value of the title or description input field.
If the input field is empty, it adds the "d-none" CSS class to the corresponding report element and sets the 'required' variable to true.
If the input field is not empty, it removes the "d-none" CSS class from the corresponding report element, sets the 'required' variable to false, and returns the value of the input field.
@param {string} inputId - The ID of the input field.
@param {string} reportId - The ID of the report element.
@returns {string} The value of the input field if it is not empty, otherwise null.
*/
function getTitleOrDescription(inputId, reportId) {
  let taskInfo = document.getElementById(inputId).value;
  if (taskInfo == "") {
    remove_D_NoneCSSByReportId(reportId);
    required = true;
  } else {
    required = false;
    add_D_NoneCSSByReportId(reportId);
    return taskInfo;
  }
}

/**
Retrieves the selected category.
If no category is selected, it adds the "d-none" CSS class to the corresponding report element and sets the 'required' variable to true.
If a category is selected, it removes the "d-none" CSS class from the corresponding report element, sets the 'required' variable to false, and returns the selected category.
@param {string} reportId - The ID of the report element.
@returns {string} The selected category if it exists, otherwise null.
*/
function getCategory(reportId) {
  if (selectedCategory == undefined) {
    remove_D_NoneCSSByReportId(reportId);
    required = true;
  } else {
    required = false;
    add_D_NoneCSSByReportId(reportId);
    return selectedCategory;
  }
}

/**
Retrieves the selected contact.
If no contact is selected, it adds the "d-none" CSS class to the corresponding report element and sets the 'required' variable to true.
If a contact is selected, it removes the "d-none" CSS class from the corresponding report element, sets the 'required' variable to false, and returns the selected contact.
@param {string} reportId - The ID of the report element.
@returns {string} The selected contact if it exists, otherwise null.
*/
function getContact(reportId) {
  if (collectedContact == "") {
    remove_D_NoneCSSByReportId(reportId);
    required = true;
  } else {
    required = false;
    add_D_NoneCSSByReportId(reportId);
    return collectedContact;
  }
}

/**
Retrieves the chosen date.
If no date is chosen, it adds the "d-none" CSS class to the corresponding report element and sets the 'required' variable to true.
If a date is chosen, it removes the "d-none" CSS class from the corresponding report element, sets the 'required' variable to false, and returns the chosen date.
@param {string} reportId - The ID of the report element.
@returns {string} The chosen date if it exists, otherwise null.
*/
function getDate(reportId) {
  let chosenDate = document.getElementById("date").value;
  if (chosenDate == "") {
    remove_D_NoneCSSByReportId(reportId);
    required = true;
  } else {
    add_D_NoneCSSByReportId(reportId);
    required = false;
    return chosenDate;
  }
}

/**
Retrieves the priority value.
If no priority is selected, it adds the "d-none" CSS class to the corresponding report element and sets the 'required' variable to true.
If a priority is selected, it removes the "d-none" CSS class from the corresponding report element, sets the 'required' variable to false, and returns the selected priority value.
@param {string} reportId - The ID of the report element.
@returns {string} The selected priority value if it exists, otherwise null.
*/
function getPrio(reportId) {
  if (prio == undefined) {
    remove_D_NoneCSSByReportId(reportId);
    required = true;
  } else {
    required = false;
    add_D_NoneCSSByReportId(reportId);
    return prio;
  }
}

/**
 * Toggles the visibility of a specific div element based on the status of a subtask.
 * If the subtaskStatus at index i is false, it removes the "d-none" CSS class from the element with the specified divID
 * and updates the subtaskStatus array accordingly.
 * If the subtaskStatus at index i is true, it adds the "d-none" CSS class to the element with the specified divID
 * and updates the subtaskStatus array accordingly.
 *
 * @param {string} divID - The ID of the div element to toggle.
 * @param {number} i - The index of the subtask in the subtaskStatus array.
 */
function setStatus(divID, i) {
  if (subtaskStatus[i] == false) {
    document.getElementById(divID).classList.remove("d-none");
    subtaskStatus.splice(i, 1, true);
  } else {
    document.getElementById(divID).classList.add("d-none");
    subtaskStatus.splice(i, 1, false);
  }
}

/**
 * Pushes the values of the subtaskStatus array to the task.subtasks.status array.
 */
function pushStatus() {
  for (let i = 0; i < subtaskStatus.length; i++) {
    task.subtasks.status.push(subtaskStatus[i]);
  }
}

/**
 * Pushes the values of the subtasks array to the task.subtasks.name array.
 */
function pushSubtask() {
  for (let i = 0; i < subtasks.length; i++) {
    task.subtasks.name.push(subtasks[i]) || [];
  }
}

/**
 * Gets the CSS class based on the status of the subtask at the specified index.
 * @param {number} i - The index of the subtask.
 * @returns {string} The CSS class to be applied.
 */
function getClass(i) {
  if (subtaskStatus[i] == true) {
    return (setClass = "");
  } else {
    return (setClass = "d-none");
  }
}

/**
 * Retrieves the priority button elements by their IDs.
 * @returns {Array<HTMLElement>} An array containing the high, medium, and low priority button elements.
 */
function getIdOfPrioButtons() {
  let highPrio = document.getElementById("prioHigh");
  let midPrio = document.getElementById("prioMedium");
  let lowPrio = document.getElementById("prioLow");

  return [highPrio, midPrio, lowPrio];
}

/**
 * Generates random colors for the color picker and assigns them to color circles.
 * Uses the `generateRandomColor` function to generate each color asynchronously.
 * @returns {Promise<void>}
 */
async function getRandomColor() {
  categoryInputFiled = document.getElementById("categoryInput");
  for (let index = 0; index < 6; index++) {
    generatedColor = await generateRandomColor();
    onclickColor = `selectedColor(#${generatedColor})`;
    colorCircle = document.getElementById("colorPickCircle" + index);
    colorCircle.style = `background-color: ${generatedColor}`;
    setOnclickForColorpicker(colorCircle, index);
  }
}

