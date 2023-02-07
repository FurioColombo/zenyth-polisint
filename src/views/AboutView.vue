<template>
  <div class="about">
    <h1 :style="titleComputedStyle">Controls</h1>
    <div class="controls_section">
      <div class="controls_section_column controls_section_col_1 " :style="controls_section_col_1_style">
        <h3>Available Controls</h3>
        <ul>
          <li>Oscillator: <br>
            <ul>
              <li>
                Faders:
                <ul>
                  <li>[red]: osc gain</li>
                  <li>[green]: 48 steps pitch shift</li>
                  <li>[azure]: pink noise gain</li>
                </ul>
              </li>
              <li>
                Buttons
                <ul>
                  <li>Activate routing to corresponding filter chain</li>
                </ul>
              </li>
            </ul>
          </li>

          <br>

          <li>Filters: <br>
            <ul>
              <li>
                [first] highpass:
                <ul>
                  <li>[horizontal]: cutoff</li>
                  <li>[vertical]: resonance</li>
                </ul>
              </li>
              <li>
                [second] peaking:
                <ul>
                  <li>[horizontal]: frequency</li>
                  <li>[vertical]: Q</li>
                </ul>
              </li>
              <li>
                [third] lowpass:
                <ul>
                  <li>[horizontal]: cutoff</li>
                  <li>[vertical]: resonance</li>
                </ul>
              </li>
              <li>
                Buttons
                <ul>
                  <li>Activate routing to corresponding effects chain</li>
                </ul>
              </li>
            </ul>
          </li>

          <br>

          <li>Effects: <br>
            <ul>
              <li>Six effects and bypass:
                <ul>
                  <li>Reverb</li>
                  <li>Delay</li>
                  <li>Distortion</li>
                  <li>Vibrato</li>
                  <li>Pan</li>
                  <li>Chorus</li>
                </ul>
              </li>
              <li>
                Chain volume:
                <ul>
                  <li>Post-effects gain control</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul>

        </ul>
      </div>
      <img class="controls_section_column controls_section_col_2" src="@/img/synth_controls_legend.png" alt="">
      <div class="controls_section_column controls_section_col_3" :style="controls_section_col_3_style">
        <h3>Keyboard shortcuts</h3>
        <ul>
          <li>White notes mapping: <br>
            [C, D, E, F, G, A, B, C, D, E, F] <br>
            [A, S, D, F, G, H, J, K, L, ò, à]
          </li>
        </ul>
        <ul>
          <li>Black notes mapping: <br>
            [C#, D#, _, F#, G#, A#, _, C#, D#] <br>
            [W , E , _, T , Y , U , _, O , P ]
          </li>
        </ul>
        <ul>
          <li>
            <pre>Octave Up:    [X] key</pre>
          </li>
          <li>
            <pre>Octave Down:  [Z] key</pre>
          </li>
        </ul>
        <ul>
          <li>Shift-Click disable:
            <ul>
              <li>Oscillators are removed</li>
              <li>Effects are set to bypass</li>
              <li>Envelope connections are removed</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <h1 :style="titleComputedStyle">Demo</h1>
    <div class="controls_section">
      <div class="controls_section_col_1" :style="controls_section_col_1_style"></div>
      <div class="controls_section_col_2"></div>
      <div class="controls_section_col_3" :style="controls_section_col_3_style"></div>
    </div>

    <h1 :style="titleComputedStyle">Routing</h1>
    <div class="routing_section">
      <div class="routing_description" :style="routing_description_style">
        <br>
        Rerouting of the following elements is permitted:
        <ul>
          <li>
            Any of the Envelopes and lfo can be activated or turned off trough the UI. Tonejs polyphony is not able to
            support that, so we implemented our own polyphony.
          </li>
          <li>
            The damp node at the end of each osc can be connected or disconnected from each filter chain using the UI.
            This allows each osc to be routed into any or all the filter chains.
          </li>
          <li>
            The last filter of each filter chain can be connected or disconnected from each effect chain using the UI.
            This allows each filter chain to be routed into any or all the effects chains.
          </li>
        </ul>
        <br>
        Below we provide the Tonejs objects entire routing which is a complete representation of the initial synth
        state.
        <br>
      </div>
      <img class="routing_complete_img" src="@/img/tone_routing.png" alt="">
      <div class ="osc_routing">
        <div class="routing_osc_description" :style="routing_description_style">
          <ul>
            <li>
              We implemented polyphony from scratch in order o be able to work with evelopes.<br>
            </li>
            <li>
              Since each voice needs its own modulators, we create and connect them directly in initialization.
              The amount of modulation is initially set to zero and is changed when envelopes are connected trough the UI.
            </li>
            <li>
              When a modulator is connected, a slot in the connection matrix is filled and the amount becomes settable trough the same interface.
              Each modulator can be connected up to nine parameters.
            </li>
            <li>
              The only modulator that can't be rerouted is the first one in the UI, which is the adsr associated with the gain of each voice and its relative noise
            </li>
          </ul>
          <br>
          On the right we provide the voice routing in detail.
          <br>
        </div>
        <img class="routing_osc_img" src="@/img/osc_routing.png" alt="">
      </div>
    </div>
    <h1 :style="titleComputedStyle">Repository</h1>
    <div class="repo_description">
      A live demo of the PolisinT is available <a href="https://furiocolombo.github.io/">here</a>, hosting provided by
      GitHub.<br>
      All code is free and available <a href="https://github.com/00sconosciuto00/actamVue">here</a>. Feel free to fork
      the repository and play with it!
    </div>

    <h1 :style="titleComputedStyle">Authors</h1>
    <div class="author">
      <button class="author_name">Colombo Marco Furio</button>
      <br>
      <button class="author_code">10537094</button>
      <button class="author_mail" @click="copyText('marcofurio.colombo@polimi.it')">| marcofurio.colombo@polimi.it |
      </button>
      <button class="author_github" @click="openLink('https://github.com/FurioColombo')">GitHub</button>
    </div>
    <div class="author">
      <button class="author_name">Fratticioli Guglielmo</button>
      <br>
      <button class="author_code">10821800</button>
      <button class="author_mail" @click="copyText('guglielmo.fratticioli@mail.polimi.it')">|
        guglielmo.fratticioli@mail.polimi.it |
      </button>
      <button class="author_github" @click="openLink('https://github.com/guglielmofratticioli')">GitHub</button>
    </div>
    <div class="author">
      <button class="author_name">Pirrello Elia</button>
      <br>
      <button class="author_code">10897020</button>
      <button class="author_mail" @click="copyText('elia.pirrello@mail.polimi.it')">| elia.pirrello@mail.polimi.it |
      </button>
      <button class="author_github" @click="openLink('https://github.com/00sconosciuto00')">GitHub</button>
    </div>
    <div style="height: 15%; width: 100%"></div>
  </div>
</template>

<script>


export default {

  computed: {
    titleComputedStyle() {
      return {
        backgroundColor: this.colors.orange.glow,
      }
    },
    controls_section_col_1_style() {
      return {
        backgroundColor: this.colors.azure.glow,
      }
    },
    controls_section_col_3_style() {
      return {
        backgroundColor: this.colors.green.glow,
      }
    },
    routing_description_style() {
      return {
        backgroundColor: this.colors.yellow.glow,
      }
    }

  },

  methods: {
    openLink(url) {
      window.open(url)
    },

    async copyText(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
        alert('Copied');
      } catch ($e) {
        alert('Cannot copy');
      }
    }
  }
}

