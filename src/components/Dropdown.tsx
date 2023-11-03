import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiShoppingCart } from "react-icons/hi2";

export default function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <HiShoppingCart />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>shopping cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Iphone 14 </DropdownMenuItem>
        <DropdownMenuItem>Capinha Iphone 14</DropdownMenuItem>
        <DropdownMenuItem>Pelicula Iphone 14</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
