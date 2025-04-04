import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Dropdown = () => (
  <div>
    <Tabs />
  </div>
);

const Tabs = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div
      onMouseLeave={() => setSelected(null)}
      className="relative flex h-fit gap-4"
    >
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          setSelected={setSelected}
          tab={t.id}
        >
          {t.title}
        </Tab>
      ))}
      <AnimatePresence>
        {selected && <Content selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, setSelected, selected }) => (
  <button
    id={`tab-${tab}`}
    onMouseEnter={() => setSelected(tab)}
    className={`flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      selected === tab ? " text-purple-600 font-medium" : "text-gray-900"
    }`}
  >
    {children}
  </button>
);

const Content = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (selected) {
      const tab = document.getElementById(`tab-${selected}`);
      const content = document.getElementById("dropdown");
      if (!tab || !content) return;
      const tabRect = tab.getBoundingClientRect();
      const parentRect = content.offsetParent.getBoundingClientRect();
      setLeft(tabRect.left + tabRect.width / 2 - parentRect.left);
    }
  }, [selected]);

  return (
    <motion.div
      id="dropdown"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-10  w-56 rounded-lg bg-white p-3 shadow-lg border border-gray-200"
    >
      <Nub left={left} />
      <Products />
    </motion.div>
  );
};

const Nub = ({ left }) => (
  <div
    className="absolute -top-2  -translate-x-1/2 w-4 h-4 rotate-45 bg-white border border-gray-200"
    style={{ left }}
  />
);

const Products = () => (
  <div className="flex flex-col text-gray-900">
    {[
      "Blog",
      "Phoenix Files",
      "Laravel Bytes",
      "Ruby Dispatch",
      "Django Beats",
      "JavaScript Journal",
    ].map((item) => (
      <a
        key={item}
        href="/"
        className="px-3 py-2 rounded-md font-medium hover:bg-gray-100 hover:text-purple-600"
      >
        {item}
      </a>
    ))}
  </div>
);

const TABS = [{ title: "Articles", Component: Products }].map((n, idx) => ({
  ...n,
  id: idx + 1,
}));
