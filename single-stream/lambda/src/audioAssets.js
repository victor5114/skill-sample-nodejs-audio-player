'use strict';

let en = {
    card : {
        title: 'In Medias Res Radio',
        subtitle: 'Less bla bla, more la la',
        cardContent: "Visit our web site https://imr.party",
        image: {
            largeImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-1200.png',
            smallImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-720.png'
        }
    },
    url: 'https://streamer.radio.co/s84d80ac35/listen'
    // startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'    
};

let de = { // TODO add german translation
    card : {
        title: 'In Medias Res Radio',
        subtitle: 'Less bla bla, more la la',
        cardContent: "Visit our web site https://imr.party",
        image: {
            largeImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-1200.png',
            smallImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-720.png'
        }
    },
    url: 'https://streamer.radio.co/s84d80ac35/listen'
    // startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'        
} 

let globalAudioData = {
    'en-US': en,
    'en-GB': en,
    'en-CA': en,
    'en-IN': en,
    'en-AU': en,
    'de-DE': de
};

function audioData(request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = request === undefined ? DEFAULT_LOCALE : request.locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

module.exports = audioData;
