import React from 'react';
import { ButtonPill, TextInput } from '@momentum-ui/react-collaboration';

interface Props {
    name: string;
    setTokensAction: (tokens: Record<string, any>) => void;
}
const TokensModalEntry = (props: Props) => {
  const { name, setTokensAction } = props;

  const handleUploadTokens = (e: any) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      const resultObject = JSON.parse(result);
      setTokensAction({ name: resultObject });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
    reader.readAsText(file);
  };

  const handleDelete = () => {
    setTokensAction({ name: {} });
  };

  return (
    <div>
      <TextInput>{name}</TextInput>
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
