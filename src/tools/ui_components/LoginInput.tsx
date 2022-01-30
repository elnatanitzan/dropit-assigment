import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function LoginInput() {

    const login = useSelector((state: any) => state.cart.login)

    const dispatch  = useDispatch();

    const [username, setUsername] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch({ type: 'USERNAME', username: username });
    }

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'})
    }
    
    return (
        <div>
            {!login ? (
                <form noValidate style={{ width: '100%', minWidth: 150, display: 'flex', alignItems: 'center', gap: '20px' }} >
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{padding: '10px', height: 'fit-content'}}
                    onClick={handleSubmit}
                    disabled={username === '' || login || username.length < 3}
                >
                    Login
                </Button>
                </form>
            ) : (
                <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    onClick={handleLogout}
                    sx={{padding: '10px', height: 'fit-content'}}
                >
                    Logout
                </Button>
            )

            }
        </div>
    )
}

export default LoginInput;
