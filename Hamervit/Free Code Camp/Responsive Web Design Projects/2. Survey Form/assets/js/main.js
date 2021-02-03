const btnBasicInfo = document.getElementById('btn-BasicInfo');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const prevRoleFeatures = document.getElementById('prev-btn-RoleFeatures');
const basicInfo = document.querySelector('.basic-info');
const roleFeatures = document.querySelector('.role-features');
const roleProgression = document.querySelector('#roleFeatures');
const nextRoleFeatures = document.getElementById('btn-RoleFeatures');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const dropdown = document.getElementById('dropdown');
const mostLike = document.getElementById('mostLike');
const recommendationProgress = document.getElementById('recommendations');
const recommendations = document.querySelector('.recommendations');
const prevRecommendations = document.getElementById('prev-btn-Recommendations');

btnBasicInfo.addEventListener('click', () => {
    if (validEmailAndName()) {
        hideInputs();
    } else {
        alert('Please, type a valid email or name');
    }
});

prevRoleFeatures.addEventListener('click', () => {
    hideInputs();
});

nextRoleFeatures.addEventListener('click', () => {
    if (validSelectsAndRadio()) {
        hideSelects();
    } else {
        alert('Please, complete the form');
    }
});

prevRecommendations.addEventListener('click', () => {
    hideSelects();
});

function validEmailAndName() {
    return inputName.value.match(/[a-z]+/gi) !== null && inputEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) !== null;
}

function hideInputs() {
    basicInfo.classList.toggle('d-none');
    roleFeatures.classList.toggle('d-none');
    roleProgression.classList.toggle('active');
}

function validSelectsAndRadio() {
    return Array.from(radioButtons).filter(x => x.checked).length > 0 && dropdown.value != "" && mostLike.value != "";
}

function hideSelects() {
    roleFeatures.classList.toggle('d-none');
    recommendations.classList.toggle('d-none');
    recommendationProgress.classList.toggle('active');
}