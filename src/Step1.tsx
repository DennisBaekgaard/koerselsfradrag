import {useState, useEffect} from 'react';
import {Row, Col, Input, Switch, Alert} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import { highRateState, kilometerState } from './states';


export default () => {
    
    const [kilometers, setKilometers] = useRecoilState(kilometerState);
    const [highRate, setHighRate] = useRecoilState(highRateState);
    return (
        <>
            <Row justify="center">
                <Col span={20} style={{margin: 24}}>
                    <label>Hvor langt har du til arbejde hver dag?</label>
                    <Input size="large" defaultValue={kilometers} placeholder={"indtast kilometer"} style={{padding: "24px !important"}} addonAfter="km" onChange={(val) => {
                        let value = parseInt(val.target.value, 10);
                        if(typeof value == "number") {
                            setKilometers(value);
                            console.log("setting number" + value);
                        } else {
                            setKilometers(0);
                        }
                    }}  /> 
                </Col>
            </Row>
            {
            kilometers*2 > 120 && (
                <Row>
                    <Col span={20} offset={2}>
                        <Row justify="start">
                            <Row style={{padding: 6}}>
                            <Col span={20}><label>Du har langt til arbejde - bor du i en yderkommune?</label></Col>
                            <Col offset={1} span={1}><Switch checkedChildren="Ja" unCheckedChildren="Nej" defaultChecked={highRate} onChange={(val) => setHighRate(val)} /></Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            )
            }
            <Row justify="center">
                <Col span={20}>
                    { kilometers  > 0 && kilometers < 12 && (
                        <Alert
                        message="Desværre..."
                        style={{width: "100%"}}
                        description="Du skal køre mindst 12 kilometer hver vej, for at være berettiget til kørselsfradrag"
                        type="warning"
                        showIcon
                      />
                    )}
                    {
                        kilometers >= 12 && (
                            <Alert
                            message="Perfekt!"
                            style={{width: "100%", marginTop: 24}}
                            description={`Du har ${kilometers*2}km til og fra arbejde hver dag.`}
                            type="success"
                            showIcon
                          /> 
                        )
                    }
                    {
                        kilometers > 60 && (
                            <Alert
                            message="Bemærk!"
                            style={{width: "100%", marginTop: 24}}
                            description={`Du har ${kilometers*2}km til og fra arbejde hver dag. - Det betyder din sats er 0,98 for hver kilometer over de 120 hvis du bor i en yderkommune`}
                            type="warning"
                            showIcon
                          /> 
                        )
                    }
                </Col>
            </Row>
        </>
    );
} 