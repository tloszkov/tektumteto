import React from 'react';
import { Phone } from "lucide-react"

interface CallButtonProps {
    phoneNumber: string;
    buttonText?: string;
}

const CallButton: React.FC<CallButtonProps> = ({ phoneNumber, buttonText }) => {
    const handleClick = () => {
        const telRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
        if (!telRegex.test(phoneNumber)){
            console.error("Nem megfelelő telefonszám formátum!");
            return;
        }
        const telUrl = `tel:${phoneNumber}`;
        window.location.href = telUrl;
    };

    const buttonStyle: React.CSSProperties = {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        textAlign: 'center',
        cursor: 'pointer', // Hozzáadva a kurzor stílusát
        border: 'none' // eltávolítjuk az alapértelmezett border-t
    };

    const hoverStyle: React.CSSProperties = {
        backgroundColor: '#0056b3',
    };



    return (
        <button
            style={{
                ...buttonStyle,
                display: 'inline-flex',
                alignItems: 'center'
            }}
            onMouseOver={(e: any) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
            onMouseOut={(e: any) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
            onClick={handleClick}
        >
            <Phone size={20} style={{marginRight: "5px"}}/>
            {buttonText || `Hívás: ${phoneNumber}`}
        </button>
    );
};

export default CallButton;