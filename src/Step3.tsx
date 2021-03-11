import {useState} from 'react';
import {Row, Col, InputNumber, Alert} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import { vacationWeeksState } from './states';
export default () => {
    
    const [holidays, setHolidays] = useRecoilState(vacationWeeksState);

    return (
        <>
            <Row justify="center">
                <Col span={20} style={{margin: 24}}>
                    <Row>
                        <Col span={6}><label> Hvor mange dages ferie har du haft?<br /> De fleste har 5 eller 6 uger</label></Col>
                        <Col><InputNumber size="large" placeholder={"25"} style={{padding: "24px !important"}} onChange={(val) => setHolidays(val as number)} /> </Col>
                    </Row>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={20}>
                    { holidays  > 0 && holidays < 20 && (
                        <Alert
                        message="Ok men..."
                        style={{width: "100%"}}
                        description="Kan de virkeligt passe du har holdt under 4 ugers ferie?"
                        type="warning"
                        showIcon
                      />
                    )}
                    {
                        holidays > 19 && (
                            <Alert
                            message="Perfekt!"
                            style={{width: "100%"}}
                            description={`Vi regner ferien ud :)`}
                            type="success"
                            showIcon
                          /> 
                        )
                    }
                </Col>
            </Row>
        </>
    );
} 