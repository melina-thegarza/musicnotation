import ReactModal from 'react-modal';
import React, { useState } from 'react';

function Button() {
    const[ isOpen, setIsOpen ] = useState(false);

    return (
        <div>
            <button class="btn btn-dark" onClick = {() => setIsOpen(true)}>
                New Score
            </button>
            <div>
                <ReactModal
                    isOpen = {isOpen}
                    contentLabel = "Example modal"
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
                    <h2>Create a Score</h2>
                    Next steps to create a score...   
                </ReactModal>
            </div>
        </div>
    );
}

export default Button;