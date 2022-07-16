import type { WebStart } from 'teletron';
import { Text } from './components';
import { Counter } from './widgets';

// @ts-expect-error Window global is not part of the type.
const teletron: WebStart = window.teletronRegisterExtension('__name__');

teletron.registerComponent('hello-world', Text);
teletron.registerWidget('counter', Counter);
