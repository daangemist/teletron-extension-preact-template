import type { WebStart } from 'teletron';

// @ts-expect-error Window global is not part of the type.
const teletron: WebStart = window.teletronRegisterExtension('__name__');
