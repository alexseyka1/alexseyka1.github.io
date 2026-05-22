import headlessUiPlugin from "@headlessui/tailwindcss";
import merge from "deepmerge";

/** @type {import('tailwindcss').Config} */
const base = {
  // content: [
  //   "../../libs/ui/src/**/*.tsx",
  //   "../../libs/ui-new/src/**/*.tsx",
  // ],
  plugins: [
    headlessUiPlugin,
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable =
            colorKey === "DEFAULT"
              ? `--color${colorGroup}`
              : `--color${colorGroup}-${colorKey}`;

          const newVars =
            typeof value === "string"
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
  theme: {
    container: {
      center: false,
      padding: "0rem",
      screens: {},
    },
    extend: {
      colors: {
        background: "#F9FAFB",
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#182230",
          900: "#101828",
          950: "#0C111D",
          DEFAULT: "#667085",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
          950: "#55160C",
          DEFAULT: "#F04438",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
          950: "#4E1D09",
          DEFAULT: "#F79009",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#DCFAE6",
          200: "#A9EFC5",
          300: "#75E0A7",
          400: "#47CD89",
          500: "#17B26A",
          600: "#079455",
          700: "#067647",
          800: "#085D3A",
          900: "#074D31",
          950: "#053321",
          DEFAULT: "#17B26A",
        },
        secondary: {
          100: "#F1FAF6",
          200: "#E9F6EF",
          300: "#D2EFE3",
          400: "#B9E6D6",
          500: "#7CC0B7",
          600: "#3F9998",
          700: "#017178",
          800: "#066069",
          900: "#0C4A56",
          DEFAULT: "#066069",
        },
        yellow: {
          25: "#FEFDF0",
        },
        orange: {
          25: "#FEFAF5",
          50: "#FEF6EE",
          100: "#FDEAD7",
          200: "#F9DBAF",
          300: "#F7B27A",
          400: "#F38744",
          500: "#F38744",
          600: "#E04F16",
          700: "#B93815",
          800: "#932F19",
          900: "#772917",
          950: "#511C10",
        },
      },
      spacing: {
        navigation: "var(--navigation-height)",
      },
    },
  },
};

export default function withBase(config) {
  return merge(base, config, {
    arrayMerge: combineMerge,
  });
}

const combineMerge = (target, source, options) => {
  const destination = target.slice();

  source.forEach((item, index) => {
    if (typeof destination[index] === "undefined") {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
    } else if (options.isMergeableObject(item)) {
      destination[index] = merge(target[index], item, options);
    } else if (target.indexOf(item) === -1) {
      destination.push(item);
    }
  });
  return destination;
};
