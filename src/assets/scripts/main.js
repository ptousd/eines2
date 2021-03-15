/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import { Accessibility } from 'accessibility/src/main';

window.addEventListener('load', function() { new Accessibility(); }, false);