# CGPA Calculator 

This is a simple CGPA (Cumulative Grade Point Average) calculator designed for university students. It allows you to calculate your GPA for each semester and then compute your overall CGPA.

## <a href="https://rony7s.github.io/CGPA-Calculator">Live Link</a>

## Features
- Add subjects for each semester
- Calculate GPA for individual semesters
- Compute overall CGPA
- Easy-to-use web interface

## Example

### Semester 1
- Subject Name: [Input Subject Name]
- Grade: A
- Credits: Lab - 1.5

- Subject Name: [Input Subject Name]
- Grade: A-
- Credits: Lab - 1.5

**Semester 1 GPA**: 3.63

### Semester 2
- Subject Name: [Input Subject Name]
- Grade: A
- Credits: Lab - 1.5

**Semester 2 GPA**: 3.75

### Overall CGPA
- Your CGPA: 3.67

Developed by Rony Ahmmed, EdTech-BDU. [Facebook](https://www.facebook.com/edtech4)

## Usage
1. Clone the repository:
    ```sh
    git clone https://github.com/rony7s/cgpa-calculator.git
    ```
2. Navigate to the directory:
    ```sh
    cd cgpa-calculator
    ```
3. Open `index.html` in your web browser.

## Sample Script

```javascript
// Grade with value for BDU
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

// Credit Hour 
const creditsValues = {
    "Theory - 3.0": 3.0,
    "Lab - 1.5" : 1.5,
    "Lab - 1.0": 1.0 
};
