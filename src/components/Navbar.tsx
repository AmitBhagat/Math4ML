"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { cn } from "../lib/utils"
import { ThemeToggle } from "./ThemeToggle"
import { Search } from "./Search"
import { Brain } from "lucide-react"
import { CATEGORY_META, CLUSTERS, ICON_MAP } from "../data/topics"

// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      aria-label="Logo"
      role="img"
      fill="none"
      height="1em"
      viewBox="0 0 324 323"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...(props as any)}
    >
      <rect fill="currentColor" height="323" rx="161.5" width="323" x="0.5" />
      <circle cx="162" cy="161.5" fill="white" r="60" className="dark:fill-black" />
    </svg>
  )
}

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    aria-label="Menu"
    className={cn("pointer-events-none", className)}
    fill="none"
    height={16}
    role="img"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    {...(props as any)}
  >
    <path
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
      d="M4 12L20 12"
    />
    <path
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
      d="M4 12H20"
    />
    <path
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
      d="M4 12H20"
    />
  </svg>
)

// Types
export interface NavbarNavLink {
  href: string
  label: string
  active?: boolean
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  logoHref?: string
  navigationLinks?: NavbarNavLink[]
  signInText?: string
  signInHref?: string
  ctaText?: string
  ctaHref?: string
  onSignInClick?: () => void
  onCtaClick?: () => void
}

// Default navigation links
const defaultNavigationLinks: NavbarNavLink[] = [
  { href: "/mathematics", label: "Mathematics", active: true },
  { href: "/machine-learning", label: "Machine Learning" },
  { href: "/curriculum", label: "Foundations" },
]

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "#",
      navigationLinks = defaultNavigationLinks,
      signInText = "Search",
      signInHref = "#",
      ctaText = "Start Learning",
      ctaHref = "#",
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref,
  ) => {
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(CLUSTERS[0].id)
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth
          setIsMobile(width < 768)
        }
      }
      checkWidth()
      const resizeObserver = new ResizeObserver(checkWidth)
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current)
      }
      return () => {
        resizeObserver.disconnect()
      }
    }, [])

    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node
        if (typeof ref === "function") {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      },
      [ref],
    )

    return (
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline",
          className,
        )}
        ref={combinedRef}
        {...(props as any)}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                    size="icon"
                    variant="ghost"
                    aria-expanded={isMenuOpen}
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-2 glass-panel border-white/10 shadow-xl">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-1">
                      <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50">Curriculum</div>
                      {CLUSTERS.map((cluster) => (
                        <NavigationMenuItem className="w-full" key={cluster.id}>
                          <a
                            href={`/#/${cluster.id}`}
                            className={cn(
                              "flex w-full items-center rounded-md px-3 py-2 text-sm font-bold transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer no-underline text-foreground/90"
                            )}
                          >
                            {cluster.title}
                          </a>
                          <div className="ml-4 flex flex-col gap-1 border-l border-accent/20 pl-4 my-1">
                            {cluster.categories.slice(0, 3).map(catId => {
                               const meta = CATEGORY_META.find(m => m.id === catId);
                               return (
                                 <a 
                                   key={catId} 
                                   href={`/#/${cluster.id}/${catId}`}
                                   className="text-[12px] text-muted-foreground hover:text-accent transition-colors py-1"
                                 >
                                   {meta?.title}
                                 </a>
                               )
                            })}
                            <a href={`/#/${cluster.id}`} className="text-[10px] text-accent font-bold mt-1 opacity-80">View all →</a>
                          </div>
                        </NavigationMenuItem>
                      ))}
                      <div className="h-px w-full bg-border/50 my-2" />
                      <NavigationMenuItem className="w-full">
                        <a href="/#/search" className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground cursor-pointer no-underline">
                          Search Topics
                        </a>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
            {/* Main nav */}
            <div className="flex h-16 items-center gap-6">
              <a
                href={logoHref}
                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
              >
                <div className="text-2xl">{logo}</div>
                <span className="hidden font-bold text-xl sm:inline-block">Math4ML</span>
              </a>
              {/* Navigation menu */}
              {!isMobile && (
                <NavigationMenu>
                  <NavigationMenuList className="gap-1">
                    {CLUSTERS.map((cluster) => (
                      <NavigationMenuItem key={cluster.id}>
                        <NavigationMenuTrigger className="text-foreground/80">
                          {cluster.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[850px] p-6 glass-panel rounded-xl shadow-2xl border-white/10">
                            <div className="grid grid-cols-3 gap-3">
                              {cluster.categories.map((catId) => {
                                const meta = CATEGORY_META.find((m) => m.id === catId)
                                if (!meta) return null
                                const Icon = ICON_MAP[catId] || Brain
                                return (
                                  <NavigationMenuLink
                                    href={`/#/${cluster.id}/${catId}`}
                                    key={catId}
                                    className="group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10"
                                  >
                                    <div className="flex items-center gap-3 mb-1">
                                      <div className="p-2 rounded-lg bg-accent/5 group-hover:bg-accent/20 transition-colors">
                                        <Icon className="size-4 text-accent" />
                                      </div>
                                      <span className="text-sm font-bold leading-none tracking-tight">
                                        {meta.title}
                                      </span>
                                    </div>
                                    <p className="line-clamp-2 text-[11px] leading-snug text-muted-foreground opacity-80 group-hover:opacity-100 italic font-serif">
                                      {meta.description}
                                    </p>
                                  </NavigationMenuLink>
                                )
                              })}
                            </div>

                            <div className="mt-8 flex items-center justify-between rounded-2xl bg-accent/5 p-4 border border-accent/10">
                              <div className="flex items-center gap-3">
                                <div className="size-2 rounded-full bg-accent animate-pulse" />
                                <p className="text-muted-foreground text-[12px] opacity-80">
                                  <strong>Deep Dive?</strong> Explore the full{" "}
                                  {cluster.id === "mathematics"
                                    ? "mathematical framework"
                                    : "architectural landscape"}{" "}
                                  of ML.
                                </p>
                              </div>
                              <a
                                href={`/#/${cluster.id}`}
                                className="text-[11px] font-bold uppercase tracking-tighter text-accent hover:underline"
                              >
                                View Cluster Map →
                              </a>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Search />
            </div>
            <ThemeToggle />
            <Button
              className="text-sm font-medium px-4 h-9 rounded-md shadow-sm"
              onClick={e => {
                e.preventDefault()
                if (onCtaClick) {
                  onCtaClick()
                }
              }}
              size="sm"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </header>
    )
  },
)

Navbar.displayName = "Navbar"

export { Logo, HamburgerIcon }

// Demo
export function Demo() {
  return (
    <div className="fixed inset-0">
      <Navbar />
    </div>
  )
}
