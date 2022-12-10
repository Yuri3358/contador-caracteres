const root = React.createRoot(document.getElementById("root"))

function App() {
    const [text, setText] = React.useState(0)

    return (
        <div>
            <h1>Contador de caracteres</h1>
            <textarea onChange={e => setText(e.target.value)}></textarea>
        </div>
    )
}

root.render(<App/>)