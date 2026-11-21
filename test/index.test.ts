import { describe, it, expect } from "vitest";
import {
  capitalizeFirstLetter,
  titleCase,
  getInitials,
  getTruncateDescription,
  compareArrays,
  generateOTPWithLength,
  generateRandomPassword,
  slugify,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  getGreeting,
  validateText,
  validateEmail,
  validatePassword,
  validateMobileNumber,
  formatCurrency,
  removeDuplicatesFromArray,
  sortArrayByDirection,
  reverseString,
  isObjectValuesEmpty,
  checkNotNullAndNotEmpty,
  handleNaN,
  isFalsy,
  isTruthy,
  capitalizeEveryWord,
  camelCase,
  pascalCase,
  truncate,
  formatDate,
  deepClone,
  debounce,
  formatDateRelative,
  groupBy,
} from "../src";

describe("New Functions", () => {
  describe("capitalizeEveryWord", () => {
    it("capitalizes first letter of each word", () => {
      expect(capitalizeEveryWord("hello world")).toBe("Hello World");
    });
    it("handles single word", () => {
      expect(capitalizeEveryWord("test")).toBe("Test");
    });
    it("handles empty string", () => {
      expect(capitalizeEveryWord("")).toBe("");
    });
  });

  describe("camelCase", () => {
    it("converts to camelCase", () => {
      expect(camelCase("hello world")).toBe("helloWorld");
    });
    it("handles underscores", () => {
      expect(camelCase("hello_world")).toBe("helloWorld");
    });
  });

  describe("pascalCase", () => {
    it("converts to PascalCase", () => {
      expect(pascalCase("hello world")).toBe("HelloWorld");
    });
  });

  describe("truncate", () => {
    it("truncates with default maxLength", () => {
      expect(truncate("Hello World User")).toBe("Hello World User");
    });
    it("truncates with custom maxLength", () => {
      expect(truncate("Hello World User", 5)).toBe("Hello...");
    });
    it("handles empty string", () => {
      expect(truncate("")).toBe("");
    });
  });

  describe("formatDate", () => {
    it("formats current date", () => {
      const result = formatDate(new Date());
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
    it("accepts string date", () => {
      expect(formatDate("2024-01-15")).toBe("2024-01-15");
    });
  });

  describe("deepClone", () => {
    it("creates deep copy of object", () => {
      const original = { a: 1, b: { c: 2 } };
      const cloned = deepClone(original);
      cloned.b.c = 99;
      expect(original.b.c).toBe(2);
    });
    it("handles arrays", () => {
      const original = [1, 2, 3];
      const cloned = deepClone(original);
      cloned.push(4);
      expect(original.length).toBe(3);
    });
  });

  describe("debounce", () => {
    it("returns a function", () => {
      const fn = debounce(() => {}, 100);
      expect(typeof fn).toBe("function");
    });
  });

  describe("formatDateRelative", () => {
    it("returns 'just now' for current date", () => {
      expect(formatDateRelative(new Date())).toBe("just now");
    });
    it("formats past date", () => {
      expect(formatDateRelative(new Date(Date.now() - 2 * 60 * 60 * 1000))).toContain("hours ago");
    });
  });
});

describe("Improved Functions", () => {
  describe("capitalizeFirstLetter", () => {
    it("capitalizes first letter", () => {
      expect(capitalizeFirstLetter("test")).toBe("Test");
    });
    it("returns null for null input", () => {
      expect(capitalizeFirstLetter(null)).toBeNull();
    });
    // Note: empty string returns null per implementation
  });

  describe("titleCase", () => {
    it("converts to title case", () => {
      expect(titleCase("hello world")).toBe("Hello World");
    });
    it("handles underscore separator", () => {
      expect(titleCase("hello_world", "_")).toBe("Hello_World");
    });
  });

  describe("getInitials", () => {
    it("gets initials from full name", () => {
      expect(getInitials("John Doe")).toBe("JD");
    });
    it("gets first and last letter for single word", () => {
      // Implementation returns uppercase first+last
      expect(getInitials("hello")).toBe("HO");
    });
    it("handles names with hyphens", () => {
      expect(getInitials("user-name")).toBe("UN");
    });
  });

  describe("getTruncateDescription", () => {
    it("truncates with default length", () => {
      expect(getTruncateDescription("Hello World User")).toBe("Hello World User");
    });
    it("truncates with custom length", () => {
      expect(getTruncateDescription("Hello World User", 5)).toBe("Hello...");
    });
  });

  describe("compareArrays", () => {
    it("returns true for equal arrays", () => {
      expect(compareArrays([1, 2, 3], [3, 1, 2])).toBe(true);
    });
    it("returns false for different arrays", () => {
      expect(compareArrays([1, 2], [1, 2, 3])).toBe(false);
    });
  });

  describe("validateMobileNumber", () => {
    it("validates string mobile number", () => {
      const result = validateMobileNumber("1234567890");
      expect(result.isError).toBe(false);
    });
    it("validates number mobile number", () => {
      const result = validateMobileNumber(1234567890);
      expect(result.isError).toBe(false);
    });
    it("rejects empty input", () => {
      const result = validateMobileNumber("");
      expect(result.isError).toBe(true);
    });
  });

  describe("validateEmail", () => {
    it("validates valid email", () => {
      const result = validateEmail("test@example.com");
      expect(result.isError).toBe(false);
    });
    it("rejects invalid email", () => {
      const result = validateEmail("invalid");
      expect(result.isError).toBe(true);
    });
  });

  describe("sortArrayByDirection", () => {
    it("sorts array in descending order", () => {
      expect(sortArrayByDirection([3, 1, 2], "desc")).toEqual([3, 2, 1]);
    });
    it("sorts array in ascending order", () => {
      expect(sortArrayByDirection([3, 1, 2], "asc")).toEqual([1, 2, 3]);
    });
    it("sorts objects by key", () => {
      expect(sortArrayByDirection([{ a: 1 }, { a: 3 }], "desc", "a")).toEqual([
        { a: 3 },
        { a: 1 },
      ]);
    });
  });

  describe("isObjectValuesEmpty", () => {
    it("detects empty values", () => {
      const result = isObjectValuesEmpty({ a: "", b: 1 });
      expect(result.isEmpty).toBe(true);
      expect(result.emptyKeys).toContain("a");
    });
    it("returns false for non-empty object", () => {
      const result = isObjectValuesEmpty({ a: 1, b: 2 });
      expect(result.isEmpty).toBe(false);
      expect(result.emptyKeys).toEqual([]);
    });
  });
});

describe("Original Functions", () => {
  describe("capitalizeFirstLetter", () => {
    it("capitalizes first letter", () => {
      expect(capitalizeFirstLetter("hello")).toBe("Hello");
    });
  });

  describe("titleCase", () => {
    it("converts to title case", () => {
      expect(titleCase("hello world")).toBe("Hello World");
    });
  });

  describe("getInitials", () => {
    it("gets initials", () => {
      expect(getInitials("John Doe")).toBe("JD");
    });
  });

  describe("getTruncateDescription", () => {
    it("truncates description", () => {
      expect(getTruncateDescription("Hello World User")).toBe("Hello World User");
    });
  });

  describe("compareArrays", () => {
    it("compares arrays", () => {
      expect(compareArrays([1, 2, 3], [3, 1, 2])).toBe(true);
    });
  });

  describe("generateOTPWithLength", () => {
    it("generates OTP with length", () => {
      const otp = generateOTPWithLength(4);
      // OTP is a number when isAlphaNumeric is false (default)
      expect(typeof otp).toBe("number");
      expect(otp).toBeGreaterThan(0);
    });
  });

  describe("generateRandomPassword", () => {
    it("generates random password", () => {
      const password = generateRandomPassword(8);
      expect(typeof password).toBe("string");
      expect(password).toHaveLength(8);
    });
  });

  describe("slugify", () => {
    it("creates slug", () => {
      expect(slugify("some string")).toBe("some-string");
    });
    it("custom separator", () => {
      expect(slugify("some string", "_")).toBe("some_string");
    });
  });

  describe("validateText", () => {
    it("validates text", () => {
      const result = validateText("John Doe");
      expect(result.isError).toBe(false);
    });
  });

  describe("validateEmail", () => {
    it("validates email", () => {
      const result = validateEmail("test@example.com");
      expect(result.isError).toBe(false);
    });
  });

  describe("validatePassword", () => {
    it("validates password", () => {
      const result = validatePassword("Abc@1234");
      expect(result.isError).toBe(false);
    });
  });

  describe("validateMobileNumber", () => {
    it("validates mobile number", () => {
      const result = validateMobileNumber(1234567890);
      expect(result.isError).toBe(false);
    });
  });

  describe("formatCurrency", () => {
    it("formats currency", () => {
      const result = formatCurrency(12345.67);
      expect(typeof result).toBe("string");
      expect(result).toContain("$");
    });
  });

  describe("removeDuplicatesFromArray", () => {
    it("removes duplicates", () => {
      expect(removeDuplicatesFromArray([1, 2, 3, 2, 4])).toEqual([1, 2, 3, 4]);
    });
  });

  describe("sortArrayByDirection (original)", () => {
    it("sorts descending", () => {
      expect(sortArrayByDirection([3, 1, 4, 1, 5], "desc")).toEqual([5, 4, 3, 1, 1]);
    });
  });

  describe("reverseString", () => {
    it("reverses string", () => {
      expect(reverseString("hello")).toBe("olleh");
    });
  });

  describe("isObjectValuesEmpty", () => {
    it("detects empty values", () => {
      const result = isObjectValuesEmpty({ a: "", b: 1 });
      expect(result.isEmpty).toBe(true);
    });
  });

  describe("checkNotNullAndNotEmpty", () => {
    it("returns true for valid value", () => {
      expect(checkNotNullAndNotEmpty("Hello")).toBe(true);
    });
    it("returns false for empty string", () => {
      expect(checkNotNullAndNotEmpty("")).toBe(false);
    });
  });

  describe("handleNaN", () => {
    it("returns fallback for NaN", () => {
      expect(handleNaN(NaN)).toBe(0);
    });
    it("returns value for non-NaN", () => {
      expect(handleNaN(42)).toBe(42);
    });
  });

  describe("isFalsy", () => {
    it("detects falsy values", () => {
      expect(isFalsy(null)).toBe(true);
      expect(isFalsy("")).toBe(true);
      expect(isFalsy(0)).toBe(true);
    });
  });

  describe("isTruthy", () => {
    it("detects truthy values", () => {
      expect(isTruthy(1)).toBe(true);
      expect(isTruthy("hello")).toBe(true);
    });
  });

  describe("groupBy", () => {
    it("groups objects by key", () => {
      const data = [
        { id: 1, category: "A" },
        { id: 2, category: "B" },
        { id: 3, category: "A" },
      ];
      const result = groupBy(data, "category");
      expect(result).toHaveProperty("A");
      expect(result).toHaveProperty("B");
    });
  });
});
