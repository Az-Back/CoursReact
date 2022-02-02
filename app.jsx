function Header() {
    return (<div>
        <h1>La maison jungle</h1>
    </div>)
};

function Description() {
    return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>)
};

ReactDOM.render(<div><Header /><Description /></div>, document.getElementById("root"))