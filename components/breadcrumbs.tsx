"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "./seo-schemas";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  // Build full breadcrumb path with home
  const fullItems = [
    { label: "Home", href: "https://solarinstallationvadodara.in" },
    ...items.map(item => ({
      ...item,
      href: item.href.startsWith("http") ? item.href : `https://solarinstallationvadodara.in${item.href}`
    }))
  ];

  // Schema items for structured data
  const schemaItems = fullItems.map(item => ({
    name: item.label,
    url: item.href
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center flex-wrap text-sm text-gray-600 ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1">
          {/* Home */}
          <li className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center hover:text-orange-600 transition-colors"
              title="Home"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {/* Breadcrumb items */}
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
              {index === items.length - 1 ? (
                // Current page - not a link
                <span 
                  className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-none"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                // Link to parent page
                <Link 
                  href={item.href}
                  className="hover:text-orange-600 transition-colors truncate max-w-[150px] md:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

// Pre-built breadcrumb configurations
export function AreaBreadcrumbs({ areaName }: { areaName: string }) {
  return (
    <Breadcrumbs 
      items={[
        { label: "Solar Installation", href: "/solar-installation-in-vadodara" },
        { label: areaName, href: "#" }
      ]}
      className="py-3"
    />
  );
}

export function KeywordBreadcrumbs({ keywordTitle }: { keywordTitle: string }) {
  return (
    <Breadcrumbs 
      items={[
        { label: "Services", href: "/solar-panels-vadodara" },
        { label: keywordTitle, href: "#" }
      ]}
      className="py-3"
    />
  );
}

export function BlogBreadcrumbs({ postTitle }: { postTitle: string }) {
  return (
    <Breadcrumbs 
      items={[
        { label: "Blog", href: "/blog" },
        { label: postTitle, href: "#" }
      ]}
      className="py-3"
    />
  );
}
