const Add=(props)=>{
    return(
        <div >this is add component
            <p>addition:{ parseInt(props.a)+parseInt(props.b)}</p>
        </div>
    )
}
export default Add;