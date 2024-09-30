import Button from '@components/default/Button';
import Text from '@components/default/Text';
import { ETextType } from '@components/default/Text/Text.enum';
import { Box } from '@mui/system';
import { FaStar } from 'react-icons/fa';
import { ESize } from 'theme/theme.enum';
import WalletButton from '../WalletButton';

const repoUrl = 'https://github.com/swiiny/create-nextjs-dapp';

const boxStyles = {
	display: 'flex',
	justifyContent: { xs: 'flex-end', sm: 'space-between' },
	position: 'fixed',
	left: '0',
	right: '0',
	marginY: '16px',
	paddingX: '16px'
};

const titleStyles = { display: { xs: 'none', sm: 'flex' }, alignItems: 'center' };

const gradientContainerProps = { sx: { display: { xs: 'none', md: 'flex' } } };

const Navbar = () => {
	return (
		<Box component='nav' width='100%' sx={boxStyles}>
			<WalletButton />
		</Box>
	);
};

export { Navbar };
