import React from 'react';

export type SshTerminalProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function SshTerminal({ text }: SshTerminalProps) {
  return (
    <div>
      {text}
    </div>
  );
}
