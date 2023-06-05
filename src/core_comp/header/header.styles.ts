import styled from 'styled-components';

export const HeaderWrapper = styled.header`


`;

export const StyledLogo = styled.div`
    grid-column: 1;
    padding: 32px 0px 0px 64px;
    @media (max-width: 1500px) {
        grid-column: 2;
        padding: 16px 0px 0px 16px;
}
`

export const StyledTitle = styled.div`
    @media (max-width:550px) {
        display: none;
    }
`