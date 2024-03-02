const App = () => {
    <div>
        <Tweet
            username="Chonk1"
            name="Fang"
            date={new Date().toDateString()}
            message="I am the best boi!"
        />
        <Tweet
            username="Chonk2"
            name="Fang"
            date={new Date().toDateString()}
            message="I am the best boi!"
        />
        <Tweet
            username="Chonk3"
            name="Fang"
            date={new Date().toDateString()}
            message="I am the best boi!"
        />
    </div>
}

ReactDOM.render(<App/>, document.getElementById("root"));