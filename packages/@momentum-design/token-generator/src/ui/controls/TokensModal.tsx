import React, { useState } from 'react';
import { ButtonCircle, ButtonPill, TextInput } from '@momentum-ui/react-collaboration';
import TokensModalEntry from './TokensModalEntry';

interface Props {
  tokens: Record<string, any>;
  toggleState: () => void;
  setTokensAction: (tokens: Record<string, any>) => void;
}

const TokensModal = (props: Props) => {
  const { toggleState, setTokensAction, tokens } = props;
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleAdd = () => {
    setTokensAction({ ...tokens, [value]: {} });
    setValue('');
  };

  return (
    <>
      <ButtonCircle className="close-button" onPress={toggleState} size={32}>X</ButtonCircle>
      <div className="tokens-modal-wrapper">
        <div className="tokens-add-wrapper">
          <TextInput
            value={value}
            label="Theme tokens name"
            placeholder="Type in the theme name"
            onChange={handleChange}
            className="tokens-add-input"
          />
          <ButtonPill size={32} onPress={handleAdd} className="tokens-add-button">Add</ButtonPill>
        </div>
        <div>
          {Object.keys(tokens).map((key) => (
            <TokensModalEntry
              key={key}
              name={key}
              tokens={tokens}
              setTokensAction={setTokensAction}
            />))}
        </div>
      </div>
    </>
  );
};

export default TokensModal;
