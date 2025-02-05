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
               Last updated: 5th Nov, 2024
               </Text>
               <Text h2>Privacy Policy</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Welcome to Palswire! We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our app.
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
                     1. Information We Collect
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       We may collect and process the following types of information:
                       <ul>
                        <li>Personal Information: Information you provide when you create an account, such as your name, email address, date of birth, and profile picture.</li>
                        <li>Content You Share: Text, photos, and other content you share with other users or post publicly.</li>
                        <li>Usage Information: Data about how you use Palswire, including your interactions, preferences, and frequency of use.</li>
                        <li>Location Data: Information about your device’s location (if you grant us access).</li>
                        <li>Device Information: Information about your device, including IP address, browser type, operating system, and app version.</li>
                       </ul>
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     2. How We Use Your Information
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        We use your information to:
                        <ul>
                          <li>Provide, personalize, and improve Palswire.</li>
                          <li>Connect you with friends and contacts.</li>
                          <li>Communicate with you, including updates and support.</li>
                          <li>Analyze usage trends to improve app performance.</li>
                          <li>Ensure compliance with our terms and prevent misuse.</li>
                        </ul>
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     3. How We Share Your Information
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       We may share your information with:
                       <ul>
                        <li>Service Providers: Third parties who assist us in app operation, such as hosting and analytics.</li>
                        <li>Legal Authorities: As required by law or to respond to legal requests.</li>
                        <li>Other Users: When you post content publicly, other users will be able to see it.</li>
                       </ul>
                       We do not sell your data to third parties.
                     </Text>

                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     4. Data Security
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        We use technical and administrative measures to protect your data. However, please be aware that no method of transmission over the internet is 100% secure.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     5. Your Choices and Rights
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      Depending on your location, you may have the right to:
                      <ul>
                        <li>Access and update your information.</li>
                        <li>Delete your account and data.</li>
                        <li>Opt-out of specific data uses, such as marketing communications.</li>
                      </ul>
                      Please contact us at support@palswire.com if you wish to exercise any of these rights.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     6. Changes to This Privacy Policy
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      We may update this Privacy Policy periodically. Any changes will be reflected on this page, and we encourage you to review it regularly.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     7. Contact Us
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@palswire.com">support@palswire.com</a>
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
