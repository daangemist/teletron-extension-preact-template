import type { ExtensionManager } from 'teletron';
import path from 'path';
import Debug from 'debug';

const debug = Debug('teletron:extension:__name__');

export default async (teletron: ExtensionManager): Promise<void> => {
  debug('Initializing extension __name__.');

  teletron.assets(path.join(__dirname, './web'), [
    '__name__.umd.js',
    '__name__.umd.js.map',
  ]);

  teletron.components.add({
    name: 'hello-world',
    displayName: 'Hello World',
    configuration: {
      fields: [
        {
          attribute: 'text',
          type: 'text',
          required: true,
          label: 'Text to display',
        },
      ],
    },
  });
  teletron.widgets.add({
    name: 'counter',
    displayName: 'Counter',
    configuration: {
      fields: [
        {
          attribute: 'start',
          type: 'number',
          required: true,
          label: 'Start number',
        },
      ],
    },
  });

  debug('Initialized extension __name__.');
};
