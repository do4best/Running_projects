import React, {useState} from 'react';

function Bott11(props) {
    const [bill,setBill] = useState("")

    const [tip,setTip] = useState("")
    const [btn,setBtn] = useState("")

    const handlerChangeBill=(e)=>{
        setBill(e.target.value)
    }
    const handlerChangeTip=(e)=>{
        setTip(e.target.value)
    }


    const pressIt=(e)=>{
       // e.preventDefault()
        const billValue = bill
        const tipValue = tip
        const totalValue = billValue * (1+ tipValue/100)
        setBtn(totalValue)
    }
    return (
        <>

        <h1>Hello</h1>
            <input type="number" value={bill} onChange={handlerChangeBill}/>
            <input type="number" value={tip} onChange={handlerChangeTip}/>
            <h1>hello</h1>
            <button onClick={pressIt}>Press</button>
            <h2>{btn}</h2>
        </>
    );
}

export default Bott11;