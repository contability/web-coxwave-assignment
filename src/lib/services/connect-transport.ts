import { createConnectTransport } from '@connectrpc/connect-web';

export const connectTransport = createConnectTransport({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
});
