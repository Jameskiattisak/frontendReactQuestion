import '../App.css'
import Questions from './Questions';
import React, { useState } from 'react';
import axios from 'axios';

function EmailValidate() {
    const [email, setEmail] = useState('');
    const [questions, setQuestions] = useState(null);
    const [isShowQuestions, setIsShowQuestions] = useState(false);

    const validateEmail = () => {
        setIsShowQuestions(false)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const checkEmail = emailRegex.test(email);
        if (checkEmail){
            axios.get("http://localhost:3000/questions")
                .then((response) => {
                    setQuestions(response.data)
                })
                .catch((error) => {
                    console.log(error);
                });
            setIsShowQuestions(true)
        }
        checkEmail ? alert("Email is Valid") : alert("Email is Invalid")
    }

    return (
        <>
            <div className='emailColume'>
                <label className='labelEmail'>Email</label>
                <input className="inputEmail" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <button onClick={validateEmail} className="buttonValidate">
                    Submit Email
                </button>
                {
                    isShowQuestions && <Questions isShowQuestions={isShowQuestions} email={email} question={questions}/>
                }
            </div>
        </>
    )
}

export default EmailValidate