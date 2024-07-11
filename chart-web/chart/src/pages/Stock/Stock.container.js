import React, { useEffect, useState } from "react";
import { Card, Row, Col, Skeleton } from 'antd';
import { XAxis, YAxis, Area, AreaChart } from 'recharts';
import styles from './chartStockStyle'
import { LATEST_PRICE, STOCK_CHART_TITLE } from "../../constants";
import { useSelector, Provider } from 'react-redux';
import { getStockData } from "../../store/effects/chart";
import store from "../../store";
import { get } from "lodash";
import ButtonsContainer from "../../components/TopButtons/Buttons.container";

const Stock = () => {
    const [currentBtnIndex, setCurrentBtnIndex] = useState(0);

    const state = useSelector(state => state.chart);

    useEffect(() => {
        //load the data on component loading
        getStockData('6M')
    }, [])

    const onClick = (item, index) => {
        //load the data on filter value changing
        setCurrentBtnIndex(index)
        getStockData(item)
    }

    const getCurrentBtnData = () => {
        return get(state, 'currentFilterStockData.chartData', []).map((item) => ({ date: item.date, value: item.value }));
    }

    return (
        <>
            <Card title={STOCK_CHART_TITLE}>
                {!state.loadingStock ? <><ButtonsContainer onClick={onClick} currentBtnIndex={currentBtnIndex}/>
                    {getCurrentBtnData() && getCurrentBtnData().length > 0 ?
                        <Row>
                            <Col lg={18} md={24} xs={24} sm={24}>
                                <AreaChart width={450} height={300} data={getCurrentBtnData()}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="date" tickCount={3} />
                                    <YAxis tickCount={3} />
                                    <Area type="monotone" dataKey="value" stroke="none" fillOpacity={1} fill="url(#colorUv)" />
                                </AreaChart>
                            </Col>
                            <Col style={styles.chartRightContainer} lg={4} md={24} xs={24} sm={24}>
                                <div>{LATEST_PRICE}</div>
                                <div style={styles.chartRightContainerValue}>{get(state, 'currentFilterStockData.latestPrice')}</div>
                            </Col>
                        </Row>
                        : <></>}</> : <Skeleton active />}
            </Card>
        </>
    )
}

const StockContainer = () => (
    <Provider store={store}>
        <Stock />
    </Provider>
)

export default StockContainer;