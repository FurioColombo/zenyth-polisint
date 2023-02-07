<template>
  <div class="appContainer" @mouseup="handleMouseUp" @mousemove="handleMouseMove">
    <div class="mainHost">
      <OscHost ref="oscHost" @newOsc="handleNewOsc" />
      <FilterHost ref="filterHost" @filterInitialized="initOscConnections"/>
      <FxHost ref="fxHost"/>
      <ToolHost ref="toolsHost" />
      <ModHost ref="modHost"/>
      <PianoKeyboard
        ref="pianoKeyboard"
        @noteDown="noteDownHandle"
        @noteUp="noteUpHandle"
      />
    </div>
    <LFO :key="1"  ></LFO>
  </div>
</template>

<script>
import * as Tone from "tone";
import OscHost from "./Synth/Oscillators/OscHost.vue";
import FilterHost from "./Synth/Filters/FilterHost.vue";
import FxHost from "./Synth/Effects/FxHost.vue";
import ToolHost from "./Synth/Tools/ToolsHost.vue";
import ModHost from "./Synth/Modulators/ModHost.vue"; // Envelope Strip
import LFO from "@/views/Synth/Modulators/Lfo.vue"; // todo: remove
import PianoKeyboard from "./Synth/Keyboard/PianoKeyboard.vue";

export default {
  name: "mainHost",
  components: {
    LFO, // todo : delete from here
    OscHost,
    FilterHost,
    FxHost,
    ToolHost,
    ModHost,
    PianoKeyboard,

  },
  data() {
    return {
      draggedInfo: null,
    };
  },
  mounted() {
    Tone.Transport.start("+0.1")
  },

  methods: {
    // -------------- INIT ROUTING (connections) ------------
    initOscConnections(){
      this.$refs.oscHost.initConnections()
    },
    initFilterConnections(){
      //console.log("main host init filter-fx connections")
      // todo: delete this.$refs.filterHost.initConnections()
    },
    handleNewOsc(){
      //initialize volEnvelope on all synth when a new oscillator is added
      this.$refs.modHost.handleNewOsc();
    },
    handleMouseUp(e) {
      //Actions to execute when mouseup happens on any part of the screen
      this.$refs.pianoKeyboard.handleMouseUp();
      this.$refs.modHost.handleMouseUp(e);
      this.$refs.fxHost.handleMouseUp(e);

      //If something has been dragged and not claimed after 100ms infos are deleted
      if (this.draggedInfo) {
        setTimeout(() => this.deleteDraggedInfo("MainHost"), 100);
      }
    },
    handleMouseMove(e){
      //console.log(this.$refs.modHost)
      this.$refs.modHost.handleMouseMove(e);
      this.$refs.fxHost.handleMouseMove(e);

    },
    noteDownHandle(note) {
      this.$refs["toolsHost"].setOscilloscopeTiming(note);
    },


    noteUpHandle(note) {
    },

  },
};
</script>

<style>
.mainHost {
  display: grid; /* no more flex display because we need Env Strip to be longer */
  grid-template-rows: 55% 30% 15%; /* grid display row sizes*/
  grid-template-columns: 20% 55% 25%; /*  ...   ...   column sizes fr is like unit */
  width: 100%;
  justify-content: center;
  aspect-ratio: 4 / 3;
  background-color: transparent;
}
.appContainer {
  text-align: center;
  width: 60%;
  height: 100vh;
  margin: auto;
}
</style>