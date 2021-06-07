interface InputProps {
    type: string, 
    placeholder: string, 
    require?:boolean,
}
const Input = (props:InputProps) => {
    return <input {...props} {...props.require && 'required' }/>
}

export default Input