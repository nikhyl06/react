import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reactlogo from "./images/react.png"
import reactBgLight from "./images/react-bg-light.png"
import reactBgDark from "./images/react-bg-dark.png"

function Header(props){
    const navStyles={
        backgroundColor: props.mode==="dark" ? "rgb(31,29,36)" : "#fff",
        color: props.mode==="dark" ? "#fff" : "#000",
        borderBottom: "1px solid rgb(31,29,36)"
    }
    const switchStyles={
        margin: props.mode==="dark" ? "3px 3px 3px auto" : "3px auto 3px 3px",
        backgroundColor: props.mode==="dark" ? "rgb(31,29,36)" : "#fff"
    }
    const switchBg={
        backgroundColor: props.mode==="dark" ? "#fff" : "rgb(31,29,36)"
    }

    return(
        <header>
            <nav style={navStyles} className="nav">
            <nav className="nav-logo">
                <img src={reactlogo} className="nav-icon"/>
                <p>ReactFact</p>
            </nav>
            <div className="nav-menu">
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="mode">
                <p className="light-text">light</p>
                <div onClick={props.toggleMode} style = {switchBg} className="mode-btn">
                    <div style={switchStyles} className="switch"></div>
                </div>
                <p className="dark-text">dark</p>
            </div>
            </div>
            </nav>
        </header>
    )
}

function Main(props){
    const mainStyle = {
        color: props.mode==="dark" ? "#fff" : "#111",
        backgroundColor: props.mode==="dark" ? "rgb(37,38,44)" : "#fff"
    }
    return(
        <div style={mainStyle} className="main">
            <h1>Fun facts about React</h1>
        <ul className="facts">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        
        </div>
    )
}

function Footer(){
    return(
        <footer className="footer"><small>Ⓒ 2022 Kumar development. all rights reserved.</small></footer>
    )
}


function Page(){ 
    const [mode ,setMode] = React.useState("dark")
    function toggleMode(){
        setMode((prevMode)=> prevMode==="dark" ? "light" : "dark")
    }


    return (
    <div className="page">
        <Header mode = {mode} toggleMode={toggleMode} />
        <Main mode = {mode} />
        <Footer />
    </div>
    )
}

ReactDOM.render(<Page />, document.querySelector(".container"))