import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <Typography paragraph={true}>
      This page was not found, please return to
      <RouterLink to="/"> Home page</RouterLink>
    </Typography>
  );
}
