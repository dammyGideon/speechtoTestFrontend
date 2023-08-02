import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const BASE_URL = "http://3.15.235.189"; // Set your base URL here

  const [voices, setVoices] = useState([]);
  const [hause,setHause] = useState([]);
  const [nigeriaVoice, setNigeriaVoice] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [textToRead, setTextToRead] = useState("");

  useEffect(() => {
    fetchVoices();
    fetchNigerianVoice();
    fetchNigerianAda();
  }, []);

  const fetchVoices = async () => {
    try {
      const response = await fetch(`${BASE_URL}/voices`);
      const data = await response.json();
      setVoices(data.voices);
    } catch (error) {
      console.error("Error fetching voices:", error);
    }
  };

  const fetchNigerianVoice = async () => {
    try {
      const response = await fetch(`${BASE_URL}/nigeria`);
      const data = await response.json();
      setNigeriaVoice(data.voices);
    } catch (error) {
      console.error("Error fetching Nigerian voices:", error);
    }
  };
  const fetchNigerianAda = async ()=> {
    try{

      const response = await fetch(`${BASE_URL}/hause`);
      const data = await response.json();
      setHause(data.voices);

    }catch(error){
      console.error("Error fetching voices:", error);
    }
  }
  const handleVoiceChange = (event) => {
    setSelectedVoice(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!textToRead.trim()) {
        // Check if the textarea is empty or contains only spaces
        alert("Please enter some text before submitting.");
        return;
      }

      const formData = new FormData();
      formData.append("text_to_read", textToRead);
      formData.append("voice_id", selectedVoice);

      const response = await axios.post(
        `${BASE_URL}/text`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const audioData = response.data.audio;
      // Create an audio element and play the audio
      const audio = new Audio(`data:audio/mpeg;base64,${audioData}`);
      audio.play();
    } catch (error) {
      console.error("Error converting text to speech:", error);
    }
  };

  return (
    <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
      <div>
        <h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">Dashboard</h1>
      </div>

      <div className="bg-white p-4 shadow-md rounded-md">
        <form>
          <div className="text-xl font-semibold mb-4">Enter Text to Read</div>
          <textarea
            className="border border-gray-300 p-2 rounded-md w-full h-40"
            placeholder="Enter your text here..."
            onChange={(e) => setTextToRead(e.target.value)}
          ></textarea>

          <div className="mt-4 flex gap-4">
            <div>
              <label>Yoruba</label>
              <div className="w-36">
                <select className="" onChange={handleVoiceChange}>
                  <option value="">Choose Voice</option>
                  {voices.map((voice) => (
                    <option key={voice.Id} value={voice.Id}>
                      {voice.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label>Igbo Voices</label>
              <div className="w-36">
                <select className="" onChange={handleVoiceChange}>
                  <option value="">Choose Voice</option>
                  {nigeriaVoice.map((voice) => (
                    <option key={voice.Id} value={voice.Id}>
                      {voice.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label>Hause Voices</label>
              <div className="w-36">
                <select className="" onChange={handleVoiceChange}>
                  <option value="">Choose Voice</option>
                  {hause.map((voice) => (
                    <option key={voice.Id} value={voice.Id}>
                      {voice.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>  



          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md" type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
