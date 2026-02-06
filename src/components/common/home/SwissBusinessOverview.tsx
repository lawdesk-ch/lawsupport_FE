const SwissBusinessOverview = () => {
  return (
    <>
      <h2
        className="text-[32px] md:text-[42px] lg:text-5xl leading-none lg:text-center 
          w-[403px] md:w-[500px] lg:w-auto mb-[30px] md:mb-[26px] lg:mb-[50px]"
      >
        Business legal support, corporate law firm
      </h2>

      <div className="flex flex-col gap-15 md:gap-20 lg:gap-30 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-6">
          <p className="text-2xl md:text-[26px] lg:text-[32px] leading-none lg:max-w-[600px]">
            Swiss business made easy
            <br /> with <span className="text-[#f00]">Lawsupport</span>: Company
            formation in Switzerland, starting a business in Switzerland, open a
            Swiss bank account, and more. Your gateway to success in
            <br /> Switzerland.
          </p>
          <p className="max-w-[572px] color-silver lg:text-lg leading-none">
            In today&apos;s dynamic global business landscape, establishing and
            expanding your business in Switzerland is a strategic move towards
            success. At <span className="text-[#f00]">Lawsupport</span>, we
            understand the unique needs of businesses, both local and
            international, and offer a comprehensive range of corporate services
            tailored to your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-end">
          <p className="text-[32px] md:text-[42px] text-5xl md:max-w-[700px] lg:max-w-[606px]">
            Why
            <br className="md:hidden lg:block" /> Choose{' '}
            <span className="text-[#f00]">Lawsupport</span> for
            <br className="md:hidden lg:block" /> Your Swiss Business Needs
          </p>
          <p className="lg:max-w-[600px] lg:text-lg color-silver leading-none">
            When it comes to navigating the intricacies of Swiss business
            regulations and corporate landscape, having a reliable Swiss lawyer
            and legal services provider like{' '}
            <span className="text-[#f00]">Lawsupport</span> can make all the
            difference. Here&apos;s what sets us apart and makes us the ideal
            choice for your needs:
          </p>
        </div>
      </div>
    </>
  );
};

export default SwissBusinessOverview;
