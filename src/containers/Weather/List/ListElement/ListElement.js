import React from 'react';

const list = (props) => props.elements.map((element) =>{
    return (
            <li
            key={element.id}
            onClick={() => props.click(element.id)}>{element.name}</li>
    );
});      


export default list;