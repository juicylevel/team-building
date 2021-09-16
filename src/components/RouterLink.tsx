import { Link, LinkBaseProps } from '@material-ui/core';
import { LinkProps, Link as RouterDomLink } from 'react-router-dom';

type RouterLinkProps = LinkBaseProps & LinkProps;

const RouterLink: React.FC<RouterLinkProps> = ({ children, ...rest }) => (
    <Link component={RouterDomLink} {...rest}>
        {children}
    </Link>
);

export default RouterLink;
