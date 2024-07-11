import React from 'react'
import styles from './buttonsStyle'
import { MONTHS_YEARS_DAYS } from '../../constants';
import { Button } from 'antd';

const ButtonsContainer = ({ onClick,currentBtnIndex }) => {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <div style={styles.topButtonContainer}>
            {MONTHS_YEARS_DAYS.map((item, index) => (<Button onMouseDown={stopPropagation}
                onTouchStart={stopPropagation} key={index} onClick={() =>
                    onClick(item, index)
                } style={index === currentBtnIndex ? styles.topButtonClicked : styles.topButton}>{item}</Button>))}
        </div>
    )
}

export default ButtonsContainer;