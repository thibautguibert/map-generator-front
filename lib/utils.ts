function camelCaseToSnakeCase(text: string): string {
  return text
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
}

export default camelCaseToSnakeCase;