</script>

<style>
.about {
  height: 100%;
  width: 100%;
  margin: 0;
}

h1 {
  position: sticky;
  top: 0;
  align-self: self-start;
  justify-self: self-start;
  padding: 1vw;
  font-size: 1.8vw;
  margin-top: 2vw;
  z-index: 101;
}

.controls_section {
  position: relative;
  display: inline-grid;
  grid-template-columns: 1.8fr 5fr 1.8fr;
  height: 80%;
  width: 100%;
  font-family: monospace;
}

.controls_section_column {
  margin: 1vw;
  padding: 0.5vw;
  text-align: left;
}

.controls_section_col_1 {
  margin-bottom: 5vw;
  height: 95%;
}

.controls_section_col_2 {
  margin-top: -1vw;
  align-self: center;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  scale: 95%;
}

.controls_section_col_3 {
  height: 95%;
  margin-bottom: 5vw;
}

.ul {
  list-style-type: circle;
}

.routing_section {
  display: inline-grid;
  grid-template-rows: 0.12fr 2fr 2fr;
  width: 100%;
  height: 145%;
}

.routing_description {
  font-size: 1vw;
  text-align: left;
  width: 90%;
  margin: 2vw;
  margin-left: 4vw;
  padding: 1vw;
}

.osc_routing {
  display: inline-grid;
  grid-template-columns: 1fr 2fr;
  vertical-align: center;
}

.routing_complete_img {
  width: 100%;
  align-self: center;
  object-fit: scale-down;
  scale: 98%;
}

.routing_osc_description {
  font-size: 1vw;
  text-align: left;
  width: 90%;
  margin-left: 4vw;
  padding: 2vw;
  align-self: center;
}

.routing_osc_img {
  width: 100%;
  align-self: center;
  object-fit: scale-down;
  scale: 90%;
  margin-top: -10vw;
  margin-left: 2vw;
}

.repo_description {
  font-size: 1.3vw;
  padding: 2vw;
}

.author {
  margin: 2vw;
}

.author_name {
  font-size: 1.3vw;
  background-color: transparent;
  border: none;
  font-weight: bold;
  width: auto;
}

.author_code {
  font-size: 1.25vw;
  background-color: transparent;
  border: none;
}

.author_mail {
  font-size: 1.3vw;
  background-color: transparent;
  border: none;
}

.author_github {
  font-size: 1.3vw;
  background-color: transparent;
  border: none;
}


</style>