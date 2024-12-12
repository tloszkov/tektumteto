import React from 'react';
import styled from 'styled-components';
import { Mail } from 'lucide-react';

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
    buttonText?: string;
}

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1DA851;
  }

  svg { // Ikon stílusozása
    margin-right: 8px;
  }
`;

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message, buttonText }) => {
    const handleClick = () => {
        const telRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
        if (!telRegex.test(phoneNumber)){
            console.error("Nem megfelelő telefonszám formátum!");
            return;
        }
        const encodedMessage = encodeURIComponent(message || '');
        const whatsappUrl = `https://wa.me/${phoneNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <StyledButton onClick={handleClick}>
            <Mail size={16} />
            {buttonText || 'Írj WhatsApp-on!'}
        </StyledButton>
    );
};

export default WhatsAppButton;