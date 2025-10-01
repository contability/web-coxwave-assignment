'use client';

import { TransportProvider } from '@connectrpc/connect-query';
import { connectTransport } from '@Lib/services/connect-transport';
import { type ReactNode } from 'react';

const ConnectTransportProvider = ({ children }: { children: ReactNode }) => {
  return <TransportProvider transport={connectTransport}>{children}</TransportProvider>;
};

export default ConnectTransportProvider;
