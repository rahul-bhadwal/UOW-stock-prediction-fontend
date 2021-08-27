import { Container } from '@material-ui/core'
import {Header} from './header'

export const PageWrapper = ({pageTitle, children}) => (
    <>
        <Header title={pageTitle} />
        <Container maxWidth='lg' style={{paddingTop: 80, height: '100%'}} >
            {children}
        </Container>
    </>
)