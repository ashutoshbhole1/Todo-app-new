// radhe radhe
const title = document.getElementById("task-title");
const desc = document.getElementById("task-desc");
const addTask = document.querySelector(".add-btn");

let taskHeading = document.querySelector(".ttc-heading");
let taskDesc = document.querySelector(".ttc-desc");

let taskToComplete = document.querySelector(".tasks-to-complete")
let finishedTasks = document.querySelector(".finished-tasks")
let tick = document.querySelectorAll(".task-done");
let del = document.querySelectorAll(".delete-task");
let i = 1;

// GPT CODE
// function saveTasksToLocalStorage() {
//     const tasks = [];
//     document.querySelectorAll(".task").forEach(task => {
//         tasks.push({
//             title: task.querySelector(".ttc-heading").textContent,
//             desc: task.querySelector(".ttc-desc").textContent,
//             isFinished: task.classList.contains("finish")
//         });
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }


// title.addEventListener("click", () => {

//     const sound = new Audio('/Assets/test.mp3');
//     // sound.play();
//     sound.autoplay = true;
//     sound.loop = false;

//     sound.play().catch(err => {
//         console.log("Autoplay failed, user interaction needed:", err);
//     });
// })

// Add task on clicking
addTask.addEventListener("click", () => {
    if (title.value.trim() === "" && desc.value.trim() === "") {
        // const sound = new Audio('/Assets/warn alarm on empty field.mp3');
        // // sound.play();
        // sound.autoplay = true;
        // sound.loop = false;
        // sound.volume = .6;

        // sound.play().catch(err => {
        //     console.log("Autoplay failed, user interaction needed:", err);
        // });

        // setTimeout(() => {
        //     sound.pause();
        // }, 1800);
        
        title.value = "";
        desc.value = "";
        
        alert("Pls add some Task to proceed...");

    }

    else {

        let task = document.createElement("div");
        taskToComplete.appendChild(task); //creates particular task 

        task.id = `task-${i}`;

        task.className = "task";

        task.innerHTML =
            `
         <div class="task-text">
                        <h3 class="ttc-heading">${title.value}</h3>
                        <p class="ttc-desc">${desc.value}</p>
                    </div>

                    <div class="task-action">
                        <!-- complete / DONE -->

                        <button type="button" class="task-done"><i class="ri-check-line"></i></button>


                        <!-- Delete / Bin Task -->

                        <button type="button" class="delete-task bin-button">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 39 7" class="bin-top">
                                <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                                <line stroke-width="3" stroke="white" y2="1.5" x2="26.0357" y1="1.5" x1="12"></line>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 39" class="bin-bottom">
                                <mask fill="white" id="path-1-inside-1_8_19">
                                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z">
                                    </path>
                                </mask>
                                <path mask="url(#path-1-inside-1_8_19)" fill="white"
                                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z">
                                </path>
                                <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                                <path stroke-width="4" stroke="white" d="M21 6V29"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 89 80" class="garbage">
                                <path fill="white"
                                    d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z">
                                </path>
                            </svg>

                        </button>


                    </div>
    `


        // taskHeading.textContent = title.value;
        // taskDesc.textContent = desc.value;

        title.value = "";
        desc.value = "";
        i++;


        // saveTasksToLocalStorage();
    }


})


