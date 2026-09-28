import Container from "./Container";
import Logo from "./Logo";
import { twMerge } from "tailwind-merge";


const Header = () => {
  return (
    <header className="h-20 w-full bg-blue-500 border-b border-b-lightText/50">
        <Container className="h-full flex items-center justify-between gap-5 lg:gap-10">
            <Logo />
            <div>searchInput</div>
            <div>navBarList</div>
        </Container>
    </header>
  );
};

export default Header;