var students = [["David", 80],["Vinoth", 77],["Divya", 88],["Ishitha", 95],["Thomas", 68]];
var sum=0 , avg;
for (var i = 0; i<=students.length-1; i++){
    sum = sum + students[i][1];
}
avg = sum/students.length;
if (avg < 60){
    alert("Grade: F");
}else if (avg >= 60 && avg < 70){
    alert("Grade: D");
}else if (avg >= 70 && avg < 80){
    alert("Grade: C");
}else if (avg >= 80 && avg < 90){
    alert("Grade: B");
}else{
    alert("Grade: A");
}