export const lowerCaseRegex = /[a-z]/;

export const upperCaseRegex = /[A-Z]/;

export const numberRegex = /[0-9]/;

export const specialCharacterRegex = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

export const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/;

export const whiteSpaceRegex = /\s/;

// Starts with a letter or a Polish diacritic.
// Contains only letters, Polish diacritics, spaces, apostrophes, and hyphens.
// Does not have consecutive spaces, apostrophes, or hyphens.
export const nameRegex =
  /^(?!(.* .*){2})(?!(.*'.*){2})(?!(.*-.*){2})[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ][A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ '-]+$/;

// Same as above but can contain numbers at start (1Witold), middle (W1told), end (Witold1), and only numbers (123412)
export const authorRegex =
  /^(?!(.* .*){2})(?!(.*'.*){2})(?!(.*-.*){2})[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9][A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 '-]+$/;

// brand excludes
export const dysonBrandInUrlRegex = /(^|[^:])dyson(?!:)/i;
export const brandsExcludedByUrlRegexs = [dysonBrandInUrlRegex];
