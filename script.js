const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
    const [text, setText] = React.useState(0)
    const [maxLength, setMaxLength] = React.useState(120)
    const charleft = maxLength - text.length || 0

    return (
        <section id="content">
            <h1>Contador de caracteres</h1>
            <div>
                <label htmlFor="maxinput">Tamanho máximo</label>
                <input 
                    type="number" 
                    onChange={e => setMaxLength(e.target.value)}
                    id="maxinput"
                >
                </input>
            </div>

            <div>
                <textarea 
                    onChange={e => setText(e.target.value)} 
                    maxLength={maxLength}
                    id="textinput">
                </textarea>
            </div>
            
            <p>{text.length || 0} caracteres</p>
            <p><span>{charleft}</span> caracteres restantes</p>
        </section>
    )
}

root.render(<App/>)