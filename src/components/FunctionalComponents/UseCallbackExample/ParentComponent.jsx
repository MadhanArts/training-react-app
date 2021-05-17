import React, { useCallback, useState } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponent() {

    const [age, setAge] = useState(21);
    const [salary, setSalary] = useState(50000)


    // useCallback(callback, dependency) is a hook used to
    // return a callback which will only render when the dependency
    // changes.
    // It will return a cached function.

    const incrementAge = useCallback(()  => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary]);

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge} >Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary} >Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
