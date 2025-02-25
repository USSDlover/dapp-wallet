import Navbar from '@components/default/Navbar';
import ResponsiveProvider from '@contexts/ResponsiveContext';
import Web3Provider from '@contexts/Web3Context';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';
import { darkTheme } from 'theme/theme';

const CreateNextjsDapp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />

				<link rel='apple-touch-icon' href='/icon.png'></link>

				<meta name='application-name' content='NextJS Dapp' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='NextJS Dapp' />
				<meta name='description' content='The Dapp for the next generation of the internet' />

				<meta name='theme-color' content='#1E1F20' />
			</Head>

			<ResponsiveProvider>
				<Web3Provider>
					<ThemeProvider theme={darkTheme}>
						<GlobalStyle />
						<Navbar />
						<Component {...pageProps} />
					</ThemeProvider>
				</Web3Provider>
			</ResponsiveProvider>
		</>
	);
};

export default CreateNextjsDapp;
