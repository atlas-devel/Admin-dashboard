import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "../../ui/Button";
import { ChevronDown } from "lucide-react";
import { languagesToSwitchWithFlags } from "../../../../../data/navbarData";
import type { Language } from "../../../../../@types/types";
import FranceFlag from "@/assets/images/flags/france.png";

function LanguageSelection() {
  const [language, setLanguage] = useState<Language>({
    language: "French",
    flag: FranceFlag,
  });

  const handleLanguage = (lan: Language) => setLanguage(lan);

  return (
    <section className="hidden lg:flex gap-4 items-center mx-6  ">
      {/* flag */}
      <div className="w-10 ease-in-out duration-300  rounded-sm overflow-hidden">
        <img className="" src={language?.flag} alt="" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="text-ring font-medium transition-transform border border-gray-800 duration-500 ease-in-out "
          >
            {language?.language}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {languagesToSwitchWithFlags.map((lan, idx) => (
            <DropdownMenuItem onClick={() => handleLanguage(lan)} key={idx}>
              {lan.language}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}

export default LanguageSelection;
