import React from 'react';

type ForwardLineProps = {
    pourcentage: number;
    color?: string;
}

const ForwardLine : React.FC<ForwardLineProps> = ({ pourcentage, color }) => {
    return (
        <div className={`h-[64px] w-[2px] ${color ? "bg-"+color: "bg-or"} relative`}>
            <div style={{ top: `calc(${pourcentage}% - 4.5px)`, marginTop: '10px', marginBottom: '10px' }} className={`h-[9px] w-[9px] rounded-full ${color ? "bg-"+color: "bg-or"} absolute left-1/2 transform -translate-x-1/2`}></div>
        </div>
    );
};

export default ForwardLine;