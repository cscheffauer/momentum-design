/* eslint-disable no-restricted-globals */
import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { Button, Row, SectionHeader } from '../../components';
import TextArea from '../../components/TextArea/TextArea';
import { saveSettingsToStorage } from '../../utils/plugin';
import './Settings.css';
import { CONSTANTS as SETTINGS_CONSTANTS } from '../../../shared/settings-constants';

interface Props {
  settings: any;
  setSettings: any;
  storage: any;
  setStorage: any;
}
function Settings({ settings, setSettings, storage }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const settingsTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const gitTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [saving, setIsSaving] = useState<boolean | Error | any>(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsSaving(true);
    let settings = {};
    let git = {};
    try {
      if (settingsTextareaRef.current?.value) {
        settings = JSON.parse(settingsTextareaRef.current.value);
      }
      if (gitTextareaRef.current?.value) {
        git = JSON.parse(gitTextareaRef.current.value);
      }
    } catch (e) {
      setIsSaving(e);
      throw e;
    }
    const newSettings = { ...settings, ...git };
    setSettings(newSettings);
    saveSettingsToStorage(parent, newSettings);
    setIsEditing(false);
    setIsSaving(false);
  };

  const handleRestore = () => {
    const newSettings = { ...SETTINGS_CONSTANTS.INITIAL_SETTINGS, ...SETTINGS_CONSTANTS.SYNC_SETTINGS };
    setSettings(newSettings);
    saveSettingsToStorage(parent, newSettings);
  };

  return (
    <div className="settings">
      <Row>
        <SectionHeader>Current settings</SectionHeader>
      </Row>
      <div className="settings-area">
        <label>
          Settings
          <TextArea disabled={!isEditing} ref={settingsTextareaRef} value={settings} />
        </label>
      </div>
      <div className="settings-area">
        <label>
          Github
          <TextArea disabled={!isEditing} ref={gitTextareaRef} value={{ git: settings.git }} />
        </label>
      </div>
      <Row>
        <Button className="action-button" disabled={isEditing} onClick={handleEdit}>
          Edit
        </Button>
        <Button className="action-button" disabled={!isEditing || !!saving} onClick={handleSave}>
          Save
        </Button>
        <Button
          disabled={storage === 'inprogress'}
          className={classnames('action-button', 'right-align-button')}
          onClick={handleRestore}
        >
          Restore default settings
        </Button>
      </Row>
      {saving?.message ? (<Row><p>{saving.message}</p></Row>) : null}
    </div>
  );
}

export default Settings;
