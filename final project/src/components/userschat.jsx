import React from 'react';
import { Grid, Typography, ThemeProvider, Card } from '@mui/material';
import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const UserChat = () => {
  const chatData = [
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
  ];
  const chatItemStyle = css`
    margin-bottom: 16px;
    background-color: #f0f0f0;
    border-radius: 8px;
    border-bottom: 2px solid #ccc;
    margin-left: 20px; 
  `;
  const cardContentStyle = css`
    align-items: center;
    padding: 16px;
  `;
  const themeProviderStyle = css`
    margin-left: 30px;
    width:30%
  `;
  return (
    <div css={themeProviderStyle}>
      <ThemeProvider theme={theme}>
        {chatData.map((item, index) => (
          <Card css={chatItemStyle} key={index}>
            <div css={cardContentStyle}>
              <div style={{ display: 'flex' }}>
                <img src={item.imageUrl} alt="Profile" style={{ width: '50px', height: '50px', marginRight: '16px', borderRadius: '50%' }} />
                <Typography variant="h6" component="h3" gutterBottom style={{ marginTop: '10px', textAlign: 'center' }}>
                  {item.name}
                </Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" component="p">
                  {item.message}
                </Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="caption" component="p">
                  Date: {item.date}
                </Typography>
              </div>
            </div>
          </Card>
        ))}
      </ThemeProvider>
    </div>
  );
  
};

export default UserChat;