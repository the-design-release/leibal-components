import { Component, Host, h, State, Element } from '@stencil/core';
import MarkDownIt from 'markdown-it';

const CONTENT = {
  faq: {
    sections: [
      {
        title: { short: 'Stories FAQ', long: 'Stories Frequently Asked Questions' },
        subsections: [
          {
            title: 'Submissions',
            content: `*Does Leibal accept submissions?*
            Yes! We encourage all architects and designers to submit their work.

            *How are submissions parsed?*
            We select projects based on recency, photographic quality, and quality of work.

            *Do submissions need to be exclusive to Leibal?*
            While we are grateful if Leibal is your first choice, we do not require exclusivity on content.

            *Is there a submission fee?*
            There are no submission fees unless the submission is approved, in which case a small fee may be applied depending on project type.

            *How long does a submission take to be published?*
            Anywhere between 7-14 days is typical from date of approval.

            *What should be included in a submission?*
            Most important are credits and description associated with the project, especially photography. We require images to be a minimum of 1500px wide and a minimum of five images. We prefer links to high-resolution image downloads such as Dropbox, Google Drive, or WeTransfer.

            *What is the Design Details module?*
            For submission in the architecture or interiors category, please feel free to also send a reference sheet of all the design details used within the project, whether it be furniture, lighting, flooring, paint, or even appliances. The details will then be visible for users on the left-hand sidebar of the post page.
            `,
          },
          {
            title: 'General',
            content: `*When did Leibal start?*
            We started the online publication in mid-2010. The store was launched five years later.

            *How often does Leibal publish content?*
            We publish two new articles every weekday, including holidays, and one new article on Saturday and Sunday.

            *What type of content does Leibal publish?*
            We focus mainly on architecture, interiors, furniture, lighting, and objects - all in regard to minimalism. We are expanding our travel category, which will also include hotels, restaurants, museums, and cafes.

            *Does Leibal serve banner ads?*
            No - we try to avoid anything that diminishes the user experience. We only promote our logo display partners, which are our gracious sponsors seen at the footer of every page.

            *Is Leibal hiring?*
            Yes! We are currently open to internships - if you are interested, please send us an email here.

            *Is it possible to purchase pieces seen on the publication side?*
            Yes! For any furniture, lighting, or objects we cover on the publication side, there will be an enquire button that will allow you to reach out to us or a representative for information regarding purchasing, pricing, or lead times.
            `,
          },
          {
            title: 'MOODS',
            content: `*What is MOODS?*
            MOODS is an image-saving platform we built on top of Leibal to allow users to save any image on the website to organized moodboards.

            *Is MOODS free?*
            MOODS is completely free. To access the platform, sign up here.

            *How do you create a new moodboard?*
            You can either create a moodboard while adding an image to MOODS by clicking on the circle while hovering over an image, clicking on the “Choose a Board” dropdown, and filling in “Create New Board.” You can also create a new board while on the MOODS homepage accessed via the top-right most button on the navigation bar.

            *How do you delete a board?*
            You can delete boards by hovering over the board on the MOODS homepage, and clicking on the top-right on the white minus symbol.

            *How do you delete an image on a board?*
            To delete an image, hover over an image within the moodboard, and click on the top-right white minus symbol.
            `,
          },
          {
            title: 'Future',
            content: `*What is Grid?*
            We will be launching Grid, which will organize all of our content from 2010 into filters that can simultaneously refine articles by designer, location, year, or project type.

            *What is Designer Directory?*
            We are working on creating a directory of all designers we have published organized in alphabetical order with a preview of their most recent works upon hover.

            *What else is in store for Leibal in the near future?*
            We will be launching city guides, designed with its own page template, featuring the best hotels, restaurants, cafes, museums, and studios - all centered around a minimalist aesthetic.
            `,
          },
        ],
      },
      {
        title: { short: 'Store FAQ', long: 'Store Frequently Asked Questions' },
        subsections: [
          {
            title: 'Products',
            content: `*Are products and brands sold on Leibal authentic?*
            We do not, and will not ever work with reproductions or unlicensed products. All products seen on Leibal are from the original manufacturers.

            *Do you offer variations beyond what is available?*
            Depending on the product, there may be other materials, colors, or variations available that we are not showing. We are more than happy to assist you in sourcing a product with the specific variation you are looking for.

            *Do you offer COM or customizability?*
            Most products are made-to-order, and can be produced with COM. Customizability will be on a case-by-case basis determined by the manufacturer and cost.
            `,
          },
          {
            title: 'Orders',
            content: `*When do items ship?*
            We specify lead times on the product page for each item, and do not include shipping time. Please allow for 2-4 weeks for shipping.

            *When can I cancel my order?*
            Orders can be canceled within 24 hours.

            *How can I return an item?*
            Items that are made-to-order are final sales and cannot be returned unless arrived damaged. Other items can be returned after 14 days of receipt, and eligible for a refund. Certain items may be subject to a 25% restocking fee.

            *Can I modify an order that has been placed?*
            Orders can be modified within 24 hours.

            *Are there delivery updates?*
            We send delivery updates once the item has been picked up from the factory, and then once again when they are on their way to the final destination.
            `,
          },
          {
            title: 'Shipping',
            content: `*Does Leibal ship worldwide?*
            Yes, unless otherwise noted, we ship worldwide.

            *Can the customer coordinate their own delivery?*
            Yes, if the customer chooses to manage their own freight and delivery, Leibal must be notified of the specific details of the movement.

            *How are shipping costs calculated?*
            Your shipping cost is dependent on several factors, including the destination, dimensions, product cost, and weight of the product(s). International orders may incur additional import taxes and customs duties. Leibal is not responsible for any duties, taxes, or handling fees required at the time of delivery.

            *Is white glove shipping available?*
            White glove service is available at an additional cost for orders to the contiguous United States, for orders of our bulky products. Please contact us to arrange white glove shipping.

            *What can be expected upon delivery?*
            Most of our furniture have special shipping considerations due to the bulk of the items, protective packaging, and shipping materials. You should expect bulky furniture deliveries to involve breaking down protective shipping materials and assembly of the product. Our standard shipping includes curb-side delivery ONLY and does NOT include delivery to a room of choice, packaging removal, or assembly.
            `,
          },
          {
            title: 'Trade',
            content: `*Do you offer trade pricing?*
            Yes, please contact us directly to sign up for our trade program.

            *What benefits are included in the trade program?*
            Trade can access more of each vendor’s material library, offering greater customizability and product variations. Trade will also have a dedicated representative to help with sales quotes, delivery times, and other queries.

            *Do you offer sales tax exemption?*
            Sales tax exemption can be applied to trade orders only if a Resale Certificate or Sales Tax Certificate is supplied upon purchase.
            `,
          },
        ],
      },
    ],
  },
  terms: {
    sections: [
      {
        title: { short: 'Stories T&C', long: 'Stories Terms & Conditions' },
        subsections: [
          {
            title: 'Introduction',
            content: `Welcome to the Leibal website (the "Site"). The Site is owned and operated by Leibal, LLC (“Leibal”, "we", "us", or "our"). By accessing or using the Site, you ("you", "your", or "User") agree to be bound by these terms and conditions (the "Terms of Use" or "Agreement"). If you do not agree to all of the terms and conditions contained in this Agreement, do not use the Site.

            Leibal provides a variety of services through the Site, including a blog, paid content, and other products and services (collectively, the "Services"). Some of the Services may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such Services. All such additional terms, guidelines, and rules are incorporated by reference into these Terms of Use.
            `,
          },
          {
            title: 'Access to the Site and Services',
            content: `Subject to the terms and conditions of this Agreement, Leibal grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Site and Services. This license is for the sole purpose of enabling you to use the Site and Services in accordance with the terms of this Agreement.`,
          },
          {
            title: 'Registration and Account Security',
            content: `In order to access certain features of the Site and Services, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You are also responsible for all activities that occur under your account. You agree to immediately notify Leibal of any unauthorized use of your account or any other breach of security. Leibal will not be liable for any loss or damage arising from your failure to comply with this section.`,
          },
          {
            title: 'User Conduct',
            content: `You agree to use the Site and Services only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, the Site and Services by any third party. Such prohibited conduct includes, without limitation, use of the Site and Services to transmit or post any content that is defamatory, harassing, threatening, or obscene.`,
          },
          {
            title: 'User Content',
            content: `Leibal may, in its sole discretion, permit you to post, upload, publish, submit or transmit content through the Site and Services ("User Content"). By making available any User Content through the Site and Services, you grant Leibal a worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free license, with the right to sublicense, to use, copy, adapt, modify, distribute, license, sell, transfer, publicly display, publicly perform, transmit, stream, broadcast, access, view, and otherwise exploit such User Content on, through, or by means of the Site and Services.

            You are solely responsible for your User Content and the consequences of posting or publishing it. You represent and warrant that you have all necessary rights to post your User Content and that such User Content, and the use of it as contemplated by these Terms of Use, does not violate these Terms of Use, any applicable laws, or the rights of any third party.
            `,
          },
          {
            title: 'Proprietary Rights',
            content: `The Site and Services, including all content, software, graphics, user interfaces, photographs, trademarks, logos, sounds, music, videos, and artwork (collectively, the "Leibal Materials"), are owned by or licensed to Leibal, and are protected by copyright, trademark, and other intellectual property laws. Except as expressly provided in these Terms of Use.`,
          },
        ],
      },
      {
        title: { short: 'Submissions T&C', long: 'Submissions Terms & Conditions' },
        subsections: [
          {
            title: 'Content Submission',
            content: `1.1 These terms apply when you submit content related to your architecture, interior design, or other design projects to Leibal.com. Content may include text, images, photographs, videos, plans, drawings, or any other material that you provide to us.

            1.2 By submitting content to us, you agree to these terms, which will establish a binding agreement between you and Leibal.com.

            1.3 By agreeing to these terms in accordance with paragraph 1.2, you grant us a non-exclusive, global, perpetual, irrevocable, transferable, sub-licensable, royalty-free license to utilize, publish, reproduce, display, or otherwise exploit the content you submit to us, in whole or in part, for any purpose we deem appropriate. This includes our website, any site where we have publishing rights, our mobile and tablet applications, our social media pages, our advertising, marketing, or promotional materials, and publications. This license also permits third parties to publish the content in association with us and allows our "MOODS" paid subscribers to save and organize images from your submitted content within the feature.
            `,
          },
          {
            title: 'Content Control',
            content: `1.4 You acknowledge and agree that we may charge a fee for posting certain submissions on our website and social media platforms. The specific criteria for determining which submissions require a fee and the amount of the fee will be clearly communicated to you upon acceptance of submission.

            1.5 You acknowledge and agree that we have the right to:

            a) Edit, adapt, and modify any content you submit without your prior approval (e.g., correcting typographical and grammatical errors, conforming text to our writing style, shortening videos, or cropping images);

            b) Decide not to use, publish, reproduce, display, or otherwise exploit the submitted content; and

            c) Remove any content at any time (including from our website, mobile and tablet applications, social media pages, advertising, marketing, or promotional materials, and publications).
            `,
          },
          {
            title: 'Content Warranties',
            content: `1.6 You warrant that:

            a) The submitted content does not infringe upon any third-party rights (including, but not limited to, copyright and trademarks) and does not otherwise violate any laws;

            b) You have the authority to license all existing and future intellectual property rights in the submitted content;

            c) You have informed us (where applicable) of any credits that need to be used in conjunction with the content;

            d) The submitted content is not abusive, obscene, illegal, defamatory, libelous, factually inaccurate, unlawfully threatening, unlawfully harassing, pornographic, racist, or liable to incite racial hatred or acts of terrorism; and

            e) The submitted content does not contain any viruses, Trojan horses, worms, time bombs, keystroke loggers, spyware, adware, or any other harmful programs or computer code designed to adversely affect the operation of any computer software or hardware.
            `,
          },
          {
            title: 'Third Party Claims',
            content: `1.7 If you become aware of any third party threatening to make, or making, a claim related to the content you submitted, or any other claim concerning the rights granted by the license in paragraph 1.3, you agree to promptly notify us in writing by email to info@leibal.com providing full details. You also agree to provide us with any assistance we may reasonably require concerning any such claim.

            1.8 You agree to indemnify us against all liabilities, costs, claims, damages, losses, and expenses arising from any breach by you of the warranties in paragraph 1.6 (including, but not limited to, any claim or action against us that the content infringes any rights of any third parties) and as a result of not notifying us in writing in accordance with paragraph 1.7.
            `,
          },
          {
            title: 'Rights Waver',
            content: `1.9 You irrevocably waive any and all moral rights under the Copyright, Designs, and Patents Act 1988 (and all similar rights in other jurisdictions) which you have or will have concerning the content you submitted to us.

            1.10 We will collect and process your personal data and any related information in accordance with our privacy notice, which can be accessed at leibal.com.
            `,
          },
          {
            title: 'Terms Amendment',
            content: `1.11 We may amend these terms from time to time. Once the terms come into existence between you and us (in accordance with paragraph 1.2), every time you wish to submit content to us, please check these terms to ensure you understand the terms that apply at that time.

            1.12 You agree to promptly execute and deliver (or use all reasonable endeavors to procure that any necessary third party shall promptly execute and deliver) any documents and perform any actions as may reasonably be required for the purpose of giving full effect to these terms.

            1.13 If any provision or part-provision of these terms is or becomes invalid, illegal, or unenforceable, it will be deemed modified to the minimum extent necessary to make it valid, legal, and enforceable. If such modification is not possible, the relevant provision or part-provision will be deemed deleted. Any modification to or deletion of a provision or part-provision under this paragraph will not affect the validity and enforceability of the rest of these terms.
            `,
          },
          {
            title: 'Governing Law',
            content: `1.14 These terms and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) will be governed by and construed in accordance with the law of New York State.

            1.15 The courts of New York State will have non-exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these terms or their subject matter or formation (including non-contractual disputes or claims).
            `,
          },
        ],
      },
      {
        title: { short: 'Copyright Notice', long: 'Copyright Notice' },
        subsections: [
          {
            title: 'Content Ownership',
            content: `The content published on Leibal.com, including but not limited to text, images, graphics, videos, and other media, is the intellectual property of Leibal.com, our contributors, or respective authors, and is protected under international copyright law. In general, text is the property of Leibal.com, while images and other media belong to their respective creators, such as photographers, designers, and architects, unless stated otherwise.`,
          },
          {
            title: 'Content Sharing',
            content: `We allow individuals and websites to share content from Leibal.com online under the following conditions:

            Leibal.com must be clearly credited as the source with a prominent link to the corresponding page on our website, e.g., "Source: Leibal.com" or "As seen on Leibal.com," along with an in-text link, etc. All copyright notices must be honored, with appropriate credits and links to authors and creators placed next to the relevant content, and permission from the copyright holder must be obtained in advance. Shared content should be limited to specific elements of individual articles and image sets, rather than extensive copying of entire articles or multiple articles. The shared content must be accessible to all internet users without payment or registration requirements and must not be used for commercial purposes. Reasonable measures should be taken to prevent third-party sites from sharing our content from your site, e.g., by prominently displaying your own copyright notice.
            `,
          },
          {
            title: 'Video Content Use',
            content: `Videos may be freely embedded from our YouTube, TikTok, and Instagram accounts. However, downloading, reposting, or editing our video content without our express permission is prohibited. Additionally, using any other content from our website in videos is not allowed without our permission. We may charge a fee for the usage of video footage.
            `,
          },
          {
            title: 'Syndication Inquiries',
            content: `If you are unsure or would like to discuss content syndication, please contact us.`,
          },
          {
            title: 'Non-Compliance',
            content: `Non-compliance with the above conditions may result in Leibal.com exercising its rights as defined in this copyright notice.`,
          },
          {
            title: 'Terms of Access and Unauthorized Use',
            content: `By accessing and using Leibal.com and related sites, you agree not to download content for purposes other than personal, non-commercial use. Unauthorized reproduction or transmission of any part of this website, through any means including electronic, mechanical, photocopying, recording, or otherwise, is strictly prohibited without the prior permission of Leibal.com or the respective copyright owner.`,
          },
          {
            title: 'Rights Clearance',
            content: `For rights clearance or any inquiries, please contact us.`,
          },
        ],
      },
      {
        title: { short: 'Shipping Policy', long: 'Shipping Policy' },
        subsections: [
          {
            title: 'Delivery',
            content: `Leibal will arrange the shipping of orders via one of our preferred carriers. All charges are proforma and will be included in the final balance due notice.

            If the customer chooses to manage their own freight and delivery, Leibal must be notified of the specific details of the movement. The fee to move the product from a manufacturer to a terminal for "customer's own" pick-up will be added to the balance due. Ownership of the product transfers to the customer upon the freight carrier taking possession of the order for transport.
            `,
          },
          {
            title: 'Shipping Regions',
            content: `Leibal ships worldwide.

            Please note that shipping fees, import taxes, and customs duties may apply for international shipments.
            `,
          },
          {
            title: 'Shipping Information',
            content: `Your shipping cost is dependent on several factors, including the destination, dimensions, product cost, and weight of the product(s). International orders may incur additional import taxes and customs duties. Leibal is not responsible for any duties, taxes, or handling fees required at the time of delivery.

            Free shipping is not available, and all shipping costs will be calculated during the checkout process based on the destination, dimensions, cost, and weight of the product(s).

            For international orders, please allow for additional processing and shipping time. Once your order ships out, the estimated delivery time will depend on the shipping method and carrier chosen during checkout. Please note that we are not responsible for any delays or additional charges due to customs processing.

            Please be aware that carriers may not deliver to PO Boxes for international shipments. You may not be able to place an order with a shipping address that is a PO Box for international deliveries.
            `,
          },
          {
            title: 'Pre- and Back-orders',
            content: `We allow ordering for items that are currently out of stock but expected to become available at a future date. Please note: we charge you immediately for pre- and back-ordered items, regardless of when the items will ship. We strive to provide the most accurate estimated arrival dates for pre- and back-ordered items where available. However, fulfillment of pre- and back-orders can be delayed due to unforeseen circumstances (delays from the shipping carrier, natural disasters, etc.). We will do our best to keep you informed of any delays to your order.`,
          },
          {
            title: 'White Glove Shipping',
            content: `Most of our furniture has special shipping considerations due to the bulk of the items, protective packaging, and shipping materials. You should expect bulky furniture deliveries to involve breaking down protective shipping materials and assembly of the product. Our standard shipping includes curb-side delivery ONLY and does NOT include delivery to a room of choice, packaging removal, or assembly.

            We reserve the right to alter the shipping method and carrier to protect the shipment against damage (especially for furniture orders). We will do our best to keep you informed of any changes in shipping. Furniture deliveries are curbside only by default. Only White Glove shipping guarantees in-room delivery.

            White glove service is available at an additional cost for orders to the contiguous United States, for orders of our bulky products. Select white glove shipping during checkout. Please note if white glove is selected at checkout, it is not refundable. White Glove Delivery methods will be assigned to your delivery when selected and cannot be retroactively changed.
            `,
          },
          {
            title: 'Force Majeure',
            content: `All quoted completion and delivery dates are estimates only. Leibal and our partner shippers and manufacturers shall not be liable for delays in completion or shipment or default in delivery for any reason of force majeure or for any cause beyond reasonable control, including but not limited to natural disasters, government actions, or other contingencies.`,
          },
          {
            title: 'Risk of Loss',
            content: `Delivery of goods to the carrier shall be deemed delivery to the Buyer, and thereupon, the title to such goods and the risk of loss or damage shall be the Buyer's. Any claim by the Buyer against Leibal or the carrier for shortage or damage occurring prior to such delivery must be made in writing within forty-eight (48) hours after receipt of shipment and accompanied by the original transportation bill signed by the carrier, noting that the carrier received the goods from Leibal in the conditions claimed.`,
          },
        ],
      },
      {
        title: { short: 'Returns Policy', long: 'Returns Policy' },
        subsections: [
          {
            title: 'Refundable Items',
            content: `Items marked as "refundable" can be returned within 14 days of delivery, provided they are in their original, undamaged condition. To initiate a return, please contact us at info@leibal.com and provide your order number and a list of the item(s) you wish to return.`,
          },
          {
            title: 'Return Options',
            content: `Store Credit: If you choose to return an item for store credit, return shipping is free. Original Payment Method: If you prefer a refund to your original form of payment, we charge a restocking fee equal to 25% of the item's full retail price before discounts or promotions. In both cases, we do not reimburse the original cost of shipping.`,
          },
          {
            title: 'Non-Refundable Items',
            content: `Made-to-order items, special orders, opened items, or items returned without their original packaging are non-returnable.`,
          },
          {
            title: 'Damage Policy',
            content: `If your item arrives damaged, please email us at info@leibal.com immediately. If the shipping carton is visibly damaged, refuse delivery and contact our customer service within 24 hours. If the damage is discovered upon opening the package, please contact us immediately, and we may ask you to complete a damage claim form for efficient processing.`,
          },
          {
            title: 'Lost or Stolen Packages',
            content: `We require signatures on packages valued above $200 and all orders that ship via express shipping methods. If your item is lost, stolen, or mis-delivered, please email us at info@leibal.com within two business days of the expected delivery date. We are not liable for lost, stolen, or mis-delivered packages and recommend having packages delivered to a secure location where someone can receive the goods.`,
          },
        ],
      },
    ],
  },
  privacy: {
    sections: [
      {
        title: { short: 'Stories Privacy', long: 'Stories Privacy Policy' },
        subsections: [
          {
            title: 'Introduction',
            content: `Last Updated: May 31, 2023

            This Privacy Policy describes how Leibal (“we”, “us”, or “our”) collects, uses, and discloses your personal information when you visit or use the services on our website (the "Site"). We respect your privacy and are committed to protecting it through this policy.
            `,
          },
          {
            title: 'Collected Information',
            content: `When you visit the Site, we collect certain information related to your device, such as your IP address, referring website, what pages your device visited, and the time that your device visited our Site.

            If you subscribe to our newsletter or purchase a MOODS subscription, we may also collect your name and email address, and credit card information respectively.
            `,
          },
          {
            title: 'Your Information',
            content: `The information we collect is used for various purposes, such as:

            i. To provide and maintain our Site
            ii. To provide customer support
            iii. To gather analysis or valuable information so that we can improve our Site
            iv. To monitor the usage of our Site
            v. To detect, prevent and address technical issues
            vi. To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information
            `,
          },
          {
            title: 'Cookies',
            content: `We use cookies to track the activity on our Site and hold certain information. You are free to decline cookies if your browser permits, but doing so may affect the usability of our Site.`,
          },
          {
            title: 'Your Rights',
            content: `You have the right to opt out of receiving future email correspondence from us by checking the appropriate box when you register for the account or make a purchase. You can also make changes or delete your personal information by contacting us directly.`,
          },
          {
            title: 'Children’s Privacy',
            content: `Our Site is not intended for children under 13 years of age. We do not knowingly collect personally identifiable information from children under 13.`,
          },
          {
            title: 'Contract Us',
            content: `For any questions or concerns regarding your privacy, you may contact us using the following details:

            Email: info@leibal.com
            `,
          },
          {
            title: 'Changes',
            content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.`,
          },
        ],
      },
      {
        title: { short: 'Store Privacy', long: 'Store Privacy Policy' },
        subsections: [
          {
            title: 'Introduction',
            content: `Welcome to Leibal, an e-commerce store specializing in furniture, lighting, and home accessories. Your privacy is important to us, and we are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights`,
          },
          {
            title: 'Data We Collect',
            content: `We may collect and process the following categories of personal data:

            - Identity Data: including first name, last name
            - Contact Data: including shipping address, email address, and phone numbers
            - Transaction Data: details about products and services you have purchased from us
            `,
          },
          {
            title: 'How We Collect',
            content: `We use different methods to collect data from and about you, including:

            - Direct interactions: You may give us your Identity, Contact, and Transaction Data by filling in forms or by corresponding with us by email or otherwise.

            - Automated technologies: As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this data by using cookies, server logs, and other similar technologies. Please see our Cookie Policy for further details.
            `,
          },
          {
            title: 'How We Use',
            content: `We will only use your personal data when the law allows us to do so. We will use your personal data to process and deliver your order, manage payments, and send newsletters if you have opted into receiving them.`,
          },
          {
            title: 'Data Security',
            content: `We have implemented measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. Shopify, our e-commerce platform, uses functional cookies to remember user choices and the information they provide. These cookies are used for the duration of a session to allow users to authenticate themselves on subsequent visits or gain access to authorized content across pages.`,
          },
          {
            title: 'Data Retention',
            content: `We will retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.`,
          },
          {
            title: 'Legal Rights',
            content: `Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to request access, correction, or erasure of your personal data.`,
          },
          {
            title: 'Third Party Links',
            content: `Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.`,
          },
          {
            title: 'International Transfers',
            content: `We provide our services internationally. Your personal data may be transferred and stored in countries outside your place of residence, which are subject to different standards of data protection.`,
          },
          {
            title: 'Contact Us',
            content: `If you have any questions about this privacy policy or our privacy practices, please contact us at info@leibal.com.
            `,
          },
        ],
      },
    ],
  },
};

type Section = keyof typeof CONTENT;

@Component({
  tag: 'terms-of-service',
  styleUrl: 'terms-of-service.css',
  shadow: true,
})
export class TermsOfService {
  @Element()
  el;

  @State()
  visibleSection: Section = 'faq';

  @State()
  subsectionIndex: number = 0;

  md = new MarkDownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  sectionProps(section: Section) {
    return {
      class: {
        'terms-of-service__section': true,
        'terms-of-service__section--active': this.visibleSection === section,
      },
      onClick: () => (this.visibleSection = section),
    };
  }

  subsectionProps(index: number) {
    return {
      class: {
        'terms-of-service__subsection-select': true,
        'terms-of-service__subsection-select--active': this.subsectionIndex === index,
      },
      onClick: () => (this.subsectionIndex = index),
    };
  }

  renderSections() {
    return (
      <div class="terms-of-service__sections">
        <sticky-scroller startOffset={130}>
          <button {...this.sectionProps('faq')}>FAQ</button>
          <button {...this.sectionProps('terms')}>Terms</button>
          <button {...this.sectionProps('privacy')}>Privacy</button>
        </sticky-scroller>
      </div>
    );
  }

  renderSubsectionContent() {
    const { sections } = CONTENT[this.visibleSection];
    const section = sections[this.subsectionIndex];

    return (
      <div class="terms-of-service__content">
        <div class="terms-of-service__content__subsection">
          <div class="terms-of-service__subsection__title">{section.title.long}</div>
          <div>
            {section.subsections.map(({ title, content }, index) => (
              <div class="terms-of-service__subsection__content" id={`subsection-${index}`}>
                <div class="terms-of-service__subsection__content__title">{title}</div>
                <div
                  class="terms-of-service__subsection__content__body"
                  innerHTML={this.md.render(content.replace(/  +/g, ''))}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  renderSubsections() {
    const { sections } = CONTENT[this.visibleSection];

    return (
      <div style={{ 'grid-column': 'span 3 / span 3' }}>
        <sticky-scroller startOffset={130}>
          <div class="terms-of-service__subsections">
            {sections.map(({ title }, index) => (
              <button {...this.subsectionProps(index)}>{title.short}</button>
            ))}
          </div>
          <div class="terms-of-service__subheaders">
            {sections[this.subsectionIndex].subsections.map(({ title }, index) => (
              <button
                onClick={() => {
                  const element = this.el.shadowRoot.querySelector(`#subsection-${index}`);
                  const { top } = element.getBoundingClientRect();
                  const offset = 60;

                  window.scrollTo({ top: top + window.scrollY - offset, behavior: 'smooth' });
                }}
              >
                {title}
              </button>
            ))}
          </div>
        </sticky-scroller>
      </div>
    );
  }

  render() {
    return (
      <Host>
        <div class="terms-of-service">
          {this.renderSections()}
          {this.renderSubsections()}
          {this.renderSubsectionContent()}
        </div>
      </Host>
    );
  }
}
