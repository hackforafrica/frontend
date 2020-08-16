import React from 'react';
import AppForRecord from './AppForRecord';
import './StyleForRecorder.css';
function Record() {
 //bootstrap link on the index.html file
 //script tags in index.html
 // PUT THE JS CODE HERE
 return (
  <div>
   <h1>Simple Recorder.js demo</h1>
   <div id="controls">
  	 <button id="recordButton">Record</button>
  	 <button id="stopButton" disabled>Stop</button>
   </div>
   <div id="formats">Format: start recording to see sample rate</div>
   <p><strong>Recordings:</strong></p>
   <ol id="recordingsList"></ol>
   
  </div>
 )
}

export default Record
