import styled, { css } from 'styled-components'

interface InputComponentStylesProps {
    isActive?: boolean
    variant?: string
    isEyeOn?: boolean
    error?: boolean
    isFilled?: boolean
    inputType?: "large" | "medium"
}

export const AlertMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px;
    color: ${props => props.theme.colors.suport.error};
    svg {
        margin-right: 5px;
    }
`

export const Container = styled.div<InputComponentStylesProps>`
    box-sizing: border-box;
    position: relative;
    width: auto;
    ${props => props.inputType === "large" && css`
        height: 48px;
    `}
    ${props => props.inputType === "medium" && css`
        height: 32px;
    `}

`

export const Svg = styled.div`
    display: flex;
    svg {
        right: -2.9rem;
        top: 0.9rem;
        cursor: pointer;
    }
`
export const Mediumlabel = styled.div<InputComponentStylesProps>`
    color: ${props => props.theme.colors.neutral.dark};
    cursor: text;

    ${props =>
        props.isActive &&
        css`
            background-color: ${props => props.theme.colors.neutral.white};
            color: ${props => props.theme.colors.primary};
        `}
    ${props =>
        props.error &&
        css`
            color: ${props => props.theme.colors.suport.error};
        `}
`


export const Label = styled.label<InputComponentStylesProps>`
    position: absolute;
    left: 1rem;
    top: 35%;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${props => props.theme.colors.neutral.soft};
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;

    ${props =>
        props.isActive &&
        css`
            top: -0.5rem;
            font-size: 0.8rem;
            left: 0.8rem;
            background-color: ${props => props.theme.colors.neutral.white};
            color: ${props => props.theme.colors.primary};
        `}
    ${props =>
        props.error &&
        css`
            color: ${props => props.theme.colors.suport.error};
        `}

`

export const Input = styled.div<InputComponentStylesProps>`
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 0.8rem;
    padding-right: 0.8rem;

    ${props => props.inputType ==="large" && css`
        border: 2px solid ${props.theme.colors.secondary};
    `}

    ${props => props.inputType ==="medium" && props.isFilled ? css`
        border: 2px solid ${props.theme.colors.neutral.white};
    ` : css `
        border: 2px solid ${props.theme.colors.neutral.soft};
    `}

    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.colors.neutral.dark};
    align-items: center;
    justify-content: center;
    input {
        font-size: inherit;
        font-family: inherit;
        width: 100%;
        height: 88%;
        outline: none;
        background: none;
        border-style: none;
        &::-ms-reveal,
        &::-ms-clear {
            display: none;
        }
        ${props =>
            props.isActive &&
            props.error &&
            css`
                color: ${props => props.theme.colors.suport.error};
            `}
    }
    ${props =>
        props.error &&
        css`
            border-color: ${props => props.theme.colors.suport.error};
        `}
    ${props =>
        props.isActive &&
        props.error &&
        css`
            border-color: ${props => props.theme.colors.suport.error};
            color: ${props => props.theme.colors.suport.error};
        `}
    ${props =>
        props.isActive &&
        !props.error &&
        css`
            border-color: ${props => props.theme.colors.primary};
        `}
`
