class Student {
    constructor(name, rollNo, studentClass, section, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.studentClass = studentClass;
        this.section = section;
        this.marks = marks;

        this.printTop3Subjects = function () {
            const subjects = Object.keys(this.marks);
            const sortedSubjects = subjects.sort((a, b) => this.marks[b] - this.marks[a]);
            const top3Subjects = sortedSubjects.slice(0, 3);

            console.log("Top 3 Subjects:");
            top3Subjects.forEach(subject => {
                console.log(`${subject} - ${this.marks[subject]}`);
            });
        };

        this.printReportCard = function () {
            console.log("+--------------------+");
            console.log("|     REPORT CARD    |");
            console.log("+--------------------+");
            console.log(`| Name     - ${this.name}`);
            console.log(`| Roll no. - ${this.rollNo}`);
            console.log(`| Class    - ${this.studentClass}`);
            console.log(`| Section  - ${this.section}`);

            Object.keys(this.marks).forEach(subject => {
                console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)}  - ${this.marks[subject]}`);
            });

            const totalMarks = Object.values(this.marks).reduce((total, mark) => total + mark, 0);
            const percentage = (totalMarks / (Object.keys(this.marks).length * 100)) * 100;
            console.log(`| Percentage - ${percentage.toFixed(1)}%`);
            console.log("+--------------------+");
        };
    }
}

const studentDetails = new Student("Huzaifa", 16, "X", "A", {
    science: 72,
    maths: 75,
    socialScience: 79,
    english: 80,
    hindi: 67
});

studentDetails.printTop3Subjects();
studentDetails.printReportCard();
