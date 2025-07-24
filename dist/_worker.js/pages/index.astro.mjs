globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderHead, a as renderComponent, b as renderTemplate } from '../chunks/astro/server_D2_DvJQx.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_ZF-sf7Be.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_ZF-sf7Be.mjs';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$a = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
];
const ArrowUpDown = createLucideIcon("arrow-up-down", __iconNode$a);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$9 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$9);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$8 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$8);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$7 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }]
];
const Building = createLucideIcon("building", __iconNode$7);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$6 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
];
const Calculator = createLucideIcon("calculator", __iconNode$6);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$5 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$5);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$4);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$3);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$2);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode$1);

/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);

const MainDashboard = ({ onNavigate }) => {
  const handleButtonClick = (buttonName) => {
    if (buttonName === "2025 School Rankings") {
      onNavigate("school-rankings");
    } else {
      alert(`${buttonName} coming soon! For now, only School Rankings is available.`);
    }
  };
  const statisticsCards = [
    {
      title: "2025 School Rankings",
      description: "Compare PreK-12 education rankings with per-student funding across all 50 states",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-8 h-8" }),
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      available: true
    },
    {
      title: "College Statistics",
      description: "University rankings, tuition costs, graduation rates, and admission data",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "w-8 h-8" }),
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      available: false
    },
    {
      title: "Teacher Salaries",
      description: "Comprehensive analysis of teacher compensation across states and districts",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8" }),
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      available: false
    },
    {
      title: "Student Performance",
      description: "Test scores, graduation rates, and academic achievement metrics",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8" }),
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700",
      available: false
    },
    {
      title: "Education Trends",
      description: "Historical data and trending patterns in American education",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-8 h-8" }),
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
      available: false
    },
    {
      title: "Budget Analysis",
      description: "Education spending breakdowns, budget allocations, and financial trends",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-8 h-8" }),
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:from-indigo-600 hover:to-indigo-700",
      available: false
    },
    {
      title: "State Comparisons",
      description: "Side-by-side analysis of education systems across different states",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-8 h-8" }),
      color: "from-pink-500 to-pink-600",
      hoverColor: "hover:from-pink-600 hover:to-pink-700",
      available: false
    },
    {
      title: "Research & Reports",
      description: "Educational research findings, policy analysis, and comprehensive reports",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-8 h-8" }),
      color: "from-teal-500 to-teal-600",
      hoverColor: "hover:from-teal-600 hover:to-teal-700",
      available: false
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white shadow-sm border-b border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Education Statistics Hub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-1", children: "Comprehensive data and analysis for American education" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800", children: "2025 Data" }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Explore Education Data & Analytics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Dive deep into comprehensive education statistics, rankings, and trends across the United States. Compare states, analyze funding, and discover insights that matter." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: statisticsCards.map((card, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleButtonClick(card.title),
          className: `
                  w-full p-6 rounded-xl shadow-lg transform transition-all duration-200 
                  ${card.available ? "cursor-pointer hover:scale-105 hover:shadow-xl" : "cursor-not-allowed opacity-75"}
                  bg-gradient-to-r ${card.color} ${card.available ? card.hoverColor : ""}
                  text-white relative overflow-hidden
                `,
          disabled: !card.available,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-white bg-opacity-20 rounded-lg", children: card.icon }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-3 text-center", children: card.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-opacity-90 text-sm text-center leading-relaxed", children: card.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-center", children: card.available ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white", children: "Available Now" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white", children: "Coming Soon" }) })
            ] }),
            card.available && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200" })
          ]
        }
      ) }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 bg-white rounded-2xl shadow-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6 text-center", children: "Quick Statistics Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-blue-600 mb-2", children: "50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: "States Analyzed" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-600 mb-2", children: "$24K" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: "Highest Funding/Student" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-orange-600 mb-2", children: "$7.6K" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: "Lowest Funding/Student" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-purple-600 mb-2", children: "2025" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: "Latest Data Year" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 text-center text-gray-500 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Data sourced from US News & World Report, NEA, and Education Data Initiative" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "© 2025 Education Statistics Hub. Built for educational analysis and research." })
      ] })
    ] })
  ] });
};
const SchoolRankings = ({ onNavigate }) => {
  const [sortField, setSortField] = reactExports.useState("preK12Rank");
  const [sortDirection, setSortDirection] = reactExports.useState("asc");
  const stateData = [
    { state: "Massachusetts", fundingPerStudent: 17058, preK12Rank: 1, region: "Northeast" },
    { state: "Connecticut", fundingPerStudent: 20635, preK12Rank: 2, region: "Northeast" },
    { state: "New Jersey", fundingPerStudent: 20021, preK12Rank: 3, region: "Northeast" },
    { state: "Vermont", fundingPerStudent: 19400, preK12Rank: 4, region: "Northeast" },
    { state: "New Hampshire", fundingPerStudent: 16893, preK12Rank: 5, region: "Northeast" },
    { state: "Virginia", fundingPerStudent: 12e3, preK12Rank: 6, region: "South" },
    { state: "Minnesota", fundingPerStudent: 14e3, preK12Rank: 7, region: "Midwest" },
    { state: "Wisconsin", fundingPerStudent: 13500, preK12Rank: 8, region: "Midwest" },
    { state: "Delaware", fundingPerStudent: 16e3, preK12Rank: 9, region: "South" },
    { state: "Utah", fundingPerStudent: 7628, preK12Rank: 10, region: "West" },
    { state: "Pennsylvania", fundingPerStudent: 16395, preK12Rank: 11, region: "Northeast" },
    { state: "Washington", fundingPerStudent: 15e3, preK12Rank: 12, region: "West" },
    { state: "Colorado", fundingPerStudent: 12e3, preK12Rank: 13, region: "West" },
    { state: "New York", fundingPerStudent: 24040, preK12Rank: 14, region: "Northeast" },
    { state: "Maine", fundingPerStudent: 15500, preK12Rank: 15, region: "Northeast" },
    { state: "Illinois", fundingPerStudent: 15e3, preK12Rank: 16, region: "Midwest" },
    { state: "Ohio", fundingPerStudent: 13e3, preK12Rank: 17, region: "Midwest" },
    { state: "Iowa", fundingPerStudent: 12500, preK12Rank: 18, region: "Midwest" },
    { state: "North Dakota", fundingPerStudent: 14e3, preK12Rank: 19, region: "Midwest" },
    { state: "Wyoming", fundingPerStudent: 16224, preK12Rank: 20, region: "West" },
    { state: "Maryland", fundingPerStudent: 15300, preK12Rank: 21, region: "South" },
    { state: "Nebraska", fundingPerStudent: 13500, preK12Rank: 22, region: "Midwest" },
    { state: "Rhode Island", fundingPerStudent: 17500, preK12Rank: 23, region: "Northeast" },
    { state: "Kansas", fundingPerStudent: 12800, preK12Rank: 24, region: "Midwest" },
    { state: "South Dakota", fundingPerStudent: 1e4, preK12Rank: 25, region: "Midwest" },
    { state: "Oregon", fundingPerStudent: 12e3, preK12Rank: 26, region: "West" },
    { state: "Indiana", fundingPerStudent: 11500, preK12Rank: 27, region: "Midwest" },
    { state: "Florida", fundingPerStudent: 11e3, preK12Rank: 28, region: "South" },
    { state: "Montana", fundingPerStudent: 12e3, preK12Rank: 29, region: "West" },
    { state: "Michigan", fundingPerStudent: 12500, preK12Rank: 30, region: "Midwest" },
    { state: "Missouri", fundingPerStudent: 11e3, preK12Rank: 31, region: "Midwest" },
    { state: "Alaska", fundingPerStudent: 17726, preK12Rank: 32, region: "West" },
    { state: "North Carolina", fundingPerStudent: 9500, preK12Rank: 33, region: "South" },
    { state: "Tennessee", fundingPerStudent: 10800, preK12Rank: 34, region: "South" },
    { state: "Texas", fundingPerStudent: 10500, preK12Rank: 35, region: "South" },
    { state: "Hawaii", fundingPerStudent: 15e3, preK12Rank: 36, region: "West" },
    { state: "Idaho", fundingPerStudent: 9364, preK12Rank: 37, region: "West" },
    { state: "Georgia", fundingPerStudent: 10500, preK12Rank: 38, region: "South" },
    { state: "Kentucky", fundingPerStudent: 11500, preK12Rank: 39, region: "South" },
    { state: "California", fundingPerStudent: 13e3, preK12Rank: 40, region: "West" },
    { state: "Arkansas", fundingPerStudent: 13258, preK12Rank: 41, region: "South" },
    { state: "South Carolina", fundingPerStudent: 11e3, preK12Rank: 42, region: "South" },
    { state: "West Virginia", fundingPerStudent: 12500, preK12Rank: 43, region: "South" },
    { state: "Oklahoma", fundingPerStudent: 11311, preK12Rank: 44, region: "South" },
    { state: "Arizona", fundingPerStudent: 10090, preK12Rank: 45, region: "West" },
    { state: "Mississippi", fundingPerStudent: 9500, preK12Rank: 46, region: "South" },
    { state: "Alabama", fundingPerStudent: 13461, preK12Rank: 47, region: "South" },
    { state: "Nevada", fundingPerStudent: 1e4, preK12Rank: 48, region: "West" },
    { state: "Louisiana", fundingPerStudent: 12500, preK12Rank: 49, region: "South" },
    { state: "New Mexico", fundingPerStudent: 11500, preK12Rank: 50, region: "West" }
  ];
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  const sortedData = [...stateData].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];
    if (sortField === "state") {
      return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
    return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
  });
  const getSortIcon = (field) => {
    if (sortField !== field) return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "w-4 h-4" });
    return sortDirection === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" });
  };
  const getRegionColor = (region) => {
    const colors = {
      "Northeast": "bg-blue-100 text-blue-800",
      "South": "bg-orange-100 text-orange-800",
      "Midwest": "bg-green-100 text-green-800",
      "West": "bg-red-100 text-red-800"
    };
    return colors[region] || "bg-gray-100 text-gray-800";
  };
  const getRankBadge = (rank) => {
    if (rank <= 10) return "bg-green-100 text-green-800";
    if (rank <= 25) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };
  const getEfficiencyBadge = (rank, funding) => {
    const efficiency = (51 - rank) / (funding / 1e3);
    if (efficiency > 3.5) return "bg-green-100 text-green-800 border border-green-300";
    if (efficiency > 2.5) return "bg-yellow-100 text-yellow-800 border border-yellow-300";
    return "bg-red-100 text-red-800 border border-red-300";
  };
  const calculateStats = () => {
    const avgFunding = stateData.reduce((sum, s) => sum + s.fundingPerStudent, 0) / stateData.length;
    const maxFunding = Math.max(...stateData.map((s) => s.fundingPerStudent));
    const minFunding = Math.min(...stateData.map((s) => s.fundingPerStudent));
    return { avgFunding, maxFunding, minFunding };
  };
  const stats = calculateStats();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white shadow-sm border-b border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => onNavigate("dashboard"),
            className: "text-blue-600 hover:text-blue-800 font-medium text-sm",
            children: "← Back to Dashboard"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 border-l border-gray-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-gray-900", children: "Education Statistics Hub" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: "School Rankings" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-100 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-6 h-6 text-blue-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "2025 US News PreK-12 Education Rankings vs School Funding by State" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 mb-6", children: "Official US News & World Report 2025 PreK-12 education rankings compared with per-student funding. Click column headers to sort data." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-sm bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-blue-600 mb-1", children: [
              "$",
              Math.round(stats.avgFunding).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600 font-medium", children: "Average Funding per Student" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-green-600 mb-1", children: [
              "$",
              stats.maxFunding.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600 font-medium", children: "Highest Funding (New York)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-orange-600 mb-1", children: [
              "$",
              stats.minFunding.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600 font-medium", children: "Lowest Funding (Utah)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gradient-to-r from-gray-50 to-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-blue-50 transition-colors duration-150",
              onClick: () => handleSort("preK12Rank"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PreK-12 Rank" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-blue-500", children: getSortIcon("preK12Rank") })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-blue-50 transition-colors duration-150",
              onClick: () => handleSort("state"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "State" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-blue-500", children: getSortIcon("state") })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-blue-50 transition-colors duration-150",
              onClick: () => handleSort("fundingPerStudent"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Funding per Student" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-blue-500", children: getSortIcon("fundingPerStudent") })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Efficiency" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Region" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-100", children: sortedData.map((state, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors duration-150`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-5 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center px-4 py-2 rounded-full text-sm font-bold shadow-sm ${getRankBadge(state.preK12Rank)}`, children: [
            "#",
            state.preK12Rank
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-5 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-gray-900", children: state.state }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-5 whitespace-nowrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-bold text-gray-900", children: [
              "$",
              state.fundingPerStudent.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500 font-medium", children: state.fundingPerStudent > stats.avgFunding ? "↗ Above average" : "↘ Below average" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-5 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-3 py-2 rounded-lg text-sm font-bold shadow-sm ${getEfficiencyBadge(state.preK12Rank, state.fundingPerStudent)}`, children: ((51 - state.preK12Rank) / (state.fundingPerStudent / 1e3)).toFixed(1) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-5 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center px-4 py-2 rounded-full text-sm font-bold shadow-sm ${getRegionColor(state.region)}`, children: state.region }) })
        ] }, state.state)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-lg border border-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-gray-900 mb-4 flex items-center text-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "🏆" }),
              "Top 10 PreK-12 Performers"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 text-sm", children: stateData.slice(0, 10).map((state, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-gray-900", children: [
                i + 1,
                ". ",
                state.state
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600 font-bold", children: [
                "$",
                state.fundingPerStudent.toLocaleString()
              ] })
            ] }, state.state)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-lg border border-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-gray-900 mb-4 flex items-center text-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "💡" }),
              "Efficiency Champions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 p-4 rounded-xl border-l-4 border-green-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-900", children: "Utah:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: "#10 rank with lowest funding ($7,628)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-900", children: "Virginia:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: "#6 rank with moderate funding ($12,000)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 p-4 rounded-xl border-l-4 border-purple-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-900", children: "Wisconsin:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: "#8 rank with below-average funding ($13,500)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-900", children: "Minnesota:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: "#7 rank with moderate funding ($14,000)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-lg border border-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-gray-900 mb-4 flex items-center text-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mr-3", children: "📊" }),
              "Key Insights"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start p-3 bg-green-50 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500 mr-3 text-lg", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 font-medium", children: "Massachusetts leads PreK-12 rankings" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start p-3 bg-blue-50 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500 mr-3 text-lg", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 font-medium", children: "Northeast dominates top 5 positions" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start p-3 bg-red-50 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 mr-3 text-lg", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 font-medium", children: "New York: Highest funding but ranks #14" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start p-3 bg-purple-50 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-500 mr-3 text-lg", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 font-medium", children: "Utah achieves top 10 with 68% less funding than NY" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start p-3 bg-orange-50 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-500 mr-3 text-lg", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 font-medium", children: "Maryland ranks #21 with average funding" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-8 border-t border-gray-300 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-900", children: "Sources:" }),
          " US News & World Report 2025 Best States PreK-12 Education Rankings, NEA Rankings and Estimates 2025, Education Data Initiative 2025. Efficiency calculated as (51-rank)/(funding/1000). Higher scores indicate better educational outcomes per dollar spent.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-800 mt-2 inline-block", children: "Note:" }),
          " Maryland ranks #21 in PreK-12 education specifically, not overall education category."
        ] }) })
      ] })
    ] }) })
  ] });
};
function App() {
  const [currentPage, setCurrentPage] = reactExports.useState("dashboard");
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    currentPage === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(MainDashboard, { onNavigate: handleNavigate }),
    currentPage === "school-rankings" && /* @__PURE__ */ jsxRuntimeExports.jsx(SchoolRankings, { onNavigate: handleNavigate })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#000000"><meta name="description" content="Comprehensive data and analysis for American education"><link rel="apple-touch-icon" href="/logo192.png"><link rel="manifest" href="/manifest.json"><title>Education Statistics Hub</title>${renderHead()}</head> <body> <noscript>You need to enable JavaScript to run this app.</noscript> <div id="root"> ${renderComponent($$result, "App", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/prestongarrison/Source/speedstats/src/components/App.jsx", "client:component-export": "default" })} </div> </body></html>`;
}, "/Users/prestongarrison/Source/speedstats/src/pages/index.astro", void 0);

const $$file = "/Users/prestongarrison/Source/speedstats/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
