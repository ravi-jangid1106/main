
function Clockdropdown({color}){

    
        
    return(
        <div>
            <h1>
                Change Watch Color
            </h1>
            <select onChange={(e)=>(color(e.target.value))} defaultValue={color} name="clock" id="clock">
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="gray">Gray</option>
            </select>
        </div>
    )
}

export default Clockdropdown;