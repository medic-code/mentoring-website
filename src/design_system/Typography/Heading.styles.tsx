import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { fontSizes, fontWeights, primaryFont } from '../lib';
import { IProps } from './Heading.types';

const HEADING = `
                 line-height: 1.6818;
                 margin: 0 0 1rem 0;
                 color: hsl(var(--palette-gray-85));
             `;

const TEXT_MODIFIERS = {
  heading1: () => `
        font-weight: ${fontWeights['--bold']};
        ${HEADING}
    `,
  heading2: () => `
    font-weight: ${fontWeights['--bold']};
    ${HEADING}
    `,
  heading3: () => `
    font-weight: ${fontWeights['--400']};
    ${HEADING}`,
  heading4: () => `
    font-weight: ${fontWeights['--normal']};
    ${HEADING}`,

  modifiedHeading1: () => `
    font-weight: ${fontWeights['--bold']};
    line-height: 1.6818;
    margin: 1rem 0 0rem 0;
    color: hsl(var(--palette-gray-85));
  `,

  modifiedHeading3: () => `
    font-weight: ${fontWeights['--bold']};
    line-height: 1.6818;
    margin: 1rem 0 0rem 0;
    color: hsl(var(--palette-gray-85));
  `,
  modifiedHeading4: () => `
  font-weight: ${fontWeights['--400']};
  line-height: 1.6818;
  margin: 1rem 0 0rem 0;
  color: hsl(var(--palette-gray-85));
  
`,
};

const StyledHeading1 = styled.h1<IProps>`
  padding: 0px;
  line-height: 1.6818;
  
  color: ${(props) => props.color || "hsl(var(--palette-gray-85))"};
  margin: ${(props) => props.margin || '0 0 1.45rem 0'};
  word-break: keep-all;
  letter-spacing: 0.3px;
  text-rendering: optimizeLegibility;
  font-family: ${primaryFont};
  font-size: ${fontSizes['--header1']};
  font-weight: ${fontWeights['--bold']};
  text-align: ${(props) => props.textAlign || 'left'};
`;
const StyledHeading2 = styled.h2<IProps>`
  padding: 0px;
  line-height: 1.6818;
  color: ${(props) => props.color || "hsl(var(--palette-gray-85))"};
  margin: ${(props) => props.margin || '0 0 1.45rem 0'};
  word-break: keep-all;
  letter-spacing: 0.3px;
  text-rendering: optimizeLegibility;
  font-family: ${primaryFont};
  font-size: ${fontSizes['--header2']};
  font-weight: ${fontWeights['--bold']};
  text-align: ${(props) => props.textAlign || 'left'};
`;
const StyledHeading3 = styled.h3<IProps>`
  padding: 0px;
  line-height: 1.6818;
  color: ${(props) => props.color || "hsl(var(--palette-gray-85))"};
  margin: ${(props) => props.margin || '0 0 1.45rem 0'};
  word-break: keep-all;
  letter-spacing: 0.3px;
  text-rendering: optimizeLegibility;
  font-family: ${primaryFont};
  font-size: ${fontSizes['--header3']};
  font-weight: ${fontWeights['--bold']};
  text-align: ${(props) => props.textAlign || 'left'};
`;
const StyledHeading4 = styled.h4<IProps>`
  padding: 0px;
  line-height: 1.6818;
  color: ${(props) => props.color || "hsl(var(--palette-gray-85))"};
  margin: ${(props) => props.margin || '0 0 1.45rem 0'};
  word-break: keep-all;
  letter-spacing: 0.3px;
  text-rendering: optimizeLegibility;
  font-family: ${primaryFont};
  font-size: ${fontSizes['--header4']};
  font-weight: ${fontWeights['--normal']};
  text-align: ${(props) => props.textAlign || 'left'};
`;

export { StyledHeading1, StyledHeading2, StyledHeading3, StyledHeading4 };
