// let tabLinks = document.querySelectorAll('.tab-links');
// let tabContents = document.querySelectorAll('.tab-contents');

// let opentab = (tabname) => {
//     // Remove "active-link" class from all tab links
//     for (let tabLink of tabLinks) {
//         tabLink.classList.remove("active-link");
//     }

//     // Remove "active-tab" class from all tab contents
//     for (let tabContent of tabContents) {
//         tabContent.classList.remove("active-tab");
//     }

//     // Show content of the selected tab
//     event.currentTarget.classList.add('active-link')
//     // document.getElementById(tabname).classList.add("active-tab");
// }
// tabLinks.forEach(tabLink => {
//     tabLink.addEventListener('click', () => {
//         opentab(tabLink.getAttribute('data-tab'));
//     });
// });
// // skills
// document.querySelector('#skills').addEventListener('click', () =>{
//     if(document.querySelector('#skills').style.display = "none"){
//         document.querySelector('#skills').style.display = "block"
//     }
// else{
//     document.querySelector('#skills').style.display = "none" 
// }})
// // experience
// document.querySelector('#Experience').addEventListener('click', () =>{
//     if(document.querySelector('#Experience').style.display = "none"){
//         document.querySelector('#Experience').style.display = "block"
//     }
// else{
//     document.querySelector('#Experience').style.display = "none" 
// }})
// // education
// document.querySelector('#Education').addEventListener('click', () =>{
//     if(document.querySelector('#Education').style.display = "none"){
//         document.querySelector('#Education').style.display = "block"
//     }
// else{
//     document.querySelector('#Education').style.display = "none" 
// }})

function showTab(tabId) {
    // Get all tab content elements
    var tabContents = document.getElementsByClassName('tab-contents');

    // Loop through each tab content element
    for (var i = 0; i < tabContents.length; i++) {
        // Hide all tab content elements
        tabContents[i].style.display = 'none';
    }

    // Get the tab content element with the specified ID
    var tabContent = document.getElementById(tabId);

    // Show the tab content element
    tabContent.style.display = 'block';

    // Remove 'active-link' class from all tab links
    var tabLinks = document.getElementsByClassName('tab-links');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active-link');
    }

    // Add 'active-link' class to the clicked tab link
    event.target.classList.add('active-link');
}

// Nav Menu Functions
let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}