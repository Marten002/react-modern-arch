/**
* Copyright NGR Softlab 2022
*/

import React, { memo } from 'react'
import clsx from 'clsx'

// import imageLogo from "./images/logo.png"

import { BRAND_LONG } from '../../brand'

import styles from './Logo.module.scss'

const Logo = ({ className, image }) => {
    return (
        <img
			className={clsx(className, styles.logo)}
			src={image}
			alt={BRAND_LONG}
		/>
    )
}

export default memo(Logo)
