'use client'
import { LinkedInIcon, TwitterIcon, Typography,Flex,Anchor } from '@/design_system'
import { FooterWrapper } from './footer.styles'

const Footer = () => {
    return (

            <FooterWrapper>
                <Flex alignItems="flex-start" justifyContent="flex-start">
                <Typography color="hsl(0,0%,85%)" margin="0px auto 0px 0px">© {new Date().getFullYear()} - All rights reserved</Typography>
                <Flex flexDirection='row' justifyContent="center" gap="16px">
                    <Anchor href="http://www.twitter.com/aaronsmithdev">
                    <TwitterIcon/>
                    </Anchor>
                    <Anchor href="http://www.linkedin.com/in/dr-aaron-smith">
                    <LinkedInIcon />
                    </Anchor>
                </Flex>
                
                </Flex>
                
            </FooterWrapper>

    )
}

export default Footer;