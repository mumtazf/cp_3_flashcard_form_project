import {useEffect, useState} from "react";

const FormElement = (props) => {

    const answers = ["probability of one variable", "conditional probability in the other direction", "mutually exclusive", "outcome of one event does not tell you anything about the outcome of the other event"]
    const [correctAnswer, setAnswer] = useState('');
    const[input, setInput] = useState('');

    useEffect(() => {
        setAnswer(answers[props.index]);
      }, [props.index]);


    const onCheckAnswer = () => {
        if(correctAnswer!== input){
            setAnswer("wrong");
            console.log("wrong answer");
            console.log(correctAnswer)
            console.log(input)
            console.log("------------")
        } else{
          setAnswer("correct");
          console.log("right");
        }
        console.log("hello from checkanswer");
        console.log(props.index);
        console.log(correctAnswer);
        console.log("what")
        console.log(input);
    }

    const handleChange = (e) => setInput(e.target.value);
   
    return (
        <div class = "formElement">
            <form>
                <input type = "text" onChange={handleChange} id = {correctAnswer}></input>
            </form>
            <button type = "submit" className = "button submit" onClick = {onCheckAnswer}>
                Check Answer!
            </button>
        </div>
    );
}

export default FormElement;