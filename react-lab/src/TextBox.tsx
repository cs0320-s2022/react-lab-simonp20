interface TextBoxProps {
    label: string;
    changeHandler: (value: string) => void;
}

function TextBox(props: TextBoxProps) {
    return (
        <div className="TextBox">
        <header className="TextBox-header">
          <label>{props.label}</label>
          <input type="text" onChange={e=> props.changeHandler(e.target.value)}></input>

        </header>
      </div>
    );
  }
  
  export default TextBox;