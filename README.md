# `sample-input`

A Web Component to sample audio or video added to an upload input

**[Demo](https://daviddarnes.github.io/sample-input/demo.html)**

## Examples

General usage example:

```html
<script type="module" src="sample-input.js"></script>

<sample-input>
  <input aria-controls="preview" type="file">
  <audio id="preview" aria-live="polite" controls></audio>
</sample-input>
```

Example usage with the `capture` option to record live audio (not compatible with all hardware) and placeholder audio:

```html
<script type="module" src="sample-input.js"></script>

<sample-input>
  <input aria-controls="preview" type="file" accept="audio/*" capture>
  <audio id="preview" aria-live="polite" controls src="https://darn.es/sounds/daviddarnes.m4a"></audio>
</sample-input>
```

## Features

This Web Component allows you to:

- Add an audio or video file that's been added via an upload input to an `audio` or `video` element so it can be previewed

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/sample-input): `npm install @daviddarnes/sample-input`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/sample-input/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="sample-input.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://www.unpkg.com/@daviddarnes/sample-input@1.0.0/sample-input.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://esm.sh/@daviddarnes/sample-input@1.0.0"></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
