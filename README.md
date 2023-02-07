# PolisinT

[PolisinT](https://furiocolombo.github.io/zenyth_polisint/) is a semi-modular online polyphonic synthesizer available built using Tone.js, a JavaScript library for audio synthesis and composition and the framework Vue.

![Splash Image](https://github.com/FurioColombo/zenyth_polisint/blob/main/assets/zenith_polisint.png)

## Usage
We provide two solutions in order to use the PolisinT:
  - You can find it online [here](https://furiocolombo.github.io/zenyth_polisint/)
  - You can clone this repository and run it on your own machine. Once installed the needed [dependencies](#Dependencies), run the following command in the project folder:
  1. `npm run install`
  2. `npm run build` or `npm run serve` respectively for distribution or developement builds

## Concept

PolisinT is thought as a playful yet powerful tool to to discover modular synthesis. Its lighthearted exploration-based interface encourages the user to discover its functionalities by trying himself all blocks and routing options. PolisinT is for everyone and casual users can play the synth not only from an external midi controller, but even directly from screen or keyboard.

Offering articulate routing options was a priority, therefore both code and graphic architecture have a semi-modular architecture and some workarounds to cope with Tonejs elements.


## Features
PolisinT is roughly composed of six sections:

- Oscillators: 
  - Custom polyphony was implemented from scratch;
  - Four possible synthesis methods: additive, fm, am, fat
  - Four possible waveforms: sinusoid, triangule, sawtooth, square;
  - Controls: gain, pitch shift, pink noise level; 
  - Routing: each oscillator can be routed into each of the existing filter chains in parallel; 
  
- Filters:
  - Three parallel filter chains:
    - Three filters per chain: highpass, bell (peaking) and lowpass;
    - Controls: cutoff, frequency and resonance;
    - Routing: each filter can be routed into each of the existing effects chains in parallel; 

- Effects:
  - Three parallel effects chains:
    - Five effect slots per chain;
    - Six different effects: reverb, delay, distortion, vibrato, pan and chorus;
    - One unique control for each effect;
    - One gain control per chain post-effects;
    
- Visualizers:
  - A meter attached a the end of the signal chain;
  - An oscilloscope attached a the end of the signal chain;
  - A spectrum analyzer attached a the end of the signal chain;
  
- Modulators:
  - Types: 
    - The fixed main envlope that functions as oscillators' gain ADSR;
    - Three graphic ADSR with draggable sections to control their parameters;
    - Two LFOs with graphic animated visulization and its frequency contorol;
  - Routing: LFOs and envelopes can be assigned to each oscillator's and filter's parameter using drag and drop;
  - Controls: for each assigned connection a 3x3 knob matrix controls the modulation amount;
 
- Keyboard:
  - Three octaves keyboard that supports:
    - Mouse interaction clicking visible keys;
    - Keyboard interaction: 18 notes selectable starting from the C note binded to the 'a' key - black keys are binded to the upper key row;
    - External midi interaction: any external midi controller is a valid form of input;
  

## Shortcuts
  - Shift-Clicks are used to delete elements. For oscillators can be disconnected and effects can be set to bypass;
  - When playing using keyboard input, 'z' and 'x' computer keys can be used to change octave;


## Dependencies
- [Tone.js](https://tonejs.github.io) - Sounds and Effects
- [Vue.js](https://vuejs.org) - JavaScript Framework 
- [npm](https://www.npmjs.com/) - Packet manager of choice
