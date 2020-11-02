import * as React from 'react';
import { ComponentType } from 'react';

/**
 * Wrap component with hook function with will be called in HOC component render
 */
const hoc = function<SP, HP>(
  hook: (props: Partial<SP>) => HP,
  Source: ComponentType<HP & SP>
) {
  const Result: any = (props: SP) => (
    <Source {...(hook(props) || ({} as any))} {...props} />
  );

  Result.Original = Source;
  Result.hook = hook;

  return (Result as any) as ComponentType<Partial<HP> & Partial<SP>> & {
    Original: ComponentType<HP & SP>;
    hook: typeof hook;
  };
};

export { hoc };
