import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* HEADER */}
      <h1 className="text-8xl font-bold mb-8 text-center">Terms of Service</h1>
      <div className="mb-12">
        <p className="text-sm text-white mb-6 border border-gray-200 p-10 
        text-center font-bold">Effective: November 15, 2024</p>
        <h2 className="text-3xl font-bold mb-6">Summary of our Terms</h2>
        <p className="text-white mb-8">
            These Terms of Service (“Terms”) are part of the User Agreement – a legally binding contract governing your use of Y. <strong>You should read these Terms of Service (“Terms”) in full, but here are a few key things you should take away:</strong>
        </p>

        <ul className="list-disc pl-6 space-y-4 text-white mb-12">
          <li>
            <strong>You will see advertising on the platform:</strong> In exchange for accessing the Services, Y and our third-party providers and partners may display advertising to you.
          </li>
          <li>
            <strong>When posting Content and otherwise using the Services, you must comply with this User Agreement and Applicable Law:</strong> You are responsible for your use of the Services and your Content. You must comply with this User Agreement, its incorporated policies, and all applicable laws.
          </li>
          <li>
            <strong>You must abide by the Services’ acceptable use terms:</strong> You may not access the Services in any way other than through the currently available, published interfaces that we provide. For example, this means that you cannot scrape the Services without Y’s express written permission, try to work around any technical limitations we impose, or otherwise attempt to disrupt the operation of the Services.
          </li>
          <li>
            <strong>There are Intellectual Property Licenses in these Terms:</strong> You retain ownership and rights to any of your Content you post or share, and you provide us with a broad, royalty-free license to make your Content available to the rest of the world and to let others do the same. Conversely, we provide you a license to use the software we provide as part of the Services, such as the Y mobile application, solely for the purpose of enabling you to use and enjoy the benefit of the Services. 
          </li>
          <li>
            <strong>You have remedies and redress mechanisms, but our liability is limited:</strong> You have a right to terminate this agreement at any time by deactivating your account and discontinuing use of the Services. Note that we will not be liable for certain types of damages as described in the agreement, and in any event, our aggregate liability shall not exceed the greater of $100 USD or the amount you paid us, if any, in the past six months for the Services giving rise to the claim. Further, if you believe that your Content has been copied in a way that constitutes copyright infringement, the reporting process is detailed in these Terms. If you are a recipient of the Y Service in the European Union, you may challenge certain decisions we make under the Digital Services Act (Regulation (EU) 2022/2065) via our internal process or via out-of-court dispute settlement as described <Link href="https://help.x.com/rules-and-policies/digital-services-act" className="text-blue-500 underline">here</Link>.
          </li>
        </ul>

       <div>
        <p className="text-white mb-8">
        Please also note that these Terms incorporate our Privacy Policy (<Link href="https://x.com/privacy" className="text-blue-500 underline">https://x.com/privacy</Link>) as well as other terms applicable to your use of the Services and your Content. Finally, these Terms may vary depending on where you live, but in any case, you must be at least 13 years old to use Y.
        </p>
       </div>

       <Separator className="my-8 border-gray-700" />
       <br/>
       <br/>

       <div className="">
        <p className="text-white mb-8">
            If you live outside the European Union, EFTA States, or the United Kingdom, including if you live in the United States, the X User Agreement comprises these Terms of Service, our Privacy Policy, our Rules and Policies, and all incorporated policies.
        </p>
        <p className="text-white mb-8">
            If you live in the European Union, EFTA States, or the United Kingdom, the X User Agreement comprises these Terms of Service, our Privacy Policy, our Rules and Policies, and all incorporated policies.
        </p>
       </div>

       <Separator className="my-8 border-gray-700" />
       <br/>
       <br/>

        <section className="mb-12 space-y-6">
          <h1 className="text-6xl font-bold mb-6">Y Terms of Service</h1>
          <h2 className="text-2xl font-bold mb-3">
            If you live outside the European Union, EFTA States, or the United Kingdom, including if you live in the United States
          </h2>
          <p className="text-white mb-8">
            These Terms of Service (“Terms”) govern your and other users’ access to and use of our services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services, and our <Link href="https://help.x.com/rules-and-policies/x-services-and-corporate-affiliates" className="text-blue-500 underline">other covered services</Link> (<Link href="https://help.x.com/rules-and-policies/x-services-and-corporate-affiliates" className="text-blue-500 underline">https://help.x.com/rules-and-policies/x-services-and-corporate-affiliates</Link>) that link to these Terms (collectively, the “Services”), and any information, text, links, graphics, photos, audio, videos, or other materials or arrangements of materials uploaded, downloaded or appearing on the Services (collectively referred to as “Content”). By using the Services you agree to be bound by these Terms.
          </p>
          <p>
            These Terms are an agreement between you and Y Corp., which provides Y and the Services, with its registered office at 1234 FM 1234, Building 123, Bastrop, TX 1234 U.S.A. The words “we,” “us,” and “our” mean Y Corp.
          </p>
          <br/>
          <br/>
          <Separator className="my-8 border-gray-700" />
        </section>
        <br/>
        <br/>

        <section className="mb-12 space-y-6">
          <h2 className="text-5xl font-bold mb-10 text-white">1. Who May Use the Services</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-white text-base leading-relaxed">
              You may use the Services only if you agree to form a binding contract with us and are not a person barred from receiving services under the laws of the applicable jurisdiction...
            </p>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-5xl font-bold mb-10 text-white">2. Privacy</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-white text-base leading-relaxed">
              Our Privacy Policy (<Link href="https://y.com/privacy" className="text-blue-500 hover:underline">https://y.com/privacy</Link>) describes how we handle the information...
            </p>
          </div>
        </section>

        <section className="mb-12 space-y-6">
          <h2 className="text-5xl font-bold mb-10 text-white">3. Content on the Services</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-white text-base leading-relaxed">
              You are responsible for your use of the Services and for any Content you provide...
            </p>
            
            <div className="bg-gray-800 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-white">
                Y Corp.<br/>
                Attn: Copyright Agent<br/>
                1234 FM 1234, Building 123<br/>
                Bastrop, TX 1234<br/>
                Reports: <Link href="https://help.y.com/forms/dmca" className="text-blue-500 hover:underline">https://help.y.com/forms/dmca</Link><br/>
                Email: <Link href="mailto:copyright@y.com" className="text-blue-500 hover:underline">copyright@y.com</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
            <h2 className="text-4xl font-bold mb-10 text-white">Your Rights and Obligations</h2>
            <p className="text-white mb-4">
                You retain your rights to any Content you submit, post or display on or through the Services. What’s yours is yours — you own your Content (and your incorporated audio, photos and videos are considered part of the Content).
            </p>
            <br/>
            <p className="text-white mb-4">
                By submitting, posting or displaying Content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display, upload, download, and distribute such Content in any and all media or distribution methods now known or later developed, for any purpose. For clarity, these rights include, for example, curating, transforming, and translating. This license authorizes us to make your Content available to the rest of the world and to let others do the same. You agree that this license includes the right for us to (i) analyze text and other information you provide and to otherwise provide, promote, and improve the Services, including, for example, for use with and training of our machine learning and artificial intelligence models, whether generative or another type; and (ii) to make Content submitted to or through the Services available to other companies, organizations or individuals, including, for example, for improving the Services and the syndication, broadcast, distribution, repost, promotion or publication of such Content on other media and services, subject to our terms and conditions for such Content use. Such additional uses by us, or other companies, organizations or individuals, is made with no compensation paid to you with respect to the Content that you submit, post, transmit or otherwise make available through the Services as the use of the Services by you is hereby agreed as being sufficient compensation for the Content and grant of rights herein.
            </p>
            <p className="text-white mb-4">
                We have an evolving set of rules for how ecosystem partners can interact with your Content on the Services. These rules exist to enable an open ecosystem with your rights in mind. You understand that we may modify or adapt your Content as it is distributed, syndicated, published, or broadcast by us and our partners and/or make changes to your Content in order to adapt the Content to different media.
            </p>
            <p className="text-white mb-4">
                You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power and/or authority necessary to grant the rights granted herein for any Content that you submit, post or display on or through the Services. You agree that such Content will not contain material subject to copyright or other proprietary rights, unless you have necessary permission or are otherwise legally entitled to post the material and to grant us the license described above.
            </p>
        </section>
        <br/>
        <br/>

        <section className="mb-12 space-y-6">
            <h2 className="text-5xl font-bold mb-10 text-white">4. Using the Services</h2>
            <p className="text-white mb-4">
                Please review our Rules and Policies, which are part of the User Agreement...
            </p>
            <p className="text-white mb-4">
                The Services evolve constantly. As such, the Services may change from time to time, at our discretion. We may stop (permanently or temporarily) providing the Services or any features within the Services to you or to users generally. We also retain the right to create limits on use and storage at our sole discretion at any time. We may also remove or refuse to distribute any Content on the Services, limit distribution or visibility of any Content on the service, suspend or terminate users, and reclaim usernames without liability to you.
            </p>
            <p className="text-white mb-4">
                In consideration for our granting you access to and use of the Services, you agree that we and our third-party providers and partners may place advertising on the Services or in connection with the display of Content or information from the Services whether submitted by you or others. We also reserve the right to access, read, preserve, and disclose any information as we reasonably believe is necessary to (i) satisfy any applicable law, regulation, legal process or governmental request; (ii) enforce the Terms, including investigation of potential violations hereof; (iii) detect, prevent, or otherwise address fraud, security or technical issues; (iv) respond to user support requests; or (v) protect the rights, property or safety of Y, its users and the public. We do not disclose personally-identifying information to third parties except in accordance with our <Link href="https://x.com/privacy" className="text-blue-500 underline">Privacy Policy</Link>.
            </p>
            <p className="text-white mb-4">
                Certain services or features may be offered on Y for which additional terms and conditions may apply in connection with your use of those services. By using or paying for any of these additional services, you agree to any additional terms applicable to those services, and those additional terms become part of our agreement with you. If any of the applicable additional terms conflict with these Terms, the additional terms will prevail while you are using those services to which they apply.
            </p>
            <p className="text-white mb-4">
                If you use paid features of the Services, you agree to the applicable <Link href="https://legal.x.com/purchaser-terms.html" className="text-blue-500 underline">Terms for Paid Services</Link>.
            </p>
            <p className="text-white mb-4">
                If you use developer features of the Services, including but not limited to <Link href="https://developer.x.com/docs/x-for-websites" className="text-blue-500">X for Websites</Link>, <Link href="https://developer.x.com/docs/x-for-websites/cards/overview/abouts-cards" className="text-blue-500">X Cards</Link>, <Link href="https://developer.x.com/docs" className="text-blue-500">Public API</Link>, or <Link href="https://developer.x.com/docs/authentication/guides/log-in-with-twitter" className="text-blue-500">Sign in with X</Link>, you agree to our <Link href="https://developer.x.com/docs/developer-terms" className="text-blue-500">Developer Policy</Link>. If you want to reproduce, modify, create derivative works, distribute, sell, transfer, publicly display, publicly perform, transmit, or otherwise use the Services or Content on the Services, you must use the interfaces and instructions we provide, except as permitted through the Services, these Terms, or the terms provided on <Link href="https://developer.x.com/developer-terms" className="text-blue-500">https://developer.x.com/developer-terms</Link>. Otherwise, all such actions are strictly prohibited. If you are a security researcher, you are required to comply with the rules of our <Link href="https://developer.x.com/docs/developer-terms/vulnerability-reporting-program" className="text-blue-500">Vulnerability Reporting Program</Link>. The requirements set out in the preceding paragraph may not apply to those participating in our Vulnerability Reporting Program.
            </p>
            <p className="text-white mb-4">
                If you use advertising features of the Services, you agree to our <Link href="https://ads.x.com/terms" className="text-blue-500">Master Services Agreement</Link>.
            </p>
        </section>
      </div>
      <br/>
      <br/>

      <section className="mb-12 space-y-6">
        <h2 className="text-4xl font-bold mb-10 text-white">Your Account</h2>
        <p className="text-white mb-4">
            You may need to create an account to use the Services. You are responsible for safeguarding your account, so use a strong password and limit its use to this account, and use two-factor authentication via an authenticator app or security key. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above.
        </p>
        <p className="text-white mb-4">
            You can control most communications from the Services. We may need to provide you with certain communications, such as service announcements and administrative messages. These communications are considered part of the Services and your account, and you may not be able to opt-out from receiving them. If you added your phone number to your account and you later change or deactivate that phone number, you must update your account information to help prevent us from communicating with anyone who acquires your old number.
        </p>
      </section>
      <section>
        <h2 className="text-4xl font-bold mb-10 text-white">Your License to Use the Services</h2>
        <p className="text-white mb-4">
            We give you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided to you as part of the Services. This license cannot be assigned, gifted, sold, shared or transferred in any other manner to any other individual or entity without Y&apos;s express written consent. This license has the sole purpose of enabling you to use and enjoy the benefit of the Services as provided on Y, in the manner permitted by these Terms.
        </p>
        <p className="text-white mb-4">
            The Services are protected by copyright, trademark, and other laws of both the United States and other countries. Nothing in the Terms gives you a right to use the Y name or any of the Y trademarks, logos, domain names, other distinctive brand features, and other proprietary rights. All right, title, and interest in and to the Services (excluding Content provided by users) are and will remain our and our licensors&apos; exclusive property. Any feedback, comments, or suggestions you may provide regarding Y, or the Services is entirely voluntary and we will be free to use such feedback, comments or suggestions as we see fit and without any obligation to you.
        </p>
      </section>
      <br/>
      <br/>

      <section className="mb-12 space-y-6">
        <h2 className="text-4xl font-bold mb-10 text-white">Misuse of the Services</h2>
        <p className="text-white mb-4">
            You also agree not to misuse the Services, for example, by interfering with them or accessing them using a method other than the interface and the instructions that we provide. You agree that you will not work around any technical limitations in the software provided to you as part of the Services, or reverse engineer, decompile or disassemble the software, except and only to the extent that applicable law expressly permits. You may not do any of the following while accessing or using the Services: (i) access, tamper with, or use non-public areas of the Services, our computer systems, or the technical delivery systems of our providers; (ii) probe, scan, or test the vulnerability of any system or network or breach or circumvent any security or authentication measures; (iii) access or search or attempt to access or search the Services by any means (automated or otherwise) other than through our currently available, published interfaces that are provided by us (and only pursuant to the applicable terms and conditions), unless you have been specifically allowed to do so in a separate agreement with us (NOTE: crawling or scraping the Services in any form, for any purpose without our prior written consent is expressly prohibited); (iv) forge any TCP/IP packet header or any part of the header information in any email or posting; (v) in any way use the Services to send altered, deceptive or false source-identifying information; (vi) engage in any conduct that violates our <Link href="https://help.x.com/rules-and-policies/platform-manipulation" className="text-blue-500">Platform Manipulation and Spam Policy</Link> or any other <Link href="https://help.x.com/rules-and-policies" className="text-blue-500">Rules and Policies</Link>, including our <Link href="https://help.x.com/rules-and-policies/misuse-of-reporting-features" className="text-blue-500">Misuse of Reporting Features Policy</Link>; or (vii) interfere with, or disrupt, (or attempt to do so), the access of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, mail-bombing the Services, or by scripting the creation of Content in such a manner as to interfere with or create an undue burden on the Services. It is also a violation of these Terms to facilitate or assist others in violating these Terms, including by distributing products or services that enable or encourage violation of these Terms.
        </p>
      </section>
      <br/>
      <section className="mb-12 space-y-6">
        <h2 className="text-4xl font-bold mb-10 text-white">Ending These Terms</h2>
        <p className="text-white mb-4">
            You may end your legal agreement with us at any time by deactivating your accounts and discontinuing your use of the Services. See <Link href="https://help.x.com/managing-your-account/how-to-deactivate-x-account" className="text-blue-500">https://help.x.com/managing-your-account/how-to-deactivate-x-account</Link> for instructions on how to deactivate your account and the <Link href="https://x.com/privacy" className="text-blue-500">Privacy Policy</Link> for more information on what happens to your information.
        </p>
        <p className="text-white mb-4">
            We may suspend or terminate your account or cease providing you with all or part of the Services at any time if we reasonably believe: (i) you have violated these Terms or <Link href="https://help.x.com/rules-and-policies" className="text-blue-500">our Rules and Policies</Link>, (ii) you create risk or possible legal exposure for us; (iii) your account should be removed due to unlawful conduct; (iv) your account should be removed due to prolonged inactivity; or (v) our provision of the Services to you is no longer commercially viable. We will make reasonable efforts to notify you by the email address associated with your account or the next time you attempt to access your account, depending on the circumstances. To the extent permitted by law, we may also terminate your account or cease providing you with all or part of the Services for any other reason or no reason at our convenience. In all such cases, the Terms shall terminate, including, without limitation, your license to use the Services, except that the following sections shall continue to apply: 2, 3, 5, 6, and the misuse provisions of Section 4 (“Misuse of the Services”). If you believe your account was terminated in error you can file an appeal following the steps found in our <Link href="https://help.x.com/forms/account-access/appeals" className="text-blue-500">Help Center</Link>. For the avoidance of doubt, these Terms survive the deactivation or termination of your account.
        </p>
      </section>
      <br/>
      <br/>
      <section className="mb-12 space-y-6">
        <h2 className="text-5xl font-bold mb-10 text-white">5. Disclaimers and Limitations of Liability</h2>
        <h2 className="text-white mb-4 text-3xl font-bold">
            The Services are Available “AS-IS”
        </h2>
        <p className="text-white mb-4">
            Your access to and use of the Services or any Content are at your own risk. You understand and agree that the Services are provided to you on an “AS IS” and “AS AVAILABLE” basis. The “Y Entities” refers to Y Corp., its parents, affiliates, related companies, officers, directors, employees, agents, representatives, partners, and licensors. Without limiting the foregoing, to the maximum extent permitted under applicable law, THE Y ENTITIES DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. The Y Entities make no warranty or representation and disclaim all responsibility and liability for: (i) the completeness, accuracy, availability, timeliness, security or reliability of the Services or any Content; (ii) any harm to your computer system, loss of data, or other harm that results from your access to or use of the Services or any Content; (iii) the deletion of, or the failure to store or to transmit, any Content and other communications maintained by the Services; and (iv) whether the Services will meet your requirements or be available on an uninterrupted, secure, or error-free basis. No advice or information, whether oral or written, obtained from the Y Entities or through the Services, will create any warranty or representation not expressly made herein.
        </p>
      </section>
      <section>
        <h2 className="text-4xl font-bold mb-10 text-white">Limitation of Liability</h2>
        <p className="text-white mb-4">
            NOTWITHSTANDING ANY OTHER TERMS TO THE CONTRARY, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE Y ENTITIES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, RELIANCE OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (i) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (ii) ANY CONDUCT OR CONTENT OF ANY USER OR THIRD PARTY ON THE SERVICES, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; (iii) ANY CONTENT OBTAINED FROM THE SERVICES; OR (iv) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT. IN NO EVENT SHALL THE AGGREGATE LIABILITY OF THE Y ENTITIES EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS (U.S. $100.00) OR THE AMOUNT YOU PAID US, IF ANY, IN THE PAST SIX MONTHS FOR THE SERVICES GIVING RISE TO THE CLAIM. THE LIMITATIONS OF THIS SUBSECTION SHALL APPLY TO ANY THEORY OF LIABILITY, WHETHER BASED ON WARRANTY, CONTRACT, STATUTE, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, AND WHETHER OR NOT THE Y ENTITIES HAVE BEEN INFORMED OF THE POSSIBILITY OF ANY SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
        </p>
        <p className="text-white mb-4">
            BY AGREEING TO THESE TERMS OR USING THE SERVICES, YOU AGREE, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THAT THE Y ENTITIES ARE NOT RESPONSIBLE OR LIABLE TO YOU OR OTHERS FOR THE ACTIONS OR CONDUCT OF USERS AND THIRD PARTIES ON THE SERVICES, OR FOR ANY CONTENT USERS AND THIRD PARTIES SHARE ON THE SERVICES, INCLUDING OFFENSIVE, DEFAMATORY, ILLEGAL OR OTHER OBJECTIONABLE CONTENT.
        </p>
      </section>
      <br/>
      <br/>
      <section className="mb-12 space-y-6">
        <h2 className="text-4xl font-bold mb-10 text-white">Liquidated Damages</h2>
        <p className="text-white mb-4">
            Protecting our users’ data and our system resources is important to us. You further agree that, to the extent permitted by applicable law, if you violate the Terms, or you induce or facilitate others to do so, in addition to all other legal remedies available to us, you will be jointly and severally liable to us for liquidated damages as follows for requesting, viewing, or accessing more than 1,000,000 posts (including reply posts, video posts, image posts, and any other posts) in any 24-hour period - $15,000 USD per 1,000,000 posts. You agree that these amounts are (i) a reasonable estimate of our damages; (ii) not a penalty; and (iii) not otherwise limiting of our ability to recover from you or others under any legal or equitable theory or claim, including but not limited to statutory damages and/or equitable relief. You further agree that repeated violations of these Terms will irreparably harm and entitle us to injunctive and/or other equitable relief, in addition to monetary damages.
        </p>
      </section>
      <br/>
      <br/>
      <section className="mb-12 space-y-6">
        <h2 className="text-5xl font-bold mb-10 text-white">6. General</h2>
        <p className="text-white mb-4">
            We may revise these Terms from time to time. The changes will not be retroactive, and the most current version of the Terms, which will always be at <Link href="https://x.com/tos" className="text-blue-500">https://x.com/tos</Link>, will govern our relationship with you. We will try to notify you of material revisions, for example via a service notification or an email to the email associated with your account. By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised Terms. 
        </p>
        <p className="text-white mb-4">
            The laws of the State of Texas, excluding its choice of law provisions, will govern these Terms and any dispute that arises between you and us, notwithstanding any other agreement between you and us to the contrary. All disputes related to these Terms or the Services, including without limitation disputes related to or arising from other users’ and third parties’ use of the Services and any Content made available by other users and third parties on the Services, will be brought exclusively in the U.S. District Court for the Northern District of Texas or state courts located in Tarrant County, Texas, United States, and you consent to personal jurisdiction in those forums and waive any objection as to inconvenient forum. Without prejudice to the foregoing, you agree that, in its sole discretion, Y may bring any claim, cause of action, or dispute we have against you in any competent court in the country in which you reside that has jurisdiction and venue over the claim. To the extent permitted by law, you also waive the right to participate as a plaintiff or class member in any purported class action, collective action or representative action proceeding. 
        </p>
        <p className="text-white mb-4">
            If you are a federal, state, or local government entity in the United States using the Services in your official capacity and legally unable to accept the controlling law, jurisdiction or venue clauses above, then those clauses do not apply to you. For such U.S. federal government entities, these Terms and any action related thereto will be governed by the laws of the United States of America (without reference to conflict of laws) and, in the absence of federal law and to the extent permitted under federal law, the laws of the State of Texas (excluding choice of law).

        </p>
        <p className="text-white mb-4">
            You and Y agree that you must initiate any proceeding or action within one (1) year of the date of the occurrence of the event or facts giving rise to a dispute that is arising out of or related to these Terms. Otherwise, to the extent permitted by applicable law, you forever waive the right to pursue any claim or cause of action, of any kind or character, based on such events or facts, and such claims or causes of action are permanently barred. 
        </p>
        <p className="text-white mb-4">
            In the event that any provision of these Terms is held to be invalid or unenforceable, then that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect. Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
        </p>
        <p className="text-white mb-4">
            The Y User Agreement is written in English but is made available in multiple languages through translations. Y strives to make the translations as accurate as possible to the original English version. However, in case of any discrepancies or inconsistencies, the English language version of the Y User Agreement shall take precedence. You acknowledge that English shall be the language of reference for interpreting and constructing the terms of the Y User Agreement.
        </p>
        <p className="text-white mb-4">
            If you have any questions about these Terms, please contact <Link 
              href="https://help.x.com/forms"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              us
            </Link>.
        </p>
        <p className="text-white mb-4">
            <strong>Effective:</strong> November 15, 2024
        </p>

      </section>
        <Link href="https://x.com/tos/previous" className="text-blue-500 hover:underline">Archive of Previous Terms</Link>
        <br/>
        <br/>
      <Separator className="my-8 border-gray-700" />
      <br/>
      <br/>

      <section className="mb-12 space-y-6">
        <h2 className="text-5xl font-bold mb-10 text-white">Y Terms of Service</h2>
        <h3 className="text-2xl font-bold text-white mb-4">
          If you live in the European Union, EFTA States, or the United Kingdom, these Terms apply to you.
        </h3>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-white text-base leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your and other users&apos; access to and use of the services, 
            including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, 
            ads, commerce services, and our <Link href="https://help.y.com/rules-and-policies/y-services-and-corporate-affiliates" 
            className="text-blue-500 hover:underline">other covered services</Link> that link to these Terms 
            (collectively, the &quot;Services&quot;), and any information, text, links, graphics, photos, audio, videos, 
            or other materials or arrangements of materials uploaded, downloaded or appearing on the Services 
            (collectively referred to as &quot;Content&quot;). By using the Services you agree to be bound by these Terms.
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg mt-6">
            <p className="text-white text-base leading-relaxed">
              These Terms are an agreement between you and Y International Unlimited Company 
              (Co. number 12341234, VAT number 123412341234), an Irish company, which provides Y and 
              the Services, with its registered office at One Cumberland Place, Fenian Street Dublin 2, 
              D02 1234 Ireland. The words &quot;we,&quot; &quot;us,&quot; and &quot;our,&quot; mean Y International Unlimited Company.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-8 border-gray-700" />

      <section className="mb-12 space-y-6">
        <div className="prose prose-invert max-w-none space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">1. Who May Use the Services</h2>
            <p className="text-white text-base leading-relaxed">
              You may use the Services only if you agree to form a binding contract with us and are not a person barred from receiving services under the laws of the applicable jurisdiction. In any case, you must be at least 13 years old to use the Services. If you are (i) accepting these Terms and/or using the Services, which constitutes acceptance of these Terms, or (ii) accepting these Terms in order to authorize the use of the Services on behalf of a minor (being any person under the age of majority in any given country), company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so or, as the case may be, have the authority to bind such minor and/or entity to these Terms. The words “you” and “your” as used in these Terms shall refer either to the person accepting these Terms or such minor (as defined in (i)) and/or the entity referenced in (ii), as applicable.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">2. Privacy</h2>
            <p className="text-white text-base leading-relaxed">
              Our<Link href="https://y.com/privacy" className="text-blue-500 hover:underline"> Privacy Policy</Link> (<Link href="https://y.com/privacy" className="text-blue-500 hover:underline">https://y.com/privacy</Link>) describes how we handle the information you provide to us when you use the Services. You understand that through your use of the Services you consent to the collection and use (as set forth in the Privacy Policy) of this information, including the transfer of this information to the United States, Ireland, and/or other countries for storage, processing and use by us and our affiliates.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">3. Content on the Services</h2>
            <p className="text-white text-base leading-relaxed">
              You are responsible for your use of the Services and for any Content you provide, including compliance with applicable laws, rules, and regulations. You should only provide Content that you are comfortable sharing with others.
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            Any use or reliance on any Content or materials posted via the Services or obtained by you through the Services is at your own risk. We do not endorse, support, represent or guarantee the completeness, truthfulness, accuracy, or reliability of any Content or communications posted via the Services or endorse any alleged facts or opinions expressed via the Services. You understand that by using the Services, you may be exposed to Content that might be offensive, harmful, inaccurate or otherwise inappropriate, or in some cases, postings that have been mislabeled or are otherwise deceptive. Content recommendations are made based on a combination of factors: how you engage with the Services, the topics you have indicated that you are interested in, and what other users who share your similar interests like. Adjustments can be made in your settings, and additional information can be found in our Help Center <Link href="https://help.x.com/resources/recommender-systems" className="text-blue-500 hover:underline">(https://help.x.com/resources/recommender-systems)</Link>. All Content is the sole responsibility of the person who originated such Content. We may not monitor or control the Content posted via the Services and, we cannot take responsibility for such Content.
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            We reserve the right to remove Content that violates the User Agreement, including for example, copyright or trademark violations or other intellectual property misappropriation, impersonation, unlawful conduct, or harassment. Information regarding specific policies and the process for reporting or appealing violations can be found in our Help Center <Link href="https://help.x.com/rules-and-policies/x-report-violation" className="text-blue-500 hover:underline">(https://help.x.com/rules-and-policies/x-report-violation)</Link> and <Link href="https://help.x.com/managing-your-account/suspended-x-accounts" className="text-blue-500 hover:underline">(https://help.x.com/managing-your-account/suspended-x-accounts)</Link>.
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            If you believe that your Content has been copied in a way that constitutes copyright infringement, please report this by visiting our Copyright reporting form <Link href="https://help.x.com/forms/dmca" className="text-blue-500 hover:underline">(https://help.x.com/forms/dmca)</Link> or contacting our designated copyright agent at:
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            Y Corp.
            <br/>
            Attn: Copyright Agent
            <br/>
            123 FM 123, Building 2
            <br/>
            Bastrop, TX 12345
            <br/>
            Reports: <Link href="https://help.x.com/forms/dmca" className="text-blue-500 hover:underline">https://help.x.com/forms/dmca</Link>
            <br/>
            Email: <Link href="copyright@x.com" className="text-blue-500 hover:underline">copyright@x.com</Link>
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">4. Using the Services</h2>
            <p className="text-white text-base leading-relaxed">
              Please review <Link href="https://help.x.com/rules-and-policies" className="text-blue-500 hover:underline">our Rules and Policies</Link>, which are part of the User Agreement and outline conduct that is prohibited on the Services. You may use the Services only in compliance with these Terms and all applicable laws, rules and regulations. Y takes enforcement actions when Content or user behavior is in violation of <Link href="https://help.x.com/rules-and-policies" className="text-blue-500 hover:underline">our Rules and Policies</Link> or in relation to sensitive media. You can review Y&apos;s enforcement options and how you can appeal our enforcement decision here.
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            The Services evolve constantly. As such, the Services may change from time to time, at our discretion. We may stop (permanently or temporarily) providing the Services or any features within the Services to you or to users generally. We also retain the right to create limits on use and storage at our sole discretion at any time. We may also remove or refuse to distribute any Content on the Services, limit distribution or visibility of any Content on the service, suspend or terminate users, and reclaim usernames if it is appropriate, including for the following reasons: (i) protecting the Services or our users; (ii) compliance with applicable laws or orders from competent authorities; (iii) breach of these Terms or <Link href="https://help.x.com/rules-and-policies" className="text-blue-500 hover:underline">our Rules and Policies</Link> or third parties&apos; intellectual property or other rights; (iv) if you or your Content exposes us, other users or any third party to legal or regulatory risk; and/or (v) your prolonged inactivity. 
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            In consideration for our granting you access to and use of the Services, you agree that we and our third-party providers and partners may place advertising on the Services or in connection with the display of Content or information from the Services whether submitted by you or others. We also reserve the right to access, read, preserve, and disclose any information as we reasonably believe is necessary to (i) satisfy any applicable law, regulation, legal process or governmental request; (ii) enforce the Terms, including investigation of potential violations hereof; (iii) detect, prevent, or otherwise address fraud, security or technical issues; (iv) respond to user support requests; or (v) protect the rights, property or safety of X, its users and the public. We do not disclose personally-identifying information to third parties except in accordance with our <Link href="https://help.x.com/rules-and-policies" className="text-blue-500 hover:underline">Privacy Policy</Link>. 
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            Certain services or features may be offered on X for which additional terms and conditions may apply in connection with your use of those services. These additional terms are accessible from our sites and applications dedicated to these services or features. By using or paying for any of these additional services, you will have to agree to any additional terms applicable to those services, and those additional terms will then also become part of our agreement with you. If any of the applicable additional terms conflict with these Terms, the additional terms will prevail while you are using those services to which they apply.
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            If you use paid features of the Services, you agree to the applicable Terms for Paid Services (<Link href="https://legal.x.com/purchaser-terms.html" className="text-blue-500 hover:underline">https://legal.x.com/purchaser-terms.html</Link>).
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
              If you use developer features of the Services, including but not limited to <Link href="https://developer.x.com/docs/x-for-websites" className="text-blue-500 hover:underline">X for Websites</Link>, <Link href="https://developer.x.com/docs/x-for-websites/cards/overview/abouts-card" className="text-blue-500 hover:underline">X Cards</Link>, <Link href="https://developer.x.com/docs" className="text-blue-500 hover:underline">Public API</Link>, or <Link href="https://developer.x.com/docs/authentication/guides/log-in-with-twitter" className="text-blue-500 hover:underline">Sign in with X</Link>, you agree to our <Link href="https://developer.x.com/developer-terms/agreement" className="text-blue-500 hover:underline">Developer Agreement</Link> and <Link href="https://developer.x.com/developer-terms/policy" className="text-blue-500 hover:underline">Developer Policy</Link>. If you want to reproduce, modify, create derivative works, distribute, sell, transfer, publicly display, publicly perform, transmit, or otherwise use the Services or Content on the Services, you must use the interfaces and instructions we provide, except as permitted through the Services, these Terms, or the terms provided on <Link href="https://developer.x.com/developer-terms" className="text-blue-500 hover:underline">https://developer.x.com/developer-terms</Link>. Otherwise, all such actions are strictly prohibited. If you are a security researcher, you are required to comply with the rules of our <Link href="https://hackerone.com/x" className="text-blue-500 hover:underline">Vulnerability Reporting Program</Link>. The requirements set out in the preceding paragraph may not apply to those participating in our Vulnerability Reporting Program.
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            If you use advertising features of the Services, you agree to our <Link href="https://ads.x.com/terms" className="text-blue-500 hover:underline">Master Services Agreement</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">5. Limitations of Liability</h2>
            <p className="text-white text-base leading-relaxed">
            By using the Services you agree that Twitter International Unlimited Company, its parents, affiliates, related companies, officers, directors, employees, agents representatives, partners and licensors, liability is limited to the maximum extent permissible in your country of residence.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">6. General</h2>
            <p className="text-white text-base leading-relaxed">
            We may revise these Terms from time to time. The changes will not be retroactive, and the most current version of the Terms, which will always be at <Link href="https://x.com/tos" className="text-blue-500 hover:underline">https://x.com/tos</Link>, will govern our relationship with you. Other than for changes addressing new functions or made for legal reasons, we will notify you 30 days in advance of making effective changes to these Terms that impact the rights or obligations of any party to these Terms, for example via a service notification or an email to the email associated with your account. By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised Terms...
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            To the extent permitted by law, all disputes related to these Terms or the Services, including without limitation disputes related to or arising from other users&apos; and third parties&apos; use of the Services and any Content made available by other users and third parties on the Services, will be brought exclusively before a competent court in Ireland without regard to conflict of law provisions and will be governed by Irish law, notwithstanding any other agreement between you and us to the contrary. Without prejudice to the foregoing, you agree that, in its sole discretion, Y may bring any claim, cause of action, or dispute we have against you in any competent court in the country in which you reside that has jurisdiction and venue over the claim. To the extent permitted by law, you also waive the right to participate as a plaintiff or class member in any purported class action, collective action or representative action proceeding.
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            You and Y agree that you must initiate any proceeding or action within one (1) year of the date of the occurrence of the event or facts giving rise to a dispute that is arising out of or related to these Terms. Otherwise, to the extent permitted by applicable law, you forever waive the right to pursue any claim or cause of action, of any kind or character, based on such events or facts, and such claims or causes of action are permanently barred. 
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            In the event that any provision of these Terms is held to be invalid or unenforceable, then that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect. Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            The Y User Agreement is written in English but is made available in multiple languages through translations. Y strives to make the translations as accurate as possible to the original English version. However, in case of any discrepancies or inconsistencies, the English language version of the Y User Agreement shall take precedence. You acknowledge that English shall be the language of reference for interpreting and constructing the terms of the Y User Agreement.
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            If you have any questions about these Terms, please contact <Link href="https://help.x.com/forms" className="text-blue-500 hover:underline">us</Link>.
            </p>
            <br/>
            <p className="text-white text-base leading-relaxed">
            <strong>Effective:</strong> November 15, 2024
            </p>
            <br/>
            <Link href="https://x.com/tos/previous" className="text-blue-500 hover:underline">Archive of Previous Terms</Link>
          </div>
        </div>
      </section>

      <Separator className="my-8 border-gray-700" />

      <footer className="mt-16 border-t border-gray-700 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Y platform</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Y.com</Link></li>
              <li><Link href="/status" className="text-gray-400 hover:text-white">Status</Link></li>
              <li><Link href="/accessibility" className="text-gray-400 hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Center</Link></li>
              <li><Link href="/developers" className="text-gray-400 hover:text-white">Developer Portal</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="/investors" className="text-gray-400 hover:text-white">Investors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/tos" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>© 2024 Y Corp. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white">Cookies</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TermsOfService
