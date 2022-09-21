import { useState } from "react";

const useFormHooks = (initialState) =>{
    const [name, setName] = useState(initialState);

    const handleName = (evt) =>{
        setName(evt.target.value)
    }

    const clear = () =>{
        setName("");
    }

    return [name,handleName, clear]
}

export default useFormHooks;