import { h, FunctionComponent } from 'preact';
import { TeletronPropsComponent } from 'teletron';

interface Props extends TeletronPropsComponent {
  text: string;
}

export const Text: FunctionComponent<Props> = ({ text }) => <span>{text}</span>;
