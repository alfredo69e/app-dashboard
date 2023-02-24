import { Divider, Grid } from '@mui/material';
import { ChangeAvatar } from './ChangeAvatar';
import { InputProfile } from './InputProfile';



export const AccountView = () => {

  return (
         

        <Grid container   >
            <ChangeAvatar />
          <InputProfile />

        </Grid>


  )
}
