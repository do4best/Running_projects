import React, {createContext, useContext, useState} from 'react';
 const CreateTheme = createContext()
const Hello=()=>{
    const [hello,setHello] = useState("Hello")
    return(
        <>
            <CreateTheme.Provider value={hello}>
        <h1 className="text-success">{`My Friend ${hello}`}</h1>
                <GoodBye/>
            </CreateTheme.Provider>
        </>
    )
}


const GoodBye=()=>{
    const hello = useContext(CreateTheme)
    return(
        <>

            <h1 className="text-primary">{`Sorry ${hello}`}</h1>

        </>
    )
}
function ExtraTask(props) {
    return (
        <>
        <h1>Hello</h1>
        </>
    );
}

export {Hello,ExtraTask,GoodBye};