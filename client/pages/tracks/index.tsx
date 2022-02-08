import { Button, Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'Track 1',
      artist: 'Artist 1',
      text: 'Some text',
      listens: 5,
      audio: 'http://localhost:3000/audio/1.mp3',
      picture: 'http://localhost:3000/audio/1.jpg',
      comments: [],
    },
    {
      _id: '2',
      name: 'Track 2',
      artist: 'Artist 2',
      text: 'Some text',
      listens: 5,
      audio: 'http://localhost:3000/audio/2.mp3',
      picture: 'http://localhost:3000/audio/2.jpg',
      comments: [],
    },
    {
      _id: '3',
      name: 'Track 3',
      artist: 'Artist 3',
      text: 'Some text',
      listens: 5,
      audio: 'http://localhost:3000/audio/3.mp3',
      picture: 'http://localhost:3000/audio/3.jpg',
      comments: [],
    },
  ];

  return (
    <div>
      <MainLayout>
        <Grid container justifyContent={'space-center'}>
          <Card sx={{ maxWidth: 900 }}>
            <Box p={3}>
              <Grid container justifyContent={'space-between'}>
                <h1>Список треков</h1>
                <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
              </Grid>
            </Box>
            <TrackList tracks={tracks} />
          </Card>
        </Grid>
      </MainLayout>
    </div>
  );
};

export default Index;
