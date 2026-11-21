import { AnyType, ArrayType, BooleanType, NullableString, NumberType, ObjectType, StringType } from "../types";

export const capitalizeFirstLetter = (str: NullableString): NullableString => {
    try {
        if (str == null || str === "") return null;
        const trimmed = str.trim();
        if (trimmed.length === 0) return "";
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const titleCase = (str: NullableString, separator = " "): NullableString => {
    try {
        if (str == null || str === "") return null;
        // Replace underscores, hyphens, and multiple whitespace with the separator
        const normalized = str.replace(/[-_]/g, separator).split(separator).filter(word => word.length > 0);
        return normalized.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(separator);
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getInitials = (name: NullableString) => {
    try {
        if (typeof name !== 'string' || name.trim() === '') return "?";
        // Handle names with various separators (spaces, hyphens, underscores)
        const words = name.trim().split(/[\s_-]+/).filter(value => value.length > 0);
        if (words.length === 0) return "?";
        const initials = words.map(word => word.charAt(0)?.toUpperCase() ?? "").join("");
        // If single word, return first and last letter
        if (words.length === 1) {
            const word = words[0];
            if (word.length <= 1) return word.toUpperCase();
            return word.charAt(0).toUpperCase() + word.slice(-1).toUpperCase();
        }
        return initials;
    } catch (error) {
        console.error(error);
        return "?";
    }
};

export const getTruncateDescription = (text: NullableString, maxLength = 50) => {
    try {
        if (!text) return "";
        if (text.length <= maxLength) return text;
        return `${text.substring(0, maxLength)}...`;
    } catch (error) {
        console.error(error);
        return "";
    }
}

export const compareArrays = <T>(arr1: ArrayType<T>, arr2: ArrayType<T>): boolean => {
    try {
        // Handle null/undefined
        if (arr1 == null || arr2 == null) return false;
        
        // Flatten and copy arrays, handling non-array values
        const array1 = Array.isArray(arr1) ? arr1.flat(Infinity).slice() : [arr1];
        const array2 = Array.isArray(arr2) ? arr2.flat(Infinity).slice() : [arr2];
        
        // Sort and compare
        const sorted1 = array1.sort();
        const sorted2 = array2.sort();
        
        if (sorted1.length !== sorted2.length) return false;
        
        return sorted1.every((value, index) => value === sorted2[index]);
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const generateOTPWithLength = (length: NumberType, isAlphaNumeric = false) => {
    try {
        if (isAlphaNumeric) {
            const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
        } else {
            return Math.floor(Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) + 1)) + Math.pow(10, length - 1)
        }
    } catch (error) {
        console.error(error);
    }
};

export const generateRandomPassword = (length = 8) => {
    try {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digitChars = "0123456789";
        const specialChars = "!@#$%^&*()-_=+";
        let password = "";
        password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
        password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
        password += digitChars.charAt(Math.floor(Math.random() * digitChars.length));
        for (let i = password.length; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * (lowercaseChars + uppercaseChars + digitChars + specialChars).length);
            password += (lowercaseChars + uppercaseChars + digitChars + specialChars).charAt(randomIndex);
        }
        return password;
    } catch (error) {
        console.error(error)
        return null;
    }
};

export const slugify = (string: StringType, separator = "-") => {
    try {
        return string?.trim()?.length > 0 ? string?.toString()?.toLowerCase()?.trim().replace(/\s+/g, separator)?.replace(/[^\w\-]+/g, "")?.replace(/\_/g, separator)?.replace(/\-\-+/g, separator)?.replace(/\-$/g, "") : ""
    } catch (error) {
        console.error(error)
        return null;
    }
};

export const setLocalStorage = (key: StringType, data: AnyType) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error(`Error setting data in localStorage for key "${key}":`, error);
        return false;
    }
};

export const getLocalStorage = (key: StringType) => {
    try {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
        console.error(`Error retrieving data from localStorage for key "${key}":`, error);
        return false;
    }
};

export const removeLocalStorage = (key: StringType) => {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error(`Error removing data from localStorage for key "${key}":`, error);
        return false;
    }
};

export const clearLocalStorage = () => {
    try {
        localStorage.clear();
        return true;
    } catch (error) {
        console.error("Error clearing localStorage:", error);
        return false;
    }
};

export const getGreeting = () => {
    try {
        const greetings = {
            morning: "Good morning!",
            afternoon: "Good afternoon!",
            evening: "Good evening!",
        };
        const currentHour = new Date().getHours();
        if (currentHour >= 5 && currentHour < 12)
            return greetings.morning;
        else
            if (currentHour >= 12 && currentHour < 17)
                return greetings.afternoon;
            else
                return greetings.evening;
    } catch (error) {
        return null;
    }
};

