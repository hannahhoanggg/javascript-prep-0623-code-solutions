const age = 28;

function isAdult(age) {
    if (age < 18) {
        return false;
    } else {
        return true;
    }
};

console.log('isAdult:',isAdult(age));

const student1Score = 47;

function didStudentPass(score) {
    if (score >= 70) {
        return true;
    } else {
        return false;
    }
};

console.log('didStudentPass', didStudentPass(student1Score));

const student2Score = 58

function gradeCalculator(score) {
    if (score < 60) {
        return "F";
    } else if (score < 70) {
        return "D";
    } else if (score < 80) {
        return "C";
    } else if (score < 90) {
        return "B"; 
    } else if (score < 100) {
        return "A";
    } else {
        return "A++"
    }
};

console.log('gradeCalculator:', gradeCalculator(student2Score));

const season = 'summer'

function seasonManager(season) {
    if (season === 'summer') {
        return "it's hot today"; 
    } else if (season === 'spring') {
        return "the flowers are blooming"; 
    } else if (season === 'autumn') {
        return "the leaves are changing colors";
    } else if (season === 'winter') {
        return "it's cold today"; 
    } else {
        return "please enter a valid season";
    }
};

console.log("seasonManager:", seasonManager(season)); 

const dayOfTheWeek = "monday"

function dayDetector(dayOfTheWeek) { 
    if (dayOfTheWeek === "saturday" || dayOfTheWeek === "sunday") {
        return "have a good weekend!";
    } else {
        return "It's a weekday!";
    }
};

console.log("dayDetector:", dayDetector(dayOfTheWeek));