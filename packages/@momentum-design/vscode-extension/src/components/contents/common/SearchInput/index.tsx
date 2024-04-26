import { ReactElement, useRef } from 'react';
import classnames from 'classnames';

import { ButtonSimple, LoadingSpinner } from '@momentum-ui/react-collaboration';
import { Props } from './SearchInput.types';
import './SearchInput.css';
import { useSearchField } from '@react-aria/searchfield';
import { useSearchFieldState } from '@react-stately/searchfield';
import { useFocusState } from './useFocusState';
import Search from "@momentum-design/icons/dist/svg/search-regular.svg?react";
import Cancel from "@momentum-design/icons/dist/svg/cancel-regular.svg?react";

/**
 *  Search input
 */
const SearchInput = (props: Props): ReactElement => {
  const {
    className,
    id,
    style,
    searching,
    clearButtonAriaLabel,
    label,
    isDisabled,
  } = props;
  const state = useSearchFieldState(props);
  const componentRef = useRef<HTMLInputElement>(null);
  const inputRef = componentRef;
  const { focusProps, isFocused } = useFocusState(props);

  const { inputProps, clearButtonProps, labelProps } = useSearchField(props, state, inputRef);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={classnames(className, "searchInputWrapper")}
      id={id}
      onClick={handleClick}
      style={style}
      data-disabled={isDisabled}
      data-focus={isFocused}
      data-height="2rem"
    >
      {label && (
        <label htmlFor={labelProps.htmlFor} {...labelProps}>
          {label}
        </label>
      )}
      <div>
        {searching ? (
          <LoadingSpinner scale={16} className={"searchInputLoading"} />
        ) : (
          <Search
            className="searchInputSearchIcon"
          />
        )}
      </div>
      <div className="searchInputContainer">
        <input {...inputProps} {...focusProps} ref={inputRef} />
      </div>
      {!!state.value && !isDisabled && (
        <ButtonSimple
          className="searchInputClearButton"
          {...clearButtonProps}
          aria-label={clearButtonAriaLabel}
        >
          <Cancel className="searchInputClearIcon" />
        </ButtonSimple>
      )}
    </div>
  );
};

export default SearchInput;