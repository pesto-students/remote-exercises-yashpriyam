import React from 'react';
import '../App.css'

const Canvas = (props) => {
    return (
        <div className='canvas'>
            <canvas
            ref={props.canvasRef}
            width= '460px'
            height='460px'
            />
        </div>
    )
}

export default Canvas;