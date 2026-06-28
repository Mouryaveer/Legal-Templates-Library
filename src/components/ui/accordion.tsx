"use client";

import React, { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

const AccordionContext = createContext<{
  openValue: string | null;
  setOpenValue: (value: string | null) => void;
} | null>(null);

export function Accordion({ className, children, ...props }: { className?: string; children: React.ReactNode; type?: string; collapsible?: boolean }) {
  const [openValue, setOpenValue] = useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue }}>
      <div className={cn("flex w-full flex-col", className)} {...props}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  className,
  children,
  ...props
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div data-value={value} className={cn("border-b", className)} {...props}>
      {children}
    </div>
  );
}

export function AccordionTrigger({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used inside Accordion");
  
  const parentRef = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string>("");
  
  React.useEffect(() => {
    const item = parentRef.current?.closest("[data-value]");
    if (item) {
      setValue(item.getAttribute("data-value") || "");
    }
  }, []);

  const isOpen = context.openValue === value;

  return (
    <div ref={parentRef} className="flex">
      <button
        type="button"
        onClick={() => context.setOpenValue(isOpen ? null : value)}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-left font-semibold text-sm transition-all outline-none hover:underline",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className={cn("h-4 w-4 shrink-0 transition-transform duration-200 text-[#C89A4B]", isOpen && "rotate-180")} />
      </button>
    </div>
  );
}

export function AccordionContent({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used inside Accordion");

  const parentRef = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string>("");

  React.useEffect(() => {
    const item = parentRef.current?.closest("[data-value]");
    if (item) {
      setValue(item.getAttribute("data-value") || "");
    }
  }, []);

  const isOpen = context.openValue === value;

  return (
    <div
      ref={parentRef}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0",
        className
      )}
      {...props}
    >
      <div className="text-sm leading-relaxed text-[#666]">{children}</div>
    </div>
  );
}
