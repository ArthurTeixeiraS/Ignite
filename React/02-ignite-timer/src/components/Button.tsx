import { ButtonContainer, ButtonVariant } from './Button.style';

interface ButtonProps{
    variants?: ButtonVariant,
}


export function Button({variants = "primary"}: ButtonProps){
    return (<ButtonContainer variants={variants}>Enviar</ButtonContainer>);
}