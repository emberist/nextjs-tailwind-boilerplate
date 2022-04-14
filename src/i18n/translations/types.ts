export type TranslationId = "title" | "subtitle";

export type TranslationValues = {
  subtitle: { library: string };
};

export type TranslationValuesId = keyof TranslationValues;

export type GetTranslationValues<T> = T extends TranslationValuesId
  ? { values: TranslationValues[T] }
  : { values?: never };
