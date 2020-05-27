import React from "react";

import UIFX from "uifx";
import crashSong from "./sounds/crash.mp3"
import kickBass from "./sounds/kick-bass.mp3"
import snareSong from "./sounds/snare.mp3"
import tom1Song from "./sounds/tom-1.mp3"
import tom2Song from "./sounds/tom-2.mp3"
import tom3Song from "./sounds/tom-3.mp3"
import tom4Song from "./sounds/tom-4.mp3"
function Drum() {
   
  function handlePress(e) {
   var newKey = e.key;
   switch (newKey) {
    case "w" :
       handleClick1();
       break;
    case "a" :
       handleClick2();
       break;
    case "s" :
       handleClick3();
       break;
    case "d" :
       handleClick4();
       break;
    case "j" :
       handleClick5();
       break;
    case "k" :
       handleClick6();
       break;
    case "l" :
       handleClick7();
       break;

    default: console.log(newKey)
   }

  }
   
    function handleClick1() {
      var Crash = new UIFX(crashSong)
      Crash.play()
      }

    function handleClick2() {
      var bass = new UIFX(kickBass)
      bass.play()
    }

    function handleClick3() {
      var snare = new UIFX(snareSong)
      snare.play()
    }

    function handleClick4() {
      var tom1 = new UIFX(tom1Song)
      tom1.play()
    }

    function handleClick5() {
      var tom2 = new UIFX(tom2Song)
      tom2.play()
    }

    function handleClick6() {
      var tom3 = new UIFX(tom3Song)
      tom3.play()
   }

    function handleClick7() {
      var tom4 = new UIFX(tom4Song)
      tom4.play()
    }


    return <div className="set">
  <button onKeyDown={handlePress} onClick={handleClick1} className="w drum">w</button>
  <button onKeyDown={handlePress} onClick={handleClick2} className="a drum">a</button>
  <button onKeyDown={handlePress} onClick={handleClick3} className="s drum">s</button>
  <button onKeyDown={handlePress} onClick={handleClick4} className="d drum">d</button>
  <button onKeyDown={handlePress} onClick={handleClick5} className="j drum">j</button>
  <button onKeyDown={handlePress} onClick={handleClick6} className="k drum">k</button>
  <button onKeyDown={handlePress} onClick={handleClick7} className="l drum">l</button>
    </div>
}

export default Drum;