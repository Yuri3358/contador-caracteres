const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
    const [text, setText] = React.useState(0)
    const [maxLength, setMaxLength] = React.useState(120)
    const [textColor, setTextColor] = React.useState({color: "yellow"})
    const charleft = maxLength - (text.length || 0)
    
    React.useEffect(() => {
        if (charleft == 0) {
            setTextColor({color: "red"})
        }
    }, [text.length])

    return (
        <section id="content">
            <h1>Contador de caracteres</h1>
            <div>
                <label htmlFor="maxinput">Tamanho máximo</label>
                <input 
                    type="number" 
                    onChange={e => setMaxLength(e.target.value)}
                    className="inputs"
                    id="maxinput"
                >
                </input>
            </div>

            <div>
                <textarea 
                    onChange={e => setText(e.target.value)} 
                    maxLength={maxLength}
                    className="inputs"
                    autoComplete="off"
                    id="textinput"
                    placeholder="Escreva seu texto..."
                >
                </textarea>
            </div>
            
            <p><span style={{color: "yellow"}}>{text.length || 0}</span> caracteres</p>
            <p><span style={textColor}>{charleft}</span> caracteres restantes</p>
        </section>
    )
}

root.render(<App/>)