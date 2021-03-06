import React from 'react'

import StyledContainer from './container.styles.jsx'
import { node, string } from 'prop-types'

const Container = ({children, isEqualWidth, isEqualHeight, flexDirection, backgroundColor, display, justifyContent, alignItems, ...props}) => (
    <StyledContainer 
        display={display}
        justifyContent={justifyContent}
        alignItems={alignItems} 
        flexDirection={flexDirection}
        isEqualHeight={isEqualHeight} 
        isEqualWidth={isEqualWidth} 
        backgroundColor={backgroundColor}
        {...props}>
        { children }
    </StyledContainer>
)

Container.propTypes = {
    children: node.isRequired,
    display: string,
    flexDirection: string,
    justifyContent: string,
    alignItems: string,
    isEqualWidth: string,
    isEqualHeight: string,
    backgroundColor: string,
}

export default Container