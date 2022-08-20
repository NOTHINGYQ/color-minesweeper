import React from "react";
import '../App.css';

export default function Circle() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className={'circle'}
            ></div>
        </div>
    );
}