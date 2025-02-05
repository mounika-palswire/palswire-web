import React from 'react'
import {Button, Divider, Text} from '@nextui-org/react';
import { Flex } from '../../components/styles/flex';
import { BoxIcon } from '../../components/icons/BoxIcon';
import { Nav } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer';

export default function index() {
  return (
    <>
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
               <Text span css={{color: '$blue600'}}>
                  Palswire
               </Text>
               <Text h2>About Us</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
          Welcome to Palswire, the premier social networking platform designed to bring people together and foster meaningful connections and to help get a companion for everything in today’s digital world.
               </Text>
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
               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     Our Mission
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       At Palswire, our mission is to empower individuals to connect, communicate, and collaborate in a safe and inclusive online environment. We believe in the power of technology to bridge gaps and strengthen relationships, whether it’s between friends, family, colleagues, or communities.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     Who We Are
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      Palswire was founded in 2024 by a team of passionate individuals who saw the need for a social networking platform that prioritizes privacy, authenticity, and user experience. With backgrounds in technology, design, and community building, our team is dedicated to creating a platform that puts users first.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     What We Offer
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      <ul>
                        <li>User-Centric Design: Our app is designed with the user in mind, offering a seamless and intuitive interface that makes connecting with others easy and enjoyable.</li>
                        <li>Privacy and Security: We take your privacy and security seriously. With robust encryption and strict privacy controls, you can trust that your personal information is safe with us.</li>
                        <li>Community Guidelines: We have clear community guidelines in place to ensure that Palswire remains a positive and respectful space for all users. Harassment, hate speech, and other forms of inappropriate behavior are not tolerated.</li>
                        <li>Constant Innovation: We are continuously evolving and improving Palswire to better serve our users. From new features and updates to performance enhancements, we’re always striving to make your experience better.</li>
                      </ul>
                     </Text>

                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     Get Connected
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       Join the Palswire community today and start building meaningful connections with people who share your interests, passions, and values. Whether you’re looking for new friends, companions, professional connections, or romantic relationships, Palswire has something for everyone.
                     </Text>
                  </Flex>
               </Flex>

            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
         <Footer />
      </>
  )
}
