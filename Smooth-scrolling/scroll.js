//works with parcel , other local server except web server

import Scrollbar from 'smooth-scrollbar';

let options = {
    'damping':0.05,
    "alwaysShowTracks" : true,
}

let x = document.querySelector('.my-scrollbar')

Scrollbar.init( x , options);

