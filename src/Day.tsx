import {useState} from 'react';
import {Col, Button} from 'antd';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import { daysOffState } from './states';

function replaceItemAtIndex(arr: any, index: number, newValue: any) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

export default (props: { data: {title: string; selected: boolean;}}) => {

    const [offdays, setOffDays] = useRecoilState(daysOffState); 

    return (
        <Col flex={1}>
            <Button style={{width: "250px"}} block type={offdays.find(x => x.title == props.data.title)?.selected ? "primary" : "default"} 
        onClick={() => {

            let dayData = offdays.find(x => x.title == props.data.title)!;
            const newData = replaceItemAtIndex(offdays, offdays.indexOf(dayData), { title: dayData.title, selected: !dayData.selected })
            setOffDays(newData);
        }}>
            {props.data.title}
            </Button></Col>
    );
}