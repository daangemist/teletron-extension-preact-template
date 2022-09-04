import type { WebStart } from 'teletron';
import { Text } from './components';
import { Counter } from './widgets';
import { componentWrapperFactory, widgetWrapperFactory } from './utils';

// @ts-expect-error Window global is not part of the type.
const teletron: WebStart = window.teletronRegisterExtension('__name__');

teletron.registerComponent('hello-world', componentWrapperFactory(Text));
teletron.registerWidget('counter', widgetWrapperFactory(Counter));
