import { styled, Box } from '@mui/material';

import { Header } from '../Header';
interface LayoutProps {
  children: JSX.Element;
}

 const Layout = ({ children } : LayoutProps) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Box component="header" sx={{width: "100%"}}>
          <Header />
        </Box>
        <MainWrapper component="main" >
          {children}
        </MainWrapper>
      </ContentWrapper>
    </LayoutWrapper>
  );
};
export default Layout;

const LayoutWrapper = styled('div')(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(0, 0)
}));

const ContentWrapper = styled('div')`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "1440px",
  flex: 1,
  padding: theme.spacing(3, 1),
  alignItems: "flex-start",
  flexDirection: "column",
}));
