import React from 'react';
import { ITrack } from '../../types/track';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';

type Props = {};

const TrackPage = (props: Props) => {
  const track: ITrack = {
    _id: '1',
    name: 'Track 1',
    artist: 'Artist 1',
    text: 'Some text',
    listens: 5,
    audio: 'http://localhost:3000/audio/1.mp3',
    picture: 'http://localhost:3000/audio/1.jpg',
    comments: [],
  };
  const router = useRouter();

  return (
    <>
      <MainLayout>
        <Button variant={'outlined'} sx={{ fontSize: 32 }} onClick={() => router.push('/tracks/')}>
          К списку
        </Button>
        <Grid container style={{ margin: '20px 0' }}>
          {/* <img src={'http://localhost:5000/' + track.picture} width={200} height={200}/> */}
          <img src={track.picture} width={200} height={200} />
          <div style={{ marginLeft: 30 }}>
            <h1>Название трека - {track.name}</h1>
            <h1>Исполнитель - {track.artist}</h1>
            <h1>Прослушиваний - {track.listens}</h1>
          </div>
        </Grid>
        <h1>Слова в треке</h1>
        <p>{track.text}</p>
        <h1>Комментарии</h1>
        <Grid container>
          <TextField
            label='Ваше имя'
            fullWidth
            // {...username}
          />
          <TextField
            label='Комментарий'
            // {...text}
            fullWidth
            multiline
            rows={4}
          />
          {/* <Button onClick={addComment}>Отправить</Button> */}
          <Button>Отправить</Button>
        </Grid>
        <div></div>
      </MainLayout>
    </>
  );
};

export default TrackPage;
