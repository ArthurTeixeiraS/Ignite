import styled, { css } from 'styled-components';

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
    border-radius: 5px;
    margin: 5px;


    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    /* ${props => {
        return css`
        background-color: ${buttonVariants[props.variants]}`
    }} */
`