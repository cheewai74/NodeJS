// process.stdout.write("Hello world \n \n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language"
];

const answers =[];

function ask(i=0){
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();

process.stdin.on("data", function (data){
    // process.stdout.write(data.toString().trim());
    answers.push(data.toString().trim());
    if ( answers.length < questions.length){
        ask(answers.length);
    }
    else{
        process.exit();
    }
});

// ask(answers.length);

process.on("exit", function(){
    process.stdout.write("\n\n\n\n");
    process.stdout.write(
        `Go ${answers[1]} ${answers[0]}, you can finish writing ${answers[2]}} later`
    );
})