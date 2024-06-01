import {useDropdownSelect, UseDropdownSelectProps} from "../../../hooks/useDropdownSelect";

import Svg from "../Svg/Svg";
import TransitionProvider, {TransitionStyleTypes} from "../../../providers/TransitionProvider";
import Checkbox from "../Checkbox/Checkbox";

import styles from "./Select.module.scss";
import {arrowDownIcon} from "../../../assets/svg";
import {FC, HTMLAttributes} from "react";

interface SelectProps extends UseDropdownSelectProps {
    className?: string,
    attributes?: HTMLAttributes<any>,
}

const Select:FC<SelectProps> = ({
                    name,
                    valuesArr,
                    onChange,
                    className,
                    attributes,
                    disableState,
                    selectedValueProp,
                    selectedChild,
                    isMultiSelect,
                    isWithInput
                }) => {
    const {
        selectedRef,
        dropDownOpened,
        disabled,
        onToggleDropdowns,
        onChangeSelectValues,
        btnText,
        selectedValue,
        sortedContentArr,
        searchInputRef,
        onSearch,
        searchValue,
    } = useDropdownSelect(
        {
            onChange,
            selectedValueProp,
            valuesArr,
            selectedChild,
            disableState,
            name,
            isMultiSelect,
            isWithInput,
        })


    return (
        <div
            title={name || ''}
            ref={selectedRef}
            className={`${styles["select"]} ${className ? className : ''} ${disabled ? styles["select_disabled"] : ''}`}>
            <div
                className={`${styles["select__dropDownBtn"]}`}
                onClick={onToggleDropdowns}>
                <div className={styles['select__dropDownBtnContent']}>
                    {
                        isWithInput ?
                            <input
                                type="text"
                                className={styles["select__selectDropdownBtnInput"]}
                                ref={searchInputRef}
                                value={searchValue}
                                onChange={onSearch}
                            /> :
                            <span className={styles["select__selectDropdownBtnText"]}>{btnText}</span>

                    }
                    {!disabled && <Svg
                        className={`${styles['select__arrowDownIcon']} ${dropDownOpened ? styles['select__arrowDownIcon_active'] : ''}`}
                        id={arrowDownIcon}/>}
                </div>
            </div>
            <TransitionProvider
                inProp={dropDownOpened}
                style={TransitionStyleTypes.opacity}
                duration={100}
                className={styles["select__dropdownContent"]}
            >
                    <div
                        className={`${styles["select__dropdownContentItems"]} scrollbarDef`}>
                        {
                            sortedContentArr.map((item, index) => {
                                const itemContent = item.item
                                const itemValue = item.value
                                return (
                                    <div
                                        {...attributes}
                                        key={index}
                                        className={styles["select__dropdownItem"]}
                                        onClickCapture={() => onChangeSelectValues(itemValue)}
                                    >{
                                        isMultiSelect ? <>
                                                <Checkbox
                                                    value={itemValue}
                                                    name={'select'}
                                                    checked={selectedValue.includes(itemValue)}
                                                    onChange={() => onChangeSelectValues(itemValue)}
                                                    disableLabel={true}
                                                >
                                                    {itemContent}
                                                </Checkbox>
                                            </> :
                                            itemContent
                                    }</div>
                                )
                            })}
                    </div>
            </TransitionProvider>
        </div>
    )
}

export default Select;