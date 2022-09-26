import { forwardRef } from "react"
import PropTypes from "prop-types"
import "D:\\Course\\Projects\\react projects\\sports\\src\\scss\\form.scss";

const Input = forwardRef((props, ref) => {

    const {id, type, value, ...attr } = props;
    return(
        <>
            <p className="form_label" style={{textTransform:"capitalize"}} htmlFor={id}>{id}</p>
            <input className="form_input" value={value} type={type} id={id} name={id} ref={ref} {...attr} required/>
        </>
    )

})

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string
}

Input.defaultProps = {
    id:"",
    type:"",
    value:""
}

export default Input