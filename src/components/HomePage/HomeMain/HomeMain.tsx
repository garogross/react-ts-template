import React, {FC, useState} from 'react';

import styles from "./HomeMain.module.scss"
import InputDef from "../../layout/InputDef/InputDef";
import Accordion from "../../layout/Accordion/Accordion";
import Checkbox from "../../layout/Checkbox/Checkbox";
import RadioList from "../../layout/RadioList/RadioList";
import Select from "../../layout/Select/Select";
import Svg from "../../layout/Svg/Svg";
import {testIcon} from "../../../assets/svg";
import {ISelectValue} from "../../../models/UI/ISelectValue";

const valuesArr: ISelectValue[]  = [
    {
        item: "select1",
        value: "select1"
    },
    {
        item: "select2",
        value: "select2"
    },
    {
        item: "select3",
        value: "select3"
    },
    {
        item: "select4",
        value: "select4"
    },
    {
        item: "select5",
        value: "select5"
    },
    {
        item: "select6",
        value: "select6"
    },
]

const HomeMain:FC = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [checkboxChecked,setCheckboxChecked] = useState<boolean>(false)
    const [radioValue,setRadioValue] = useState<string>('value1')
    const [selectedMessage,setSelectedMessage] = useState<string>('select1')
    const [selectedMessages,setSelectedMessages] = useState<string[]>(['select1'])
    const [isAccordionActive,setIsAccordionActive] = useState<boolean>(false)

    const typesArr = [
        {
            value: 'value1',
            label: 'label1'
        },
        {
            value: 'value2',
            label: 'label2'
        },
        {
            value: 'value3',
            label: 'label3'
        },
    ]


    return (
        <div className={'container'}>
            <Svg id={testIcon}/>
            <div className={styles["homeMain__slider"]}>
                <h2 className={`${styles["homeMain__sliderTitle"]} titleDef`}>Slider</h2>
            </div>
            <br/><br/>
            <InputDef
                name='first_name'
                value={inputValue}
                errorProp={""}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder={'Input'}
            />
            <br/><br/>
            <Accordion
                title={'Accordion'}
                isActive={isAccordionActive}
                onToggle={() => setIsAccordionActive(prevState => !prevState)}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rerum!
            </Accordion>
            <br/><br/>
            <Checkbox
                onChange={e => setCheckboxChecked(e.target.checked)}
                name='customer_code'
                value='new'
                checked={checkboxChecked}
            >Chekbox</Checkbox>

            <br/><br/><br/>

            <RadioList
                checked={radioValue}
                arr={typesArr}
                name={'type'}
                onChange={(e) => setRadioValue(e.target.value)}
            />

            <br/><br/><br/>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                gap: '20px'
            }}>
                <Select
                    valuesArr={valuesArr}
                    onChange={(value) => setSelectedMessage(value as string)}
                    name={'Select Test Language'}
                />
                <Select
                    valuesArr={valuesArr}
                    onChange={(value) => setSelectedMessages(value as string[])}
                    name={'Select Test Language'}
                    isMultiSelect={true}
                    isWithInput={true}
                />
            </div>
        </div>
    );
}

export default HomeMain;