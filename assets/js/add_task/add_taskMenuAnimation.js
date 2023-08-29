/**
 *  Opens a category folder in a dropdown menu.
 * 
 * @param {string} clicked - The ID of the category folder element that is clicked and should be opened.
 * @param {string} notClicked - The ID of the category folder element that is not clicked and should be closed.
 * @param {string} visible - The ID of the content element that should be made visible.
 * @param {string} notVisible - The ID of the content element that should be hidden.
 */
function openCategoryFolder(clicked, notClicked, visible, notVisible) {
    document.getElementById(clicked).classList.add("dropdown-category-open");
    document.getElementById(notClicked).classList.remove("dropdown-category-open");
    document.getElementById(visible).classList.remove("d-none");
    document.getElementById(notVisible).classList.add("d-none");
    document.getElementById("initialsContainer").classList.add("d-none");
  }
  
  /**
   * Closes a category folder in a dropdown menu.
   *
   * @param {string} clicked - The ID of the category folder element that is clicked and should be closed.
   * @param {string} visible - The ID of the content element that should be hidden.
   * @param {string} notVisible - The ID of the content element that should be hidden.
   */
  function closeCategoryFolder(clicked, visible, notVisible) {
    document.getElementById(clicked).classList.remove("dropdown-category-open");
    document.getElementById(visible).classList.add("d-none");
    document.getElementById(notVisible).classList.add("d-none");
    document.getElementById("initialsContainer").classList.remove("d-none");
  }

  /**
 * This function is used to change the height of a div and display its contents
 * if the height of a div was previously changed and you click on another,
 * the previous div is reduced again and the content is hidden.
 * The height of the clicked div is increased and the content is displayed
 *
 * @param {*} clicked - This is the id where a classlist should be changed
 * @param {*} notClicked - This is the id where a classlist should be changed
 * @param {*} visible - This is the id where the classlist "d-none" will removed
 * @param {*} notVisible - This is the id where the classlist "d-none" will added
 */

function pullDownMenu(clicked, notClicked, visible, notVisible) {
    let openMenu = document.getElementById(clicked).classList;
    if (openMenu == "dropdown-category-closed") {
      openCategoryFolder(clicked, notClicked, visible, notVisible);
    } else {
      closeCategoryFolder(clicked, visible, notVisible);
    }
    if (clicked == "assingedTo") {
      switchContactIcons();
      renderInitials();
      initialsRenderd = false;
    }
  }

  /**
 * Applies the slide-in animation for the desktop view by modifying the classes of the specified elements.
 * @param {HTMLElement} greyBackground - The grey background element.
 * @param {HTMLElement} addTaskPopUp - The add task popup element.
 * @param {HTMLElement} profile - The profile element.
 * @param {HTMLElement} addTaskBtn - The add task button element.
 */
function slideInAnimationDesktop(greyBackground, addTaskPopUp, profile, addTaskBtn) {
    greyBackground.classList.add("d-none");
    addTaskPopUp.classList.remove("slide-out");
    addTaskPopUp.classList.add("slide-in");
    addTaskPopUp.classList.remove("d-none");
    profile.classList.add("d-none");
    addTaskBtn.classList.remove("d-none");
  }
  
  /**
   * Applies the slide-in animation for the responsive view by modifying the classes of the specified elements.
   * @param {HTMLElement} greyBackground - The grey background element.
   * @param {HTMLElement} addTaskPopUp - The add task popup element.
   */
  function slideInAnimationResponsive(greyBackground, addTaskPopUp) {
    greyBackground.classList.remove("d-none");
    addTaskPopUp.classList.remove("slide-out");
    addTaskPopUp.classList.add("slide-in");
    addTaskPopUp.classList.remove("d-none");
  }