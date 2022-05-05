import React, { useState } from 'react'

//
// {firstName: "will", lastName : 'Sutton}
const initialState = {firstName: 'Will', lastName: 'Sutton'}

export const StateImmutability = () =>{
    const [names, setName] = useState(initialState);

    const changeName = () => {
        // names.firstName = 'Ernest';
        // names.lastName = 'Bruno';
        // console.log(names)
        const copy = {...names}
        copy.firstName = 'Emon';
        copy.lastName = 'Rahman';

        setName(copy);
    }

    return(<>
            <button onClick={changeName}>
                {names.firstName} {names.lastName}
            </button>

    </>)
}

export default StateImmutability;