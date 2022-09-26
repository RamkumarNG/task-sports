import PropTypes from "prop-types";

const Button = (props) => {
    const {
        type,
        name,
        className,
        ...attr
    } = props;
    return(
        <div className="buttonContainer">
            <button className={className} type = {type} {...attr}>{name}</button>
        </div>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

Button.defaultProps = {
    type:"submit",
    name:"",
    className:"btn-submit"
}

export default Button;