import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  selectedDifficulties: string[];
  onDifficultyChange: (difficulties: string[]) => void;
}

const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snack", "Beverage"];
const difficulties = ["Easy", "Medium", "Hard"];

export const SearchBar = ({
  searchTerm,
  onSearchChange,
  selectedCategories,
  onCategoryChange,
  selectedDifficulties,
  onDifficultyChange,
}: SearchBarProps) => {
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const handleDifficultyToggle = (difficulty: string) => {
    if (selectedDifficulties.includes(difficulty)) {
      onDifficultyChange(selectedDifficulties.filter(d => d !== difficulty));
    } else {
      onDifficultyChange([...selectedDifficulties, difficulty]);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl animate-fade-in">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-12 shadow-soft focus:shadow-medium transition-all duration-300"
        />
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="h-12 px-6 hover:shadow-medium transition-all duration-300"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {(selectedCategories.length > 0 || selectedDifficulties.length > 0) && (
              <span className="ml-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                {selectedCategories.length + selectedDifficulties.length}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 animate-scale-in">
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          {categories.map((category) => (
            <DropdownMenuCheckboxItem
              key={category}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => handleCategoryToggle(category)}
            >
              {category}
            </DropdownMenuCheckboxItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
          {difficulties.map((difficulty) => (
            <DropdownMenuCheckboxItem
              key={difficulty}
              checked={selectedDifficulties.includes(difficulty)}
              onCheckedChange={() => handleDifficultyToggle(difficulty)}
            >
              {difficulty}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};