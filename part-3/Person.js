const Person = ({name, age, hobbies}) => {
    let voting;
    if (age >= 18) {
        voting = "please go vote!"
    } else {
        voting = "you must be 18"
    }

    const hobbiesList = hobbies.map(hobby => <li>{hobby}</li>)
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>{name.slice(0, 7)}</li>
                <li>{age}</li>
            </ul>

            <h3>{voting}</h3>

            <h2>Hobbies</h2>
            <ul>
                {hobbiesList}
            </ul>
        </div>
    )
}