const Sub =(props) =>{
    return(
        <div>this is sub component
            <p>sub:{ parseInt(props.a)-parseInt(props.b)}</p>
        </div>
    )
}
export default Sub;
