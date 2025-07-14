'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function NextProgressBar({ children }) {
  return (
    <>
        {children}
        <ProgressBar
          height="4px"
          color="#ffbe33"
          options={{ showSpinner: true }}
          shallowRouting
        />
     </>
  );
}