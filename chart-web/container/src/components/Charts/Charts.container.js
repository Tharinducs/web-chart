import React, { Suspense } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Image, Empty } from 'antd'
import picon from '../../assets/images/performance-icon-png-19.png'
import chartStyle from "./ChartsStyle";
import { connect } from 'react-redux'
import { emptyCompanyMsg } from "../../constants";
const CreditChart = React.lazy(() => import('chart/Credit'))
const StockChart = React.lazy(() => import('chart/Stock'))

const ResponsiveGridLayout = WidthProvider(Responsive);

const Charts = (props) => {
  const { company } = props
  const layout = {
    lg: [
      { x: 0, y: 0, w: 1, h: 2 },
      { x: 6, y: 1, w: 1, h: 2 }
    ],
    md: [
      { x: 0, y: 0, w: 1, h: 2 },
      { x: 0, y: 1, w: 1, h: 2 }
    ],
    sm: [
      { x: 0, y: 0, w: 1, h: 2 },
      { x: 0, y: 1, w: 1, h: 2 }
    ],
    xs: [
      { x: 0, y: 0, w: 1, h: 2 },
      { x: 0, y: 1, w: 1, h: 2 }
    ],
    xxs: [
      { x: 0, y: 0, w: 1, h: 2 },
      { x: 0, y: 1, w: 1, h: 2 }
    ],
  }

  return (
    <div style={chartStyle.chartsOuter}>
      <div style={chartStyle.chartTitle}>
        <Image src={picon} width={30} height={30} />
        Performance
      </div>
      <Suspense fallback={"loading"}>
        {company ? <ResponsiveGridLayout
          className="chart-layout"
          layouts={layout}
          cols={{ lg: 2, md: 1, sm: 1, xs: 1, xxs: 1 }}
          width={1200}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          rowHeight={500}
          preventCollision={false}
        >
          <div key="2">
            <StockChart />
          </div>
          <div key="1" >
            <CreditChart />
          </div>
        </ResponsiveGridLayout> : <Empty description={emptyCompanyMsg} />}
      </Suspense>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    company: state.company.company
  }
}


export default connect(mapStateToProps, {})(Charts);