import { h, FunctionComponent } from 'preact';
import { TeletronPropsWidget } from 'teletron';
import { useState } from 'preact/hooks';

interface Props extends TeletronPropsWidget {
  start: number;
}

export const Counter: FunctionComponent<Props> = ({ number, webStart }) => {
  const [total, setTotal] = useState<number>(number);

  return (
    <webStart.baseComponents.Badge
      onClick={() => setTotal((total) => total + 1)}
    >
      {total}
    </webStart.baseComponents.Badge>
  );
};