export const validateText = (value: NullableString, errorMessage = null) => {
    try {
        if (!value)
            return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
        const regex = /^[a-zA-Z ]+$/;
        if (!regex.test(value?.trim())) {
            return { isError: true, errorMessage: (errorMessage || "Invalid input") };
        }
        return { isError: false, errorMessage: null };
    } catch (error) {
        console.error(error);
        return { isError: true, message: "Something went wrong." };
    }
};

export const validateEmail = (email: NullableString, errorMessage = null) => {
    try {
        if (email == null || String(email).trim() === '') {
            return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
        }
        
        const emailStr = String(email).trim();
        
        // RFC 5322 compliant email regex (simplified)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        
        if (!re.test(emailStr)) {
            return { isError: true, errorMessage: (errorMessage || "Invalid email") };
        }
        
        return { isError: false, errorMessage: null };
    } catch (error) {
        console.error(error);
        return { isError: true, message: "Something went wrong." };
    }
};

export const validatePassword = (password: NullableString, errorMessage = null) => {
    try {
        if (!password?.trim())
            return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,40}$/;
        if (!regex.test(password?.trim())) {
            return { isError: true, errorMessage: (errorMessage || "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol.") };
        }
        return { isError: false, errorMessage: null };
    } catch (error) {
        console.error(error);
        return { isError: true, message: "Something went wrong." };
    }
};

export const validateMobileNumber = (value: NullableString, errorMessage = null) => {
    try {
        // Convert to string and trim
        const strValue = typeof value === 'number' ? String(value) : value;
        
        if (strValue == null || strValue.trim() === '') {
            return { isError: true, errorMessage: (errorMessage || "This field must not be empty.") };
        }
        
        const trimmed = strValue.trim();
        
        // Accept 10-digit mobile numbers (with or without country code)
        // Supports: 1234567890, +911234567890, 91-1234567890, 91 1234567890
        const regex = /^(?:\+?91[-\s]?)?\d{10}$/;
        
        if (!regex.test(trimmed)) {
            return { isError: true, errorMessage: (errorMessage || "Invalid mobile number") };
        }
        
        return { isError: false, errorMessage: null };
    } catch (error) {
        console.error(error);
        return { isError: true, message: "Something went wrong." };
    }
};

export const CURRENCYCODE = {
    USD: 'USD',
    EUR: 'EUR',
    GBP: 'GBP',
    INR: 'INR',
    JPY: 'JPY',
    AUD: 'AUD',
    CAD: 'CAD',
    CHF: 'CHF',
    CNY: 'CNY'
};

export const formatCurrency = (
    number: NumberType,
    currencyCode = CURRENCYCODE.USD,
    minimumFractionDigits = 2,
    maximumFractionDigits = 2
) => {
    try {
        if (!number) return null;

        if (!Object.values(CURRENCYCODE).includes(currencyCode)) {
            console.warn(`Invalid currency code "${currencyCode}". Defaulting to USD.`);
            currencyCode = CURRENCYCODE.USD;
        }

        return number?.toLocaleString('en-US', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits,
            maximumFractionDigits,
        });
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const removeDuplicatesFromArray = (array: AnyType) => {
    try {
        return Array.from(new Set(array));
    } catch (error) {
        console.error(error);
        return null;
    }
};

export function getValueByKey(obj: AnyType, key: StringType) {
    if (obj && typeof obj === 'object' && key in obj) {
        return obj[key];
    }
    return null;
}

export const sortArrayByDirection = <T>(array: T[], direction: 'asc' | 'desc' = 'asc', key?: keyof T): T[] => {
    try {
        if (!array || array.length === 0) return [];

        if (direction !== 'asc' && direction !== 'desc') {
            console.error('Invalid sorting direction. Please use "asc" or "desc".');
            return array;
        }

        const sorted = [...array].sort((a, b) => {
            const valueA = key ? a[key] : a;
            const valueB = key ? b[key] : b;

            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
            } else if (typeof valueA === 'number' && typeof valueB === 'number') {
                return direction === 'asc' ? valueA - valueB : valueB - valueA;
            } else if (valueA instanceof Date && valueB instanceof Date) {
                return direction === 'asc' ? valueA.getTime() - valueB.getTime() : valueB.getTime() - valueA.getTime();
            }
            return 0;
        });

        return sorted;
    } catch (error) {
        console.error(error);
        return array;
    }
};

