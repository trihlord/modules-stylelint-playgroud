/** @type {import("stylelint").Config} */
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global", "local"] },
    ],
  },
};
