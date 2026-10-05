"use strict";

function calculateAge(birthDateISO) {
    const today = new Date();
    const birthDate = new Date(birthDateISO);

    if (Number.isNaN(birthDate.getTime())) {
        throw new Error("Invalid birth date format");
    }

    let age = today.getFullYear() - birthDate.getFullYear();

    const birthdayThisYear = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (today < birthdayThisYear) {
        age--;
    }

    return age;
}

function calculateYearsLeft(currentAge, maxAge = 100) {
    return Math.max(0, maxAge - currentAge);
}

document.addEventListener("DOMContentLoaded", () => {
    const birthDate = "1997-02-13";
    const maxAge = 100;

    const ageElement = document.getElementById("age");
    const yearsLeftElement = document.getElementById("years-left");

    if (!ageElement || !yearsLeftElement) {
        return;
    }

    const age = calculateAge(birthDate);
    const yearsLeft = calculateYearsLeft(age, maxAge);

    ageElement.textContent = String(age);
    yearsLeftElement.textContent = String(yearsLeft);
});
