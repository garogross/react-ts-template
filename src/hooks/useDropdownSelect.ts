import React, {useEffect, useRef, useState} from "react";
import {onClickOutSide} from "../utils/functions/onClickOutSide";
import {ISelectValue} from "../models/UI/ISelectValue";

export interface UseDropdownSelectProps {
    onChange: (val: string | string[]) => void,
    valuesArr: ISelectValue[],
    selectedChild?: string,
    disableState?: boolean,
    name: string,
    isWithInput?: boolean,
    isMultiSelect?: true | false,
    selectedValueProp?: string
}

export function useDropdownSelect (props: UseDropdownSelectProps)  {
    const {
        onChange,
        selectedValueProp,
        valuesArr,
        selectedChild,
        disableState,
        name,
        isMultiSelect,
        isWithInput
    } = props

    const selectedRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)

    const [selectedValue, setSelectedValue] = useState<string | string[]>(selectedValueProp ? selectedValueProp : isMultiSelect ? [] : '')
    const [dropDownOpened, setDropDownOpened] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [sortedArrCopy, setSortedArrCopy] = useState<ISelectValue[]>([])
    const [searchValue, setSearchValue] = useState<string>(name || '')

    useEffect(() => {
        onClickOutSide([selectedRef], oncloseDropdowns, dropDownOpened)
        if (!dropDownOpened) {
            if (Array.isArray(selectedValue)) { // isMultiSelect
                setSearchValue(selectedValue.length ? selectedValue.join() : name)
            } else {
                setSearchValue(selectedValue ? selectedValue : name)
            }
        }
        if (!dropDownOpened) setSortedArrCopy(sortedArr.slice())
    }, [dropDownOpened])

    useEffect(() => {
        onChange(selectedValue)
    }, [selectedValue])


    useEffect(() => {
        if (typeof disableState === 'boolean') {
            setDisabled(disableState)
            setSelectedValue('')
        }
    }, [disableState])

    const onToggleDropdowns = () => {
        if (!disabled) {
            setDropDownOpened(prevState => !prevState)
            if (!dropDownOpened && searchInputRef?.current) {
                setSearchValue('')
                searchInputRef.current.focus()
            }
        }
    }

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const oncloseDropdowns = () => {
        setDropDownOpened(false)
    }

    const onChangeSelectValues = (value: string) => {
        if (isMultiSelect) {
            setSelectedValue(prevState => {
                if(Array.isArray(prevState)) {
                    return prevState.includes(value) ? prevState.filter(item => item !== value) : [...prevState, value]
                } else {
                    return prevState
                }
            })
        } else {
            setSelectedValue(value)
            oncloseDropdowns()
        }

    }

    const valuesFiltered = selectedValueProp ? valuesArr.filter(item => item.value !== selectedValue) : valuesArr

    const dropdownContentArr = valuesFiltered
    const sortedArr = [
        ...dropdownContentArr.filter(item => selectedValue.includes(item.value)),
        ...dropdownContentArr.filter(item => !selectedValue.includes(item.value))
    ]
    let sortedContentArr = isMultiSelect ? sortedArrCopy : dropdownContentArr
    let btnText;
    if (!Array.isArray(selectedValue)) {
        if (selectedChild) {
            btnText = selectedChild
        } else if (!selectedChild && selectedValue) {
            btnText = selectedValue[0]?.toUpperCase() + selectedValue?.slice(1)
        } else {
            btnText = name
        }
    } else {
        if (selectedValue?.length) {
            btnText = selectedValue.join()
        } else {
            btnText = name
        }
    }

    const finalContent = isWithInput ? sortedContentArr.filter(item => item.item.toLowerCase().includes(searchValue.toLowerCase())) : sortedContentArr

    return {
        selectedRef,
        dropDownOpened,
        disabled,
        onToggleDropdowns,
        oncloseDropdowns,
        onChangeSelectValues,
        btnText,
        selectedValue,
        sortedContentArr: finalContent,
        searchInputRef,
        onSearch,
        searchValue
    }

}