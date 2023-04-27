import myAlert from "~/myAlert"
function Button() {
    return (<button onClick={e => myAlert()}>Click me!</button>)
}

export default Button