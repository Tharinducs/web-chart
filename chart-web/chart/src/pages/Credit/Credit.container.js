import React, { useEffect, useState } from "react";
import { Card, Row, Col, Skeleton } from 'antd';
import { XAxis, YAxis, Area, AreaChart } from 'recharts';
import styles from './chartCreditStyle'
import * as moment from 'moment'
import { CREDIT_CHART_TITLE, WEIGHTED_BOND } from "../../constants";
import { useSelector, Provider } from 'react-redux';
import { getCreditData } from "../../store/effects/chart";
import store from "../../store";
import { get } from "lodash";
import ButtonsContainer from "../../components/TopButtons/Buttons.container";

const Credit = () => {
    const [currentBtnIndex, setCurrentBtnIndex] = useState(0);
    const state = useSelector(state => state.chart);

    useEffect(() => {
        //load the data on component loading
        getCreditData('6M')
    }, [])

    const onClick = (item, index) => {
        //load the data on filter value changing
        setCurrentBtnIndex(index)
        getCreditData(item)
    }

    const getCurrentBtnData = () => {
        return get(state, 'currentFilterCreditData.chartData', []).map((item) => ({ date: item.date, value: item.value }));
    }

    return (
        <>
            <Card title={CREDIT_CHART_TITLE} style={{ zIndex: 1000 }}>
                {!state.loadingCredit ?
                    <><ButtonsContainer onClick={onClick} currentBtnIndex={currentBtnIndex} />
                        {getCurrentBtnData() && getCurrentBtnData().length > 0 ?
                            <Row>
                                <Col lg={18} md={24} xs={24} sm={24}>
                                    <AreaChart width={450} height={300} data={getCurrentBtnData()}>
                                        <defs>
                                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#00CCFF" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#00CCFF" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <XAxis dataKey="date" tickCount={3} />
                                        <YAxis tickCount={3} />
                                        <Area type="monotone" dataKey="value" stroke="none" fillOpacity={1} fill="url(#colorPv)" />
                                    </AreaChart>
                                </Col>
                                <Col style={styles.chartRightContainer} lg={4} md={24} xs={24} sm={24}>
                                    <div>{WEIGHTED_BOND}</div>
                                    <div style={{ fontSize: 12 }}>As of {moment(get(state, 'currentFilterCreditData.asOf')).format('DD MMMM YYYY')}</div>
                                    <div style={styles.chartRightContainerValue}>{get(state, 'currentFilterCreditData.weightedBond')}</div>
                                </Col>
                            </Row>
                            : <></>}</>
                    : <Skeleton active />}

            </Card>
        </>
    )
}

const CreditContainer = () => (
    <Provider store={store}>
        <Credit />
    </Provider>
)

export default CreditContainer