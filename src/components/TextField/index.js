import React, { useState } from "react"
import styled from "styled-components"
import { SearchIcon } from "../Icons"

const TextFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  border-bottom: ${props =>
    props.selected
      ? "2px solid var(--textLink);"
      : "1px solid var(--textNormal);"};
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledInput = styled.input`
  width: ${props => (props.showHide ? "90%" : "100%")};
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--textNormal);
  font-size: ${props => (props.isLarge ? "34px" : "18px")};
  font-weight: ${props => (props.isBold ? "bold" : "normal")};

  min-height: 45px;
  outline: none;
`

const LeftIconWrapper = styled.div`
  margin-right: 10px;
  margin-top: 6px;
`

const TextField = ({
  search,
  value,
  placeholder,
  id,
  type,
  children,
  isHoverLabelVisible,
  isHoverLabelDisabled,
  handleChange,
  handleSubmit,
  name,

  ...props
}) => {
  const updateParentFormFieldValue = event => {
    if (handleChange) {
      handleChange(event.target.value)
    }
  }

  const [selected, setSelected] = useState(false)

  return (
    <TextFieldWrapper selected={selected}>
      {isHoverLabelDisabled ? (
        <></>
      ) : (
        <>
          {value.length && isHoverLabelVisible ? (
            <p
              css={`
                color: grey;
              `}
            >
              {placeholder}
            </p>
          ) : (
            <p
              css={`
                color: transparent;
              `}
            >
              {placeholder}
            </p>
          )}
        </>
      )}

      <InputWrapper>
        {search && (
          <LeftIconWrapper>
            <SearchIcon />
          </LeftIconWrapper>
        )}
        <StyledInput
          autoFocus // eslint-disable-line
          {...props}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          name={name}
          onChange={updateParentFormFieldValue}
          onFocus={() => {
            setSelected(true)
          }}
          onBlur={() => {
            setSelected(false)
          }}
        />
      </InputWrapper>
      {children}
    </TextFieldWrapper>
  )
}

export default TextField
