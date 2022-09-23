import { forwardRef } from "react"
import "../scss/form.scss";

const Input = forwardRef((props, ref) => {

    const {id, type, ...attr } = props;
    return(
        <>
            <p className="form_label" style={{textTransform:"capitalize"}} htmlFor={id}>{id}</p>
            <input className="form_input" type={type} id={id} name={id} ref={ref} {...attr} required/>
        </>
    )

})

export default Input