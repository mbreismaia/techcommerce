import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const categories = [
  // href: '/category/celulares'
  { name: "Smarthphones", href: "#" },
  { name: "Tablets", href: "#" },
  { name: "Notebooks", href: "#" },
  { name: "Eletrodomésticos", href: "#" },
  { name: "Televisores e Áudio", href: "#" },
  { name: "Games", href: "#" },
  { name: "Segurança e Automação", href: "#" },
  { name: "Acessórios Gerais", href: "#" },
];

export default function Filter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="py-2 px-2">
      <nav className="flex space-x-4">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            passHref
            legacyBehavior
          >
            <a
              className={`flex items-center text-sm px-2 py-2 rounded-full transition ${
                selectedCategory === category.name
                  ? "bg-blueMarine-700 text-white"
                  : "text-blue-950 bg-blueMarine-600 hover:bg-blueMarine-700 hover:text-white"
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
              <IoIosArrowDown className="ml-2" />
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}
