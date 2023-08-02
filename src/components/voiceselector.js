import React from 'react';

const VoiceSelector = ({ voices, selectedVoice, handleVoiceChange }) => {
  return (
    <div className="mt-4 flex gap-4">
      <div>
        <label>Yoruba Voices</label>
        <div className="w-36">
          <select className="" value={selectedVoice} onChange={handleVoiceChange}>
            <option value="">Choose Voice</option>
            {voices.yorubaVoices.map((voice) => (
              <option key={voice.Id} value={voice.Id}>
                {voice.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label>Igbo Voices</label>
        <div className="w-36">
          <select className="" value={selectedVoice} onChange={handleVoiceChange}>
            <option value="">Choose Voice</option>
            {voices.igboVoices.map((voice) => (
              <option key={voice.Id} value={voice.Id}>
                {voice.Name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default VoiceSelector;
