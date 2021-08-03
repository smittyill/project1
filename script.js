




let answers = [
    { question: 'A large Ag MFG in the Quad Cities', answer: 'who is John Deere' },
 { question: 'Who is CEO of John Deere', answer: 'who is John May' },
 { question: 'Who is the first president of the USA', answer: 'who is George Washington' },
 { question: 'Who is governor of Iowa', answer: 'who is Reynolds' },
  { question: 'Where is John Deere HQ located', answer: 'where is Moline' }

]
let newquestion = document.getElementById('question');

//items.push(question); 

newquestion.placeholder = answers[0].question;
console.log(newquestion);

document.getElementById('submit').addEventListener("click", function () {
   // let question = ["what you want to do", "2nd question", "3rd question"]
    let newquestion = document.getElementById('question').value;
    let answer = document.getElementById("answer").value;
    
    console.log(answers[index].answer);
    console.log(answer);
    if (answer === answers[index].answer) {
        //do something
        document.getElementById("response").innerText = "Correct!";
    }
    else {
        //do something else
        document.getElementById("response").innerText = "Sorry wrong answer!";
    }

}
)
let index=0;

document.getElementById("next_question").addEventListener('click', function () {
    var text = document.getElementById('question');
    console.log("hello world");
    index++;
    console.log(answers[index].question);
    document.getElementById("answer").value = "";
    document.getElementById("response").innerText = "";
    newquestion.placeholder = answers[index].question;
})