import type { Schema, Attribute } from '@strapi/strapi';

export interface ApplyForm extends Schema.Component {
  collectionName: 'components_apply_forms';
  info: {
    displayName: 'form';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface ArrayStringArray extends Schema.Component {
  collectionName: 'components_array_string_arrays';
  info: {
    displayName: 'string_array';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    mobile_offset: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
        max: 200;
      }> &
      Attribute.DefaultTo<0>;
    tablet_offset: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
        max: 200;
      }>;
    desktop_offset: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 0;
        max: 200;
      }>;
    mobile_font_size: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 17;
        max: 80;
      }>;
    tablet_font_size: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 17;
        max: 80;
      }>;
    desktop_font_size: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 17;
        max: 80;
      }>;
  };
}

export interface BlogAuthor extends Schema.Component {
  collectionName: 'components_blog_authors';
  info: {
    displayName: 'author';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface ButtonButtonText extends Schema.Component {
  collectionName: 'components_button_button_texts';
  info: {
    displayName: 'button_text';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    route: Attribute.Enumeration<
      [
        '/about/careers',
        '/about/community',
        '/about/contact',
        '/about/who-we-are',
        '/business/for-business',
        '/get-your-invitation',
        '/how-it-works',
        '/inspiration/id',
        '/inspiration/all',
        '/legal/legal',
        '/legal/privacy-policy',
        '/legal/terms-of-use',
        '/creators/about',
        '/creators/apply',
        '/register',
        '/thank-you',
        '/what-is-yoodee'
      ]
    > &
      Attribute.Required;
  };
}

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button_icon';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    icon: Attribute.Media;
    route: Attribute.Enumeration<
      [
        '/about/careers',
        '/about/community',
        '/about/contact',
        '/about/who-we-are',
        '/business/for-business',
        '/get-your-invitation',
        '/how-it-works',
        '/inspiration/id',
        '/inspiration/main',
        '/legal/legal',
        '/legal/privacy-policy',
        '/legal/terms-of-use',
        '/local-champions/about',
        '/local-champions/apply',
        '/register',
        '/thank-you',
        '/what-is-yoodee'
      ]
    > &
      Attribute.Required;
  };
}

export interface CarouselsBlogCarousel extends Schema.Component {
  collectionName: 'components_carousels_blog_carousels';
  info: {
    displayName: 'blog_carousel';
  };
  attributes: {};
}

export interface CarouselsCarousel extends Schema.Component {
  collectionName: 'components_carousels_carousels';
  info: {
    displayName: 'Carousel';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    type: Attribute.Enumeration<['Insights', 'News', 'Events']> &
      Attribute.Required;
    desc: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    blog_id: Attribute.Integer & Attribute.Required;
  };
}

