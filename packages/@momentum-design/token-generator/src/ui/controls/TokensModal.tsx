import React, { useState } from 'react';
import { ButtonCircle, ButtonPill, TextInput } from '@momentum-ui/react-collaboration';
import TokensModalEntry from './TokensModalEntry';

interface Props {
  tokens: Record<string, any>;
  toggleState: () => void;
  setTokensAction: (tokens: Record<string, any>) => void;
}

const TokensModal = (props: Props) => {
  const { toggleState, setTokensAction } = props;
  const [value, setValue] = useState('');

  const handleChange = (value) => {

  };

  const handleAdd = () => {
    setTokensAction({ [value]: {} });
    setValue('');
  };

  return (
    <>
      <div>
        <TextInput
          value={value}
          description="Type in the theme name"
          label="Theme tokens name"
          placeholder="Type in the theme name"
          onChange={handleChange}
        />
        <ButtonPill size={32} onPress={handleAdd}>Add</ButtonPill>
        <div>
          {Object.keys(props.tokens).map((key) => (
            <TokensModalEntry key={key} name={key} setTokensAction={setTokensAction} />))}
        </div>

      </div>
      <ButtonCircle className="close-button" onPress={toggleState} size={32}>X</ButtonCircle>
    </>
  );
};

export default TokensModal;
