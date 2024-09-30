import Meta from '@components/common/Meta';
import { Box } from '@mui/system';
import { FC } from 'react';
import { IHomePage } from './HomePage.type';
import Text from '@components/default/Text';
import { Button } from '@mui/base/Button';

const boxStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
	paddingX: { xs: '15px', md: '32px', lg: '64px' },
	paddingTop: '30px',
	height: '100dvh'
};

const HomePage: FC<IHomePage> = () => {
	return (
		<>
			<Meta
				title='Create Nextjs Dapp'
				description='Starter to create Dapps with Next, React and Ethers. Start coding is easy as npx create-nextjs-dapp'
			/>
		</>
	);
};

export { HomePage };
