/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/display-name */
import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';

const StyledPre = styled('pre')`
  padding: 16px;
  background: ${props => props.theme.colors.preFormattedText};
`;

function getId(props) {
  if (Array.isArray(props.children)) {
    return props.children
      .map(item => {
        if (item.$$typeof) {
          return item.props.children;
        } else {
          return item;
        }
      })
      .join('')
      .replace(/\s+/g, '')
      .toLowerCase();
  }
  if (props.children.props) {
    return props.children.props.children.replace(/\s+/g, '').toLowerCase();
  }
  return props.children.replace(/\s+/g, '').toLowerCase();
}

export default {
  h1: props => <h1 className="heading1" id={getId(props)} {...props} />,
  h2: props => <h2 className="heading2" id={getId(props)} {...props} />,
  h3: props => <h3 className="heading3" id={getId(props)} {...props} />,
  h4: props => <h4 className="heading4" id={getId(props)} {...props} />,
  h5: props => <h5 className="heading5" id={getId(props)} {...props} />,
  h6: props => <h6 className="heading6" id={getId(props)} {...props} />,
  p: props => <p className="paragraph" {...props} />,
  pre: props => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ),
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
