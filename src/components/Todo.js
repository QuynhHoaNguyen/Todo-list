import React from 'react';
import Button from '@atlaskit/button';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    margin-top: 5px;
    text-align: left;
    width: 100%;
    height: 35px;
`;
const ButtonDel = styled.button`
text-align: right;
`


export default function Todo({todo, onDeleteBtnClick}) {
    
    return (
        <div>
            <ButtonStyled>
                {todo.name}
                <ButtonDel 
                    onClick={(e) => onDeleteBtnClick(e, todo)} 
                    style={{float: 'right'}}>
                    Delete
                </ButtonDel>
            </ButtonStyled>
            
        </div>
    );
}
