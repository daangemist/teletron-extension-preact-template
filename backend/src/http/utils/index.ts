import { RequestHandler, Request, Response } from 'express';

export function asyncCatch(middleware: RequestHandler) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (req: Request, res: Response, next: any) =>
    Promise.resolve(middleware(req, res, next)).catch(next);
}
