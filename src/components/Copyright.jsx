import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="secondary"
      align="center"
      fontSize={17}
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/IgorSokolyanskyy">
        Igor Sokolyanskyy
      </Link>
      {'  '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
