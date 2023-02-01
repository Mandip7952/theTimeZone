// Toggling the side menu 
const mobile_header = document.querySelector(".mobile-header");

function toggleEffect() {
    mobile_header.classList.toggle("active");

}
// End


// modal toggle
const modal = document.querySelector(".modal");
const modal_btn = document.querySelector(".modal-icon");
modal_btn.addEventListener("click", modaltoggle);

function modaltoggle() {
    modal.style.display = "none";
}
// mobile modal toggle 
const mobile_modal = document.querySelector(".mobile-modal");
const close_icon = document.querySelector(".close-icon");


close_icon.addEventListener("click", CloseMobileModal);

function CloseMobileModal() {
    mobile_modal.style.display = "none";

}
// Image src change while hover by using onmouseover and out
function hover(element) {
    element.setAttribute('src', "/images/trending-2-hover.png");
}

function unhover(element) {
    element.setAttribute('src', '/images/Trending-2.png');
}
//

// discount card tabs switching 
const women_tab = document.getElementById("women-tab");
const men_tab = document.getElementById("men-tab")
const women_container = document.querySelector(".women-container");
const mens_container = document.querySelector(".mens-container");

women_tab.addEventListener("click", womenswitchtab);

function womenswitchtab() {
    women_container.style.display = "block";
    mens_container.style.display = "none";

}

men_tab.addEventListener("click", menswitchtab);

function menswitchtab() {
    women_container.style.display = "none";
    mens_container.style.display = "block";

}

// active view toggle 




// const quick_btn = document.querySelector(".quick-view-toggle");
// const quick_toggle = document.querySelector(".active-quick");

// const toggleQuickView = () => {
//     // alert("Plz Subscribe ");
//     quick_toggle.classList.toggle("active-quick-view");
// };

// quick_btn.addEventListener("click", () => toggleQuickView());


function ToggleQuickview() {
    const abc = document.querySelector(".active-quick");
    // abc.classList.add("active-quick-view");
    abc.classList.toggle("active-quick-view");




}

const quick_close = document.getElementById("quick-close");
quick_close.addEventListener("click", CloseQuickView);

function CloseQuickView() {
    document.querySelector(".active-quick").classList.remove("active-quick-view");

}