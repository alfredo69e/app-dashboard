

import { ChangeEvent, useRef } from 'react';
import { Alert, Box, Button, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAuth } from './../../../hooks';
import { btnOutLineStyle, btnStyle } from './../../../styles';
import { startChangeAvatar, startResetAvatar, useAppDispatch } from '../../../store';
import { AlertDanger, AlertSuccess } from './../../components';


export const ChangeAvatar = () => {
    
    const { t } = useTranslation();
    const { avatar, name } = useAuth();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    

    const onFileInputChange = ( { target: { files } } : ChangeEvent<HTMLInputElement> ) => {
        if ( files?.length === 0 ) return;
        dispatch( startChangeAvatar( files! ) )
    }

    const onResetAvatar = () => {
        dispatch( startResetAvatar() );
    }

  return (
        <Grid container mt={4} ml={2} mr={2} 
        sx={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            alignItems:'center',
            justifyContent: {
                md: 'flex-start',
                xs: 'center',
            }
        }}
        >
            <input  type='file' ref={ fileInputRef } onChange={ onFileInputChange } style={{ display: 'none' }} />
              <Box
                
                  className='animate__animated animate__zoomIn' 
                  component={'img'} 
                  sx={{ 
                    height: 150,
                    width: 150,
                    borderRadius: 3,
                    boxShadow: 5,
                    animation: '1s slidein2',
                    cursor: 'pointer',
                    transition: '0.3s',
                    objectFit: 'contain',
                    ml: 2,
                    '&:hover': {
                      scale: 2,
                      transform: 'translateY(-0.50em);'
                    }
                  }}
                  src={ avatar || './../../assets/avatars/1.png'} alt={ name } 
                />
                <Button 
                  onClick={ () =>  fileInputRef.current?.click() }
                  sx={[
                    btnStyle(),
                    {
                      m: 2,
                      width: {
                        md: 'auto',
                        xs: '100%',
                      }
                    }
                  ]}
                >
                  <Typography sx={{ fontSize: '1.2em' }} >{ t( 'btn.uploadNewPhoto' ) }</Typography> 
                </Button>

                <Button
                   onClick={ onResetAvatar }
                  sx={[
                   
                    btnOutLineStyle( 'transparent', 'red', 'red'),
                    {
                      m: 2,
                      width: {
                        md: 'auto',
                        xs: '100%',
                      }
                    }
                  ]}
                >
                  <Typography sx={{ fontSize: '1.2em' }} >{ t( 'btn.reset' ) }</Typography> 
                </Button>

              <AlertDanger  />

              <AlertSuccess />
                
            </Grid>
  )
}
