interface LinkProps {
    title: string;
    icon: string;
}

export function Link(props: LinkProps) {
    return (
        <a href="#">
            <img src={props.icon} alt={props.title} />
        </a>
    )
};
