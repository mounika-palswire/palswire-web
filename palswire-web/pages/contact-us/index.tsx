import React from 'react'
import { Button, Divider, Text } from '@nextui-org/react';
import { Flex } from '../../components/styles/flex';
import { BoxIcon } from '../../components/icons/BoxIcon';
import { Nav } from '../../components/navbar/navbar';
import Link from 'next/link';
import { Footer } from '../../components/footer';

export default function index() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <div>
      <Nav />
      <Flex
        css={{
          py: '$20',
          gap: '$18',
          px: '$6',
        }}
        direction={'column'}
      >
        <Flex align={'center'} direction={'column'}>
          <Text span css={{ color: '$blue600' }}>
            Palswire
          </Text>
          <Text h2>Contact US</Text>
          {/* <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'start',
                  }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                  aliquet
               </Text> */}
        </Flex>

        <Flex
          css={{
            'gap': '$10',
            '@lg': {
              px: '$64',
            },
          }}
          direction={'column'}
        >
          <Flex css={{ gap: '$5' }} justify={'start'}>
            {/* <BoxIcon /> */}
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h3>
                Instagram
              </Text>
              <Text
                span
                css={{
                  color: '$accents8',
                }}
              >
                <Link target='_blank' href={"https://www.instagram.com/palswire"}>https://www.instagram.com/palswire</Link>
              </Text>
            </Flex>
          </Flex>

          <Flex css={{ gap: '$5' }} justify={'start'}>
            {/* <BoxIcon /> */}
            <Flex direction={'column'} css={{ gap: '$3' }}>
              <Text h3>
                Support Email
              </Text>
              <Text
                span
                css={{
                  color: '$accents8',
                }}
              >
                <Link target='_blank' href={"mailto:support@palswire.com"}>support@palswire.com</Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      </div>

      <div>
        <Divider
          css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
        />
        <Footer />
      </div>
    </div>
  )
}
