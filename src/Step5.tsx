import {useState} from 'react';
import {Row, Col, InputNumber, Alert} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { sickDaysState } from './states';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
export default () => {
    
    const [sickDays, setSickDays] = useRecoilState(sickDaysState);

    return (
        <>
            <Row justify="center">
                <Col span={20} style={{margin: 24}}>
                    <Row>
                        <Col span={6}><label>Hvor mange dage du været syg?</label></Col>
                        <Col><InputNumber size="large" defaultValue={sickDays} placeholder={"5"} style={{padding: "24px !important"}} onChange={(val) => setSickDays(val as number)} /> </Col>
                    </Row>
                </Col>
            </Row> 
            <Row justify="center">
                <Col span={20}>
                    { sickDays == 0 && (
                        <Alert
                        message="Champ"
                        style={{width: "100%"}}
                        description="Sygedage er for pussies alligevel!"
                        type="success"
                        showIcon
                      />
                    )}
                    {
                        sickDays != 0 && (
                            <Alert
                            message="Perfekt!"
                            style={{width: "100%"}}
                            description={`Vi tager sygedagene med :)`}
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