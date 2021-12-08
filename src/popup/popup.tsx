import React from 'react'
import ReactDOM from "react-dom";
import "./popup.css"
import Header from "./components/Header"
import CreateAccount from './components/Account/CreateAccount';


const test =
    <>
        <Header />
        <CreateAccount />
    </>

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(test, root)

