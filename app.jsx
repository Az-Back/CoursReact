function Header() {
    return (<div>
        <h1>La maison jungle</h1>
    </div>)
};

function Description() {
        const text = "Ici achetez toutes les plantes dont vous avez toujours rêvées"
        const emojis = "🤑🤑🤑"
        return (<p>{ text.slice(0, 12) + emojis }</p>)
};

function Banner() {
    return (<div>
        <Header />
        <Description />
    </div>)
};

ReactDOM.render(<div><Header /><Description /></div>, document.getElementById("root"))