class SampleInput extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "sample-input", SampleInput);
    }
  }

  connectedCallback() {
    this.input.addEventListener("change", (event) => {
      this.updateAudio(event.target);
    });
  }

  updateAudio(input) {
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);

    reader.addEventListener("loadend", () => {
      this.player.src = reader.result;
    });
  }

  get input() {
    return this.querySelector("input");
  }

  get player() {
    return this.querySelector("audio, video");
  }
}

SampleInput.register();
