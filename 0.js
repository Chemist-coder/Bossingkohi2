document.getElementById("startButton").addEventListener("click", function () {
    this.remove(); // Remove the button immediately after it's clicked
    document.body.classList.add("active");
    document.getElementById("main").classList.add("hidden"); // Hide the main div
    document.getElementById("content").classList.remove("hidden"); // Show the new content
});
document.getElementById("yesButton").addEventListener("click", function () {
    showImage("https://i.pinimg.com/736x/57/3d/33/573d337b43dd1fca1133a65a5d0ae0cf.jpg"); // Replace with your "Oo" image URL
});
document.getElementById("noButton").addEventListener("click", function () {
    showImage("https://i.pinimg.com/474x/4d/13/13/4d13135ef1d77ed91ce80334ceab6ef5.jpg"); // Replace with your "Hindi" image URL
});
function showImage(imageUrl) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<img src="${imageUrl}" alt="Result Image">`;
    resultDiv.classList.remove("hidden");
}


