const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
    const [text, setText] = React.useState(0)
    const [maxLength, setMaxLength] = React.useState(120)
    const charleft = maxLength - (text.length || 0)

    return (
        <section id="content">
            <h1>Contador de caracteres</h1>
            <textarea onChange={e => setText(e.target.value)} maxLength={maxLength}></textarea>
            <input type="number" onChange={e => setMaxLength(e.target.value)}></input>
            <p>{text.length || 0} caracteres</p>
            <p>{charleft} caracteres restantes</p>
        </section>
    )
}

root.render(<App/>)