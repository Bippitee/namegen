declare module "@foxandbear/namegen" {
  interface GenerateNameOptions {
    delimiter?: string;
    woodland?: boolean;
    words1?: string[];
    words2?: string[];
  }

  function generateName(options?: GenerateNameOptions): string;

  export = generateName;
}
