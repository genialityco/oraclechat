interface WebSDK {
  new (settings: any): {
    connect(): Promise<void>;
  };
}

interface Window {
  WebSDK: WebSDK;
  Bots: any;
}