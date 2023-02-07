import {Chorus, Distortion, Envelope, Gain, LFO, Panner, PingPongDelay, Reverb, Vibrato} from 'tone'
import {nextTick} from "vue";

export default class MyEffect {
    constructor({ type = "none", modulation = 0 }) {
        this.type = type;
        this.mod = modulation;
        this.effect = this.generateToneFx(type)

        this.modulatorsPreset = {
            envelope: {
                mod: { amount: 0, signal: null },
            },
            lfo: {
                mod: { amount: 0, signal: null },
            }
        }
    }

    // getters
    getToneReference(){
        return this.effect;
    }

    // creator
    generateToneFx(type) {
        let effect;
        // console.log("fx gen type: " + type)
        switch (type) {
            case 0:
            case 'none':
                effect = new Gain();
                break;
            case 1:
            case 'reverb':
                effect = this.createReverb()
                break;
            case 2:
            case 'delay':
                effect = this.createDelay()
                break;
            case 3:
            case 'distortion':
                effect = this.createDistortion()
                break;
            case 4:
            case 'vibrato':
                effect = this.createVibrato()
                break;
            case 5:
            case 'pan':
                effect = this.createPan()
                break;
            case 6:
            case 'chorus':
                effect = this.createChorus()
                break;
            default:
                effect = new Gain();
        }
        // console.log(effect)
        this.setFxParams({ effect: effect, type: type })
        return effect;
    }

    // setters
    // general setter
    setFxParams({ effect = this.effect, type = this.type, mod = this.mod }) {
        this.effect = effect;
        this.type = type;
        this.mod = mod;
        // console.log("effect = "+ this.effect," type = " + this.type, "mod = " + this.mod)

        switch (type) {
            case 1: // reverb
            case 'reverb':
                this.effect.set({
                    decay: 0.1 + 5*mod,
                    wet: 0.3 + 0.7*mod,
                })
                break;
            case 2: // delay
            case 'delay':
                this.effect.set({
                    delayTime: 0.05 + 0.4*mod,
                    feedback: 0.05 + 0.90*mod,
                    wet: 0.3 + 0.7*mod,
                })
                break;
            case 3: // distortion
            case 'distortion':
                this.effect.set({
                    distortion: 0.05 + 0.95*mod,
                    wet: 0.4 + 0.6*mod,
                })
                break;
            case 4: // vibrato
            case 'vibrato':
                this.effect.set({
                    depth: 0.5 + 0.5*mod,
                    frequency: 1 + 20*mod,
                    wet: 0.5 + 0.5*mod
                })
                break;
            case 5: // pan
            case 'pan':
                let coeff = -1 + (2*mod)
                this.effect.set({
                    pan: coeff,
                    wet: 1,
                })
                console.log("pan coeff: " + coeff.toFixed(2))
                break;
            case 6: // chorus
            case 'chorus':
                this.effect.set({
                    depth: 0.6 + mod*0.4,
                    frequency: 30 + mod*10,
                    spread: 80 * mod*8,
                    wet: 1,
                    feedback: 0.05 + mod*0.9,
                    type: "triangle" + (mod*10).toFixed(0).toString(),
                    delayTime: 100 + mod*90,
                })
                break;
            default:
                this.effect = new Gain();
        }
    }

    // -------------- FX CREATION -------------
    createReverb(){
        return new Reverb();
    }
    createDelay() {
        //todo: not interesting effect if used like this
        return new PingPongDelay();
    }
    createDistortion(){
        return new Distortion();
    }
    createVibrato(){
        return new Vibrato();
    }
    createPan(){
        // todo: create LFO modulating width
        return new Panner();
    }
    createChorus(){
        return new Chorus();
    }

    // TODO:  ------------- MODULATION ------------

    createModulator(type) {
        //console.log("creating modulator of type: "+type)
        switch (type) {
            case "envelope":
                return new Envelope;
            case "lfo":
                return new LFO;
            default:
                console.log("Error creating modulator");
                return null;
        }
    }

    modulatorSetter(modulator, type, parameters) {
        switch (type) {
            case "envelope":
                modulator.set({
                    "attack": parameters.attack,
                    "decay": parameters.decay,
                    "sustain": parameters.sustain,
                    "release": parameters.release
                })
                break;
            case "lfo":
                //TO-DO
                modulator.set({

                })
                break;
            default:
                console.log("Error setting modulator parameters, invalid args")
                break;
        }
    }
    setModulatorParameters(type, target, parameters) {
        // console.log("MyFx setModulatorParameters")
        if (this.initialized) {
            this.modulatorsData[type][target].parameters = parameters
            this.updateModulators()
        }
    }

    // have to pass, the modulator (tone), the type (lfo or envelope), the gain linked to the voice, the voice and the target
    connectModulator(modulator, type, gain, target) {
        switch (type) {
            case "envelope":
                break;

            case "lfo":
                //TO-DO
                break;

            default:
                console.log("invalid modulator type")
                break;
        }
    }


    // ------------- TONE JS EXTENSIONS -----------
    connect(route){
        this.effect.connect(route);
    }
    disconnect(){
        this.effect.disconnect();
    }
    dispose(){
        this.effect.dispose();
    }
}
