import NavItem from "./NavItem";

export default function Nav() {
    const navItems = [
       "Store", "Mac", "iPad", "iPhone", "Watch", "Airpods", "Tv & Home", "Entertainment", "Accessories", "Support"
    ];

    return (
        <nav>
            <ul>
                <li><i class="fa-brands fa-apple"></i></li>
                {navItems.map((item, index) => (
                    <NavItem key={index} label={item} />
                ))}
                <li><i class="fa-solid fa-magnifying-glass"></i></li>
                <li><i class="fa-solid fa-bag-shopping"></i></li>
            </ul>
        </nav>
    );
}
