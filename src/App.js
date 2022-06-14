import React from "react";
import {Routes, Route} from "react-router-dom";
import { Header } from './Components/Header'
import {StepOne} from "./StepOne";
import {StepTwo} from "./StepTwo";
import {StepThree} from "./StepThree";
import {Result} from "./Result";

function App() {
    return (
        <>
            <Header/>
                <Routes>
                    <Route exact path="/" element={<StepOne />}/>
                    <Route exact path="/step2" element={<StepTwo />}/>
                    <Route exact path="/step3" element={<StepThree />}/>
                    <Route exact path="/result" element={<Result />}/>
                </Routes>
        </>
    );
};

export default App;
