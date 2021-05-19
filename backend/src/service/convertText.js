const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const crypto = require('crypto');
const fs = require('fs');
const db = require('../db');

const convert = (txt,callback) => {

  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({apikey: "jl_zlcK9N4yjDSjTCv8-amh9cd6PoDloyFW7Z_x-61R-" }),
    serviceUrl: 'https://api.us-east.text-to-speech.watson.cloud.ibm.com'
  });

  const params = {
      text: `${txt}`,
      voice: 'en-US_AllisonVoice', // Optional voice
      accept: 'audio/wav'
  };

  textToSpeech.synthesize(params).then(response => {
    const audio = response.result;
    console.log("sucesso");
    return textToSpeech.repairWavHeaderStream(audio);
  })
  .then(repairedFile => {
    let nameAudio = crypto.randomBytes(11).toString('hex');
    fs.writeFileSync(`${__dirname}/../../public/audios/${nameAudio}.wav`, repairedFile, function(err){
      if (err) throw err;
      console.log('Saved!');    
    })
    const dbaudio = `${nameAudio}.wav`
    db.create(txt, dbaudio)
    callback(dbaudio)
    console.log('audio.wav written with a corrected wav header');
  })
  .catch(err => {
    console.log(err);
  });
}

module.exports = convert

