import { useState } from 'react';
import './App.css';
import { Row, Col, Button } from 'antd';
import Calculator from './Calculator';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {ArrowRightOutlined, CarOutlined } from '@ant-design/icons';

const kilometerState = atom({
  key: 'kilometerState',
  default: 0,
});

function App() {

  const [started, setStarted] = useState(false);

  return (
    <RecoilRoot>
      <Row align="middle" justify="center">
        <Col>
          <h1>Beregn dit kørselsfradrag</h1>
        </Col>
      </Row>
      { !started ? (
        <>
          <Row justify="center">
            <Col>
              <CarOutlined className="car" />
            </Col>
          </Row>
          <Row align="middle" justify="center">
            <Col span={10}>
              <p>
                2020 har været et mærkeligt år, og det kan være svært at vide hvor meget man nu lige kørte til og fra arbejde. 
                <br /><br/>Her er der en simpel udregner som hjælper dig på rette vej, så du både får det fradrag du er berettiget til, men også passer på ikke at få et skattesmæk.
                <br/><br/>Eller, måske er det bare en hjælp til lige at regne ud hvor mange penge du får i hænderne for dit fradrag.
              </p>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
            <Button size="large" type="primary" onClick={() => setStarted(true)} icon={<ArrowRightOutlined/>}>Start</Button>
            </Col>
          </Row>
        </>
      ) :
      <Row justify="center" align="top" >
        <Col span={20}>
          <Calculator />
        </Col>
      </Row>
      }
    </RecoilRoot>
  ); 
}

export default App;
