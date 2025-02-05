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
               <Text h2>Terms And Conditions</Text>
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
               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                      1. Introduction
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       Welcome to Palswire, a social networking application that facilitates meet-ups between users. By accessing or using our app, you agree to be bound by these Terms and Conditions . If you do not agree with any part of these Terms, you must not use our app.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     2. Eligibility
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        You must be at least 18 years old to use our app. By using our app, you represent and warrant that you are at least 18 years old and have the right, authority, and capacity to enter into these Terms.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     3. Account Registration
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       To use our app, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                     </Text>

                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     4. User Conduct
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        You agree to use our app in accordance with all applicable laws and not to engage in any of the following prohibited activities:
                        <ul>
                          <li>Harassing, threatening, or defaming other users.</li>
                          <li>Posting or transmitting any content that is obscene, offensive, or otherwise inappropriate.</li>
                          <li>Impersonating another person or entity.</li>
                          <li>Using the app for any illegal or unauthorized purpose.</li>
                        </ul>
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     5. Content
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      You are solely responsible for the content you post on our app. By posting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, reproduce, and distribute your content in connection with the app. We reserve the right to remove any content that violates these Terms or is otherwise objectionable.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     6. Privacy
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and share information about you. By using our app, you consent to the collection and use of your information as outlined in our Privacy Policy.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     7. Meet-ups
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      While our app facilitates meet-ups between users, we do not verify the identity or background of users and are not responsible for any interactions that occur offline. You agree to take appropriate precautions when meeting other users in person, including meeting in public places and informing friends or family of your plans.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     8. Disclaimer of Warranties
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      Our app is provided &ldquo;as is&ldquo; and &ldquo;as available&ldquo; without warranties of any kind, either express or implied. We do not warrant that the app will be uninterrupted, error-free, or secure.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     9. Limitation of Liability
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our app. Our total liability to you for any claim arising out of or relating to these Terms or your use of the app will not exceed the amount you paid us, if any, for access to or use of the app.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     10. Indemnification
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      You agree to indemnify and hold us harmless from any claims, damages, losses, liabilities, and expenses (including attorneys&apos; fees) arising out of or in connection with your use of the app or any violation of these Terms.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     11. Termination
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      We reserve the right to terminate or suspend your account at any time, without notice, for conduct that we believe violates these Terms or is otherwise harmful to other users or the app.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     12. Governing Law
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      These Terms are governed by and construed in accordance with the laws of Jurisdiction, without regard to its conflict of laws principles.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     13. Changes to Terms
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our app. Your continued use of the app after the changes become effective constitutes your acceptance of the new Terms.
                     </Text>
                  </Flex>
               </Flex>
               <Flex css={{gap: '$5'}} justify={'start'}>
                  {/* <BoxIcon /> */}
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     14. Contact Information
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                      If you have any questions about these Terms, please contact us at support@palswire.com
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
