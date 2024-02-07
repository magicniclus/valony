import React from 'react';

type ForwardLineProps = {
    pourcentage: number;
}

const ForwardLine : React.FC<ForwardLineProps> = ({ pourcentage }) => {
    return (
        <div className='h-[64px] w-[2px] bg-or relative'>
            <div style={{ top: `calc(${pourcentage}% - 4.5px)`, marginTop: '10px', marginBottom: '10px' }} className='h-[9px] w-[9px] rounded-full bg-or absolute left-1/2 transform -translate-x-1/2'></div>
        </div>
    );
};

export default ForwardLine;