import {useState} from 'react';
import {Row, Col, InputNumber, Alert} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { christmasOffState, daysOffState, kilometerState, newYearsOffState,vacationWeeksState, sickDaysState, homeWorkDaysState, highRateState } from './states';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';



export default () => {
    
    const [kilometers, setKilometers] = useRecoilState(kilometerState);
    const [offdays, setOffDays] = useRecoilState(daysOffState); 
    const [christmasOff, setChristmasOff] = useRecoilState(christmasOffState); 
    const [newYearsOff, setNewYearsOff] = useRecoilState(newYearsOffState); 
    const [vacationDays, setVacationDays] = useRecoilState(vacationWeeksState);
    const [sickDays, setSickDays] = useRecoilState(sickDaysState);
    const [homeWorkDays, setHomeWorkDays] = useRecoilState(homeWorkDaysState);
    
    const [highRate, setHighRate] = useRecoilState(highRateState);

    const totalWorkDays = 254;
    
    const holidays = () => {
        return ( 0 +
            (christmasOff == true ? 1 : 0)
                + (newYearsOff == true ? 1 : 0)
                + offdays.filter(x => x.selected == true).length
        );
    }

    const calculateWorkDays = () => {

        return ( 
            totalWorkDays - holidays() - vacationDays - sickDays - homeWorkDays
        );
    }

    const calculateDeduction = () => {
        
        if(kilometers > 60) return 1.96*kilometers*actualWorkDays;
        
        let highRate = 120 * 1.96 * actualWorkDays;
        let lowRate = (kilometers - 60) * 0.98 * actualWorkDays; 
        
        return highRate+lowRate;
    }
    
    let actualWorkDays = calculateWorkDays();

    return (
        <>
            <Row justify="center">
                <Col span={20} style={{margin: 24}}>
                    <h1>Udregning</h1>
                </Col>
            </Row> 
            <Row justify="center">
                <Col span={20}>
                    <Row>
                        <Col span={10}>Totale arbejdsdage</Col>
                        <Col span={10}><strong>{totalWorkDays}</strong> dage</Col>
                    </Row>
                    <Row>
                        <Col span={10}>Dine arbejdsdage</Col>
                        <Col span={10}><strong>{actualWorkDays}</strong> dage</Col>
                    </Row>
                    <Row>
                        <Col span={10}>Helligdage/Fridage</Col>
                        <Col span={10}><strong>{holidays()}</strong> dage</Col>
                    </Row>
                    <Row>
                        <Col span={10}>Feriedage</Col>
                        <Col span={10}><strong>{vacationDays}</strong> dage</Col>
                    </Row>
                    <Row>
                        <Col span={10}>Sygedage</Col>
                        <Col span={10}><strong>{sickDays}</strong> dage</Col>
                    </Row>
                    <Row>
                        <Col span={10}>Coronadage/Hjemmedage</Col>
                        <Col span={10}><strong>{homeWorkDays}</strong> dage</Col>
                    </Row>
                    <Row>
                        <Col span={10}>Kørte kilometer</Col>
                        <Col span={10}><strong>{kilometers*actualWorkDays}</strong>km</Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop: 24}} span={10}>Fradrag</Col>
                        <Col span={10}><strong>kr. {Math.round(calculateDeduction())}</strong></Col>
                    </Row>
                    <Row>
                        <Col span={10}>Penge i lommen</Col>
                        <Col span={10}>ca. <strong>kr. {Math.round(calculateDeduction()*0.26)}</strong></Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
} 