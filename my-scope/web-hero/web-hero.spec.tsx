import React from 'react';
import { render } from '@testing-library/react';
import { BasicWebHero } from './web-hero.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicWebHero />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
