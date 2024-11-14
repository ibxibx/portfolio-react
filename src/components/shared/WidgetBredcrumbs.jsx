import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const WidgetBreadcrumbs = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const pathArray = location.pathname.split("/").filter((x) => x);
    return pathArray.map((segment, index) => ({
      name: segment,
      path: "/" + pathArray.slice(0, index + 1).join("/"),
    }));
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav aria-label="breadcrumb" className="breadcrumbs">
      <AnimatePresence mode="wait">
        <motion.ol className="flex items-center gap-2 overflow-hidden text-sm font-medium lowercase">
          {breadcrumbs.map((crumb, index) => (
            <motion.li
              key={crumb.path}
              className="flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.615, 0.19, 0.305, 0.91],
              }}
            >
              <Link
                to={crumb.path}
                className={`transition hover:opacity-50 ${
                  index === breadcrumbs.length - 1 ? "pointer-events-none" : ""
                }`}
              >
                {crumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="opacity-30">/</span>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </AnimatePresence>
    </nav>
  );
};

export default WidgetBreadcrumbs;
