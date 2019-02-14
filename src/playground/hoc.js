//higher order component: component renders another
//enables reuse code, render hijacking, porp manipulation, abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>
            Info
        </h1>
        <p>The info is: {props.info}</p>
    </div>
);
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin &&
            <p>This is private info.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (Component) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
            <Component {...props}/>
             ) : (<p>Please log in to view info</p>)}
            
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />,document.getElementById('app'));