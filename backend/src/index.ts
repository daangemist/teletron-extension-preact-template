import { ExtensionManager } from 'teletron';
import path from 'path';
import Debug from 'debug';

const debug = Debug('teletron:extension:__name__');

export default async (teletron: ExtensionManager): Promise<void> => {
  debug('Initializing extension __name__.');
  
  teletron.assets(path.join(__dirname, './web'), [
    '__name__.umd.js',
    '__name__.umd.js.map',
  ]);
  debug('Initialized extension __name__.');
};
