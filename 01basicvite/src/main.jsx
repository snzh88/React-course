import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to visit google',
    
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />
)