import * as React from "react";
import * as ReactDOM from "react-dom";
import "./message.scss"

const element = (name) => <span className='message'>hello, {name}</span>;
ReactDOM.render(
    element('friend!'),
    document.getElementById('root')
);
