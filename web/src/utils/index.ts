import {
  RenderableComponent,
  RenderableReturn,
  RenderableWidget,
  TeletronPropsComponent,
  TeletronPropsWidget,
} from 'teletron';
import { render, FunctionalComponent, h } from 'preact';

export const componentWrapperFactory: (
  component: FunctionalComponent<any>
) => RenderableComponent =
  (component: FunctionalComponent<any>): RenderableComponent =>
  (
    parent: HTMLElement,
    props: TeletronPropsComponent
  ): RenderableReturn | void => {
    render(h(component, props), parent);

    return {
      unmount: () => render(null, parent),
    };
  };

export const widgetWrapperFactory: (
  widget: FunctionalComponent<any>
) => RenderableWidget =
  (widget: FunctionalComponent<any>): RenderableWidget =>
  (
    parent: HTMLElement,
    props: TeletronPropsWidget
  ): RenderableReturn | void => {
    render(h(widget, props), parent);

    return {
      unmount: () => render(null, parent),
    };
  };
