import { Link } from "react-router";
import styled from "styled-components";

export const StyledLink = styled(Link)({
    marginTop: '20px',
    color: 'rgb(100, 108, 255)',
    textDecoration: 'none',
    ':hover': {
        textDecoration: 'underline',
    },
}) as typeof Link;