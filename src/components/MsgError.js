import React from 'react'

export const MsgError = (props) => {
    const {msg} = props.Obj;
    console.log(msg);
    return (
        <>
            <div className="alert alert-danger mt-2" role="alert">
                {msg}
            </div>
        </>
    )
}
