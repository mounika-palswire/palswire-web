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
               <Text h2>Pricing</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
               At Palswire , we offer a variety of subscription models and premium tiers to cater to the diverse needs and preferences of our users. Whether you’re looking for basic access to the platform or seeking exclusive benefits and features, we have a subscription option for you.
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
                     1. Free Tier.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       Our free tier allows users to access basic features of Palswire at no cost. This includes creating a profile, posting an event , browsing and connecting with other users.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     2. Premium Tier.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Our premium tier offers additional features and benefits beyond the free tier. With a premium subscription, users can enjoy ad-free browsing, advanced search filters, and can invite up to 10 people per event. Premium subscribers also receive priority customer support and early access to new features and updates.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     3. Premium Pro Tier.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       For users who require more advanced tools and capabilities, we offer a premium pro tier subscription. In addition to all the features included in the premium tier, pro subscribers can invite up to 20 people per event. 
                     </Text>

                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     Choosing the Right Subscription.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                   When choosing a subscription model or premium tier on Palswire, consider your individual needs, preferences, and budget. If you’re new to the platform, the free tier may be a good starting point to explore basic features. If you value additional benefits and a premium experience, upgrading to the premium or premium pro may be the right choice for you.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     Get Started Today.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      Ready to unlock the full potential of Palswire ? Explore our subscription options and premium tiers today to start connecting with others, discovering new communities, and building meaningful relationships on our platform.
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
