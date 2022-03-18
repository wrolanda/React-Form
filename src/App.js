import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Header } from './Components/Header'
import {StepOne} from "./Components/StepOne";

const Step1 = () => {
    return (
        <div>Step1</div>
    );
};
const Step2 = () => {
    return (
        <div>Step2</div>
    );
};
const Step3 = () => {
    return (
        <div>Step3</div>
    );
};
const Result = () => {
    return (
        <div>Result</div>
    );
};

function App() {
    return (
        <>
            <Header/>
                <Routes>
                    <Route exact path="/" element={<StepOne />}/>
                    <Route exact path="/step2" element={<Step2 />}/>
                    <Route exact path="/step3" element={<Step3 />}/>
                    <Route exact path="/result" element={<Result />}/>
                </Routes>
        </>
    );
};

export default App;