function mic(){
    const micBtn = document.querySelector('.mic-btn');
const taskTitleInput = document.getElementById('task-title');
const taskDescInput = document.getElementById('task-desc');

// Initialize speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert('Sorry, your browser does not support Speech Recognition.');
} else {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;  // stops after one phrase
  recognition.lang = 'en-US';
  recognition.interimResults = false;  // show live transcription (false for final result)
  
  let currentField = null;

  // Track which input field is focused (input or textarea)
  taskTitleInput.addEventListener('focus', () => {
    currentField = 'task-title';
  });
  
  taskDescInput.addEventListener('focus', () => {
    currentField = 'task-desc';
  });

  // Start speech recognition when the mic button is clicked
  micBtn.addEventListener('click', () => {
    if (!currentField) {
      alert('Please focus on the input or textarea field first.');
      return;
    }
    micBtn.classList.add('listening');
    recognition.start();
  });

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    if (currentField === 'task-title') {
      taskTitleInput.value = transcript;
    } else if (currentField === 'task-desc') {
      taskDescInput.value = transcript;
    }
  };

  recognition.onend = function() {
    micBtn.classList.remove('listening');
  };

  recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
    micBtn.classList.remove('listening');
  };
}

}

mic();
// Popup for delete

function popup() {

    let delPop = document.querySelector(".delete-popup-bg");
    let yesBtn = document.querySelector(".yes-btn");
    let noBtn = document.querySelector(".no-btn");
    let taskToDelete = null; // Keeps track of which task to delete

    let taskElem = document.querySelectorAll(".task");



    // Active tasks
    taskToComplete.addEventListener("click", (e) => {

        if (e.target.closest(".task-done")) {
            // alert("task done");
            const tElem = e.target.closest(".task");


            if (tElem) {
                tElem.classList.add("finish");
                finishedTasks.appendChild(tElem);


                const tickBtn = tElem.querySelector(".task-done");
                if (tickBtn) {
                    tickBtn.style.opacity = 0;
                    tickBtn.remove()
                }

                const taskAction = document.querySelector(".task-action");
                if (taskAction) {

                    taskAction.classList.add("finish-action");
                    taskAction.classList.remove("task-action");
                }
                // saveTasksToLocalStorage();
            }
        }

        else if (e.target.closest(".delete-task")) {
            taskToDelete = e.target.closest(".task");
            delPop.style.display = "flex";
        }

        // else if (e.target.closest(".task")) {
        //     const tElem = e.target.closest(".task");  //Provides The Id 
        //     console.log(tElem.id);
        // }

    });

    // Finished tasks
    finishedTasks.addEventListener("click", (e) => {
        if (e.target.closest(".delete-task")) {
            // check here the finish instead of task
            taskToDelete = e.target.closest(".finish");
            delPop.style.display = "flex";
        }
    });

    // Only ONE set of listeners
    yesBtn.addEventListener("click", () => {
        if (taskToDelete) {
            taskToDelete.remove();
            // saveTasksToLocalStorage(); //task save
            taskToDelete = null;

            
        }
        delPop.style.display = "none";
    });

    noBtn.addEventListener("click", () => {
        taskToDelete = null;
        delPop.style.display = "none";
    });
}

popup();


// GPT CODE
// function loadTasksFromLocalStorage() {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     savedTasks.forEach((taskObj, index) => {
//         let task = document.createElement("div");
//         task.className = "task";
//         task.id = `task-${index + 1}`;

//         if (taskObj.isFinished) {
//             task.classList.add("finish");
//         }

//         task.innerHTML = `
//         <div class="task-text">
//             <h3 class="ttc-heading">${taskObj.title}</h3>
//             <p class="ttc-desc">${taskObj.desc}</p>
//         </div>
//         <div class="${taskObj.isFinished ? 'finish-action' : 'task-action'}">
//             ${taskObj.isFinished ? '' : `
//             <button type="button" class="task-done"><i class="ri-check-line"></i></button>`}
//             <button type="button" class="delete-task bin-button">
//                 <!-- your bin SVGs go here -->
//                 🗑️
//             </button>
//         </div>
//         `;

//         if (taskObj.isFinished) {
//             finishedTasks.appendChild(task);
//         } else {
//             taskToComplete.appendChild(task);
//         }
//     });

//     i = savedTasks.length + 1;
// }

// loadTasksFromLocalStorage();












// ctrl enter to add task 
[title, desc].forEach(input => {
    input.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "Enter") {
            addTask.click();
        }
    })
})



