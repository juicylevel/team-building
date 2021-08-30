import { Link, LinkProps } from '@material-ui/core';

type HrefProps = LinkProps & {
    hiddenChildren?: boolean;
};

const Href: React.FC<HrefProps> = ({
    children,
    href,
    hiddenChildren,
    ...rest
}) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        {...rest}
    >
        {!hiddenChildren && (children || href)}
    </Link>
);

export default Href;
