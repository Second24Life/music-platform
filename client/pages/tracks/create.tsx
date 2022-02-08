import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';

type Props = {};

const Create = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [picture, setPicture] = React.useState(null);
  const [audio, setAudio] = React.useState(null);
  // const name = useInput('');
  // const artist = useInput('');
  // const text = useInput('');
  const router = useRouter();

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <div>
      <MainLayout>
        <StepWrapper activeStep={activeStep}>
          {activeStep === 0 && (
            <Grid container direction={'column'} sx={{ p: 3 }}>
              <TextField
                // {...name}
                sx={{ mt: 2 }}
                label={'Название трека'}
              />
              <TextField
                // {...artist}
                sx={{ mt: 2 }}
                label={'Имя исполнителя'}
              />
              <TextField
                // {...text}
                sx={{ mt: 2 }}
                label={'Слова к треку'}
                multiline
                rows={3}
              />
            </Grid>
          )}
          {activeStep === 1 && (
            <FileUpload setFile={setPicture} accept='image/*'>
              <Button>Загрузить изображение</Button>
            </FileUpload>
          )}
          {activeStep === 2 && (
            <FileUpload setFile={setAudio} accept='audio/*'>
              <Button>Загрузить аудио</Button>
            </FileUpload>
          )}
        </StepWrapper>
        <Grid container justifyContent='space-between'>
          <Button disabled={activeStep === 0} onClick={back}>
            Назад
          </Button>
          <Button onClick={next}>Вперед</Button>
        </Grid>
      </MainLayout>
    </div>
  );
};

export default Create;
