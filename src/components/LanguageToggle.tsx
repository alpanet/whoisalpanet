"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GB,TR } from 'country-flag-icons/react/3x2'
export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="fixed bottom-4 right-5 lg:right-10 h-12 w-12 border border-neutral-800 rounded-full backdrop-blur-sm flex items-center justify-center z-50">
        <Button variant="outline" size="icon">
          {
            i18n.language === 'tr' ? <TR className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" /> : <GB className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          }
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('tr')}>
          Türkçe
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
