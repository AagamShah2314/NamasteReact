import React from 'react';
import ReactDOM from 'react-dom/client';

//React Elements in JSX which is compiled by BABEL
//JSX parses injected data before running it within the site in order to prevent XSS attacks
//Functional Component
const name = <span>Aagam</span>;
const Title = () => <h1 className='head'>{name} React is awesome</h1>

const Footer = () => <p className='footer'>This is footer</p>


//Component Composition: One component in the other
const HeadingComponent = () => (
    <div id='container'>
        <Title />
        <br />
        {name}
        <br />
        <h1 className='heading'>Hello Aagam</h1>
        <Footer />
    </div>
);

//console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