export const reverseString = (str: NullableString) => {
    try {
        if (!str)
            return null;
        return str?.split('')?.reverse()?.join('');
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const isObjectValuesEmpty = (object: AnyType): { isEmpty: boolean, emptyKeys: string[] } => {
    try {
        if (object == null || typeof object !== 'object') return { isEmpty: false, emptyKeys: [] };

        const emptyKeys: string[] = Object.keys(object).filter(key => !object[key]);
        return { isEmpty: emptyKeys.length > 0, emptyKeys };
    } catch (error) {
        console.error(error);
        return { isEmpty: false, emptyKeys: [] };
    }
};

export const checkNotNullAndNotEmpty = (value: AnyType) => {
    try {
        if (value !== undefined && value !== null && value !== "" && value?.toString()?.length !== 0)
            return true;
        else
            return false;
    } catch (error) {
        console.error(error)
        return false;
    }
}

export const handleNaN = (value: AnyType, returnValue = 0) => {
    try {
        if (isNaN(value))
            return returnValue;
        else
            return value;
    } catch (error) {
        console.error(error)
        return returnValue;

    }
}

export const isFalsy = (value: BooleanType) => {
    return !value;
}

export const isTruthy = (value: BooleanType) => {
    return !!value;
}

// capitalizeEveryWord - Capitalizes the first letter of each word in a string
export const capitalizeEveryWord = (str: StringType): StringType => {
    try {
        if (!str) return "" as StringType;
        return str.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    } catch (error) {
        console.error(error);
        return "" as StringType;
    }
};

// camelCase - Converts a string to camelCase
export const camelCase = (str: StringType): StringType => {
    try {
        if (!str) return "" as StringType;
        return str
            .trim()
            .replace(/[-_\s]/g, ' ')
            .split(/\s+/)
            .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
    } catch (error) {
        console.error(error);
        return "" as StringType;
    }
};

// pascalCase - Converts a string to PascalCase
export const pascalCase = (str: StringType): StringType => {
    try {
        if (!str) return "" as StringType;
        return str
            .trim()
            .replace(/[-_\s]/g, ' ')
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
    } catch (error) {
        console.error(error);
        return "" as StringType;
    }
};

// truncate - Truncates a string and appends ellipsis if it exceeds maxLength
export const truncate = (str: StringType, maxLength = 20): StringType => {
    try {
        if (!str) return "" as StringType;
        if (str.length <= maxLength) return str;
        return str.substring(0, maxLength).trim() + "...";
    } catch (error) {
        console.error(error);
        return "" as StringType;
    }
};

// formatDate - Formats a date object to a readable string
export const formatDate = (date: Date | string | number, format = "YYYY-MM-DD"): StringType => {
    try {
        const d = new Date(date);
        if (isNaN(d.getTime())) return "" as StringType;

        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');

        return format
            .replace("YYYY", String(year))
            .replace("MM", month)
            .replace("DD", day)
            .replace("HH", hours)
            .replace("mm", minutes)
            .replace("ss", seconds);
    } catch (error) {
        console.error(error);
        return "" as StringType;
    }
};

// deepClone - Creates a deep copy of an object
export const deepClone = <T>(obj: T): T => {
    try {
        if (obj === null || obj === undefined) return obj;
        if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
        if (Array.isArray(obj)) return obj.map(item => deepClone(item)) as unknown as T;
        if (typeof obj === "object" && obj !== null) {
            // @ts-ignore - TS7053
            const cloned: any = {};
            for (const key of Object.keys(obj)) {
                // @ts-ignore - TS7053
                cloned[key] = deepClone(obj[key]);
            }
            return cloned as T;
        }
        return obj;
    } catch (error) {
        console.error(error);
        return obj;
    }
};

// debounce - Creates a debounced function that delays invocation
export const debounce = <F extends (...args: any[]) => any>(func: F, wait: number): ((...args: Parameters<F>) => void) => {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: Parameters<F>) {
        const later = () => {
            func(...args);
        };
        clearTimeout(timeout!);
        timeout = setTimeout(later, wait);
    };
};

// formatDateRelative - Formats a date as a relative string (e.g., "2 hours ago")
export const formatDateRelative = (date: Date | string | number): StringType => {
    try {
        const d = new Date(date);
        if (isNaN(d.getTime())) return "" as StringType;

        const seconds = Math.floor((new Date().getTime() - d.getTime()) / 1000);
        let interval = seconds / 60;

        if (interval < 1) return "just now";
        if (interval < 1.5) return "a minute ago";
        if (interval < 45) return Math.floor(interval) + " minutes ago";
        if (interval < 90) return "an hour ago";
        if (interval < 1440) return Math.floor(interval / 60) + " hours ago";
        if (interval < 2880) return Math.floor(interval / 1440) + " days ago";
        if (interval < 43200) return Math.floor(interval / 1440 / 30) + " months ago";
        return Math.floor(interval / 1440 / 365) + " years ago";
    } catch (error) {
        console.error(error);
        return "" as StringType;
    }
};

export const groupBy = (arr: AnyType, key: StringType) => {
    try {
        if (!arr)
            return null;
        if (!key)
            return arr;
        return arr.reduce((acc: AnyType, obj: AnyType) => {
            const keyValue = obj[key];
            (acc[keyValue] ??= []).push(obj);
            return acc;
        }, {});
    } catch (error) {
        console.error(error)
        return null;
    }
}
