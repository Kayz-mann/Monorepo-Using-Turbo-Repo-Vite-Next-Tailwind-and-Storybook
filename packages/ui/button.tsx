
export function Button({
    className,
    label,
    onClick,
}: {
    className?: string;
    label: string;
    onClick: () => void;
}): JSX.Element {
    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
}
