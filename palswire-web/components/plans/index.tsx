import { Button, Card, Divider, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Plans = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          {/* <Text span css={{ color: '$blue600' }}>
            Awesome Feature
          </Text> */}
          <Text h2>Flexible Plans</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Free
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                  Browse, post, invite up to 4 people per post
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
            <div>
                  <p style={{fontWeight: "bold"}}>Just</p>
                </div>
              <Text css={{ display: 'contents' }} h2>
                ₹0{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/Yr</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Invite Upto 4 people per post
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Premium
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Everything in Free, plus Browse Ad-free, post, invite up to 10 people per post
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
            <div>
                  <p style={{fontWeight: "bold"}}>Just</p>
                </div>
              <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 8,}}>
                <div>
                  <Text css={{ display: 'contents' }} h2>
                  ₹276{' '}
                </Text>
                <Text css={{ display: 'contents', color: '$accents8' }}>/Yr</Text>
                </div>
                <div><p>or</p></div>
                <div>
                  <Text css={{ display: 'contents' }} h2>
                  ₹23{' '}
                </Text>
                <Text css={{ display: 'contents', color: '$accents8' }}>/Mo</Text>
                </div>
              </div>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
              <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Everything in Free
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Ad Free
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Invite Upto 10 people per post
                  </Text>
                </Flex>
                
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Premium Pro
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                  Everything in Premium, plus invite up to 20 people per post
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
            <div>
                  <p style={{fontWeight: "bold"}}>Just</p>
                </div>
            <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 8,}}>
                <div>
                  <Text css={{ display: 'contents' }} h2>
                  ₹540{' '}
                </Text>
                <Text css={{ display: 'contents', color: '$accents8' }}>/Yr</Text>
                </div>
                <div><p>or</p></div>
                <div>
                  <Text css={{ display: 'contents' }} h2>
                  ₹45{' '}
                </Text>
                <Text css={{ display: 'contents', color: '$accents8' }}>/Mo</Text>
                </div>
              </div>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                   
                   Everything in Premium
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Invite upto 20 people per post
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          {/* <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Entreprise
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    condimentum, nisl ut aliquam lacinia, elit
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                $199{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/Yr</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    100 Team Members
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    100 Website
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    100 GB Storage
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    100 TB Transfer
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Email Support
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card> */}
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
