document.getElementById("randomDayButton")

.addEventListener("click", function() {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const randomDay = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
    document.getElementById("display").textContent = randomDay;
});
