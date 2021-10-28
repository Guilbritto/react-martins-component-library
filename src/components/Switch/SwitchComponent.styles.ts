import styled, { css } from 'styled-components'
import { SwtichStyleProps } from './SwitchComponent.types'


export const Container = styled.div<SwtichStyleProps>`
    width: 34px;
    height:14px;
    border-radius:25px;
    background-color: #C9CAD2;
    position: relative;
    display: flex;
    cursor: pointer;


    ${props => props.isActive && css`
        background-color: #CFDDF5;
    `}
    ${props => props.disabled && css`
        background-color: #C9CAD2;
        cursor: not-allowed;
    `}

`

export const CircleAura = styled.div<SwtichStyleProps>`
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    top:-8px;
    left: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.1s linear;
    transform: translateX(0);
    ${props => props.isActive && css`
        transform: translateX(66%);
    `}
    ${props => props.disabled && css`
        cursor: not-allowed;
    `}
    ${props => props.isMouseDown && css`
        background-color: #9FAAEF33;
    `}
    ${props => props.isMouseUp && css`
        background-color: #9FAAEFBF;
    `}

`

export const Circle = styled.div<SwtichStyleProps>`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #6D6E75;
    top:-2px;
    ${props => {
        console.log(props)
        return ''
    }}

    ${props => props.isActive && css`
        background-color: #2B52DD;
    `}

    ${props => props.disabled && css`
        cursor: not-allowed;
        background-color: #C9CAD2;
    `}

`