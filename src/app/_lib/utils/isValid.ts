type ValidType = {
  email: string;
  password: string;
  name: string;
};

type Valid = keyof ValidType;

const REGEX_TYPE = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  name: /^[a-zA-Z가-힣0-9]+$/,
};

export function isValidSignValue(value: string, type: Valid) {
  switch (type) {
    case "email":
      return REGEX_TYPE.email.test(value);

    case "name":
      return REGEX_TYPE.name.test(value);

    case "password":
      const trimmedInput = value.replace(/\s+/g, "");
      const lengthRegex = /^.{6,}$/;
      return lengthRegex.test(trimmedInput);

    default:
      return false;
  }
}
