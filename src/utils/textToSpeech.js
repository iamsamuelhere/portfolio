const textToSpeech = (plainText)=>{
    const speechSynthesisUtterance = 
    window.webkitSpeechSynthesisUtterance ||
    window.mozSpeechSynthesisUtterance ||
    window.msSpeechSynthesisUtterance ||
    window.oSpeechSynthesisUtterance ||
    window.SpeechSynthesisUtterance;
 
    let speechInstance = new speechSynthesisUtterance(plainText);
    window.speechSynthesis.speak(speechInstance);
 }

 export default textToSpeech;