<h1 id="javascript-utility-package-dhavaltankjs-utils">JavaScript Utility Package (dhavaltank-js-utils)</h1>
<p>A collection of functions i use regularly and don&#39;t want to write again</p>
<h2 id="installation">Installation</h2>
<p>Install my-project with npm</p>
<pre><code>npm install --save dhavaltank-js-utils
yarn add dhavaltank-js-utils
</code></pre>
<h1 id="utils-functions-list">Utils Functions List</h1>
<ol>
<li><strong>capitalizeFirstLetter</strong></li>
<li><strong>titleCase</strong></li>
<li><strong>getInitials</strong></li>
<li><strong>getTruncateDescription</strong></li>
<li><strong>compareArrays</strong></li>
<li><strong>generateOTPWithLength</strong></li>
<li><strong>generateRandomPassword</strong></li>
<li><strong>slugify</strong></li>
<li><strong>setLocalStorage</strong></li>
<li><strong>getLocalStorage</strong></li>
<li><strong>removeLocalStorage</strong></li>
<li><strong>clearLocalStorage</strong></li>
<li><strong>getGreeting</strong></li>
<li><strong>validateText</strong></li>
<li><strong>validateEmail</strong></li>
<li><strong>validatePassword</strong></li>
<li><strong>formatCurrency</strong></li>
<li><strong>removeDuplicatesFromArray</strong></li>
<li><strong>sortArrayByMode</strong></li>
<li><strong>reverseString</strong></li>
<li><strong>isObjectValuesEmpty</strong></li>
<li><strong>checkNotNullAndNotEmpty</strong></li>
<li><strong>handleNaN</strong></li>
<li><strong>isFalsy</strong></li>
<li><strong>isTruthy</strong></li>
<li><strong>groupBy</strong></li>
</ol>
<h1 id="documentation">Documentation</h1>
<h2 id="capitalizefirstletter-function">capitalizeFirstLetter(str)</h2>
<p><strong>Function Description:</strong> </p>
<p>The capitalizeFirstLetter function takes a string as input and returns a new string with the first letter capitalized.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>str (string): The input string to be capitalized.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns a new string with the first letter capitalized.</p>
<pre><code>import { capitalizeFirstLetter } from &quot;dhavaltank-js-utils&quot;;
capitalizeFirstLetter(&quot;hello world&quot;); // &#39;Hello world&#39;
</code></pre>
<h2 id="titlecasestr"><strong>titleCase(str)</strong></h2>
<p><strong>Function Description:</strong> </p>
<p>The titleCase function takes a string (str) and an optional key (key) as parameters. The purpose of this function is to convert the input string into a title case, where the first letter of each word is capitalized. Additionally, the function allows for a special case where if the key parameter is set to &quot;And,&quot; it replaces the occurrence of the word &quot;And&quot; with the ampersand &quot;&amp;&quot; in the final title case string.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>str (string): The input string that needs to be converted to title case.</li>
<li>key (string, optional): An optional parameter that, if set to &quot;And,&quot; replaces occurrences of &quot;And&quot; with &quot;&amp;&quot; in the final title case string.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns the input string converted to title case, with the option to replace &quot;And&quot; with &quot;&amp;&quot; if the key parameter is set accordingly.</p>
<pre><code>import { titleCase } from &quot;dhavaltank-js-utils&quot;;
titleCase(&quot;hello world&quot;); // &#39;Hello World&#39;
</code></pre>
<h2 id="getinitialsstr"><strong>getInitials(str)</strong></h2>
<p><strong>Function Description:</strong> </p>
<p>The getInitials function takes a name parameter, which is expected to be a string containing one or more words. The function aims to generate initials based on the first letter of each word in the input string. If the input string is a single word, the function returns the uppercase first and last letters of that word as the initials. If the input string consists of multiple words, the function concatenates the uppercase first letters of each word to form the initials.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>name (string): The input string from which initials are to be generated.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns the initials generated from the input string. If the input is not a valid string or is empty, the function returns a question mark (&quot;?&quot;).</p>
<pre><code>import { getInitials } from &quot;dhavaltank-js-utils&quot;;
getInitials(&quot;hello&quot;); // &#39;H&#39;
getInitials(&quot;hello world&quot;); // &#39;HW&#39;
getInitials(&quot;hello world User&quot;); // &#39;HU&#39;
</code></pre>
<h2 id="gettruncatedescriptionstr"><strong>getTruncateDescription(str)</strong></h2>
<p><strong>Function Description:</strong> </p>
<p>The getTruncateDescription function takes a text parameter (a string) and an optional maxLength parameter (default value is 10). The purpose of this function is to truncate the input string to a specified maximum length and append an ellipsis (&quot;...&quot;) if the original string length exceeds the specified maximum length.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>text (string): The input string that may need truncation.</li>
<li>maxLength (number, optional): The maximum length to which the input string should be truncated. Defaults to 10 if not provided.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns the truncated string, followed by an ellipsis if the original string length exceeds the specified maximum length. If the input string is empty or falsy, an empty string is returned.</p>
<pre><code>import { getTruncateDescription } from &quot;dhavaltank-js-utils&quot;;
getTruncateDescription(&quot;Hello World User&quot;); // &#39;Hello Worl...&#39;
</code></pre>
<h2 id="comparearraysarray1-array2"><strong>compareArrays(array1, array2)</strong></h2>
<p><strong>Function Description:</strong> </p>
<p>The compareArrays function takes two arrays (arr1 and arr2) as parameters and checks if they are equal. Equality in this context means that the arrays contain the same elements, regardless of their order.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>arr1 (array): The first array for comparison.</li>
<li>arr2 (array): The second array for comparison.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns true if the arrays are equal, i.e., they contain the same elements regardless of order. It returns false otherwise.</p>
<pre><code>import { compareArrays } from &quot;dhavaltank-js-utils&quot;;
compareArrays([1, 2, 3], [3, 1, 2]); // true
compareArrays([1, 2, 3], [4, 5, 6]); // false
</code></pre>
<h2 id="generateotpwithlengthlength"><strong>generateOTPWithLength(length)</strong></h2>
<p><strong>Function Description:</strong> </p>
<p>The generateOTPWithLength function is a utility for generating one-time passwords (OTPs) in JavaScript. It creates numeric or alphanumeric passwords of a specified length.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>length (number): The desired length of the generated OTP.</li>
<li>isAlphaNumeric  (boolean):  (optional, default: false): A boolean flag to determine whether the OTP should include alphanumeric characters.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns a string representing the generated OTP.</p>
<pre><code>import { generateOTPWithLength } from &quot;dhavaltank-js-utils&quot;;
generateOTPWithLength(4); // 7519
generateOTPWithLength(6); // 195742
generateOTPWithLength(8, true); // rT9sLpQ7
</code></pre>
<h2 id="generateRandomPassword "><strong>generateRandomPassword(length)</strong></h2>
<p><strong>Function Description:</strong> </p>
<p>The generateRandomPassword function is a JavaScript utility designed to create random passwords. It generates passwords of a specified length with a mix of lowercase and uppercase letters, digits, and special characters.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>length (number):  (optional, default: 8): The desired length of the generated password.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns a string representing the randomly generated password.</p>
<pre><code>import { generateRandomPassword } from &quot;dhavaltank-js-utils&quot;;
generateRandomPassword(12); // aB3$XyZi8Lq
</code></pre>
<h2 id="slugifystring-separator"><strong>slugify(string, separator)</strong></h2>
<p><strong>Function Description:</strong> </p>
<p>The slugify function takes a string parameter and an optional separator parameter (default is &quot;-&quot;). Its purpose is to generate a URL-friendly slug from the input string. The slug is created by converting the string to lowercase, removing non-word characters, replacing spaces and underscores with the specified separator, and ensuring proper formatting.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>string (string): The input string to be converted into a slug.</li>
<li>separator (string, optional): The character used to replace spaces and underscores in the slug. Defaults to &quot;-&quot;.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns the generated slug based on the input string. If the input string is empty or falsy, an empty string is returned.</p>
<pre><code>import { slugify } from &quot;dhavaltank-js-utils&quot;;
slugify(&#39;some string&#39;) // some-string
slugify(&#39;some string&#39;,&quot;_&quot;) // some_string
</code></pre>
<h2 id="setlocalstoragekey-data">setLocalStorage(key, data)</h2>
<p><strong>Function Description:</strong> </p>
<p>The setLocalStorage function takes a key and data as parameters, aiming to store data in the browser&#39;s localStorage. It converts the data to a JSON string before storing it.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>key (string): The key under which the data will be stored in localStorage.</li>
<li>data (any): The data to be stored in localStorage.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns true if the data is successfully stored in localStorage; otherwise, it logs an error and returns false.</p>
<pre><code>import { setLocalStorage } from &quot;dhavaltank-js-utils&quot;;
setLocalStorage(&quot;user&quot;,{&quot;name&quot;:&quot;test user&quot;, &quot;id&quot;: &quot;123&quot;}); // true
</code></pre>
<h2 id="getlocalstoragekey">getLocalStorage(key)</h2>
<p><strong>Function Description:</strong> </p>
<p>The getLocalStorage function takes a key as a parameter and retrieves data from the browser&#39;s localStorage. It attempts to parse the stored data as JSON.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>key (string): The key under which the data is stored in localStorage.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns the parsed data if it exists, or null if the data doesn&#39;t exist or cannot be parsed. It also logs an error if there is an issue retrieving the data.</p>
<pre><code>import { getLocalStorage } from &quot;dhavaltank-js-utils&quot;;
getLocalStorage(&quot;user&quot;); // {&quot;name&quot;:&quot;test user&quot;, &quot;id&quot;: &quot;123&quot;}
</code></pre>
<h2 id="removelocalstoragekey">removeLocalStorage(key)</h2>
<p><strong>Function Description:</strong> </p>
<p>The removeLocalStorage function takes a key as a parameter and removes the corresponding data from localStorage.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>key (string): The key under which the data is stored in localStorage.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns true if the data is successfully removed from localStorage; otherwise, it logs an error and returns false.</p>
<pre><code>import { removeLocalStorage } from &quot;dhavaltank-js-utils&quot;;
removeLocalStorage(&quot;user&quot;); // {&quot;name&quot;:&quot;test user&quot;, &quot;id&quot;: &quot;123&quot;}
</code></pre>
<h2 id="clearlocalstorage">clearLocalStorage()</h2>
<p><strong>Function Description:</strong> </p>
<p>The clearLocalStorage function clears all data stored in the browser&#39;s localStorage.</p>
<p><strong>Return Value</strong></p>
<p>The function returns true if the localStorage is successfully cleared; otherwise, it logs an error and returns false.</p>
<pre><code>import { clearLocalStorage } from &quot;dhavaltank-js-utils&quot;;
clearLocalStorage(&quot;user&quot;); // true
</code></pre>
<h2 id="getgreeting">getGreeting()</h2>
<p><strong>Function Description:</strong> </p>
<p>The getGreeting function returns a greeting message based on the current time of day. It determines the time of day (morning, afternoon, or evening) and returns the corresponding greeting.</p>
<p><strong>Return Value</strong></p>
<p>The function returns a string representing the appropriate greeting for the current time of day.</p>
<pre><code>import { getGreeting } from &quot;dhavaltank-js-utils&quot;;
getGreeting(); // Good morning!
</code></pre>
<h2 id="validatetextvalue-errormessage">validateText(value, errorMessage)</h2>
<p><strong>Function Description:</strong> </p>
<p>The validateText function takes a value parameter (presumably a text input) and an optional errorMessage parameter. It checks if the input is empty or contains only whitespaces. If the input is invalid, it returns an error object with the specified or default error message.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>value (string): The text input to be validated.</li>
<li>errorMessage (string, optional): Custom error message for the validation. Defaults to &quot;This field must not be empty.&quot;</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns an object with isError indicating whether the input is valid or not, and errorMessage providing the error message if isError is true.</p>
<pre><code>import { validateText } from &quot;dhavaltank-js-utils&quot;;
validateText(&#39;John Doe&#39;) // { isError: false, errorMessage: &#39;Valid input&#39; }
</code></pre>
<h2 id="validateemailvalue-errormessage">validateEmail(value, errorMessage)</h2>
<p><strong>Function Description:</strong> </p>
<p>The validateEmail function takes an email parameter and an optional errorMessage parameter. It checks if the email input is empty or if it matches a regular expression for a valid email format.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>email (string): The email input to be validated.</li>
<li>errorMessage (string, optional): Custom error message for the validation. Defaults to &quot;This field must not be empty.&quot;</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns an object with isError indicating whether the email is valid or not, and errorMessage providing the error message if isError is true.</p>
<pre><code>import { validateEmail } from &quot;dhavaltank-js-utils&quot;;
validateEmail(&#39;test@example.com&#39;);// { isError: false, errorMessage: &#39;Valid email&#39; }
</code></pre>
<h2 id="validatepasswordvalue-errormessage">validatePassword(value, errorMessage)</h2>
<p><strong>Function Description:</strong> </p>
<p>The validatePassword function takes a password parameter and an optional errorMessage parameter. It checks if the password input meets certain criteria, such as a minimum length and the inclusion of uppercase letters, lowercase letters, numbers, and symbols.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>password (string): The password input to be validated.</li>
<li>errorMessage (string, optional): Custom error message for the validation. Defaults to &quot;This field must not be empty.&quot;</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns an object with isError indicating whether the password is valid or not, and errorMessage providing the error message if isError is true.</p>
<pre><code>import { validatePassword } from &quot;dhavaltank-js-utils&quot;;
validatePassword(&#39;Abc@1234.com&#39;);// { isError: false, errorMessage: &#39;Valid password&#39; }
</code></pre>
<h2 id="validatemobilenumbervalue-errormessage">validateMobileNumber(value, errorMessage)</h2>
<p><strong>Function Description:</strong> </p>
<p>The validateMobileNumber function takes a value parameter and an optional errorMessage parameter. It checks if the input is a valid 10-digit mobile number.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>value (string): The mobile number input to be validated.</li>
<li>errorMessage (string, optional): Custom error message for the validation. Defaults to &quot;This field must not be empty.&quot;</li>
</ul>
<p><strong>Return Value</strong></p>
<p>The function returns an object with isError indicating whether the mobile number is valid or not, and errorMessage providing the error message if isError is true.</p>
<pre><code>import { validateMobileNumber } from &quot;dhavaltank-js-utils&quot;;
validateMobileNumber(12345467890);// { isError: false, errorMessage: &#39;Valid mobile number&#39; }
</code></pre>
<h2 id="formatCurrency-errormessage">formatCurrency(value, CurrencyCode, minimumFractionDigits, maximumFractionDigits)</h2>
<p><strong>Function Description:</strong> </p>
<p>The formatCurrency function is a JavaScript utility for formatting numbers as currency strings. It uses the toLocaleString method to format a given number with specified currency code and fraction digits.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>value (number):  (required): The numeric value to be formatted as currency.</li>
<li>currencyCode  (optional, default: CurrencyCode.USD): The currency code to use for formatting (e.g., 'USD', 'EUR', 'GBP', etc.).</li>
<li>minimumFractionDigits (optional, default: 2): The minimum number of fraction digits to display.</li>
<li>maximumFractionDigits  (optional, default: 2): The maximum number of fraction digits to display.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns a string representing the formatted currency.</p>
<pre><code>import { formatCurrency } from &quot;dhavaltank-js-utils&quot;;
formatCurrency(12345.67); // $12,345.67
formatCurrency(amount, CurrencyCode.GBP, 1, 3); // £9,876.543
</code></pre>
<h2 id="removeDuplicatesFromArray">removeDuplicatesFromArray(array)</h2>
<p><strong>Function Description:</strong> </p>
<p>The removeDuplicatesFromArray function is a JavaScript utility for removing duplicate elements from an array. It utilizes the Set data structure to ensure uniqueness and returns a new array without duplicates.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>array (required): The input array containing elements with potential duplicates.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns a new array with duplicate elements removed.</p>
<pre><code>import { removeDuplicatesFromArray } from &quot;dhavaltank-js-utils&quot;;
removeDuplicatesFromArray([1, 2, 3, 2, 4, 5, 1]); // [1, 2, 3, 4, 5]
removeDuplicatesFromArray(['apple', 'banana', 'orange', 'apple', 'grape', 'banana']); // £9,876.543
</code></pre>
<h2 id="sortArrayByMode">sortArrayByMode(array, mode)</h2>
<p><strong>Function Description:</strong> </p>
<p>The sortArrayByMode function is a JavaScript utility for sorting an array based on a specified mode (ascending or descending). It can also handle sorting objects within the array based on a specified key.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>array (required): The input array to be sorted.</li>
<li>mode (optional, default: 'asc'): The sorting mode, either 'asc' for ascending or 'desc' for descending.</li>
<li>key (optional, default: null): The key to use for sorting objects within the array. If null, the array elements themselves are sorted.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns a new array sorted based on the specified mode and key.</p>
<pre><code>import { sortArrayByMode } from &quot;dhavaltank-js-utils&quot;;
sortArrayByMode([3, 1, 4, 1, 5, 9, 2, 6]); // [1, 1, 2, 3, 4, 5, 6, 9]
sortArrayByMode([3, 1, 4, 1, 5, 9, 2, 6], 'desc'); // [9, 6, 5, 4, 3, 2, 1, 1]
</code></pre>
<h2 id="reverseString">reverseString(str)</h2>
<p><strong>Function Description:</strong> </p>
<p>The reverseString function is a JavaScript utility for reversing a given string. It uses the split, reverse, and join methods to efficiently reverse the characters in the string.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>str (required): The input string to be reversed.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns a new string with the characters reversed.</p>
<pre><code>import { reverseString } from &quot;dhavaltank-js-utils&quot;;
reverseString('Hello, World!'); // '!dlroW ,olleH'
</code></pre>
<h2 id="isObjectValuesEmpty">isObjectValuesEmpty(obj)</h2>
<p><strong>Function Description:</strong> </p>
<p>The isObjectValuesEmpty function is a JavaScript utility for checking if any values in an object are empty or falsy. It uses the reduce method to iterate through the object's keys and builds an errors object containing keys with empty values.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>object (required): The input object to check for empty values.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns true if any values in the object are empty or falsy, otherwise returns false.</p>
<pre><code>import { isObjectValuesEmpty } from &quot;dhavaltank-js-utils&quot;;
const exampleObject = {
  name: 'John Doe',
  age: 30,
  email: '',
  address: null,
};
isObjectValuesEmpty(exampleObject); // true
</code></pre>
<h2 id="checkNotNullAndNotEmpty">checkNotNullAndNotEmpty(value)</h2>
<p><strong>Function Description:</strong> </p>
<p>The checkNotNullAndNotEmpty function is a JavaScript utility for checking if a value is not undefined, not null, and not an empty string. It also considers falsy values like 0 as valid.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>value (required): The input value to check for not being undefined, not null, and not an empty string.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns true if the value is not undefined, not null, and not an empty string; otherwise, returns false.</p>
<pre><code>import { checkNotNullAndNotEmpty } from &quot;dhavaltank-js-utils&quot;;
checkNotNullAndNotEmpty("Hello, World!"); // true
checkNotNullAndNotEmpty("); // false
</code></pre>
<h2 id="handleNaN">handleNaN(value)</h2>
<p><strong>Function Description:</strong> </p>
<p>The handleNaN function is a JavaScript utility for handling NaN (Not-a-Number) values. It checks if a value is NaN and returns either the original value or a specified fallback value.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>value (required): The input value to check for being NaN.</li>
<li>returnValue (optional, default: 0): The fallback value to return if the input value is NaN.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns the original value if it is not NaN; otherwise, returns the specified fallback value.</p>
<pre><code>import { handleNaN } from &quot;dhavaltank-js-utils&quot;;
handleNaN(42); // 42
handleNaN("Not a Number"); // 0
handleNaN("Not a Number", null); // null
</code></pre>
<h2 id="isFalsy">isFalsy(value)</h2>
<p><strong>Function Description:</strong> </p>
<p>The isFalsy function is a JavaScript utility that checks whether a given value is falsy.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>value (required): The input value to check for falsiness.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns true if the input value is falsy; otherwise, returns false.</p>
<pre><code>import { isFalsy } from &quot;dhavaltank-js-utils&quot;;
isFalsy(null); // true
isFalsy(""); // true
isFalsy(42); // false
</code></pre>
<h2 id="isTruthy">isTruthy(value)</h2>
<p><strong>Function Description:</strong> </p>
<p>The isTruthy function is a JavaScript utility that checks whether a given value is truthy.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>value (required): The input value to check for truthiness.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns true if the input value is truthy; otherwise, returns false.</p>
<pre><code>import { isTruthy } from &quot;dhavaltank-js-utils&quot;;
isTruthy(null); // true
isTruthy(""); // false
isTruthy(0); // false
</code></pre>
<h2 id="groupBy">groupBy(value)</h2>
<p><strong>Function Description:</strong> </p>
<p>The groupBy function is a JavaScript utility for grouping an array of objects by a specified key.</p>
<p><strong>Parameters</strong></p>
<ul>
<li>arr (required): The input array of objects to be grouped.</li>
<li>key (required): The key by which the objects in the array should be grouped.</li>
</ul>
<p><strong>Return Value</strong></p>
<p>Returns an object where keys are unique values of the specified key, and values are arrays of objects grouped by that key.</p>
<pre><code>import { groupBy } from &quot;dhavaltank-js-utils&quot;;
const exampleData = [
  { id: 1, category: 'A', value: 42 },
  { id: 2, category: 'B', value: 65 },
  { id: 3, category: 'A', value: 78 },
];
groupBy(exampleData, 'category'); // { A: [{ id: 1, category: 'A', value: 42 }, { id: 3, category: 'A', value: 78 }], B: [{ id: 2, category: 'B', value: 65 }] }
</code></pre>
<h2 id="authors">Authors</h2>
<ul>
<li><a href="https://www.github.com/dhavaltank01">Dhaval Tank</a></li>
</ul>
<h1 id="hi-im-dhaval-tank-👋">Hi, I&#39;m Dhaval Tank! 👋</h1>
<h2 id="🚀-about-me">🚀 About Me</h2>
<p>👩‍💻 I&#39;m a MERN stack developer.</p>
<h2 id="🔗-links">🔗 Links</h2>
<p><a href="https://dhavaltank01.github.io/dhavaltank/"><img src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white" alt="portfolio"></a>
<a href="https://www.linkedin.com/in/dhaval-tank-0950ba177/"><img src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin"></a></p>
<h2 id="license">License</h2>
<p><a href="https://choosealicense.com/licenses/mit/">MIT</a></p>
<h2 id="contributing">Contributing</h2>
<p>Contributions are always welcome! Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.</p>