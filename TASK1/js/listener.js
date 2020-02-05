document.getElementById("task-1").addEventListener("click", () => {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("task-1-page").style.display = "block";
    document.getElementById("task-2-page").style.display = "none";
    document.getElementById("task-3-page").style.display = "none";
    document.getElementById("task-4-page").style.display = "none";
});
document.getElementById("task-2").addEventListener("click", () => {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("task-1-page").style.display = "none";
    document.getElementById("task-2-page").style.display = "block";
    document.getElementById("task-3-page").style.display = "none";
    document.getElementById("task-4-page").style.display = "none";
});
document.getElementById("task-3").addEventListener("click", () => {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("task-1-page").style.display = "none";
    document.getElementById("task-2-page").style.display = "none";
    document.getElementById("task-3-page").style.display = "block";
    document.getElementById("task-4-page").style.display = "none";
});
document.getElementById("task-4").addEventListener("click", () => {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("task-1-page").style.display = "none";
    document.getElementById("task-2-page").style.display = "none";
    document.getElementById("task-3-page").style.display = "none";
    document.getElementById("task-4-page").style.display = "block";
});
document.getElementById("home").addEventListener("click", () => {
    document.getElementById("home-page").style.display = "block";
    document.getElementById("task-1-page").style.display = "none";
    document.getElementById("task-2-page").style.display = "none";
    document.getElementById("task-3-page").style.display = "none";
    document.getElementById("task-4-page").style.display = "none";
});

