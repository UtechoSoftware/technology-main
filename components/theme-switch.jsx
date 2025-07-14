"use client";

import { useSwitch } from "@heroui/switch";
import { useIsSSR } from "@react-aria/ssr";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";

export const ThemeSwitch = ({ className, classNames }) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${
      theme === "light" || isSSR ? "dark" : "light"
    } mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "transition-opacity cursor-pointer",
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getWrapperProps()} className="p-[10px] rounded-xl">
        {!isSelected || isSSR ? (
          <IoSunnySharp className="w-5 h-5 text-white" />
        ) : (
          <BsMoonStarsFill className="w-5 h-5 text-white" />
        )}
      </div>
    </Component>
  );
};
