import {
    Container,
    Grid,
    Button
} from '@material-ui/core';

import Section1 from '../containers/Section1'

const styles = {
    el: {
        marginBottom: '30px'
    }
}

const Home = () => {
    return (
        <div  className="home">
            <Container  maxWidth="lg">
                <Grid style={styles.el} container justify='space-between' >
                    <Grid item xs={0}><Button>Technology</Button></Grid>
                    <Grid item xs={0}><Button>Design</Button></Grid>
                    <Grid item xs={0}><Button>Culture</Button></Grid>
                    <Grid item xs={0}><Button>Business</Button></Grid>
                    <Grid item xs={0}><Button>Politics</Button></Grid>
                    <Grid item xs={0}><Button>Opinion</Button></Grid>
                    <Grid item xs={0}><Button>Science</Button></Grid>
                    <Grid item xs={0}><Button>Health</Button></Grid>
                    <Grid item xs={0}><Button>Style</Button></Grid>
                    <Grid item xs={0}><Button>Travel</Button></Grid>
                </Grid>
            
            </Container>
            <Section1/>
        </div>
    )
}

export default Home;