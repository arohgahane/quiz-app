const questions =[
    {
        'que': 'which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que': 'what does CSS stands for?',
        'a':'HyperText Markup Lang. ',
        'b':'Cascading Style Sheet',
        'c':'Jason Object Notation',
        'd':'All above',
        'correct':'b'
    },
    {
        'que': 'which year was JavaScript launched?',
        'a':'1996 ',
        'b':'1995',
        'c':'1994',
        'd':'None of the above',
        'correct':'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;


const quesbox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options')

const loadQuestion = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    // console.log(data);
    quesbox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}


const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer()

    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = ()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                // console.log("yes");
                answer = input.value;
            }
            // else{
            //     console.log("no");
            // }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById('box').innerHTML = `
        <h3>Thank you for playing the quiz.</h3>
        <h2>${right} / ${total} are correct</h2>
    `
}

// initial call
loadQuestion();