<template>
  <div class="appContainer" @mouseup="handleMouseUp" @mousemove="handleMouseMove">
    <div class="content_grid">
    <div class="info_column" :style="infoColumn">
      <img className="app_logo" src="@/img/zenyth_logo.png" draggable="false">
      <div class="info_column_items" :style="infoColumnsItemsSection">
        <div class="info_column_item" :style="infoColumnItem" @click="infoBtnClick">INFO</div>
        <div class="info_column_item" :style="infoColumnItem" @click="demoBtnClick">DEMO</div>
        <div class="info_column_item" :style="infoColumnItem" @click="songBtnClick">SONG</div>
      </div>
    </div>
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
  </div>
</div>
</template>

<script>
import * as Tone from "tone";
import OscHost from "./Synth/Oscillators/OscHost.vue";
import FilterHost from "./Synth/Filters/FilterHost.vue";
import FxHost from "./Synth/Effects/FxHost.vue";
import ToolHost from "./Synth/Tools/ToolsHost.vue";
import ModHost from "./Synth/Modulators/ModHost.vue"; // Envelope Strip
import PianoKeyboard from "./Synth/Keyboard/PianoKeyboard.vue";

export default {
  name: "mainHost",
  components: {
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

  computed: {
    infoColumnsItemsSection(){
      return {
        backgroundColor: this.colors.azure.glow,
        opacity: 0.7,
      }
    },
    infoColumnItem(){
      return {
        color: this.colors.gray.dark,
        opacity: 0.8,
      }
    }
  },

  methods: {
    // -------------- INIT ROUTING (connections) ------------
    initOscConnections(){
      this.$refs.oscHost.initConnections()
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

    // ----------- USER INTERACTION ----------
    infoBtnClick(){
      window.open("/about")
    },
    demoBtnClick(){
      window.open('https://www.youtube.com/watch?v=3jTYMbAtMqI', '_blank').focus();
    },
    songBtnClick(){
      window.open('https://www.youtube.com/watch?v=cjMXcdHnGRU', '_blank').focus();
    },

  },
};
</script>

<style>
.content_grid{
  display: grid;
  width: 100%;
  padding: 4vw;
  box-sizing: border-box;
  grid-template-columns: 10% 85%;
  justify-content: center;
  justify-items: center;
}

.info_column {
  display: flex;
  flex-direction: column;

}

.app_logo {
  flex: 1;
  width: 13vw;
  margin-bottom: 1vw;
  object-fit: scale-down;
}

.info_column_items {
  flex: 3.5;
  margin: 1vw;
  padding-top: 1.8vw;
  box-sizing: border-box;
  height: 100%;

}

.info_column_item {
  margin-top: 1vw;
  margin-bottom: 2vw;
  align-self: center;
  font-size: 1vw;
}

.mainHost {
  display: grid; /* no more flex display because we need Env Strip to be longer */
  grid-template-rows: 55% 30% 15%; /* grid display row sizes*/
  grid-template-columns: 20% 55% 25%; /*  ...   ...   column sizes fr is like unit */
  width: 85%;
  justify-content: center;
  aspect-ratio: 4 / 3;
  background-color: transparent;
}
.appContainer {
  text-align: center;
  width: 100%;
  height: 80%;
  margin: auto;
}

</style>