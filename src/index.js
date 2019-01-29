import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function Envelope() {
    return (
        <div className="envelope">
            <AddressLabel address={person.address}/>

        </div>
    )
}

function AddressLabel({ address }) {
    return (
        <div>
            <div>{person.name}</div>
            <div>{person.address.street}</div>
            <div>{person.address.area}</div>
        </div>
    )
}

var person = {
    name: 'Eric Whited',
    address: {
        street: '123 Fake St.',
        area: 'Boston, MA 02118'
    }   
}



ReactDOM.render(<Envelope person={person}/>,
    document.getElementById('root')
)