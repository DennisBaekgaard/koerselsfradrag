import {useState} from 'react';
import {Row, Col, InputNumber, Alert} from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { homeWorkDaysState } from './states';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
export default () => {
    
    const [homeWorkDays, setHomeWorkDays] = useRecoilState(homeWorkDaysState);

    return (
        <>
            <Row>
                <Col>
                <Alert
                        message="Satans Corona..."
                        style={{width: "100%"}}
                        description={<p>Corona har gjort mange ikke har været så meget på arbejde som normalt. Danmark lukkede ned d. 11 Marts 2020, og var lukket frem til d. 30 Marts 2020.
                        Danmark lukkede delvist ned igen d. 7 December, og endnu mere ned d. 17 December og åbnede først delvist op igen d. 8 Februar. Dermed er der store udsving alt efter
                        hvor du har boet ift. hvor mange hjemmearbejdsdage du muligvis har haft. Har du generelt set været hjemsendt i lukkeperioden er det ca. <strong>13 dage i foråret</strong>, 
                        og <strong>25 dage i julen og start 2021</strong>.
                        Var du hjemsendt i minksagsperioden var det yderligere fra d. 7 November til d. 23 November, eller <strong>10 arbejdsdage</strong>. Total set er det <strong>48 arbejdsdage</strong> du kan have mistet.</p>}
                        type="info"
                        showIcon
                    />
                </Col>
            </Row>
            <Row justify="center">
                <Col span={20} style={{margin: 24}}>
                    <Row>
                        <Col span={6}><label>Hvor mange dage har du arbejdet hjemme fra?</label></Col>
                        <Col><InputNumber size="large" defaultValue={homeWorkDays} placeholder={"25"} style={{padding: "24px !important"}} onChange={(val) => setHomeWorkDays(val as number)} /> </Col>
                    </Row>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={20}>
                    { homeWorkDays  > 0 && homeWorkDays < 10 && (
                        <Alert
                        message="Fair nok..."
                        style={{width: "100%"}}
                        description="Men husk lige på de sikkert er virkeligt obs. på folk som forsøger at hente nogle 'gratis' dage"
                        type="warning"
                        showIcon
                      />
                    )}
                    {
                        homeWorkDays > 9 && (
                            <Alert
                            message="Perfekt!"
                            style={{width: "100%"}}
                            description={`Det tager vi med!`}
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