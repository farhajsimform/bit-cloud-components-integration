import { ReactAppOptions } from '@teambit/react';

export const MyDemoAppApp: ReactAppOptions = {
  name: 'my-demo-app',
  entry: [require.resolve('./my-demo-app.app-root')]
};

export default MyDemoAppApp;
