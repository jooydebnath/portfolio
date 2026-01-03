
export type TNavLink = {
    id: number;
    label: string;
    route: string;
}

export const navLinks: TNavLink[] = [
    { id: 1, label: 'Home', route: '#home' },
    { id: 2, label: 'About', route: '#about' },
    { id: 3, label: 'Skills', route: '#skills' },
    { id: 4, label: 'Projects', route: '#projects' },
    // { id: 5, label: 'Experience', route: '#experience' },
    { id: 6, label: 'education', route: '#education' },
    { id: 7, label: 'feedback', route: '#feedback' },
    { id: 8, label: 'Contact', route: '#contact' },
]