export function transformKeysToCamelCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => transformKeysToCamelCase(item));
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const camelCaseKey = toCamelCase(key);
      acc[camelCaseKey] = transformKeysToCamelCase(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj;
}

function toCamelCase(str: string): string {
  return str.replace(/[_-](.)/g, (_, char) => char.toUpperCase());
}

export const transformKeysToSnakeCase = <T>(obj: T): T => {
  if (Array.isArray(obj)) {
    return obj.map((item) => transformKeysToSnakeCase(item)) as unknown as T;
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((accumulator, key) => {
      const snakeCaseKey = camelToSnake(key);
      (accumulator as any)[snakeCaseKey] = transformKeysToSnakeCase(
        (obj as any)[key]
      );
      return accumulator;
    }, {} as T);
  }
  return obj;
};

export const camelToSnake = (camelStr: string): string =>
  camelStr.replace(/([A-Z])/g, "_$1").toLowerCase();
