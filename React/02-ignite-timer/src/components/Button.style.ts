import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps{
    variants: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'blue',                                                                              
    danger: 'orange',
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    ${props => {
        return `background-color: ${buttonVariants[props.variants]})`
    }}
`