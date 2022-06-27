import { ExtensionManager } from 'teletron';
import { asyncCatch } from './utils';

export default function registerHttp(em: ExtensionManager): void {
  em.http.get(
    '/hello',
    asyncCatch(function (_req, rsp): void {
      rsp.json({
        message: 'Hello World!',
      });
    })
  );
}
