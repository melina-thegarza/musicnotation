import ReactModal from 'react-modal';
import React, { useState } from 'react';
import DropdownTemplate from './DropdownTemplate';

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
                        <h2>Create a Score</h2>
                        <div className="row">
                            <DropdownTemplate id="instrument-dropdown"
                                title = "Instrument"
                                item1 = "Piano"
                                item2 = "Violin"
                                item3 = "Flute"
                                item4 = "Cello"
                            />
                            <DropdownTemplate id="time-signature-dropdown"
                                title = "Time Signature"
                                item1 = "4/4"
                                item2 = "3/4"
                                item3 = "2/4"
                                item4 = "6/8"
                            />
                            <DropdownTemplate id="key-dropdown"
                                title = "Key"
                                item1 = "C"
                                item2 = "G"
                                item3 = "D"
                                item4 = "A"
                            />
                            <DropdownTemplate id="majorminor-dropdown"
                                title = "Major/Minor"
                                item1 = "Major"
                                item2 = "Minor"
                            />
                        </div>
                    </div>
                </ReactModal>
            </div>
        </div>
    );
}

export default Button;