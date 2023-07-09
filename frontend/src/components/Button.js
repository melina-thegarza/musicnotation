import ReactModal from 'react-modal';
import React, { useState } from 'react';
import ScoreForm from './ScoreForm'

function Button() {
    const[ isOpen, setIsOpen ] = useState(false);

    return (
        <div>
            <button className="btn btn-dark" onClick = {() => setIsOpen(true)}>
                New Score
            </button>
            <div>
                <ReactModal
                    isOpen = {isOpen}
                    onRequestClose = {() => setIsOpen(false)}
                    style={{
                        content: {
                            top: '80px',
                            bottom: '80px',
                            right: '80px',
                            left: '80px',
                            padding: '3%'
                        }
                    }}
                >
                    <div>
                        <ScoreForm />
                    </div>
                </ReactModal>
            </div>
        </div>
    );
}

export default Button;