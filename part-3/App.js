const App = () => {
    <div>
        <Person
            name="HumanFang1"
            age="99999"
            hobbies={["Slep", "Snek", "Bork"]}    
        />
        <Person
            name="HumanFang2"
            age="99999"
            hobbies={["Slep", "Snek", "Bork"]}    
        />
        <Person
            name="HumanFang3"
            age="99999"
            hobbies={["Slep", "Snek", "Bork"]}    
        />
    </div>
}

ReactDOM.render(<App/>, document.getElementById("root"));