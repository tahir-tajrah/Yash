import React from 'react'

const Termssec1 = () => {
  return (
    <div className="lg:px-lg px-4 xl:bg-[url('/Images/termsbg.png')] bg-cover lg:pt-70 pt-32">
      <div className='flex gap-4 pb-12'>
        <button className='bg-[#9E86FF]/40 rounded-4xl border-light border px-5 py-3.5 text-light font-normal'>Terms and Conditions</button>
        <button className='rounded-4xl px-5 py-3.5 border border-light/60 text-light/40 '>Privacy Policies</button>
      </div>
      <div className='text-light/60'>
        <h1 className='text-2xl text-light/80 font-normal'>Font for terms Title</h1>
        <p className='text-[20px] font-light pt-4'>Below Text is a placeholder 👇</p>
        <p className='text-[20px] font-light pt-5'>By accessing or using the app, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree, please do not use the app.</p>
        <p className='text-[20px] font-light pt-5'>2. Palm Authentication</p>
        <p className='text-[20px] font-light'>Palm Authentication is a biometric security feature that allows you to authenticate your identity using palm recognition technology.</p>
        <p className='text-[20px] font-light'>Registration is optional and requires your explicit consent.</p>
        <p className='text-[20px] font-light'>nce registered, your palm data may be used to verify your identity during supported actions.</p>
        <p className='text-[20px] font-light'>You may disable Palm Authentication at any time from app settings.</p>
        <p className='text-[20px] font-light pt-5'>3. User Responsibilities</p>
        <p className='text-[20px] font-light'>You agree to:</p>
        <p className='text-[20px] font-light'>Provide accurate information during registration.</p>
        <p className='text-[20px] font-light'>Keep your account credentials secure.</p>
        <p className='text-[20px] font-light'>Use the app only for lawful purposes.</p>
        <p className='text-[20px] font-light pt-5'>4. Suspension or Termination </p>
        <p className='text-[20px] font-light'>We reserve the right to suspend or terminate access to the app if we reasonably believe you have violated these Terms or engaged in fraudulent or harmful activities.</p>
        <p className='text-[20px] font-light pt-5'>5. Changes to These Terms</p>
        <p className='text-[20px] font-light'>We may update these Terms from time to time. Continued use of the app after changes indicates acceptance of the updated Terms.</p>
        <p className='text-[20px] font-light pt-5'>6. Contact Us</p>
        <p className='text-[20px] font-light'>If you have any questions about these Terms, contact us at support@[appname].com.</p>
      </div>
    </div>
  )};

export default Termssec1;