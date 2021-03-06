import React, { useMemo } from 'react'
import LottieFiles from 'react-lottie'
import {object, bool, number } from 'prop-types'

const Lottie = ({width, height, loop, autoplay, path}) => {

    let lottieState = {
        loop: loop,
        autoplay: autoplay, 
        animationData: path,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
    }


    return useMemo(() => {
        return (
            <LottieFiles 
                width={width}
                height={height}
                options={lottieState}
            />
        )
    })
}

Lottie.propTypes = {
    width: number.isRequired,
    height: number.isRequired,
    loop: bool.isRequired,
    autoplay: bool.isRequired,
    path: object.isRequired
}

Lottie.defaultProps = {
    width: 500,
    height: 500,
    loop: true,
    autoplay: true
}

export default Lottie