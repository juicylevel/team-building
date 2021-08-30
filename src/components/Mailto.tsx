import { useMemo } from 'react';
import { Link, LinkProps } from '@material-ui/core';
import { oneLine } from 'common-tags';

export const BL = '%0D%0A';

const mailtoHref = (
    email: string,
    subject: string | undefined,
    body: string | undefined
): string => oneLine`
    mailto:${email}
    ${subject ? `?subject=${subject}` : ''}
    ${body ? `&body=${body}` : ''}
`;

type MailtoProps = LinkProps & {
    email: string;
    subject?: string;
    body?: string;
};

const Mailto: React.FC<MailtoProps> = ({
    email,
    subject,
    body,
    children,
    ...rest
}) => {
    const href = useMemo(
        () => mailtoHref(email, subject, body),
        [email, subject, body]
    );
    return (
        <Link href={href} {...rest}>
            {children || email}
        </Link>
    );
};

export default Mailto;
