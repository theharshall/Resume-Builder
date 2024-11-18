import React from 'react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';
import Header from '../../Components/Header';

function Aboutus() {
  return (
    <>
      {/* Header Component to Navigate */}
      <Header />

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row items-start justify-between ml-[10vw] mr-[10vw] mt-[5vw]'>
        
        {/* Left Side - Text Content */}
        <div className='lg:w-1/2'>
          <h1 className="font-bold text-3xl md:text-4xl mb-[2vw] text-left">
            " Welcome to our Resume Builder ! "
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-left">
            We understand the importance of creating a professional and impactful resume. 
            A well-crafted resume can make a significant difference in your job search, 
            helping you stand out from the competition and land your dream job.
            <br/><br/>
            Our Resume Builder simplifies the resume creation process, offering a user-friendly 
            interface and a wide range of customizable templates. Whether you're a recent graduate, 
            a seasoned professional, or making a career transition, our platform provides the tools 
            and resources you need to create a compelling resume that highlights your skills, experience, 
            and achievements.
          </p>
          
          <h2 className='mt-8 font-bold text-xl text-left'>
            Share with Your Friends.
          </h2>

          {/* Share buttons */}
          <div className='mt-8 flex'>
            <div className="mr-4">
              <FacebookShareButton
                url={'https://cv-builder-ruddy.vercel.app/'}
                quote={'Title or jo bhi aapko likhna ho'}
                hashtag={'#portfolio...'}
              >
                <FacebookIcon className='buttonIcons' size={40} round={true} />
              </FacebookShareButton>
            </div>

            <div className="mr-4">
              <LinkedinShareButton
                url={'https://cv-builder-ruddy.vercel.app/'}
                quote={'Title or jo bhi aapko likhna ho'}
                hashtag={'#portfolio...'}
              >
                <LinkedinIcon className='buttonIcons' size={40} round={true} />
              </LinkedinShareButton>
            </div>

            <div className="mr-4">
              <WhatsappShareButton
                url={'https://cv-builder-ruddy.vercel.app/'}
                quote={'Title or jo bhi aapko likhna ho'}
                hashtag={'#portfolio...'}
              >
                <WhatsappIcon className='buttonIcons' size={40} round={true} />
              </WhatsappShareButton>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-end mt-8 lg:mt-0">
                <img 
          src="/resumebuilder-illutriator.jpg"  // No ./ needed for public folder
          alt="Resume Builder"
          className="w-full h-auto object-cover rounded-lg"
        />

        </div>
      </div>
    </>
  );
}

export default Aboutus;
