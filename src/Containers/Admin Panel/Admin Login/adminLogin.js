import React from 'react'
import { DenseAppBar, Paper, OutlinedTextFields } from '../../../Components'
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { LoginAdmin } from '../../../Config/Functions/functions'

export default class AdminLogin extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ""
        };
    }

    getLogin = async () => {
        let { email, password } = this.state
        try {
            await LoginAdmin(email, password, this.props)
            this.props.history.push('/dashboard')

        }
        catch (err) {
            alert(err)
        }
    }

    render() {
        return (
            <div className="App">
                <DenseAppBar name='admin login' />
                <div style={{ marginTop: '70px' }}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={11} md={6} lg={4}>
                            <Paper>
                                <div style={{ padding: '20px' }}>
                                    <h2>Admin Login</h2>
                                    <OutlinedTextFields type="email" value={this.state.email} label="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                                    <OutlinedTextFields type="password" value={this.state.password} label="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                                    <br />
                                    <Button onClick={this.getLogin} variant='outlined' color='primary' style={{ textAlign: 'center' }} click={this.getLogin}>Login</Button>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>

                </div>

            </div>
        )
    }
}