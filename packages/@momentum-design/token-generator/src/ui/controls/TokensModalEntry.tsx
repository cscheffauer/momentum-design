/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ButtonPill, TextInput } from '@momentum-ui/react-collaboration';

interface Props {
    name: string;
    tokens: Record<string, any>;
    setTokensAction: (tokens: Record<string, any>) => void;
}

const TokensModalEntry = (props: Props) => {
  const { name, tokens, setTokensAction } = props;

  const handleUploadTokens = (e: any) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      const resultObject = JSON.parse(result);
      setTokensAction({ ...tokens, [name]: resultObject });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
    reader.readAsText(file);
  };

  const handleDelete = () => {
    const { [name]: _, ...rest } = tokens;
    setTokensAction(rest);
  };

  return (
    <div className="tokens-entry">
      <TextInput
        value={name}
        isDisabled
        placeholder="Type in the theme name"
      ></TextInput>
      <input
        className="upload-tokens-input"
        placeholder="Upload tokens"
        type="file"
        onChange={handleUploadTokens} />
      <ButtonPill className="delete-button" size={32} onPress={handleDelete}>Delete</ButtonPill>
    </div>
  );
};

export default TokensModalEntry;