export interface CarouselsSimpleCarouselSlide extends Schema.Component {
  collectionName: 'components_carousels_simple_carousel_slides';
  info: {
    displayName: 'simple_carousel_slide';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ContactCompany extends Schema.Component {
  collectionName: 'components_contact_companies';
  info: {
    displayName: 'company';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ContactEnquiries extends Schema.Component {
  collectionName: 'components_contact_enquiries';
  info: {
    displayName: 'enquiries';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ContactFaqs extends Schema.Component {
  collectionName: 'components_contact_faqs';
  info: {
    displayName: 'faqs';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    faq: Attribute.Component<'faq.faq', true> & Attribute.Required;
  };
}

export interface ContactForm extends Schema.Component {
  collectionName: 'components_contact_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    button_text: Attribute.String & Attribute.Required;
  };
}

export interface CreatorHeader extends Schema.Component {
  collectionName: 'components_creator_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface CreatorInfoBoxes extends Schema.Component {
  collectionName: 'components_creator_info_boxes';
  info: {
    displayName: 'Info_Boxes';
    description: '';
  };
  attributes: {
    boxes: Attribute.Component<'info-boxes.info-boxes', true> &
      Attribute.Required;
    text: Attribute.String & Attribute.Required;
    button: Attribute.Component<'button.button-text'> & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface CreatorLookFoward extends Schema.Component {
  collectionName: 'components_creator_look_fowards';
  info: {
    displayName: 'Look_foward';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    line_1: Attribute.Component<'array.string-array', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 4;
      }>;
    line_2: Attribute.Component<'array.string-array', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 4;
      }>;
    line_3: Attribute.Component<'array.string-array', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 4;
      }>;
    line_4: Attribute.Component<'array.string-array', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 4;
      }>;
  };
}

export interface DidYouKnowDidYouKnowText extends Schema.Component {
  collectionName: 'components_did_you_know_did_you_know_texts';
  info: {
    displayName: 'DidYouKnowText';
  };
  attributes: {
    top: Attribute.Text & Attribute.Required;
    middle: Attribute.Text & Attribute.Required;
    bottom: Attribute.Text & Attribute.Required;
  };
}

export interface DidYouKnowTest extends Schema.Component {
  collectionName: 'components_did_you_know_tests';
  info: {
    displayName: 'DidYouKnow';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    text: Attribute.Component<'did-you-know.did-you-know-text'> &
      Attribute.Required;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface FooterSub extends Schema.Component {
  collectionName: 'components_footer_subs';
  info: {
    displayName: 'sub';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    sub_routes: Attribute.Component<'button.button-text', true> &
      Attribute.Required;
  };
}

export interface ForBusinessBenefits extends Schema.Component {
  collectionName: 'components_for_business_benefits';
  info: {
    displayName: 'benefits';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    image_box: Attribute.Component<'image-box.image-box', true> &
      Attribute.Required;
  };
}

export interface ForBusinessInfo extends Schema.Component {
  collectionName: 'components_for_business_infos';
  info: {
    displayName: 'info';
    description: '';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface ForBusinessWinOver extends Schema.Component {
  collectionName: 'components_for_business_win_overs';
  info: {
    displayName: 'WinOver';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    info_boxes: Attribute.Component<'info-boxes.info-boxes', true> &
      Attribute.Required;
    button: Attribute.Component<'button.button-text'> & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface HomeDidYouKnow extends Schema.Component {
  collectionName: 'components_home_did_you_knows';
  info: {
    displayName: 'Did_you_know';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    carousel: Attribute.Component<'carousels.carousel', true> &
      Attribute.Required;
    button_text: Attribute.String & Attribute.Required;
  };
}

export interface HomeHeader extends Schema.Component {
  collectionName: 'components_home_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    carousel: Attribute.Component<'carousels.simple-carousel-slide', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
        max: 2;
      }>;
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    image: Attribute.Media;
    background: Attribute.Media & Attribute.Required;
  };
}

export interface HomeInstagram extends Schema.Component {
  collectionName: 'components_home_instagrams';
  info: {
    displayName: 'instagram';
    description: '';
  };
  attributes: {
    social: Attribute.Component<'social.social', true> & Attribute.Required;
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
  };
}

export interface ImageBoxImageBox extends Schema.Component {
  collectionName: 'components_image_box_image_boxes';
  info: {
    displayName: 'ImageBox';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    background_image: Attribute.Media & Attribute.Required;
  };
}

export interface InfoBoxesInfoBoxes extends Schema.Component {
  collectionName: 'components_info_boxes_info_boxes';
  info: {
    displayName: 'info_boxes';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text & Attribute.Required;
    background: Attribute.Enumeration<['pink', 'yellow', 'orange', 'white']> &
      Attribute.Required;
  };
}

export interface JoinYoodeeBenefits extends Schema.Component {
  collectionName: 'components_join_yoodee_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    info_boxes: Attribute.Component<'info-boxes.info-boxes', true> &
      Attribute.Required;
  };
}

export interface JoinYoodeeCommunity extends Schema.Component {
  collectionName: 'components_join_yoodee_communities';
  info: {
    displayName: 'community';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    collage: Attribute.Media & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface JoinYoodeePreachValues extends Schema.Component {
  collectionName: 'components_join_yoodee_preach_values';
  info: {
    displayName: 'preach_values';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    values: Attribute.Component<'join-yoodee.values', true> &
      Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface JoinYoodeeVacancies extends Schema.Component {
  collectionName: 'components_join_yoodee_vacancies';
  info: {
    displayName: 'vacancies';
    description: '';
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface JoinYoodeeValues extends Schema.Component {
  collectionName: 'components_join_yoodee_values';
  info: {
    displayName: 'values';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface RegisterForm extends Schema.Component {
  collectionName: 'components_register_forms';
  info: {
    displayName: 'form';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    disclaimer: Attribute.Text & Attribute.Required;
    button_text: Attribute.String & Attribute.Required;
  };
}

export interface RegisterYouDecide extends Schema.Component {
  collectionName: 'components_register_you_decides';
  info: {
    displayName: 'you_decide';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface RowRow extends Schema.Component {
  collectionName: 'components_row_rows';
  info: {
    displayName: 'row';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    colour: Attribute.Enumeration<['yellow', 'orange', 'pink']> &
      Attribute.Required;
  };
}

export interface SectionsSectionBannerButton extends Schema.Component {
  collectionName: 'components_sections_section_banner_buttons';
  info: {
    displayName: 'SectionBannerButton';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    button: Attribute.Component<'button.button-text'> & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    background: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsSectionBannerImage extends Schema.Component {
  collectionName: 'components_sections_section_banner_images';
  info: {
    displayName: 'SectionBannerImage';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsSectionBanner extends Schema.Component {
  collectionName: 'components_sections_section_banners';
  info: {
    displayName: 'SectionBanner';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsSectionButtonText extends Schema.Component {
  collectionName: 'components_sections_section_button_texts';
  info: {
    displayName: 'SectionButtonText';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'button.button-text'> & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface SectionsSectionGifButton extends Schema.Component {
  collectionName: 'components_sections_section_gif_buttons';
  info: {
    displayName: 'SectionGifButton';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    gif: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'button.button-text'> & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface SectionsSectionGif extends Schema.Component {
  collectionName: 'components_sections_section_gifs';
  info: {
    displayName: 'SectionGif';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    gif: Attribute.Media & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface SectionsSectionTitleBannerButton extends Schema.Component {
  collectionName: 'section_banner_buttons';
  info: {
    displayName: 'SectionTitleBannerButton';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
    button: Attribute.Component<'button.button-text'> & Attribute.Required;
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
  };
}

export interface SectionsSectionTitleBanner extends Schema.Component {
  collectionName: 'components_sections_section_title_banners';
  info: {
    displayName: 'SectionTitleBanner';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface SectionsSectionTitleButton extends Schema.Component {
  collectionName: 'components_sections_section_title_buttons';
  info: {
    displayName: 'SectionTitleButton';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
    image: Attribute.Media;
    button: Attribute.Component<'button.button-text'> & Attribute.Required;
  };
}

export interface SectionsSectionTitleGifButton extends Schema.Component {
  collectionName: 'section_gif_title_button';
  info: {
    displayName: 'SectionTitleGifButton';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    gif: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'button.button-text'> & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SectionsSectionTitleGif extends Schema.Component {
  collectionName: 'components_sections_section_title_gifs';
  info: {
    displayName: 'SectionTitleGif';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    gif: Attribute.Media & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SectionsSectionTitle extends Schema.Component {
  collectionName: 'components_sections_section_titles';
  info: {
    displayName: 'SectionTitle';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SectionsSection extends Schema.Component {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface SocialSocial extends Schema.Component {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'social';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface UiQuestion extends Schema.Component {
  collectionName: 'components_ui_questions';
  info: {
    displayName: 'Question';
    description: '';
  };
  attributes: {
    question: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
  };
}

export interface WhoWeAreHeader extends Schema.Component {
  collectionName: 'components_who_we_are_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface WhoWeAreMeetTeam extends Schema.Component {
  collectionName: 'components_who_we_are_meet_teams';
  info: {
    displayName: 'meet_team';
  };
  attributes: {
    banner: Attribute.Component<'banner.banner', true> & Attribute.Required;
    team: Attribute.Component<'who-we-are.team', true> & Attribute.Required;
  };
}

export interface WhoWeAreTeam extends Schema.Component {
  collectionName: 'components_who_we_are_teams';
  info: {
    displayName: 'team';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    linkedin: Attribute.String & Attribute.Required;
    theme: Attribute.Enumeration<['pink', 'yellow', 'orange']>;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface WhoWeAreVideos extends Schema.Component {
  collectionName: 'components_who_we_are_videos';
  info: {
    displayName: 'Videos';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    thumbnail: Attribute.Media & Attribute.Required;
  };
}

export interface WhoWeAreWhatWeNeed extends Schema.Component {
  collectionName: 'components_who_we_are_what_we_needs';
  info: {
    displayName: 'What_We_Need';
    description: '';
  };
  attributes: {
    button: Attribute.Component<'button.button-text'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'apply.form': ApplyForm;
      'array.string-array': ArrayStringArray;
      'banner.banner': BannerBanner;
      'blog.author': BlogAuthor;
      'button.button-text': ButtonButtonText;
      'button.button': ButtonButton;
      'carousels.blog-carousel': CarouselsBlogCarousel;
      'carousels.carousel': CarouselsCarousel;
      'carousels.simple-carousel-slide': CarouselsSimpleCarouselSlide;
      'contact.company': ContactCompany;
      'contact.enquiries': ContactEnquiries;
      'contact.faqs': ContactFaqs;
      'contact.form': ContactForm;
      'creator.header': CreatorHeader;
      'creator.info-boxes': CreatorInfoBoxes;
      'creator.look-foward': CreatorLookFoward;
      'did-you-know.did-you-know-text': DidYouKnowDidYouKnowText;
      'did-you-know.test': DidYouKnowTest;
      'faq.faq': FaqFaq;
      'footer.sub': FooterSub;
      'for-business.benefits': ForBusinessBenefits;
      'for-business.info': ForBusinessInfo;
      'for-business.win-over': ForBusinessWinOver;
      'home.did-you-know': HomeDidYouKnow;
      'home.header': HomeHeader;
      'home.instagram': HomeInstagram;
      'image-box.image-box': ImageBoxImageBox;
      'info-boxes.info-boxes': InfoBoxesInfoBoxes;
      'join-yoodee.benefits': JoinYoodeeBenefits;
      'join-yoodee.community': JoinYoodeeCommunity;
      'join-yoodee.preach-values': JoinYoodeePreachValues;
      'join-yoodee.vacancies': JoinYoodeeVacancies;
      'join-yoodee.values': JoinYoodeeValues;
      'register.form': RegisterForm;
      'register.you-decide': RegisterYouDecide;
      'row.row': RowRow;
      'sections.section-banner-button': SectionsSectionBannerButton;
      'sections.section-banner-image': SectionsSectionBannerImage;
      'sections.section-banner': SectionsSectionBanner;
      'sections.section-button-text': SectionsSectionButtonText;
      'sections.section-gif-button': SectionsSectionGifButton;
      'sections.section-gif': SectionsSectionGif;
      'sections.section-title-banner-button': SectionsSectionTitleBannerButton;
      'sections.section-title-banner': SectionsSectionTitleBanner;
      'sections.section-title-button': SectionsSectionTitleButton;
      'sections.section-title-gif-button': SectionsSectionTitleGifButton;
      'sections.section-title-gif': SectionsSectionTitleGif;
      'sections.section-title': SectionsSectionTitle;
      'sections.section': SectionsSection;
      'social.social': SocialSocial;
      'ui.question': UiQuestion;
      'who-we-are.header': WhoWeAreHeader;
      'who-we-are.meet-team': WhoWeAreMeetTeam;
      'who-we-are.team': WhoWeAreTeam;
      'who-we-are.videos': WhoWeAreVideos;
      'who-we-are.what-we-need': WhoWeAreWhatWeNeed;
    }
  }
}
