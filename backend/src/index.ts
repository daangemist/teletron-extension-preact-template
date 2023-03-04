import type { ExtensionManager } from 'teletron';
import path from 'path';
import Debug from 'debug';
import { readFile } from 'node:fs/promises';

const debug = Debug('teletron:extension:__name__');

export default async (teletron: ExtensionManager): Promise<void> => {
  debug('Initializing extension __name__.');

  teletron.assets(path.join(__dirname, './web'), [
    '__name__.umd.js',
    '__name__.umd.js.map',
  ]);

  const teletronJson = JSON.parse(
    (await readFile(path.join(__dirname, '../teletron.json'))).toString()
  );

  teletron.components.add({
    name: 'hello-world',
    ...teletronJson.components['hello-world'],
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
    ...teletronJson.widgets.counter,
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
