function validateForm() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var dob = document.getElementById("dob").value;

    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Please enter a valid name.");
        return false;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    var genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        alert("Please select your gender.");
        return false;
    }

    if (dob === "") {
        alert("Please select your date of birth.");
        return false;
    }

    var course = document.getElementById("course").value;
    if (course === "") {
        alert("Please select your course.");
        return false;
    }


    openPopup();
    return false;
}

let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");

function openPopup() {
    popup.classList.add("open-popup");
    overlay.classList.add("show-overlay");
}

function closePopup() {
    popup.classList.remove("open-popup");
    overlay.classList.remove("show-overlay");
    document.getElementById("registrationForm").reset();
}
