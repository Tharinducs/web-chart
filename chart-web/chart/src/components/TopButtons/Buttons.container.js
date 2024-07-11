import React from 'react'
import styles from './buttonsStyle'
import { MONTHS_YEARS_DAYS } from '../../constants';
import { Button } from 'antd';

const ButtonsContainer = ({ onClick,currentBtnIndex }) => {

    // React Grid Layout uses draggable and resizable functionalities that can interfere with button clicks.
    // We need to prevent event propagation for the buttons to ensure they are clickable.
    // Only stoping in onclick will not work so need to stop before click using onMouseDown and onTouchStart
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