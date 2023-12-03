import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Modal = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/createad')
        }, 600);
    }, [])


    return (
        <div>
            <div className="modal">
                <div className="overlay">
                    <div className="modal-content">
                        <h3>✔ Submited</h3>
                        <button className="close-modal" onClick={() => navigate('/createad')}>
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal