import React from 'react'
import { addDecorator, configure } from '@storybook/react';
import { setScreenshotOptions } from 'storybook-chrome-screenshot';
import './addons';

// setScreenshotOptions({
//   viewport: [
//     // iPhone 5
//     {
//       width: 320,
//       height: 568,
//       isMobile: true,
//       hasTouch: true,
//     },
//     // // Galaxy S5
//     // {
//     //   width: 360,
//     //   height: 640,
//     //   isMobile: true,
//     //   hasTouch: true,
//     // },
//     // // Tablet
//     // {
//     //   width: 768,
//     //   height: 1024,
//     //   isMobile: true,
//     //   hasTouch: true,
//     // },
//     // // Laptop
//     // {
//     //   width: 1280,
//     //   height: 800
//     // },
//     // // Desktop
//     // {
//     //   width: 1280,
//     //   height: 720,
//     // },
//     // // Full-hd
//     // {
//     //   width: 1920,
//     //   height: 1080,
//     // }
//   ]
// });

setScreenshotOptions({
  viewport: {
    width: 1280,
    height: 720,
    deviceScaleFactor: 1
  },
});

const req = require.context('../src', true, /stories\.js$/)

function loadStories() {
  //require('../src/stories.js');
  req.keys().forEach((filename) => req(filename))
}



addDecorator(story => <div className='storybook'>{story()}</div>)

configure(loadStories, module);

import '../src/setupTest.js';
