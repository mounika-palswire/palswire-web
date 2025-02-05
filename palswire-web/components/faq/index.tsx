import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { Nav } from '../navbar/navbar';

export const Faq = () => {
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
               <Text h2>FAQs</Text>
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
                     1.	How do I sign up for Palswire?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      To sign up for Palswire , simply open palswire.com or download the app from the App Store or Google Play Store, open it, and follow the on-screen prompts to create an account. You can sign up using your email address or phone number.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     2.	Is Palswire free to use?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
       Yes, Palswire is free to download and use. However, we offer premium subscription options that provide access to additional features and benefits.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     3.	How can I find and connect with friends on Palswire?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                     You can find and connect with friends on Palswire by sending a calendar invite by searching for an activity or place you want to visit  and find like minded people by the activities they posted or you can post an activity, so that people nearby can see it and connect if they are interested .
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     4.	What should I do if I encounter inappropriate content or behavior on Palswire?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      If you encounter inappropriate content or behavior on Palswire, please report it to us immediately using the report feature within the app. Our team will review the report and take appropriate action.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>5.	Can I use Palswire on multiple devices?</Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      Yes, you can use Palswire on multiple devices by signing in with the same account credentials. Your account information and connections will sync across all your devices.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>6. Can people search with my name and find my account on Palswire?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      No, people only can search with place, activity and date.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     7. Can people see my previous posts on Palswire?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      No, only you can see your posts in your account past the date of the event you posted.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     8. What are the age restrictions to use Palswire ?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      To ensure the safety and privacy of our users, Palswire requires users to be at least 18 years old to create an account and use the app. This age restriction is in compliance with legal regulations and helps us maintain a secure and appropriate environment for all users.”
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     10.	Is my information secure on Palswire ?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      Yes, we take the security of your information seriously. Palswire employs encryption and other security measures to protect your personal data from unauthorized access or misuse.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     11.	What are the benefits of upgrading to a premium subscription on Palswire ?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      Upgrading to a premium subscription on Palswire unlocks additional features and benefits, such as ad-free browsing, can invite more people than the free plan and priority customer support.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     12.	How can I contact customer support if I have a question or issue?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      If you have a question or issue with Palswire, you can contact our customer support team by emailing support@palswire.com or using the in-app messaging feature. Our team is here to help you with any concerns you may have.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
