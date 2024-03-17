const Student = require("./model/Student");
const Class = require("./model/Class");
const PresencialClass = require("./model/PresencialClass");
const http = require('http');

let student = new Student('Maurício Júnior', 'mauriciojunior', '2525321');
let classStudent = new Class('Maurício Júnior', 'mauriciojunior', '2525321', 'AS64B', '9');
let presencialClass = new PresencialClass('Maurício Júnior', 'mauriciojunior', '2525321', 'AS64B', '9', '85');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json'});
    res.end(JSON.stringify({
        "Student": student,
        "Class": classStudent,
        "Presencial Class": presencialClass,
        "Approved or Disapproved": classStudent.approved(),
        "Frequence": presencialClass.approved()
    }));
}).listen(8080, ()=> {
    console.log("Server running on port http://localhost:8080");
});
