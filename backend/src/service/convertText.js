const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const crypto = require('crypto');
const fs = require('fs');
const db = require('../db');

const convert = (txt,callback) => {

  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({apikey: "your api key here :)" }),
    serviceUrl: 'https://api.us-east.text-to-speech.watson.cloud.ibm.com'
  });

  const params = {
      text: `${txt}`,
      voice: 'en-US_AllisonVoice', // Optional voice
      accept: 'audio/wav'
  };

  textToSpeech.synthesize(params).then(response => {
    const audio = response.result;
    return textToSpeech.repairWavHeaderStream(audio);
  })
  .then(repairedFile => {
    let nameAudio = crypto.randomBytes(11).toString('hex');
    fs.writeFileSync(`${__dirname}/../../public/audios/${nameAudio}.wav`, repairedFile, function(err){
      if (err) throw err;
    })
    const dbaudio = `${nameAudio}.wav`
    db.create(txt, dbaudio)
    callback(dbaudio)
  })
  .catch(err => {
    return err;
  });
}

module.exports = convert

