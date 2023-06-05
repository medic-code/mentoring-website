import React from 'react';

export default interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  modifiers?: string;
  margin?: string;
  textAlign: string;
}

export interface IProps {
  modifiers?: string;
  margin?: string;
  textAlign: string;
}
