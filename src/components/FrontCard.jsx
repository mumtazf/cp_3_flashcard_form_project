import React from "react"
import { useEffect } from "react";

const FrontCard = (props) => {


    //Implementing the extra feature where I have the difficulty level and image displayed :) 
    const questionExtra = new Map();
    questionExtra.set(0,{question: "What is marginal probability?", difficulty: "easy", color: "green"})
    questionExtra.set(1,{question: "What is Bayes' Rule", difficulty: "easy", color: "green"});
    questionExtra.set(2,{question: "What are disjoint events? How can you use the additional rule on disjoint events?", difficulty: "medium", color: "yellow"});
    questionExtra.set(3,{question: "What are independent events? Can disjoint events be independent?", difficulty: "medium", color: "yellow"});
    questionExtra.set(4,{question: "What is conditional probability?", difficulty: "easy", color: "green"});
    questionExtra.set(5,{question: "Define marginal probability", difficulty: "easy", color: "green"});
    questionExtra.set(6,{question: "How does sampling without replacement affect the independence of an event?", difficulty: "hard", color: "red"});
    questionExtra.set(7,{question: "Give the formula for Z-score", difficulty: "easy", color: "green"});
    questionExtra.set(8,{question: "State the important rule about datapoints in a normal distributuion",  difficulty: "easy", color: "green"});
    questionExtra.set(9,{question: "Define Bernoulli random variables. Would you say that each outcome of rolling a die would be Bernoulli trial?",  difficulty: "hard", color: "red"});

    //Feature to change color and image :( not working
    // const onSetColor = props.onSetColor || (() => {});
    const changeColor = questionExtra.get(props.index)['color'];
    console.log(changeColor);

    useEffect(() => {
        props.onColorChange(changeColor);
      }, [changeColor, props]);

return(
    <div>{questionExtra.get(props.index)['question']}</div>
)

}

export default FrontCard;