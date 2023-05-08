import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@teambit/design.blocks.header';
import { Footer } from '@teambit/design.blocks.footer';
import { Page } from '@teambit/base-react.pages.page';

export function MyDemoAppApp() {
  return (
    <>
      {/* header component */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Page title="Home page">
              <div>Home page</div>
            </Page>
          }
        >
          {/* home page component */}
        </Route>

        <Route
          path="/about"
          element={
            <Page title="About page">
              <div>About page</div>
            </Page>
          }
        >
          {/* about page component */}
        </Route>
      </Routes>
      <Footer
        categoryList={[
          {
            title: 'links with icons',
            links: [
              {
                icon: 'https://static.bit.dev/bit-logo.svg',
                text: 'Bit',
                href: 'https://bit.dev',
                external: true,
              },
              {
                icon: 'slack',
                text: 'Slack',
                href: 'https://bit.dev',
                external: true,
              },
              { icon: 'twitter-logo', text: 'Twitter', href: '#' },
              { icon: 'github-logo', text: 'Github', href: '#' },
            ],
          },
          {
            title: 'links without icons',
            links: [
              {
                text: 'Bit',
                href: 'https://bit.dev',
                external: true,
              },
              {
                text: 'Slack',
                href: 'https://bit.dev',
                external: true,
              },
              {
                text: 'Twitter',
                href: '#',
              },
              { text: 'Github', href: '#' },
            ],
          },
        ]}
      />
      {/* footer component */}
    </>
  );
}
