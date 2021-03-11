import {useState, useEffect} from 'react';
import { Steps, Row, Col, Button } from 'antd';

import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined, CarOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
const { Step } = Steps;

const steps = [
  {
    title: 'Hvor langt kører du?',
    content: 'First-content',
  },
  {
    title: 'Har du arbejdet på nogle helligdage?',
    content: 'Second-content',
  },
  {
    title: 'Hvor meget ferie har du haft?',
    content: 'Last-content',
  },
  {
    title: 'Hvor mange dage har du arbejdet hjemmefra?',
    content: "shit"
  },
  {
    title: 'Har du været syg?',
    content: "shit"
  }
];
export default () => {
    const [currentStep, setCurrent] = useState(0);
    const [currentApp, setCurrentApp] = useState(<Step1 />);

    useEffect(() => {
        switch(currentStep){
            case 0:
                setCurrentApp(<Step1 />);
                break;
            case 1:
                setCurrentApp(<Step2 />);
                break;
            case 2:
                setCurrentApp(<Step3 />);
                break;
            case 3:
                setCurrentApp(<Step4 />);
                break;
            case 4:
                setCurrentApp(<Step5 />);
                break;
            case 5:
                setCurrentApp(<Step6 />);
                break;
            default:
                setCurrentApp(<Step1 />);
        }
    }, [currentStep])

    return (
        <>
            <Row>
                <Col span={24}>
                    <Steps current={currentStep}> 
                        {steps.map(item => (
                        <Step key={item.title} description={item.title} />
                        ))}
                    </Steps>
                </Col>
            </Row>
            <Row justify="start"> 
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <div style={{margin: 50}}>
                                {currentApp}
                            </div>
                        </Col>
                    </Row>
                    <Row justify="start">
                        { currentStep < 4 &&(
                         <>
                         <Col span={2} offset={1}>
                                <Button type="primary" onClick={() => setCurrent(currentStep-1)}>Forrige</Button>
                            </Col>
                            <Col span={2} offset={22}>
                                <Button onClick={() => setCurrent(currentStep + 1)} type="primary">Næste</Button>
                            </Col>
                        </>
                        )}
                        {
                            currentStep == 4 && (
                                <Col span={2} offset={22}>
                                    <Button onClick={() => setCurrent(currentStep + 1)} type="primary">Færdiggør</Button>
                                </Col>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </>
    );
}