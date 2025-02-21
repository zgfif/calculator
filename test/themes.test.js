import themes from '../app/js/themes.js';
import assert from 'assert';

describe('themes', () => {
  it('should have gruvebox theme', () => {
    const themeNames = Object.keys(themes);
    assert.deepEqual(themeNames, ['gruvebox', 'lime']);

    assert.deepEqual(themes.gruvebox, {
      '--font-color': 'white',
      '--screen-font-color': 'white',
      '--numeric-block-bg-color': 'grey',
      '--operations-block-bg-color': 'orange',
      '--operations-row-bg-color': 'rgb(60, 60, 60)',
      '--window-bg-color': 'rgb(42, 42, 42)',
      '--body-bg-image': 'linear-gradient(to right top, #3d3f40, #4f6364, #69897b, #99ad87, #decc96)',
    });
  });

  it('should have lime theme', () => {
    assert.deepEqual(themes.lime, {
      '--font-color': 'rgb(83, 80, 80)',
      '--screen-font-color': 'white',
      '--numeric-block-bg-color': 'rgb(212, 228, 201)',
      '--operations-block-bg-color': '#c6ee32',
      '--operations-row-bg-color': 'rgb(161, 223, 138)',
      '--window-bg-color': 'green',
      '--body-bg-image': 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
    });
  });
});
