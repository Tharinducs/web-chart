import React, { useEffect } from "react";
import { Row, Col, Select } from 'antd'
import Charts from "../../components/Charts/Charts.container";
import * as actionCreators from '../../store/actions/company'
import { connect } from "react-redux";
import { SearchOutlined } from '@ant-design/icons'

const Home = (props) => {
    const { company, companyList, getCompanyList, selectCompany } = props;

    useEffect(() => {
        getCompanyList();
        selectCompany({
            id: 1,
            name: 'MSFT - Microsoft Coparation',
            country: 'United States',
            industry: 'Information Technology'
        })
    }, [])

    const handleSelect = (value) => {
        const selectedData = companyList.filter((item) => item.id == value);
        if (selectedData.length > 0) {
            selectCompany(selectedData[0])
        }
    }

    const handleClear = () => {
        selectCompany(undefined)
    }

    return (
        <>
            <Row style={{ padding: 10 }}>
                <Col lg={12} xl={12} xxl={24} md={24} sm={24} xs={24}>
                    {company && <>
                        <div>{company.name}</div>
                        <div style={{ color: '#A0A0A0', fontSize: 12 }}>{company.country} | {company.industry}</div>
                    </>}
                </Col>
                <Col lg={12} xl={12} xxl={12} md={24} sm={24} xs={24} style={{ textAlign: 'right' }}>
                    <Select onClear={handleClear} value={company?.name} options={companyList.map((item) => ({ value: item.id, label: item.name }))} showSearch style={{ width: 300 }} placeholder="Search Company" allowClear suffixIcon={<SearchOutlined />} onSelect={handleSelect} />
                </Col>
            </Row>
            <Charts />
        </>
    )
}

const mapStateToProps = state => {
    return {
        company: state.company.company,
        companyList: state.company.companyList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCompanyList: () => dispatch(actionCreators.loadCompanyList()),
        selectCompany: (value) => dispatch(actionCreators.selectCompany(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);