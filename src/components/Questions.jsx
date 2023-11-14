import '../App.css'
import React, { useState } from "react";

const Questions = ({ isShowQuestions ,email, question}) => {
    const [scroll, setScroll] = useState(-1); 
    const [selectedOption, setSelectedOption] = useState(null);
    const [checkPoint, setCheckPoint] = useState(null);
    const [checkButton, setCheckButton] = useState(null);

    const handleOptionChange = (event, isTrue) => {
        setSelectedOption(event.target.value);
        setCheckPoint(isTrue)
    };

    const calculatorScroll=()=>{
        if (checkPoint === true) {
            setScroll(scroll=>scroll+1)
        }
        setCheckButton(checkButton=>!checkButton)
    }

    return (
        <div className={`${!isShowQuestions ? "active" : ""} show`}>
            <div className="login-form">
                <div className="form-box solid">
                    { question?.map((v,k) => {
                        return(
                            <div className='questionColume' key={k}>
                                <h3>{v.question}</h3>
                                    {v.answer?.map((value,index) => {
                                        return(
                                            <div className='divChoice'>
                                                <input
                                                    key={index}
                                                    name={v.id}
                                                    type="radio"
                                                    value={value.value}
                                                    checked={selectedOption === value.value}
                                                    onChange={(e) => handleOptionChange(e, value.isTrue)}
                                                />
                                                {value.value}
                                            </div>
                                        )
                                    })}
                                {checkButton && <button className='bntSubAns' onClick={calculatorScroll}>Submit</button>}
                            </div>
                        )
                    })}
                    <div className='questionColume'>
                        <label>Email : {email}</label>
                        <label>Scroll : {scroll}</label>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Questions