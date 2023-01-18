let tasks = [];
let contacts = [];
let searchTasks = [];
let contactColors = [];
let progress = ['TODO', 'inProgress', 'feedback', 'done'];
let currentDraggedElement;
let names = [];

async function init() {
    await downloadFromServer();
    tasks = jsonFromServer['tasks'];
    contacts = jsonFromServer['contacts'];
    renderCards();
}


function renderCards() {
    clearSections();
    for (let i = 0; i < tasks.length; i++) {
        let element = tasks[i];
        let section = tasks[i]['progress'];
        if (section == "TODO" || section == "inProgress" || section == "feedback" || section == "done")
            document.getElementById(section).innerHTML += renderCardsHTML(element, i);
        changeCategoryColor(i);
        getInitials(i);
    }
}


function clearSections() {
    document.getElementById('TODO').innerHTML = '';
    document.getElementById('inProgress').innerHTML = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('done').innerHTML = '';
}


//get the names of the CoWorkers and get the Initials of them
function getInitials(i) {
    let initialsDiv = document.getElementById(`initials${i}`);
    let names = tasks[i]['assigned_to'];
    let initials = names.map(name => name.split(' ').map(word => word[0]).join(''));
    renderVisibleInitials(initials, initialsDiv, i);
    renderHiddenInitials(names, initialsDiv);
}


function initialColors(i, s) {
    let myNames = tasks[i]['assigned_to'];
    let lastName;
    for (let f = 0; f < myNames.length; f++) {
        let fullName = tasks[i]['assigned_to'][f];
        let split = fullName.split(' ');
        lastName = split[1];
        for (let c = 0; c < contacts.length; c++) {
            let lastNameContacts = contacts[c]['lastname'];
            if (lastName == lastNameContacts) {
                let bgColor = contacts[c]['color'];
                document.getElementById(`inits${i}-${s}`).style.backgroundColor = bgColor;
            }
        }
    }
}


// render the Initials of the first three names to have the task
function renderVisibleInitials(initials, initialsDiv, i) {
    let divsCreated = 0;
    for (let s = 0; s < initials.length; s++) {
        if (divsCreated === 3) {
            break;
        }
        divsCreated++;
        const oneInitial = initials[s];
        initialsDiv.innerHTML += visibleInitialsHtml(oneInitial, i, s);
        initialColors(i, s);
    }
}


//if theres more than 3 CoWO in one Task, then display a div with the number of the remaining Workers
function renderHiddenInitials(names, initialsDiv) {
    if (names.length > 3) {
        // Create a new div element into the 'initialsDiv' to display the number of remaining workers
        let remainingWorkers = document.createElement("div");
        remainingWorkers.innerHTML = `+${names.length - 3}`;
        remainingWorkers.classList.add("remaining-workers");
        initialsDiv.appendChild(remainingWorkers);
    }
}


function allowDrop(ev) {
    ev.preventDefault();
}


function startDragging(id) {
    currentDraggedElement = id;
}


function moveTo(progress) {
    tasks[currentDraggedElement]['progress'] = progress;
    renderCards();
}


function renderCardsHTML(element, i) {
    return `
    <div class="to-do-cards" draggable="true" ondragstart="startDragging(${i})">
         <div class="category" id="category${i}">
             ${element['category']}
         </div>
   
         <div class="title-descr">
             <span class="to-do-title" id="toDoTitle">
                 <b>${element['title']}</b>
             </span>
             <span class="description">
                 ${element['description']}
             </span>
         </div> 
         <div class="progress-div">
             <div class="progress-bar"></div>
             <div><span class="progress-info"> 1/2 Done</span></div>
         </div>

         <div id="initials${i}" class="initials-div">
         </div>
     </div>
    `;
}


function visibleInitialsHtml(oneInitial, i, s) {
    return `
    <div class="initials" id="inits${i}-${s}">
     ${oneInitial}
    </div>
    `;
}


function displayOverlay() {
    document.getElementById('overlayBg').classList.remove('d-none');
    document.getElementById('popUp').classList.remove('d-none');
}


function removeOverlay() {
    document.getElementById('overlayBg').classList.add('d-none');
    document.getElementById('popUp').classList.add('d-none')
}


function highlight(id) {
    document.getElementById(id).classList.add('dragarea-highlight');
}


function removeHighlight(id) {
    document.getElementById(id).classList.remove('dragarea-highlight');
}


function changeCategoryColor(i) {
    let category = tasks[i]['category']
    document.getElementById(`category${i}`).style.backgroundColor = setColors(category);
}


function setColors(category) {
    let categorysAndColors = {
        design: "rgb(239, 132, 41)",
        Sales: "rgb(236, 126, 250)",
        Backoffice: "rgb(100, 210, 193)",
        Marketing: "rgb(18, 58, 248)",
        Media: "rgb(247, 202, 57)",
    };
    return (categorysAndColors[category]);
}


function searchTask() {
    let search = document.getElementById('searchInput').value;
    search = search.toLowerCase().trim();

    for (let i = 0; i < tasks.length; i++) {
        searchCriteria(search, i);
    }
    renderSearchedTask();
}

function searchCriteria(search, i) {
    if (tasks[i]['title'].toLowerCase().includes(search)) {
        pushSearchedTask(search, i);
    }
}


function pushSearchedTask(search, i) {
    if (getIndexFromArray(search) == -1) searchTasks.push(i);
}


function getIndexFromArray(array, value) {
    let index = array.indexOf(value);
    return index;
}


function renderSearchedTask() {
    clearSections();
    for (let i = 0; i < searchTasks.length; i++) {
        let element = tasks[searchTasks[i]];
        let section = tasks[searchTasks[i]['progress']];
        if (section == "TODO" || section == "inProgress" || section == "feedback" || section == "done")
            document.getElementById(section).innerHTML += renderCardsHTML(element, i);
    }
}








// function searchTask() {
//     let search = document.getElementById('searchInput').value;
//     search = search.toLowerCase().trim();
//     let task;

//     if (search == 0) {
//         renderCards();
//     } else {
//         for (let t = 0; t < progress.length; t++) {
//             task = progress[t];

//             for (let i = 0; i < tasks.length; i++) {
//                 const element = tasks[i];
//                 if (tasks[i]['title'].toLowerCase().includes(search)) {
//                     document.getElementById(task).innerHTML = renderCardsHTML(element, i);
//                 }
//             }
//         }
//     }
// }