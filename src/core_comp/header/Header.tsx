'use client' 

import Image from 'next/image';
import { HeaderWrapper,StyledLogo} from './header.styles';
import { Grid,Anchor,Heading1,Flex} from '@/design_system';

const Header = () => {
    return (
        <>
        <HeaderWrapper>
            <Grid column="1fr minmax(auto,70ch) 1fr" gap="16px">
                <StyledLogo>
                <Flex className="logo" wrap="nowrap" flexDirection="row" alignItems="center" justifyContent="flex-start">
                <Anchor href="/">
                    <Image src="/logo.svg" alt="Mentoring logo" className="logo" width={75} height={75} priority />
                </Anchor>
                <Heading1>connectMed</Heading1>
                </Flex>
                </StyledLogo>
                
            </Grid>
            </HeaderWrapper>
        </>
    )
}

export default Header;