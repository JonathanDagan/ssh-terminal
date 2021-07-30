import React from 'react';
import { render } from '@testing-library/react';
import { BasicSshTerminal } from './ssh-terminal.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSshTerminal />);
  const rendered = getByText('hello from SshTerminal');
  expect(rendered).toBeTruthy();
});
