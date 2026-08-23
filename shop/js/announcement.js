const closeButton = document.querySelector(".announcement__close");
const announcement = document.querySelector(".announcement");

console.log(closeButton);
console.log(announcement);

if (closeButton && announcement) {
    closeButton.addEventListener("click", () => {
        announcement.remove();
    });
}