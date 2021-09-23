import React from 'react'
import "./confirm.css"

export default function Confirm({ open, children, onClose }) {
    if(!open) return null

    return (
        <>
        <div className="cBox">
            <div className="confirmB">
                {children}
                <br/>
                <button onClick={onClose}><a href="/">Close</a></button>
            </div>
        </div>
        </>
        
    )
}
