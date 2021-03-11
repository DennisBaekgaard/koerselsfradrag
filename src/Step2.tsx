import {useState} from 'react';
import {Row, Col, Input, Switch, Radio, Button, Alert} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import Day from './Day';
import { christmasOffState, daysOffState, newYearsOffState, workSpecialDaysState } from './states';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

export default () => {
    
    const [offdays, setOffDays] = useRecoilState(daysOffState); 
    const [christmasOff, setChristmasOff] = useRecoilState(christmasOffState); 
    const [newYearsOff, setNewYearsOff] = useRecoilState(newYearsOffState); 
    const [workSpecialDays, setWorkSpecialDays] = useRecoilState(workSpecialDaysState);
    return (
        <>
            <Row justify="center">
                <Col span={20} style={{margin: 24}}>
                    <Row style={{padding: 6}}>
                        <Col span={8}><label>Har du fri juleaftensdag?</label></Col>
                        <Col offset={1} span={1}><Switch checkedChildren="Ja" unCheckedChildren="Nej" defaultChecked={christmasOff} onChange={(val) => setChristmasOff(val)} /></Col>
                    </Row>
                    <Row  style={{padding: 6}}>
                        <Col span={8}><label>Har du fri nytårsaftensdag?</label></Col>
                        <Col  offset={1} span={1}><Switch checkedChildren="Ja" unCheckedChildren="Nej" defaultChecked={newYearsOff} onChange={(val) => setNewYearsOff(val)}  /></Col>
                    </Row>
                    <Row  style={{padding: 6}}>
                        <Col span={8}><label>Har du arbejdet på nogle af de normale helligdage?</label></Col>
                        <Col span={1} offset={1}><Button size="large" type={workSpecialDays == false ? "primary" : "default"} onClick={() => setWorkSpecialDays(false)} >Nej</Button></Col>
                        <Col span={1} offset={1}><Button size="large" type={workSpecialDays == true ? "primary" : "default"} onClick={() => setWorkSpecialDays(true)}>Ja</Button></Col>
                    </Row>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={20}>
                    {
                        workSpecialDays == false && (
                            <Alert 
                            message="Perfekt!"
                            style={{width: "100%"}}
                            description={`Vi lader være med at regne helligdage med`}
                            type="success"
                            showIcon
                          /> 
                        )
                    }
                     {
                        workSpecialDays == true && (
                            <>
                                <Row justify="start">
                                    <label>Vælg de dage du har arbejdet</label>
                                    <Col span={12} offset={5}>
                                        <Row gutter={[32,32]}>
                                        {
                                            offdays.map(day => {
                                                return (
                                                    <Day data={day} />
                                                );
                                            })
                                        }
                                        </Row>
                                    </Col>
                                </Row>
                            </>
                    )}
                </Col>
            </Row> 
        </>
    );
} 