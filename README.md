# Zenyth PolisinT

[Zenyth PolisinT](https://furiocolombo.github.io/zenyth-polisint/) is a javascript semi-modular polyphonic synthesizer powered by Tone.js and implemented using the framework Vue. <br>
Zenyth is thought as a playful yet powerful tool to to discover modular synthesis. Its lighthearted exploration-based interface encourages the user to discover its functionalities by trying himself all blocks and routing options.


<p align="center">
    <img width="80%" src="https://github.com/FurioColombo/zenyth-polisint/blob/main/assets/zenith_polisint.png" alt="Splash Image">
</p>

<p align="center">
    <a href="https://www.youtube.com/watch?v=3jTYMbAtMqI">Presentation Video</a>
    <br>
    <a href="https://www.youtube.com/watch?v=cjMXcdHnGRU">Demo</a>
</p>
<br>


## How to use it
  - Online Version [here](https://furiocolombo.github.io/zenyth-polisint/)
  - Locally: Clone git repo and run the following command in the project terminal:
  1. `npm install`
  2. `npm update`
  3. `npm run serve` to run development build
  OR
  3. `npm run build`, `npm install -g serve`, `serve -s dist` to run release build

<br>

Play the synth with your computer keyboard: `[a,w,s,e,d,f,t,g,y,h,u,j,k,o,l,p,ò,à]` 

Or connect a MIDI keyboard and reload the page!

(Connecting more than one MIDI/audio device could interfere with MIDI)
  
<br>

## Features
Zenyth PolisinT features four tipes of synthesis engines, a noise generator, three filter chains, and three effects chains. On top of that five dynamically assignables Modulators and a main ADSR Envelope allow to shape the sound further and produce crazy noises.

### Oscillators
|                                                     |   |  |  |
|-----------------------------------------------------|---|---|---|
| <img src='res/osc.png'  margin='10%' width='90%' >  | Synth Engine: Shift+Click to remove, click "+" to add |   <img src='res/FM.png'  height='100vw' padding='5%'> | Synth Engine Selector   | 
| <img src='res/wave.png'  >                          |  Waveform Selector (change clicking)  |    <img src='res/ModSlider.png'  > |   Left Slider: Noise Volume | 
| <img src='res/VolSlider.png'  >                     |  Right Slider: Oscillator Volume  |   <img src='res/Osc Routes.png'  margin='10%' width='90%'> |  Synth Routing: Select filter chains clicking on the dots (more chains can be selected for each Synth Engine)  | 
| <img src='res/pitch.png'  margin='10%' width='90%'> |  Oscillator Tuning |

<br>
    
### Filters
Three parallel Filter Chains (Horizontal)

|   |   |                                     |  |
|---|---|-------------------------------------|---|
| <img src='res/Filters.png'  padding='5%' >|  Low Pass, Band and High Pass filters in serie | <img src='res/FilterCutoff.png'  >  | Drag Horizonatally to change frequency, vertically to change amount and resonance |  
| <img src='res/Resonance.png'  >|  Resonance/amount rapresented by glow around each filter | <img src='res/Filter Routes.png'  > |   Filter Routing: Select Fx Chain by clicking on the dots (more chains can be selected for each Filter Chain) |

<br>

### Effects
Three parallel Fx Chains (Vertical)

|   |   |  |  |
|---|---|---|---|
| <img src='res/FXMatrix.png'  >| Add and swap effects clicking, change intensity by dragging vertically. Shift+Click to remove | <img src='res/FXGain.png'  >| Drag vertically to change volume of the filter chain |
  
<br>

### Modulators
One main envelope, three assignable envelopes, two assignable lfos

|   |   |
|---|---|
| <img src='res/ADSR.png'  padding='5%' > | Main Envelope: Relative to Synth Engine Volume (Draw the shape of Attack, Decay, Sustain and Release dragging the dots) |
| <img src='res/LFO.png'  > | LFO produces a periodic signal to modulate parameters. Vertical slider changes LFO speed, the button below changes waveform  |

|   |                                                          |   |                                                                                                         |
|---|----------------------------------------------------------|---|---------------------------------------------------------------------------------------------------------|
 | <img src='res/Drag.png'  > | Thunder icons are draggable | <img src='res/Drop.png' > | Drop the thunder icon on: Synth Volume, Noise Volume, Synth Pitch or Filter Frequency to modulate the parameters |
|<img src='res/ModAmount.png'  > | Change modulation amount dragging the circles vertically | <img src='res/Id.png' > | The dot color and number indicates the modulator signal, Shift+Click on the dot to unlink the modulator |
| <img src='res/VolButton.png'  > | Click mod icons to select the modulator shown            |
 
___ 

  
<br>

## Implementation
  
<br>

### Framework and Visuals:

- The framework of choice is [Vue](https://vuejs.org/)
- Visual effects are realized in plain CSS, without any external library.
- User Interface is responsive, with a fixed aspect ratio and dimensions relative to the window's width.

  
<br>

### Audio Core:
- Tone.js was our initial choice to write the audio logic. As the code kept growing, the complexity increased too and the stock Tone objects weren't sufficient. We decided to wrap our main audio engines in more sophisticated and modular custom objects:
    - **MyPolySynth** - A polyphonic, multi-engine synthesizer with 6 modulator signals and a noise generator included in each voice. Each MyPolySynth can be initialized with a custom number of voices and a defined destination.
    - **MyFilter** - A multi-type filter (HP, BAND, LP), based on Tone.Filter, with the addition of 1 envelope and 1 LFO to modulate the cutoff frequency.
    - **MyFx** - A multi-Fx object, unifying 6 Tone effects in a single component.
    
    <br>
- Thanks to these wrappers, it's now possible to modulate synth pitch, synth volume, noise volume, and filter cutoff using both LFOs and envelopes. Simply set the modulation parameters and amount.
- Further updates aim to substitute Tone with the plain WebAudioAPI to improve latency and optimize the code further.

    &rarr; _[Audio Core Detailed Scheme](./res/Zenyth_Audio_Core.pdf)_

  
<br>

## Dependencies
- [Tone.js](https://tonejs.github.io) - Web Audio Framework
- [Vue.js](https://vuejs.org) - Web UI Framework
- [npm](https://www.npmjs.com/) - Package Manager

<br>

## Team
- Colombo Marco Furio - Routing, MyFx, Animated Graphics - `marcofurio.colombo@polimi.it`
- Guglielmo Fratticioli - Front End Developement and UI Design - `guglielmo.fratticioli@mail.polimi.it`
- Elia Pirrello - Audio Core Coding and Project Management - `elia.pirrello@mail.polimi.it`
