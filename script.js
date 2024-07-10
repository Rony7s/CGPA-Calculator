//Grade with value for BDU
const gradeValues = {
    "A+": 4.00,
    "A" : 3.75,
    "A-": 3.50,
    "B+": 3.25,
    "B" : 3.00,
    "B-": 2.75,
    "C+": 2.50,
    "C" : 2.25, 
    "D" : 2.00,
    "F" : 0.0
};

//Credit Hour 
const creditsValues = {
    "Theory - 3.0": 3.0,
    "Lab - 1.5" : 1.5,
    "Lab - 1.0": 1.0 
};

let semesterCount = 0;
let subjectsCount = {};

function addSemester() {
    semesterCount++;
    subjectsCount[semesterCount] = 0;

    const semestersContainer = document.getElementById('semesters-container');
    const semesterDiv = document.createElement('div');
    semesterDiv.classList.add('semester');
    semesterDiv.setAttribute('id', `semester-${semesterCount}`);
    semesterDiv.innerHTML = `
        <h2>Semester ${semesterCount}</h2>
        <div id="subjects-container-${semesterCount}"></div>
        <button onclick="addSubject(${semesterCount})">ADD SUBJECT</button>
        <h3>Semester ${semesterCount} GPA: <span id="gpa-${semesterCount}">0.00</span></h3>
    `;
    semestersContainer.appendChild(semesterDiv);
}

function addSubject(semester) {
    subjectsCount[semester]++;
    const subjectsContainer = document.getElementById(`subjects-container-${semester}`);
    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subject');
    subjectDiv.setAttribute('id', `semester-${semester}-subject-${subjectsCount[semester]}`);
    subjectDiv.innerHTML = `
        <input type="text" placeholder="Subject Name">
        <select onchange="calculateGPA(${semester})">
            ${Object.keys(gradeValues).map(grade => `<option value="${gradeValues[grade]}">${grade}</option>`).join('')}
        </select>
        <select onchange="calculateGPA(${semester})">
        ${Object.keys(creditsValues).map(credits => `<option value="${creditsValues[credits]}">${credits}</option>`).join('')}
        </select>
    `;
    subjectsContainer.appendChild(subjectDiv);
}

function calculateGPA(semester) {
    const subjectsContainer = document.getElementById(`subjects-container-${semester}`);
    const subjects = subjectsContainer.getElementsByClassName('subject');
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let subject of subjects) {
        const inputs = subject.getElementsByTagName('select');
        const grade = parseFloat(inputs[0].value) || 0;
        const credits = parseFloat(inputs[1].value) || 0;
        totalGradePoints += grade * credits;
        totalCredits += credits;
    }

    const gpa = totalCredits === 0 ? 0 : totalGradePoints / totalCredits;
    document.getElementById(`gpa-${semester}`).innerText = gpa.toFixed(2);

    calculateCGPA();
}

function calculateCGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 1; i <= semesterCount; i++) {
        const subjectsContainer = document.getElementById(`subjects-container-${i}`);
        const subjects = subjectsContainer.getElementsByClassName('subject');
        
        for (let subject of subjects) {
            const inputs = subject.getElementsByTagName('select');
            const grade = parseFloat(inputs[0].value) || 0;
            const credits = parseFloat(inputs[1].value) || 0;
            totalGradePoints += grade * credits;
            totalCredits += credits;
        }
    }

    const cgpa = totalCredits === 0 ? 0 : totalGradePoints / totalCredits;
    document.getElementById('cgpa').innerText = cgpa.toFixed(2);
}
