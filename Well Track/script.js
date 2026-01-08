function saveData() {
    let mood = document.getElementById("mood").value;
    let sleep = document.getElementById("sleep").value;
    let water = document.getElementById("water").value;
    let exercise = document.getElementById("exercise").value;
    let habit = document.getElementById("habit").checked;

    if (mood === "" || sleep === "" || water === "" || exercise === "") {
        alert("Please fill all fields");
        return;
    }

    let summary = `
        😊 Mood: ${mood}/5 <br>
        😴 Sleep: ${sleep} hours <br>
        💧 Water: ${water} glasses <br>
        🏃 Exercise: ${exercise} minutes <br>
        ✅ Habit Completed: ${habit ? "Yes" : "No"}
    `;

    document.getElementById("output").innerHTML = summary;

    alert("Wellness data saved successfully!");
}
