export type Bindings = {
  ACCESS_TOKEN: string;
  DKIM_SELECTOR:  string;
  DKIM_PRIVATE_KEY: string;
};

declare global {
  function getMiniflareBindings(): Bindings;
}
