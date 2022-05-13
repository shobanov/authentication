import { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const StyledRoot = styled.div`
	display: flex;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	height: 100vh;
`

const GlobalStyles: any = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body, #root {
  height: 100%;
}
* {
  margin: 0;
  font-family: 'Segoe UI';
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`

interface IProps {
	children: React.ReactNode
}

export const Root: FC<IProps> = ({ children }) => {
	return (
		<>
			<GlobalStyles />
			<StyledRoot>{children}</StyledRoot>
		</>
	)
}
